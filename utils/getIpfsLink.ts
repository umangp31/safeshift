/**
 *
 * @param url unformatted url containing ipfs hash
 * @returns https accessable URL
 * @supports Filecoin,IPFS,Arweave CID
 */

import { ARWEAVE_GATEWAY, IPFS_GATEWAY, STATIC_ASSET } from "../constants";


const getIPFSLink = (url: string | undefined): string => {
  if (!url) return STATIC_ASSET;

  const LINK = url?.includes(ARWEAVE_GATEWAY)
    ? url
    : url?.includes("ipfs://")
    ? `${IPFS_GATEWAY}${url?.split("//")[1]}`
    : url?.includes("ar://")
    ? `${ARWEAVE_GATEWAY}/${url?.split("ar://")[1]}`
    : url;
  return LINK;
};
export default getIPFSLink;