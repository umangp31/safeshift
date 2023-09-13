//use-client
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { useAccount, useSignMessage } from "wagmi";
import React, { useEffect, useState } from "react";
import { useProfile, useStore } from "../store/store";
import getDefaultProfile from "../utils/getDefaultProfile";
import { useAuthenticateMutation, useChallengeLazyQuery } from "../lens";
import getIPFSLink from "../utils/getIpfsLink";
import getRawurl from "../utils/getRawurl";
import Avatar from "./Avatar";
import { useRouter } from "next/router";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { isConnected, address } = useAccount();
  const { currentProfile, setCurrentProfile } = useProfile();
  const router = useRouter();
  const {
    setAccessToken,
    setRefreshToken,
    setHasHandle,
    hasHandle,
    setIsLensAuthenticated,
    isLensAuthenticated,
  } = useStore();
  const signer = useSignMessage();
  const [getChallengeText] = useChallengeLazyQuery();
  const [getTokens] = useAuthenticateMutation();

  useEffect(() => {
    getDefaultProfile(address).then((profile) => {
      if (profile) {
        setHasHandle(true);
        setCurrentProfile(profile);
      }
      if (!profile) {
        setHasHandle(false);
        return;
      }
    });
  }, [isConnected]);

  const loginWithLens = async () => {
    try {
      const challengeText = await getChallengeText({
        variables: {
          request: {
            address: address,
          },
        },
      });
      if (challengeText.data) {
        const signature = await signer.signMessageAsync({
          message: challengeText?.data?.challenge?.text,
        });

        const authTokens = await getTokens({
          variables: {
            request: {
              address: address,
              signature: signature,
            },
          },
        });
        if (authTokens.data) {
          setIsLensAuthenticated(true);
          setAccessToken(authTokens.data.authenticate.accessToken);
          setRefreshToken(authTokens.data.authenticate.refreshToken);
        }

        router?.push('/post');
      }
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  const goToLensClaim = () => {
    window.open("https://claim.lens.xyz", "blank");
  };

  return (
    <header className="text-black body-font w-[100%]">
      <div className="container mx-auto flex flex-wrap p-5 md:flex-row">
        <Link
          className="flex title-font text-black mb-4 md:mb-0 pr-4 font-display font-bold"
          href="/"
        >
          <span className="ml-3 text-3xl">SafeShare</span>
        </Link>
        <button
          className="text-black cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none ml-auto pb-3"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <div
          className={
            "md:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-semibold pl-7">
            <Link className="mr-6 hover:text-white" href="/">
              Home
            </Link>
            <Link className="mr-6 hover:text-white" href="/contact">
              About
            </Link>
          </nav>
          {!isConnected ? (
            <ConnectButton showBalance={false} />
          ) : (
            <>
              {isLensAuthenticated ? (
                <div className="flex items-center">
                  <div className="flex items-center space-x-8"></div>
                  <Avatar
                    height={35}
                    width={35}
                    src={getIPFSLink(getRawurl(currentProfile?.picture))}
                  />
                </div>
              ) : (
                <button onClick={hasHandle ? loginWithLens : goToLensClaim}>
                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center justify-center px-3 sm:px-5 py-2.5 text-sm sm:text-base font-semibold transition-all duration-200 text-white bg-black hover:bg-black/40 focus:bg-black/40 rounded-xl"
                    role="button"
                  >
                    {hasHandle ? "Login with Lens" : "Claim Lens handle"}
                  </a>
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
}
