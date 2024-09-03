"use client";

import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to template project for building on:</span>
          </h1>
          <div className="flex justify-center items-center mb-8 space-x-4">
            <Image src="/rootstock_logo.png" alt="Rootstock Logo" width={80} height={80} />
            <h1 className="text-4xl font-bold">Rootstock: Bitcoin-Powered Sidechain</h1>
          </div>

          <p className="text-center text-lg">
            This scaffold-eth template is designed for building dApps on the Rootstock sidechain, which leverages
            Bitcoin security.
          </p>
          <p className="text-center text-lg">
            Edit your smart contract{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              RuneToken.sol
            </code>{" "}
            in{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              packages/hardhat/contracts
            </code>
          </p>
          <div className="text-center mt-8">
            <h2 className="text-2xl font-bold mb-4">What are Runes?</h2>
            <div className="flex justify-center">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/adkhsgEaXuQ?si=OknSz_y17LzBCi3m"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <p className="text-center text-lg">
            Learn more about building on Rootstock from{" "}
            <a href="https://dev.rootstock.io/" target="_blank" rel="noopener noreferrer" className="link">
              Rootstock Developer Portal
            </a>
          </p>
          <p className="text-center text-lg mt-4">
            Get your API keys at{" "}
            <a
              href="https://dashboard.rpc.rootstock.io/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Rootstock Dashboard
            </a>
          </p>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>
                Tinker with your smart contract using the{" "}
                <Link href="/debug" passHref className="link">
                  Debug Contracts
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>
                Explore your local transactions with the{" "}
                <Link href="/blockexplorer" passHref className="link">
                  Block Explorer
                </Link>{" "}
                tab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
