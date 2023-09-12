import React, { useState } from "react";
import { useTabStore } from "../store/store";
import ImagePost from "../components/ImagePost";
import TextPost from "../components/TextPost";

type Props = {
  activeTab: boolean;
};

const Post = (props: Props) => {
  // const [activeTab, setactiveTab] = useState(1);
  const { activeTab, setactiveTab } = useTabStore();
  return (
    <>
      <section className="flex flex-1 h-screen w-screen container pt-32 mx-auto lg:px-4 lg:py-4 bg-black ">
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul
            className="flex flex-wrap -mb-px text-sm font-medium text-center"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <TextPost />
            <ImagePost />
          </ul>
        </div>

        {activeTab == "text" ? (
          <>
            <div className="flex mb-6 border-b justify-center items-center border-gray-200 dark:border-gray-700">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Large input
              </label>
              <textarea
                inputMode="text"
                id="large-input"
                className="block resize-none flex-grow p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center justify-center w-1/2">
              <label
                // for="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-neutral-900 hover:bg-stone-800 dark:border-gray-800 dark:hover:border-gray-500 dark:hover:bg-zinc-900"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-900 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Post;
