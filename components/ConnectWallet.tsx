import React from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { useStore } from "../store/store";
import { useRouter } from "next/router";
// import useAppState from "../store/appStore";

declare global {
  interface Window {
    ethereum: any;
  }
}

const ConnectWalletButton = () => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();
  const { isLensAuthenticated } = useStore();
  const router = useRouter();

  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("Get an ethereum wallet");
        return;
      }
      connect();
    } catch (error) {
      console.log(error);
    }
  };

  return !isConnected ? (
    <button
      type="button"
      className="bg-black rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80"
      onClick={connectWallet}
    >
      Connect Wallet
    </button>
  ) : isLensAuthenticated ? (
    <button
      type="button"
      className="bg-black rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80"
      onClick={() => {
        router.push("/post");
      }}
    >
      Get Started
    </button>
  ) : (
    <div className="my-16 flex justify-center items-center gap-4">
      Connected Wallet:
      {`${address?.substring(0, 6)}...${address?.substring(37)}`}
      <button
        type="button"
        className="py-2.5 mr-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        onClick={(e) => {
          e.preventDefault();
          disconnect();
        }}
      >
        Disconnect
      </button>
    </div>
  );
};

export default ConnectWalletButton;
