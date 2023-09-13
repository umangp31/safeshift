import Image from "next/image";
import { memo } from "react";
import getIPFSLink from "../utils/getIpfsLink";

type AvatarProps = {
  src: string;
  height: number | string;
  width: number | string;
  borderRadius?: number;
  borderColor?: string;
  borderWidth?: number;
  opacity?: number;
};

const Avatar: React.FC<AvatarProps> = ({
  src,
  height,
  width,
  borderRadius = 500,
  borderColor = "transparent",
  borderWidth = 0,
  opacity = 1,
}) => {
  const STATIC_COVER =
    "https://lens.infura-ipfs.io/ipfs/bafybeibv2kpqpjtvuj5uprvq6knnr2reb7ylq3o4bnypqjioqgxmjw2akq/5460475.webp";
  const resolvedSrc =
    getIPFSLink(src) === STATIC_COVER
      ? `https://xsgames.co/randomusers/assets/avatars/pixel/${Math.floor(
          53 * Math.random()
        )}.jpg`
      : getIPFSLink(src);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      style={{
        opacity,
        height,
        width,
        borderRadius,
        backgroundColor: "white",
        borderColor,
        borderWidth,
        zIndex: 9,
      }}
      src={resolvedSrc}
      alt={""}
    />
  );
};
export default memo(Avatar);