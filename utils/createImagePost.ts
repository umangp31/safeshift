import { v4 as uuid } from "uuid";
import { PublicationMainFocus, PublicationMetadataDisplayTypes } from "../lens";
const createImagePost = async (image, imageHash, currentProfile) => {
  let metadata;
  metadata = {
    version: "2.0.0",
    metadata_id: uuid(),
    appId: process.env.NEXT_PUBLIC_APP_ID,
    name: "Image",
    description: "",
    content: "",
    mainContentFocus: PublicationMainFocus.Image,
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
    media: [
      {
        item: `ipfs://${imageHash}`,
        type: image.type,
        cover: null,
      },
    ],
    image: `ipfs://${imageHash}`,
    imageMimeType: image.type,
    animation_url: null,
    external_url: `https://testnet.lenster.xyz/${currentProfile?.handle}`,
    locale: "en-US",
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

export default createImagePost;
