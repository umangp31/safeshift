import { STATIC_ASSET } from "../constants";
import { Maybe, ProfileMedia } from "../lens";

function getRawurl(originalMediaObject: Maybe<ProfileMedia> | undefined) {
  if (typeof originalMediaObject === "undefined") {
    return STATIC_ASSET;
  }

  if (originalMediaObject?.__typename === "MediaSet") {
    return (
      originalMediaObject?.optimized?.url || originalMediaObject?.original?.url
    );
  }
  if (originalMediaObject?.__typename === "NftImage") {
    return originalMediaObject?.uri;
  }
}
export default getRawurl;