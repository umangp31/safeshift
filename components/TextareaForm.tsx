"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import React, { useState } from "react";

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
import checkNFSWImage from "../utils/checkNFSWImage";
import { Textarea } from "../@/components/ui/textarea";
import { toast } from "react-toastify";
import createTextPost from "../utils/createTextPost";
import { useProfile, useStore } from "../store/store";
import { useCreateDataAvailabilityPostViaDispatcherMutation } from "../lens";
import uploadImageToIPFS from "../utils/uploadImageToIPFS";
import getIPFSLink from "../utils/getIpfsLink";
import createImagePost from "../utils/createImagePost";

type Props = {};

const TextAreaForm = (props: Props) => {
  const [postContent, setpostContent] = useState("");
  const [postImage, setpostImage] = useState<File | null>(null);
  const [isloading, setisloading] = useState(false);
  const [imageSelect, setImageSelect] = useState(false);
  const { currentProfile } = useProfile();
  const { accessToken } = useStore();
  const [imgURL, setimgURL] = useState(null);
  const [createMomokaPost] = useCreateDataAvailabilityPostViaDispatcherMutation(
    {
      onCompleted: (data) => {
        console.log(data);

        toast.success("Posted Successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      },
      onError: (err) => {
        console.log(err);
        toast.error("Something went wrong!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      },
    }
  );

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
                      className={`${
                        imageSelect ? "bg-neutral-800" : "bg-black"
                      } rounded-lg p-1`}
                      onClick={() => {
                        setImageSelect(false);
                      }}
                    >
                      Text
                    </TabsTrigger>
                    <TabsTrigger
                      value="password"
                      className={`${
                        !imageSelect ? "bg-neutral-800" : "bg-black"
                      } rounded-lg p-1`}
                      onClick={() => {
                        setImageSelect(true);
                      }}
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
                          <Textarea
                            id="name"
                            placeholder="What you're doing today......"
                            onChange={(e) => {
                              e.preventDefault();
                              setpostContent(e.target.value);
                            }}
                          />
                        </div>
                        <button
                          disabled={isloading}
                          type="button"
                          onClick={async () => {
                            setisloading(true);
                            const data = await checkNFSWText(postContent);
                            if (data) {
                              const isNSFW = JSON.parse(data as any);
                              if (isNSFW) {
                                toast.error(
                                  "Your content is NOT SAFE FOR WORK!",
                                  {
                                    position: "top-center",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: 0,
                                    theme: "colored",
                                  }
                                );
                              } else {
                                toast.success("Passed NFSW Check!", {
                                  position: "top-center",
                                  autoClose: 5000,
                                  hideProgressBar: true,
                                  closeOnClick: true,
                                  pauseOnHover: true,
                                  draggable: true,
                                  progress: undefined,
                                  theme: "light",
                                });

                                const uri = await createTextPost(
                                  postContent,
                                  currentProfile
                                );
                                createMomokaPost({
                                  variables: {
                                    request: {
                                      contentURI: uri,
                                      from: currentProfile?.id,
                                    },
                                  },
                                  context: {
                                    headers: {
                                      "x-access-token": `Bearer ${accessToken}`,
                                    },
                                  },
                                });
                              }
                              setisloading(false);
                              setpostContent("");
                            }
                          }}
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                        >
                          {isloading ? (
                            <>
                              {" "}
                              <svg
                                aria-hidden="true"
                                role="status"
                                className="inline w-4 h-4 mr-3 text-white animate-spin"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                  fill="#E5E7EB"
                                />
                                <path
                                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                  fill="currentColor"
                                />
                              </svg>
                              Posting
                            </>
                          ) : (
                            <>Post</>
                          )}
                        </button>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="password">
                    <Card>
                      <div className="p-4">
                        {postImage && (
                          <img
                            src={URL.createObjectURL(postImage)}
                            alt="Selected Image"
                            className="max-w-full h-auto mb-4"
                          />
                        )}
                        {!postImage && (
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
                              onChange={(e) => {
                                e.preventDefault();
                                if (e?.target?.files) {
                                  setpostImage(e?.target?.files[0]);
                                }
                              }}
                            />
                          </label>
                        )}

                        <button
                          disabled={isloading}
                          type="button"
                          onClick={async () => {
                            setisloading(true);
                            const imageHash = await uploadImageToIPFS(
                              postImage as any
                            );
                            const ipfsLink = await getIPFSLink(
                              `ipfs://${imageHash}`
                            );
                            console.log(ipfsLink);

                            const isNSFW = await checkNFSWImage(ipfsLink);
                            if (isNSFW) {
                              toast.error(
                                "Your content is NOT SAFE FOR WORK!",
                                {
                                  position: "top-center",
                                  autoClose: 5000,
                                  hideProgressBar: false,
                                  closeOnClick: true,
                                  pauseOnHover: true,
                                  draggable: true,
                                  progress: 0,
                                  theme: "colored",
                                }
                              );
                            } else {
                              toast.success("Passed NFSW Check!", {
                                position: "top-center",
                                autoClose: 5000,
                                hideProgressBar: true,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                              });
                              const uri = await createImagePost(
                                postImage,
                                imageHash,
                                currentProfile
                              );
                              createMomokaPost({
                                variables: {
                                  request: {
                                    contentURI: uri,
                                    from: currentProfile?.id,
                                  },
                                },
                                context: {
                                  headers: {
                                    "x-access-token": `Bearer ${accessToken}`,
                                  },
                                },
                              });
                            }
                            setisloading(false);
                            setpostImage(null);
                          }}
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-8 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                        >
                          {isloading ? (
                            <>
                              {" "}
                              <svg
                                aria-hidden="true"
                                role="status"
                                className="inline w-4 h-4 mr-3 text-white animate-spin"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                  fill="#E5E7EB"
                                />
                                <path
                                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                  fill="currentColor"
                                />
                              </svg>
                              Posting
                            </>
                          ) : (
                            <>Post</>
                          )}
                        </button>
                      </div>
                    </Card>
                  </TabsContent>
                </Tabs>

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
