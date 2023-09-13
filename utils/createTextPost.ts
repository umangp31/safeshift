import { toast } from "react-toastify";
import { PublicationMainFocus, PublicationMetadataDisplayTypes } from "../lens";
import { v4 as uuid } from "uuid";

const createTextPost = async (postContent, currentProfile) => {
  if (postContent.trim().length === 0) {
    toast("Please write anything");
    return;
  }
  let metadata;
  metadata = {
    version: "2.0.0",
    metadata_id: uuid(),
    appId: process.env.NEXT_PUBLIC_APP_ID,
    name: postContent,
    description: postContent,
    content: postContent,
    mainContentFocus: PublicationMainFocus.TextOnly,
    tags: [],
    attributes: [
      {
        displayType: PublicationMetadataDisplayTypes.String,
        traitType: "handle",
        value: `@${currentProfile?.handle}`,
      },
      {
        displayType: PublicationMetadataDisplayTypes.String,
        traitType: "app",
        value: process.env.NEXT_PUBLIC_APP_ID,
      },
    ],
    media: [],
    image: null,
    imageMimeType: null,
    animation_url: null,
    external_url: `https://testnet.lenster.xyz/${currentProfile?.handle}`,
    locale: "en-GB",
  };
  try {
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify(metadata);

    let response = await fetch("/api/upload", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });
    if (response.ok) {
      const hash = await response.json();
      return hash.uri;
    }
  } catch (error) {
    console.log(error);
  }
};
export default createTextPost;
