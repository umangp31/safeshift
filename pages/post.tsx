'use client';
import React, { useEffect, useState } from "react";
import {useStore } from "../store/store";
import ImagePost from "../components/ImagePost";
import TextPost from "../components/TextPost";
import { Textarea } from "../@/components/ui/textarea";
import { Label } from "../@/components/ui/label";
import { client, exploreProfiles } from "../api/api";
import Link from "next/link";
import Image from "next/image";
import TextareaForm from "../components/TextareaForm";
// import { TextareaForm } from "../components/TextAreaForm";

type Props = {
  activeTab: boolean;
};

const Post = (props: Props) => {
  // const [activeTab, setactiveTab] = useState(1);
  const { activeTab, setactiveTab } = useStore();
  const [profiles, setProfiles] = useState<any>([]);
  useEffect(() => {
    fetchProfiles();
  }, []);

  async function fetchProfiles() {
    try {
      /* fetch profiles from Lens API */
      let response = await client.query({ query: exploreProfiles });
      /* return profiles with profile pics  */
      let profileData = await Promise.all(
        response.data.exploreProfiles.items.filter(async (profileInfo) => {
          return profileInfo.picture.__typename === "MediaSet";
        })
      );

      /* update the local state with the profiles array */
      setProfiles(profileData);
    } catch (err) {
      console.log({ err });
    }
  }

  return (
    <>
      <section className="flex flex-1 h-screen w-screen lg:bg-black overflow-hidden">
        {/* <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul
            className="flex flex-wrap -mb-px text-sm font-medium text-center"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <TextPost />
            <ImagePost />
          </ul>
        </div> */}
        <TextareaForm />
      </section>
    </>
  );
};

export default Post;
