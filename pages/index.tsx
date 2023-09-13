"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Link from "next/link";
import Image from "next/image";
import SquigglyLines from "../components/SquigglyLines";
import ConnectWalletButton from "../components/ConnectWallet";
import Phala from "../assets/Phala";
import Next from "../assets/Next";
import Lens from "../assets/Lens";
const Home: NextPage = () => {
  return (
    <div className="flex mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-28 mt-20">
        <a
          target="_blank"
          rel="noreferrer"
          className="border rounded-2xl py-1 px-4 text-slate-500 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out"
        >
          NSFW <span className="font-semibold">Resistant</span> Uploader
        </a>
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl">
          Lets make the community{" "}
          <span className="relative whitespace-nowrap text-[#3290EE]">
            <SquigglyLines />
            <span className="relative">safer</span>
          </span>{" "}
          for everyone.
        </h1>

        <p className="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7">
          Explore a Safer Way to Share: Our Platform Combines Privacy, Security,
          and Ease to Redefine Content Sharing for Everyone.
        </p>
        <div className="flex justify-center space-x-4">
          <ConnectWalletButton />
        </div>
        <div>
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900">
            Built With
          </h1>
          <div className="flex flex-row items-center gap-20 mt-12">
            <Phala />
            <Next />
            <Lens />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
