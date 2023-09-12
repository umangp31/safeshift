import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="text-white bg-black">
      <Head>
        <title>nine4</title>
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
