"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import React from "react";
import { Label } from "../@/components/ui/label";
import { Input } from "../@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../@/components/ui/card";
import { Button } from "../@/components/ui/button";
import checkNFSWText from "../utils/checkNFSWText";

type Props = {};

const TextAreaForm = (props: Props) => {
  return (
    <section className="py-10 bg-black sm:py-16 lg:py-24 w-screen ">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:items-stretch md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">
          <div className="flex flex-col justify-between lg:py-5">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:leading-tight lg:text-5xl">
                It’s time to build a safer internet!
              </h2>
              <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-white">
                Transforming Online Sharing: Where Privacy Meets Security and
                Innovation
              </p>
              <img
                className="relative z-10 max-w-xs mx-auto -mb-16 md:hidden"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/curve-line-mobile.svg"
                alt=""
              />
              <img
                className="hidden w-full translate-x-24 translate-y-8 md:block"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/curve-line.svg"
                alt=""
              />
            </div>
          </div>

          <div className=" justify-center">
            <div className="overflow-hidden bg-white rounded-md">
              <div className="p-6 sm:p-10">
                <Tabs defaultValue="account" className="w-[400px]">
                  <TabsList className="grid w-full grid-cols-2 bg-neutral-800 text-white p-2 rounded-lg">
                    <TabsTrigger
                      value="account"
                      className="bg-black rounded-lg p-1"
                    >
                      Text
                    </TabsTrigger>
                    <TabsTrigger
                      value="password"
                      className="rounded-md active:bg-black"
                    >
                      Image
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="account">
                    <Card>
                      <CardHeader>
                        <CardTitle>What are your thoughts today?</CardTitle>
                        <CardDescription>
                          Start sharing your thoughts with your Lens Frens
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-8">
                        <div className="">
                          <Input
                            id="name"
                            defaultValue="What you're doing today......"
                          />
                        </div>
                        <button
                          type="button"
                          className="bg-black rounded-xl text-white font-medium mt-40 px-4 py-3 hover:bg-black/80"
                          onClick={async () => {
                            await checkNFSWText("hello testing");
                            // router.push("/post");
                          }}
                        >
                          Post
                        </button>
                      </CardContent>
                      <CardFooter></CardFooter>
                    </Card>
                  </TabsContent>
                  <TabsContent value="password">
                    <Card>
                      <div className="p-4">
                        <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
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
                              <span className="font-semibold">
                                Click to upload
                              </span>{" "}
                              or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              SVG, PNG, JPG or GIF (MAX. 800x400px)
                            </p>
                          </div>
                          <input
                            id="dropzone-file"
                            type="file"
                            className="hidden"
                          />
                        </label>
                        <button
                          type="button"
                          className="bg-black rounded-xl text-white font-medium mt-8 px-4 py-3 hover:bg-black/80"
                          onClick={() => {
                            // router.push("/post");
                          }}
                        >
                          Post
                        </button>
                      </div>
                    </Card>
                  </TabsContent>
                </Tabs>
                {/* <Tabs defaultValue="account" className="w-[400px] ">
                  <TabsList className="grid w-full grid-cols-2 p-2 rounded-lg ">
                    <TabsTrigger value="txt">Text Post</TabsTrigger>
                    <TabsTrigger value="img">Image Post</TabsTrigger>
                  </TabsList>
                  <TabsContent value="txt">
                    <>
                      <div className="py-4 px-2">
                        <label className="text-base font-medium text-gray-900">
                          {" "}
                          Project brief{" "}
                        </label>
                        <div className="mt-2.5 relative">
                          <textarea
                            name=""
                            id=""
                            placeholder="Enter your project brief"
                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500"
                          ></textarea>
                        </div>
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-md focus:outline-none hover:bg-orange-600 focus:bg-orange-600"
                        >
                          Get Free Quote
                        </button>
                      </div>
                    </>
                  </TabsContent>
                  <TabsContent value="img">
                    <Label htmlFor="picture">Picture</Label>
                    <Input id="picture" type="file" />
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-md focus:outline-none hover:bg-orange-600 focus:bg-orange-600 mt-12"
                    >
                      Get Free Quote
                    </button>
                  </TabsContent>
                </Tabs> */}

                <form action="#" method="POST" className="mt-4">
                  <div className="grid w-full max-w-sm items-center gap-1.5"></div>
                </form>
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                className="w-6 h-6 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                className="w-6 h-6 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                className="w-6 h-6 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                className="w-6 h-6 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>

            <blockquote className="mt-6">
              <p className="text-lg leading-relaxed text-white">
                You made it so simple. My new site is so much faster and easier
                to work with than my old site. I just choose the page, make the
                change and click save.
              </p>
            </blockquote>

            <div className="flex items-center mt-8">
              <img
                className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/avatar.jpg"
                alt=""
              />
              <div className="ml-4">
                <p className="text-base font-semibold text-white">
                  Jenny Wilson
                </p>
                <p className="mt-px text-sm text-gray-400">Product Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextAreaForm;
