"use client";
import React, { useEffect, useState } from "react";
import { useStore } from "../store/store";
import ImagePost from "../components/ImagePost";
import TextPost from "../components/TextPost";
import { Textarea } from "../@/components/ui/textarea";
import { Label } from "../@/components/ui/label";
import { client, exploreProfiles } from "../api/api";
import Link from "next/link";
import Image from "next/image";
import TextareaForm from "../components/TextareaForm";
import { toast } from "react-toastify";
import { useCreateDataAvailabilityPostViaDispatcherMutation } from "../lens";
import { Router, useRouter } from "next/router";
// import { TextareaForm } from "../components/TextAreaForm";

type Props = {
  activeTab: boolean;
};

const Post = (props: Props) => {
  // const [activeTab, setactiveTab] = useState(1);
  const { activeTab, setactiveTab } = useStore();
  const [profiles, setProfiles] = useState<any>([]);
  const {isLensAuthenticated}= useStore();
  const router=useRouter();
  useEffect(() => {
    fetchProfiles();
    if(!isLensAuthenticated){
      router.push('/');
    }
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
      <section className="flex flex-1 min-h-screen lg:bg-black overflow-hidden">
        <TextareaForm />
      </section>
    </>
  );
};

export default Post;
