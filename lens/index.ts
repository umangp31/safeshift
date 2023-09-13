import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BlockchainData: any;
  BroadcastId: any;
  ChainId: any;
  CollectModuleData: any;
  ContentEncryptionKey: any;
  ContractAddress: any;
  CreateHandle: any;
  Cursor: any;
  DataAvailabilityId: any;
  DateTime: any;
  EncryptedValueScalar: any;
  Ens: any;
  EthereumAddress: any;
  FollowModuleData: any;
  Handle: any;
  HandleClaimIdScalar: any;
  ImageSizeTransform: any;
  InternalPublicationId: any;
  IpfsCid: any;
  Jwt: any;
  LimitScalar: any;
  Locale: any;
  Markdown: any;
  MimeType: any;
  NftGalleryId: any;
  NftGalleryName: any;
  NftOwnershipId: any;
  Nonce: any;
  NotificationId: any;
  ProfileId: any;
  ProfileInterest: any;
  ProxyActionId: any;
  PublicationId: any;
  PublicationTag: any;
  PublicationUrl: any;
  ReactionId: any;
  ReferenceModuleData: any;
  Search: any;
  Signature: any;
  Sources: any;
  TimestampScalar: any;
  TokenId: any;
  TxHash: any;
  TxId: any;
  UnixTimestamp: any;
  Url: any;
  Void: any;
};

export type AaveFeeCollectModuleParams = {
  /** The collect module amount info */
  amount: ModuleFeeAmountParams;
  /** The collect module limit */
  collectLimit?: InputMaybe<Scalars["String"]>;
  /** The timestamp that this collect module will expire */
  endTimestamp?: InputMaybe<Scalars["DateTime"]>;
  /** Follower only */
  followerOnly: Scalars["Boolean"];
  /** The collect module recipient address */
  recipient: Scalars["EthereumAddress"];
  /** The collect module referral fee */
  referralFee: Scalars["Float"];
};

export type AaveFeeCollectModuleSettings = {
  __typename?: "AaveFeeCollectModuleSettings";
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  /** The maximum number of collects for this publication. Omit for no limit. */
  collectLimit?: Maybe<Scalars["String"]>;
  contractAddress: Scalars["ContractAddress"];
  /** The end timestamp after which collecting is impossible. No expiry if missing. */
  endTimestamp?: Maybe<Scalars["DateTime"]>;
  /** True if only followers of publisher may collect the post. */
  followerOnly: Scalars["Boolean"];
  /** Recipient of collect fees. */
  recipient: Scalars["EthereumAddress"];
  /** The referral fee associated with this publication. */
  referralFee: Scalars["Float"];
  /** The collect modules enum */
  type: CollectModules;
};

/** The access conditions for the publication */
export type AccessConditionInput = {
  /** AND condition */
  and?: InputMaybe<AndConditionInput>;
  /** Profile follow condition */
  collect?: InputMaybe<CollectConditionInput>;
  /** EOA ownership condition */
  eoa?: InputMaybe<EoaOwnershipInput>;
  /** Profile follow condition */
  follow?: InputMaybe<FollowConditionInput>;
  /** NFT ownership condition */
  nft?: InputMaybe<NftOwnershipInput>;
  /** OR condition */
  or?: InputMaybe<OrConditionInput>;
  /** Profile ownership condition */
  profile?: InputMaybe<ProfileOwnershipInput>;
  /** ERC20 token ownership condition */
  token?: InputMaybe<Erc20OwnershipInput>;
};

/** The access conditions for the publication */
export type AccessConditionOutput = {
  __typename?: "AccessConditionOutput";
  /** AND condition */
  and?: Maybe<AndConditionOutput>;
  /** Profile follow condition */
  collect?: Maybe<CollectConditionOutput>;
  /** EOA ownership condition */
  eoa?: Maybe<EoaOwnershipOutput>;
  /** Profile follow condition */
  follow?: Maybe<FollowConditionOutput>;
  /** NFT ownership condition */
  nft?: Maybe<NftOwnershipOutput>;
  /** OR condition */
  or?: Maybe<OrConditionOutput>;
  /** Profile ownership condition */
  profile?: Maybe<ProfileOwnershipOutput>;
  /** ERC20 token ownership condition */
  token?: Maybe<Erc20OwnershipOutput>;
};

export type AchRequest = {
  ethereumAddress: Scalars["EthereumAddress"];
  freeTextHandle?: InputMaybe<Scalars["Boolean"]>;
  handle?: InputMaybe<Scalars["CreateHandle"]>;
  overrideAlreadyClaimed: Scalars["Boolean"];
  overrideTradeMark: Scalars["Boolean"];
  secret: Scalars["String"];
};

/** The request object to add interests to a profile */
export type AddProfileInterestsRequest = {
  /** The profile interest to add */
  interests: Array<Scalars["ProfileInterest"]>;
  /** The profileId to add interests to */
  profileId: Scalars["ProfileId"];
};

export type AllPublicationsTagsRequest = {
  cursor?: InputMaybe<Scalars["Cursor"]>;
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  sort: TagSortCriteria;
  /** The App Id */
  source?: InputMaybe<Scalars["Sources"]>;
};

export type AndConditionInput = {
  /** The list of conditions to apply AND to. You can only use nested boolean conditions at the root level. */
  criteria: Array<AccessConditionInput>;
};

export type AndConditionOutput = {
  __typename?: "AndConditionOutput";
  /** The list of conditions to apply AND to. You can only use nested boolean conditions at the root level. */
  criteria: Array<AccessConditionOutput>;
};

export type ApprovedAllowanceAmount = {
  __typename?: "ApprovedAllowanceAmount";
  allowance: Scalars["String"];
  contractAddress: Scalars["ContractAddress"];
  currency: Scalars["ContractAddress"];
  module: Scalars["String"];
};

export type ApprovedModuleAllowanceAmountRequest = {
  collectModules?: InputMaybe<Array<CollectModules>>;
  /** The contract addresses for the module approved currencies you want to find information on about the user */
  currencies: Array<Scalars["ContractAddress"]>;
  followModules?: InputMaybe<Array<FollowModules>>;
  referenceModules?: InputMaybe<Array<ReferenceModules>>;
  unknownCollectModules?: InputMaybe<Array<Scalars["ContractAddress"]>>;
  unknownFollowModules?: InputMaybe<Array<Scalars["ContractAddress"]>>;
  unknownReferenceModules?: InputMaybe<Array<Scalars["ContractAddress"]>>;
};

/** The Profile */
export type Attribute = {
  __typename?: "Attribute";
  /** The display type */
  displayType?: Maybe<Scalars["String"]>;
  /** identifier of this attribute, we will update by this id  */
  key: Scalars["String"];
  /** The trait type - can be anything its the name it will render so include spaces */
  traitType?: Maybe<Scalars["String"]>;
  /** Value attribute */
  value: Scalars["String"];
};

/** The auth challenge result */
export type AuthChallengeResult = {
  __typename?: "AuthChallengeResult";
  /** The text to sign */
  text: Scalars["String"];
};

/** The authentication result */
export type AuthenticationResult = {
  __typename?: "AuthenticationResult";
  /** The access token */
  accessToken: Scalars["Jwt"];
  /** The refresh token */
  refreshToken: Scalars["Jwt"];
};

export type BroadcastDataAvailabilityUnion =
  | CreateDataAvailabilityPublicationResult
  | RelayError;

export type BroadcastRequest = {
  id: Scalars["BroadcastId"];
  signature: Scalars["Signature"];
};

export type BurnProfileRequest = {
  profileId: Scalars["ProfileId"];
};

export type CanCommentResponse = {
  __typename?: "CanCommentResponse";
  result: Scalars["Boolean"];
};

export type CanDecryptResponse = {
  __typename?: "CanDecryptResponse";
  extraDetails?: Maybe<Scalars["String"]>;
  reasons?: Maybe<Array<DecryptFailReason>>;
  result: Scalars["Boolean"];
};

export type CanMirrorResponse = {
  __typename?: "CanMirrorResponse";
  result: Scalars["Boolean"];
};

/** The challenge request */
export type ChallengeRequest = {
  /** The ethereum address you want to login with */
  address: Scalars["EthereumAddress"];
};

export type ClaimHandleRequest = {
  /** The follow module */
  followModule?: InputMaybe<FollowModuleParams>;
  freeTextHandle?: InputMaybe<Scalars["CreateHandle"]>;
  id?: InputMaybe<Scalars["HandleClaimIdScalar"]>;
};

/** The claim status */
export enum ClaimStatus {
  AlreadyClaimed = "ALREADY_CLAIMED",
  ClaimFailed = "CLAIM_FAILED",
  NotClaimed = "NOT_CLAIMED",
}

export type ClaimableHandles = {
  __typename?: "ClaimableHandles";
  canClaimFreeTextHandle: Scalars["Boolean"];
  reservedHandles: Array<ReservedClaimableHandle>;
};

/** Condition that signifies if address or profile has collected a publication */
export type CollectConditionInput = {
  /** The publication id that has to be collected to unlock content */
  publicationId?: InputMaybe<Scalars["InternalPublicationId"]>;
  /** True if the content will be unlocked for this specific publication */
  thisPublication?: InputMaybe<Scalars["Boolean"]>;
};

/** Condition that signifies if address or profile has collected a publication */
export type CollectConditionOutput = {
  __typename?: "CollectConditionOutput";
  /** The publication id that has to be collected to unlock content */
  publicationId?: Maybe<Scalars["InternalPublicationId"]>;
  /** True if the content will be unlocked for this specific publication */
  thisPublication?: Maybe<Scalars["Boolean"]>;
};

export type CollectModule =
  | AaveFeeCollectModuleSettings
  | Erc4626FeeCollectModuleSettings
  | FeeCollectModuleSettings
  | FreeCollectModuleSettings
  | LimitedFeeCollectModuleSettings
  | LimitedTimedFeeCollectModuleSettings
  | MultirecipientFeeCollectModuleSettings
  | RevertCollectModuleSettings
  | SimpleCollectModuleSettings
  | TimedFeeCollectModuleSettings
  | UnknownCollectModuleSettings;

export type CollectModuleParams = {
  /** The collect aave fee collect module */
  aaveFeeCollectModule?: InputMaybe<AaveFeeCollectModuleParams>;
  /** The collect ERC4626 fee collect module */
  erc4626FeeCollectModule?: InputMaybe<Erc4626FeeCollectModuleParams>;
  /** The collect fee collect module */
  feeCollectModule?: InputMaybe<FeeCollectModuleParams>;
  /** The collect empty collect module */
  freeCollectModule?: InputMaybe<FreeCollectModuleParams>;
  /** The collect limited fee collect module */
  limitedFeeCollectModule?: InputMaybe<LimitedFeeCollectModuleParams>;
  /** The collect limited timed fee collect module */
  limitedTimedFeeCollectModule?: InputMaybe<LimitedTimedFeeCollectModuleParams>;
  /** The multirecipient fee collect module */
  multirecipientFeeCollectModule?: InputMaybe<MultirecipientFeeCollectModuleParams>;
  /** The collect revert collect module */
  revertCollectModule?: InputMaybe<Scalars["Boolean"]>;
  /** The collect simple fee collect module */
  simpleCollectModule?: InputMaybe<SimpleCollectModuleParams>;
  /** The collect timed fee collect module */
  timedFeeCollectModule?: InputMaybe<TimedFeeCollectModuleParams>;
  /** A unknown collect module */
  unknownCollectModule?: InputMaybe<UnknownCollectModuleParams>;
};

/** The collect module types */
export enum CollectModules {
  AaveFeeCollectModule = "AaveFeeCollectModule",
  Erc4626FeeCollectModule = "ERC4626FeeCollectModule",
  FeeCollectModule = "FeeCollectModule",
  FreeCollectModule = "FreeCollectModule",
  LimitedFeeCollectModule = "LimitedFeeCollectModule",
  LimitedTimedFeeCollectModule = "LimitedTimedFeeCollectModule",
  MultirecipientFeeCollectModule = "MultirecipientFeeCollectModule",
  RevertCollectModule = "RevertCollectModule",
  SimpleCollectModule = "SimpleCollectModule",
  TimedFeeCollectModule = "TimedFeeCollectModule",
  UnknownCollectModule = "UnknownCollectModule",
}

export type CollectProxyAction = {
  freeCollect?: InputMaybe<FreeCollectProxyAction>;
};

export type CollectedEvent = {
  __typename?: "CollectedEvent";
  profile: Profile;
  timestamp: Scalars["DateTime"];
};

/** The social comment */
export type Comment = {
  __typename?: "Comment";
  /** ID of the source */
  appId?: Maybe<Scalars["Sources"]>;
  canComment: CanCommentResponse;
  canDecrypt: CanDecryptResponse;
  canMirror: CanMirrorResponse;
  /** The collect module */
  collectModule: CollectModule;
  /** The contract address for the collect nft.. if its null it means nobody collected yet as it lazy deployed */
  collectNftAddress?: Maybe<Scalars["ContractAddress"]>;
  /** Who collected it, this is used for timeline results and like this for better caching for the client */
  collectedBy?: Maybe<Wallet>;
  /** Which comment this points to if its null the pointer too deep so do another query to find it out */
  commentOn?: Maybe<Publication>;
  /** The date the post was created on */
  createdAt: Scalars["DateTime"];
  /** The data availability proofs you can fetch from */
  dataAvailabilityProofs?: Maybe<Scalars["String"]>;
  /** This will bring back the first comment of a comment and only be defined if using `publication` query and `commentOf` */
  firstComment?: Maybe<Comment>;
  hasCollectedByMe: Scalars["Boolean"];
  /** If the publication has been hidden if it has then the content and media is not available */
  hidden: Scalars["Boolean"];
  /** The internal publication id */
  id: Scalars["InternalPublicationId"];
  /** Indicates if the publication is data availability post */
  isDataAvailability: Scalars["Boolean"];
  /** Indicates if the publication is gated behind some access criteria */
  isGated: Scalars["Boolean"];
  /** The top level post/mirror this comment lives on */
  mainPost: MainPostReference;
  /** The metadata for the post */
  metadata: MetadataOutput;
  mirrors: Array<Scalars["InternalPublicationId"]>;
  /** The on chain content uri could be `ipfs://` or `https` */
  onChainContentURI: Scalars["String"];
  /** The profile ref */
  profile: Profile;
  /** Comment ranking score */
  rankingScore?: Maybe<Scalars["Float"]>;
  reaction?: Maybe<ReactionTypes>;
  /** The reference module */
  referenceModule?: Maybe<ReferenceModule>;
  /** The publication stats */
  stats: PublicationStats;
};

/** The social comment */
export type CommentCanCommentArgs = {
  profileId?: InputMaybe<Scalars["ProfileId"]>;
};

/** The social comment */
export type CommentCanDecryptArgs = {
  address?: InputMaybe<Scalars["EthereumAddress"]>;
  profileId?: InputMaybe<Scalars["ProfileId"]>;
};

/** The social comment */
export type CommentCanMirrorArgs = {
  profileId?: InputMaybe<Scalars["ProfileId"]>;
};

/** The social comment */
export type CommentHasCollectedByMeArgs = {
  isFinalisedOnChain?: InputMaybe<Scalars["Boolean"]>;
};

/** The social comment */
export type CommentMirrorsArgs = {
  by?: InputMaybe<Scalars["ProfileId"]>;
};

/** The social comment */
export type CommentReactionArgs = {
  request?: InputMaybe<ReactionFieldResolverRequest>;
};

/** The comment ordering types */
export enum CommentOrderingTypes {
  Desc = "DESC",
  Ranking = "RANKING",
}

/** The comment ranking filter types */
export enum CommentRankingFilter {
  NoneRelevant = "NONE_RELEVANT",
  Relevant = "RELEVANT",
}

/** The gated publication access criteria contract types */
export enum ContractType {
  Erc20 = "ERC20",
  Erc721 = "ERC721",
  Erc1155 = "ERC1155",
}

/** The create burn eip 712 typed data */
export type CreateBurnEip712TypedData = {
  __typename?: "CreateBurnEIP712TypedData";
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateBurnEip712TypedDataTypes;
  /** The values */
  value: CreateBurnEip712TypedDataValue;
};

/** The create burn eip 712 typed data types */
export type CreateBurnEip712TypedDataTypes = {
  __typename?: "CreateBurnEIP712TypedDataTypes";
  BurnWithSig: Array<Eip712TypedDataField>;
};

/** The create burn eip 712 typed data value */
export type CreateBurnEip712TypedDataValue = {
  __typename?: "CreateBurnEIP712TypedDataValue";
  deadline: Scalars["UnixTimestamp"];
  nonce: Scalars["Nonce"];
  tokenId: Scalars["String"];
};

/** The broadcast item */
export type CreateBurnProfileBroadcastItemResult = {
  __typename?: "CreateBurnProfileBroadcastItemResult";
  /** The date the broadcast item expiries */
  expiresAt: Scalars["DateTime"];
  /** This broadcast item ID */
  id: Scalars["BroadcastId"];
  /** The typed data */
  typedData: CreateBurnEip712TypedData;
};

/** The broadcast item */
export type CreateCollectBroadcastItemResult = {
  __typename?: "CreateCollectBroadcastItemResult";
  /** The date the broadcast item expiries */
  expiresAt: Scalars["DateTime"];
  /** This broadcast item ID */
  id: Scalars["BroadcastId"];
  /** The typed data */
  typedData: CreateCollectEip712TypedData;
};

/** The collect eip 712 typed data */
export type CreateCollectEip712TypedData = {
  __typename?: "CreateCollectEIP712TypedData";
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateCollectEip712TypedDataTypes;
  /** The values */
  value: CreateCollectEip712TypedDataValue;
};

/** The collect eip 712 typed data types */
export type CreateCollectEip712TypedDataTypes = {
  __typename?: "CreateCollectEIP712TypedDataTypes";
  CollectWithSig: Array<Eip712TypedDataField>;
};

/** The collect eip 712 typed data value */
export type CreateCollectEip712TypedDataValue = {
  __typename?: "CreateCollectEIP712TypedDataValue";
  data: Scalars["BlockchainData"];
  deadline: Scalars["UnixTimestamp"];
  nonce: Scalars["Nonce"];
  profileId: Scalars["ProfileId"];
  pubId: Scalars["PublicationId"];
};

export type CreateCollectRequest = {
  publicationId: Scalars["InternalPublicationId"];
  /** The encoded data to collect with if using an unknown module */
  unknownModuleData?: InputMaybe<Scalars["BlockchainData"]>;
};

/** The broadcast item */
export type CreateCommentBroadcastItemResult = {
  __typename?: "CreateCommentBroadcastItemResult";
  /** The date the broadcast item expiries */
  expiresAt: Scalars["DateTime"];
  /** This broadcast item ID */
  id: Scalars["BroadcastId"];
  /** The typed data */
  typedData: CreateCommentEip712TypedData;
};

/** The create comment eip 712 typed data */
export type CreateCommentEip712TypedData = {
  __typename?: "CreateCommentEIP712TypedData";
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateCommentEip712TypedDataTypes;
  /** The values */
  value: CreateCommentEip712TypedDataValue;
};

/** The create comment eip 712 typed data types */
export type CreateCommentEip712TypedDataTypes = {
  __typename?: "CreateCommentEIP712TypedDataTypes";
  CommentWithSig: Array<Eip712TypedDataField>;
};

/** The create comment eip 712 typed data value */
export type CreateCommentEip712TypedDataValue = {
  __typename?: "CreateCommentEIP712TypedDataValue";
  collectModule: Scalars["ContractAddress"];
  collectModuleInitData: Scalars["CollectModuleData"];
  contentURI: Scalars["PublicationUrl"];
  deadline: Scalars["UnixTimestamp"];
  nonce: Scalars["Nonce"];
  profileId: Scalars["ProfileId"];
  profileIdPointed: Scalars["ProfileId"];
  pubIdPointed: Scalars["PublicationId"];
  referenceModule: Scalars["ContractAddress"];
  referenceModuleData: Scalars["ReferenceModuleData"];
  referenceModuleInitData: Scalars["ReferenceModuleData"];
};

export type CreateDataAvailabilityCommentRequest = {
  /** Publication your commenting on */
  commentOn: Scalars["InternalPublicationId"];
  /** The metadata contentURI resolver */
  contentURI: Scalars["Url"];
  /** Profile id */
  from: Scalars["ProfileId"];
};

export type CreateDataAvailabilityMirrorRequest = {
  /** Profile id which will broadcast the mirror */
  from: Scalars["ProfileId"];
  /** The publication to mirror */
  mirror: Scalars["InternalPublicationId"];
};

export type CreateDataAvailabilityPostRequest = {
  /** The metadata contentURI resolver */
  contentURI: Scalars["Url"];
  /** Profile id */
  from: Scalars["ProfileId"];
};

export type CreateDataAvailabilityPublicationResult = {
  __typename?: "CreateDataAvailabilityPublicationResult";
  /** The data availability id */
  dataAvailabilityId: Scalars["DataAvailabilityId"];
  /** The id of the post */
  id: Scalars["InternalPublicationId"];
  /** The proofs for the DA */
  proofs: Scalars["String"];
};

/** The broadcast item */
export type CreateFollowBroadcastItemResult = {
  __typename?: "CreateFollowBroadcastItemResult";
  /** The date the broadcast item expiries */
  expiresAt: Scalars["DateTime"];
  /** This broadcast item ID */
  id: Scalars["BroadcastId"];
  /** The typed data */
  typedData: CreateFollowEip712TypedData;
};

/** The create follow eip 712 typed data */
export type CreateFollowEip712TypedData = {
  __typename?: "CreateFollowEIP712TypedData";
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateFollowEip712TypedDataTypes;
  /** The values */
  value: CreateFollowEip712TypedDataValue;
};

/** The create follow eip 712 typed data types */
export type CreateFollowEip712TypedDataTypes = {
  __typename?: "CreateFollowEIP712TypedDataTypes";
  FollowWithSig: Array<Eip712TypedDataField>;
};

/** The create follow eip 712 typed data value */
export type CreateFollowEip712TypedDataValue = {
  __typename?: "CreateFollowEIP712TypedDataValue";
  datas: Array<Scalars["BlockchainData"]>;
  deadline: Scalars["UnixTimestamp"];
  nonce: Scalars["Nonce"];
  profileIds: Array<Scalars["ProfileId"]>;
};

/** The broadcast item */
export type CreateMirrorBroadcastItemResult = {
  __typename?: "CreateMirrorBroadcastItemResult";
  /** The date the broadcast item expiries */
  expiresAt: Scalars["DateTime"];
  /** This broadcast item ID */
  id: Scalars["BroadcastId"];
  /** The typed data */
  typedData: CreateMirrorEip712TypedData;
};

/** The mirror eip 712 typed data */
export type CreateMirrorEip712TypedData = {
  __typename?: "CreateMirrorEIP712TypedData";
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateMirrorEip712TypedDataTypes;
  /** The values */
  value: CreateMirrorEip712TypedDataValue;
};

/** The mirror eip 712 typed data types */
export type CreateMirrorEip712TypedDataTypes = {
  __typename?: "CreateMirrorEIP712TypedDataTypes";
  MirrorWithSig: Array<Eip712TypedDataField>;
};

/** The mirror eip 712 typed data value */
export type CreateMirrorEip712TypedDataValue = {
  __typename?: "CreateMirrorEIP712TypedDataValue";
  deadline: Scalars["UnixTimestamp"];
  nonce: Scalars["Nonce"];
  profileId: Scalars["ProfileId"];
  profileIdPointed: Scalars["ProfileId"];
  pubIdPointed: Scalars["PublicationId"];
  referenceModule: Scalars["ContractAddress"];
  referenceModuleData: Scalars["ReferenceModuleData"];
  referenceModuleInitData: Scalars["ReferenceModuleData"];
};

export type CreateMirrorRequest = {
  /** Profile id */
  profileId: Scalars["ProfileId"];
  /** Publication id of what you want to mirror on remember if this is a comment it will be that as the id */
  publicationId: Scalars["InternalPublicationId"];
  /** The reference module info */
  referenceModule?: InputMaybe<ReferenceModuleParams>;
};

/** The broadcast item */
export type CreatePostBroadcastItemResult = {
  __typename?: "CreatePostBroadcastItemResult";
  /** The date the broadcast item expiries */
  expiresAt: Scalars["DateTime"];
  /** This broadcast item ID */
  id: Scalars["BroadcastId"];
  /** The typed data */
  typedData: CreatePostEip712TypedData;
};

/** The create post eip 712 typed data */
export type CreatePostEip712TypedData = {
  __typename?: "CreatePostEIP712TypedData";
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreatePostEip712TypedDataTypes;
  /** The values */
  value: CreatePostEip712TypedDataValue;
};

/** The create post eip 712 typed data types */
export type CreatePostEip712TypedDataTypes = {
  __typename?: "CreatePostEIP712TypedDataTypes";
  PostWithSig: Array<Eip712TypedDataField>;
};

/** The create post eip 712 typed data value */
export type CreatePostEip712TypedDataValue = {
  __typename?: "CreatePostEIP712TypedDataValue";
  collectModule: Scalars["ContractAddress"];
  collectModuleInitData: Scalars["CollectModuleData"];
  contentURI: Scalars["PublicationUrl"];
  deadline: Scalars["UnixTimestamp"];
  nonce: Scalars["Nonce"];
  profileId: Scalars["ProfileId"];
  referenceModule: Scalars["ContractAddress"];
  referenceModuleInitData: Scalars["ReferenceModuleData"];
};

export type CreateProfileRequest = {
  /** The follow module */
  followModule?: InputMaybe<FollowModuleParams>;
  /** The follow NFT URI is the NFT metadata your followers will mint when they follow you. This can be updated at all times. If you do not pass in anything it will create a super cool changing NFT which will show the last publication of your profile as the NFT which looks awesome! This means people do not have to worry about writing this logic but still have the ability to customise it for their followers */
  followNFTURI?: InputMaybe<Scalars["Url"]>;
  handle: Scalars["CreateHandle"];
  /** The profile picture uri */
  profilePictureUri?: InputMaybe<Scalars["Url"]>;
};

export type CreatePublicCommentRequest = {
  /** The collect module */
  collectModule: CollectModuleParams;
  /** The metadata contentURI resolver */
  contentURI: Scalars["Url"];
  /** The criteria to access the publication data */
  gated?: InputMaybe<GatedPublicationParamsInput>;
  /** Profile id */
  profileId: Scalars["ProfileId"];
  /** Publication id of what your comments on remember if this is a comment you commented on it will be that as the id */
  publicationId: Scalars["InternalPublicationId"];
  /** The reference module */
  referenceModule?: InputMaybe<ReferenceModuleParams>;
};

export type CreatePublicPostRequest = {
  /** The collect module */
  collectModule: CollectModuleParams;
  /** The metadata uploaded somewhere passing in the url to reach it */
  contentURI: Scalars["Url"];
  /** The criteria to access the publication data */
  gated?: InputMaybe<GatedPublicationParamsInput>;
  /** Profile id */
  profileId: Scalars["ProfileId"];
  /** The reference module */
  referenceModule?: InputMaybe<ReferenceModuleParams>;
};

export type CreatePublicSetProfileMetadataUriRequest = {
  /** The metadata uploaded somewhere passing in the url to reach it */
  metadata: Scalars["Url"];
  /** Profile id */
  profileId: Scalars["ProfileId"];
};

export type CreateSetDefaultProfileRequest = {
  /** Profile id */
  profileId: Scalars["ProfileId"];
};

/** The broadcast item */
export type CreateSetDispatcherBroadcastItemResult = {
  __typename?: "CreateSetDispatcherBroadcastItemResult";
  /** The date the broadcast item expiries */
  expiresAt: Scalars["DateTime"];
  /** This broadcast item ID */
  id: Scalars["BroadcastId"];
  /** The typed data */
  typedData: CreateSetDispatcherEip712TypedData;
};

/** The set dispatcher eip 712 typed data */
export type CreateSetDispatcherEip712TypedData = {
  __typename?: "CreateSetDispatcherEIP712TypedData";
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateSetDispatcherEip712TypedDataTypes;
  /** The values */
  value: CreateSetDispatcherEip712TypedDataValue;
};

/** The set dispatcher eip 712 typed data types */
export type CreateSetDispatcherEip712TypedDataTypes = {
  __typename?: "CreateSetDispatcherEIP712TypedDataTypes";
  SetDispatcherWithSig: Array<Eip712TypedDataField>;
};

/** The set dispatcher eip 712 typed data value */
export type CreateSetDispatcherEip712TypedDataValue = {
  __typename?: "CreateSetDispatcherEIP712TypedDataValue";
  deadline: Scalars["UnixTimestamp"];
  dispatcher: Scalars["EthereumAddress"];
  nonce: Scalars["Nonce"];
  profileId: Scalars["ProfileId"];
};

/** The broadcast item */
export type CreateSetFollowModuleBroadcastItemResult = {
  __typename?: "CreateSetFollowModuleBroadcastItemResult";
  /** The date the broadcast item expiries */
  expiresAt: Scalars["DateTime"];
  /** This broadcast item ID */
  id: Scalars["BroadcastId"];
  /** The typed data */
  typedData: CreateSetFollowModuleEip712TypedData;
};

/** The set follow module eip 712 typed data */
export type CreateSetFollowModuleEip712TypedData = {
  __typename?: "CreateSetFollowModuleEIP712TypedData";
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateSetFollowModuleEip712TypedDataTypes;
  /** The values */
  value: CreateSetFollowModuleEip712TypedDataValue;
};

/** The set follow module eip 712 typed data types */
export type CreateSetFollowModuleEip712TypedDataTypes = {
  __typename?: "CreateSetFollowModuleEIP712TypedDataTypes";
  SetFollowModuleWithSig: Array<Eip712TypedDataField>;
};

/** The set follow module eip 712 typed data value */
export type CreateSetFollowModuleEip712TypedDataValue = {
  __typename?: "CreateSetFollowModuleEIP712TypedDataValue";
  deadline: Scalars["UnixTimestamp"];
  followModule: Scalars["ContractAddress"];
  followModuleInitData: Scalars["FollowModuleData"];
  nonce: Scalars["Nonce"];
  profileId: Scalars["ProfileId"];
};

export type CreateSetFollowModuleRequest = {
  /** The follow module info */
  followModule: FollowModuleParams;
  profileId: Scalars["ProfileId"];
};

/** The broadcast item */
export type CreateSetFollowNftUriBroadcastItemResult = {
  __typename?: "CreateSetFollowNFTUriBroadcastItemResult";
  /** The date the broadcast item expiries */
  expiresAt: Scalars["DateTime"];
  /** This broadcast item ID */
  id: Scalars["BroadcastId"];
  /** The typed data */
  typedData: CreateSetFollowNftUriEip712TypedData;
};

/** The set follow nft uri eip 712 typed data */
export type CreateSetFollowNftUriEip712TypedData = {
  __typename?: "CreateSetFollowNFTUriEIP712TypedData";
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateSetFollowNftUriEip712TypedDataTypes;
  /** The values */
  value: CreateSetFollowNftUriEip712TypedDataValue;
};

/** The set follow nft uri eip 712 typed data types */
export type CreateSetFollowNftUriEip712TypedDataTypes = {
  __typename?: "CreateSetFollowNFTUriEIP712TypedDataTypes";
  SetFollowNFTURIWithSig: Array<Eip712TypedDataField>;
};

/** The set follow nft uri eip 712 typed data value */
export type CreateSetFollowNftUriEip712TypedDataValue = {
  __typename?: "CreateSetFollowNFTUriEIP712TypedDataValue";
  deadline: Scalars["UnixTimestamp"];
  followNFTURI: Scalars["Url"];
  nonce: Scalars["Nonce"];
  profileId: Scalars["ProfileId"];
};

export type CreateSetFollowNftUriRequest = {
  /** The follow NFT URI is the NFT metadata your followers will mint when they follow you. This can be updated at all times. If you do not pass in anything it will create a super cool changing NFT which will show the last publication of your profile as the NFT which looks awesome! This means people do not have to worry about writing this logic but still have the ability to customise it for their followers */
  followNFTURI?: InputMaybe<Scalars["Url"]>;
  profileId: Scalars["ProfileId"];
};

/** The broadcast item */
export type CreateSetProfileImageUriBroadcastItemResult = {
  __typename?: "CreateSetProfileImageUriBroadcastItemResult";
  /** The date the broadcast item expiries */
  expiresAt: Scalars["DateTime"];
  /** This broadcast item ID */
  id: Scalars["BroadcastId"];
  /** The typed data */
  typedData: CreateSetProfileImageUriEip712TypedData;
};

/** The set profile uri eip 712 typed data */
export type CreateSetProfileImageUriEip712TypedData = {
  __typename?: "CreateSetProfileImageUriEIP712TypedData";
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateSetProfileImageUriEip712TypedDataTypes;
  /** The values */
  value: CreateSetProfileImageUriEip712TypedDataValue;
};

/** The set profile image uri eip 712 typed data types */
export type CreateSetProfileImageUriEip712TypedDataTypes = {
  __typename?: "CreateSetProfileImageUriEIP712TypedDataTypes";
  SetProfileImageURIWithSig: Array<Eip712TypedDataField>;
};

/** The set profile uri eip 712 typed data value */
export type CreateSetProfileImageUriEip712TypedDataValue = {
  __typename?: "CreateSetProfileImageUriEIP712TypedDataValue";
  deadline: Scalars["UnixTimestamp"];
  imageURI: Scalars["Url"];
  nonce: Scalars["Nonce"];
  profileId: Scalars["ProfileId"];
};

/** The broadcast item */
export type CreateSetProfileMetadataUriBroadcastItemResult = {
  __typename?: "CreateSetProfileMetadataURIBroadcastItemResult";
  /** The date the broadcast item expiries */
  expiresAt: Scalars["DateTime"];
  /** This broadcast item ID */
  id: Scalars["BroadcastId"];
  /** The typed data */
  typedData: CreateSetProfileMetadataUrieip712TypedData;
};

/** The set follow nft uri eip 712 typed data */
export type CreateSetProfileMetadataUrieip712TypedData = {
  __typename?: "CreateSetProfileMetadataURIEIP712TypedData";
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateSetProfileMetadataUrieip712TypedDataTypes;
  /** The values */
  value: CreateSetProfileMetadataUrieip712TypedDataValue;
};

/** The set follow nft uri eip 712 typed data types */
export type CreateSetProfileMetadataUrieip712TypedDataTypes = {
  __typename?: "CreateSetProfileMetadataURIEIP712TypedDataTypes";
  SetProfileMetadataURIWithSig: Array<Eip712TypedDataField>;
};

/** The set follow nft uri eip 712 typed data value */
export type CreateSetProfileMetadataUrieip712TypedDataValue = {
  __typename?: "CreateSetProfileMetadataURIEIP712TypedDataValue";
  deadline: Scalars["UnixTimestamp"];
  metadata: Scalars["Url"];
  nonce: Scalars["Nonce"];
  profileId: Scalars["ProfileId"];
};

/** The broadcast item */
export type CreateToggleFollowBroadcastItemResult = {
  __typename?: "CreateToggleFollowBroadcastItemResult";
  /** The date the broadcast item expiries */
  expiresAt: Scalars["DateTime"];
  /** This broadcast item ID */
  id: Scalars["BroadcastId"];
  /** The typed data */
  typedData: CreateToggleFollowEip712TypedData;
};

/** The create toggle follows eip 712 typed data */
export type CreateToggleFollowEip712TypedData = {
  __typename?: "CreateToggleFollowEIP712TypedData";
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateToggleFollowEip712TypedDataTypes;
  /** The values */
  value: CreateToggleFollowEip712TypedDataValue;
};

/** The create toggle follows eip 712 typed data types */
export type CreateToggleFollowEip712TypedDataTypes = {
  __typename?: "CreateToggleFollowEIP712TypedDataTypes";
  ToggleFollowWithSig: Array<Eip712TypedDataField>;
};

/** The create toggle follow eip 712 typed data value */
export type CreateToggleFollowEip712TypedDataValue = {
  __typename?: "CreateToggleFollowEIP712TypedDataValue";
  deadline: Scalars["UnixTimestamp"];
  enables: Array<Scalars["Boolean"]>;
  nonce: Scalars["Nonce"];
  profileIds: Array<Scalars["ProfileId"]>;
};

export type CreateToggleFollowRequest = {
  enables: Array<Scalars["Boolean"]>;
  profileIds: Array<Scalars["ProfileId"]>;
};

/** The broadcast item */
export type CreateUnfollowBroadcastItemResult = {
  __typename?: "CreateUnfollowBroadcastItemResult";
  /** The date the broadcast item expiries */
  expiresAt: Scalars["DateTime"];
  /** This broadcast item ID */
  id: Scalars["BroadcastId"];
  /** The typed data */
  typedData: CreateBurnEip712TypedData;
};

export type CurRequest = {
  secret: Scalars["String"];
};

/** The custom filters types */
export enum CustomFiltersTypes {
  Gardeners = "GARDENERS",
}

export type DataAvailabilityComment = {
  __typename?: "DataAvailabilityComment";
  appId?: Maybe<Scalars["Sources"]>;
  commentedOnProfile: Profile;
  commentedOnPublicationId: Scalars["InternalPublicationId"];
  createdAt: Scalars["DateTime"];
  profile: Profile;
  publicationId: Scalars["InternalPublicationId"];
  submitter: Scalars["EthereumAddress"];
  transactionId: Scalars["String"];
  verificationStatus: DataAvailabilityVerificationStatusUnion;
};

export type DataAvailabilityMirror = {
  __typename?: "DataAvailabilityMirror";
  appId?: Maybe<Scalars["Sources"]>;
  createdAt: Scalars["DateTime"];
  mirrorOfProfile: Profile;
  mirrorOfPublicationId: Scalars["InternalPublicationId"];
  profile: Profile;
  publicationId: Scalars["InternalPublicationId"];
  submitter: Scalars["EthereumAddress"];
  transactionId: Scalars["String"];
  verificationStatus: DataAvailabilityVerificationStatusUnion;
};

export type DataAvailabilityPost = {
  __typename?: "DataAvailabilityPost";
  appId?: Maybe<Scalars["Sources"]>;
  createdAt: Scalars["DateTime"];
  profile: Profile;
  publicationId: Scalars["InternalPublicationId"];
  submitter: Scalars["EthereumAddress"];
  transactionId: Scalars["String"];
  verificationStatus: DataAvailabilityVerificationStatusUnion;
};

export type DataAvailabilitySubmitterResult = {
  __typename?: "DataAvailabilitySubmitterResult";
  address: Scalars["EthereumAddress"];
  name: Scalars["String"];
  totalTransactions: Scalars["Int"];
};

/** The paginated submitter results */
export type DataAvailabilitySubmittersResult = {
  __typename?: "DataAvailabilitySubmittersResult";
  items: Array<DataAvailabilitySubmitterResult>;
  pageInfo: PaginatedResultInfo;
};

export type DataAvailabilitySummaryResult = {
  __typename?: "DataAvailabilitySummaryResult";
  totalTransactions: Scalars["Int"];
};

export type DataAvailabilityTransactionRequest = {
  /** The DA transaction id or internal publiation id */
  id: Scalars["String"];
};

export type DataAvailabilityTransactionUnion =
  | DataAvailabilityComment
  | DataAvailabilityMirror
  | DataAvailabilityPost;

export type DataAvailabilityTransactionsRequest = {
  cursor?: InputMaybe<Scalars["Cursor"]>;
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  profileId?: InputMaybe<Scalars["ProfileId"]>;
};

export type DataAvailabilityTransactionsResult = {
  __typename?: "DataAvailabilityTransactionsResult";
  items: Array<DataAvailabilityTransactionUnion>;
  pageInfo: PaginatedResultInfo;
};

export type DataAvailabilityVerificationStatusFailure = {
  __typename?: "DataAvailabilityVerificationStatusFailure";
  status?: Maybe<MomokaValidatorError>;
};

export type DataAvailabilityVerificationStatusSuccess = {
  __typename?: "DataAvailabilityVerificationStatusSuccess";
  verified: Scalars["Boolean"];
};

export type DataAvailabilityVerificationStatusUnion =
  | DataAvailabilityVerificationStatusFailure
  | DataAvailabilityVerificationStatusSuccess;

/** The reason why a profile cannot decrypt a publication */
export enum DecryptFailReason {
  CanNotDecrypt = "CAN_NOT_DECRYPT",
  CollectNotFinalisedOnChain = "COLLECT_NOT_FINALISED_ON_CHAIN",
  DoesNotFollowProfile = "DOES_NOT_FOLLOW_PROFILE",
  DoesNotOwnNft = "DOES_NOT_OWN_NFT",
  DoesNotOwnProfile = "DOES_NOT_OWN_PROFILE",
  FollowNotFinalisedOnChain = "FOLLOW_NOT_FINALISED_ON_CHAIN",
  HasNotCollectedPublication = "HAS_NOT_COLLECTED_PUBLICATION",
  MissingEncryptionParams = "MISSING_ENCRYPTION_PARAMS",
  ProfileDoesNotExist = "PROFILE_DOES_NOT_EXIST",
  UnauthorizedAddress = "UNAUTHORIZED_ADDRESS",
  UnauthorizedBalance = "UNAUTHORIZED_BALANCE",
}

export type DefaultProfileRequest = {
  ethereumAddress: Scalars["EthereumAddress"];
};

export type DegreesOfSeparationReferenceModuleParams = {
  /** Applied to comments */
  commentsRestricted: Scalars["Boolean"];
  /** Degrees of separation */
  degreesOfSeparation: Scalars["Int"];
  /** Applied to mirrors */
  mirrorsRestricted: Scalars["Boolean"];
};

export type DegreesOfSeparationReferenceModuleSettings = {
  __typename?: "DegreesOfSeparationReferenceModuleSettings";
  /** Applied to comments */
  commentsRestricted: Scalars["Boolean"];
  contractAddress: Scalars["ContractAddress"];
  /** Degrees of separation */
  degreesOfSeparation: Scalars["Int"];
  /** Applied to mirrors */
  mirrorsRestricted: Scalars["Boolean"];
  /** The reference modules enum */
  type: ReferenceModules;
};

export type DismissRecommendedProfilesRequest = {
  profileIds: Array<Scalars["ProfileId"]>;
};

/** The dispatcher */
export type Dispatcher = {
  __typename?: "Dispatcher";
  /** The dispatcher address */
  address: Scalars["EthereumAddress"];
  /** If the dispatcher can use the relay */
  canUseRelay: Scalars["Boolean"];
  /** If the dispatcher transactions will be sponsored by lens aka cover the gas costs */
  sponsor: Scalars["Boolean"];
};

export type DoesFollow = {
  /** The follower address remember wallets follow profiles */
  followerAddress: Scalars["EthereumAddress"];
  /** The profile id */
  profileId: Scalars["ProfileId"];
};

export type DoesFollowRequest = {
  /** The follower infos */
  followInfos: Array<DoesFollow>;
};

/** The does follow response */
export type DoesFollowResponse = {
  __typename?: "DoesFollowResponse";
  /** The follower address remember wallets follow profiles */
  followerAddress: Scalars["EthereumAddress"];
  /** If the user does follow */
  follows: Scalars["Boolean"];
  /** Is finalised on-chain */
  isFinalisedOnChain: Scalars["Boolean"];
  /** The profile id */
  profileId: Scalars["ProfileId"];
};

/** The eip 712 typed data domain */
export type Eip712TypedDataDomain = {
  __typename?: "EIP712TypedDataDomain";
  /** The chainId */
  chainId: Scalars["ChainId"];
  /** The name of the typed data domain */
  name: Scalars["String"];
  /** The verifying contract */
  verifyingContract: Scalars["ContractAddress"];
  /** The version */
  version: Scalars["String"];
};

/** The eip 712 typed data field */
export type Eip712TypedDataField = {
  __typename?: "EIP712TypedDataField";
  /** The name of the typed data field */
  name: Scalars["String"];
  /** The type of the typed data field */
  type: Scalars["String"];
};

export type Erc4626FeeCollectModuleParams = {
  /** The collecting cost associated with this publication. 0 for free collect. */
  amount: ModuleFeeAmountParams;
  /** The maximum number of collects for this publication. Omit for no limit. */
  collectLimit?: InputMaybe<Scalars["String"]>;
  /** The end timestamp after which collecting is impossible. Omit for no expiry. */
  endTimestamp?: InputMaybe<Scalars["DateTime"]>;
  /** True if only followers of publisher may collect the post. */
  followerOnly: Scalars["Boolean"];
  /** The address of the recipient who will recieve vault shares after depositing is completed. */
  recipient: Scalars["EthereumAddress"];
  /** The referral fee associated with this publication. */
  referralFee?: InputMaybe<Scalars["Float"]>;
  /** The address of the ERC4626 vault to deposit funds to. */
  vault: Scalars["ContractAddress"];
};

export type Erc4626FeeCollectModuleSettings = {
  __typename?: "ERC4626FeeCollectModuleSettings";
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  /** The maximum number of collects for this publication. 0 for no limit. */
  collectLimit?: Maybe<Scalars["String"]>;
  contractAddress: Scalars["ContractAddress"];
  /** The end timestamp after which collecting is impossible. 0 for no expiry. */
  endTimestamp?: Maybe<Scalars["DateTime"]>;
  /** True if only followers of publisher may collect the post. */
  followerOnly: Scalars["Boolean"];
  /** The recipient of the ERC4626 vault shares */
  recipient: Scalars["EthereumAddress"];
  /** The referral fee associated with this publication. */
  referralFee: Scalars["Float"];
  /** The collect modules enum */
  type: CollectModules;
  /** The ERC4626 vault address */
  vault: Scalars["ContractAddress"];
};

export type ElectedMirror = {
  __typename?: "ElectedMirror";
  mirrorId: Scalars["InternalPublicationId"];
  profile: Profile;
  timestamp: Scalars["DateTime"];
};

export type EnabledModule = {
  __typename?: "EnabledModule";
  contractAddress: Scalars["ContractAddress"];
  inputParams: Array<ModuleInfo>;
  moduleName: Scalars["String"];
  redeemParams: Array<ModuleInfo>;
  returnDataParms: Array<ModuleInfo>;
};

/** The enabled modules */
export type EnabledModules = {
  __typename?: "EnabledModules";
  collectModules: Array<EnabledModule>;
  followModules: Array<EnabledModule>;
  referenceModules: Array<EnabledModule>;
};

/** The encrypted fields */
export type EncryptedFieldsOutput = {
  __typename?: "EncryptedFieldsOutput";
  /** The encrypted animation_url field */
  animation_url?: Maybe<Scalars["EncryptedValueScalar"]>;
  /** The encrypted content field */
  content?: Maybe<Scalars["EncryptedValueScalar"]>;
  /** The encrypted external_url field */
  external_url?: Maybe<Scalars["EncryptedValueScalar"]>;
  /** The encrypted image field */
  image?: Maybe<Scalars["EncryptedValueScalar"]>;
  /** The encrypted media field */
  media?: Maybe<Array<EncryptedMediaSet>>;
};

/** The Encrypted Media url and metadata */
export type EncryptedMedia = {
  __typename?: "EncryptedMedia";
  /** The encrypted alt tags for accessibility */
  altTag?: Maybe<Scalars["EncryptedValueScalar"]>;
  /** The encrypted cover for any video or audio you attached */
  cover?: Maybe<Scalars["EncryptedValueScalar"]>;
  /** Height - will always be null on the public API */
  height?: Maybe<Scalars["Int"]>;
  /** The image/audio/video mime type for the publication */
  mimeType?: Maybe<Scalars["MimeType"]>;
  /** Size - will always be null on the public API */
  size?: Maybe<Scalars["Int"]>;
  /** The encrypted value for the URL */
  url: Scalars["Url"];
  /** Width - will always be null on the public API */
  width?: Maybe<Scalars["Int"]>;
};

/** The encrypted media set */
export type EncryptedMediaSet = {
  __typename?: "EncryptedMediaSet";
  /**
   * Medium media - will always be null on the public API
   * @deprecated should not be used will always be null
   */
  medium?: Maybe<EncryptedMedia>;
  /** Original media */
  original: EncryptedMedia;
  /**
   * Small media - will always be null on the public API
   * @deprecated should not be used will always be null
   */
  small?: Maybe<EncryptedMedia>;
};

/** The metadata encryption params */
export type EncryptionParamsOutput = {
  __typename?: "EncryptionParamsOutput";
  /** The access conditions */
  accessCondition: AccessConditionOutput;
  /** The encrypted fields */
  encryptedFields: EncryptedFieldsOutput;
  /** The encryption provider */
  encryptionProvider: EncryptionProvider;
  /** The provider-specific encryption params */
  providerSpecificParams: ProviderSpecificParamsOutput;
};

/** The gated publication encryption provider */
export enum EncryptionProvider {
  LitProtocol = "LIT_PROTOCOL",
}

export type EnsOnChainIdentity = {
  __typename?: "EnsOnChainIdentity";
  /** The default ens mapped to this address */
  name?: Maybe<Scalars["Ens"]>;
};

export type EoaOwnershipInput = {
  /** The address that will have access to the content */
  address: Scalars["EthereumAddress"];
};

export type EoaOwnershipOutput = {
  __typename?: "EoaOwnershipOutput";
  /** The address that will have access to the content */
  address: Scalars["EthereumAddress"];
};

/** The erc20 type */
export type Erc20 = {
  __typename?: "Erc20";
  /** The erc20 address */
  address: Scalars["ContractAddress"];
  /** Decimal places for the token */
  decimals: Scalars["Int"];
  /** Name of the symbol */
  name: Scalars["String"];
  /** Symbol for the token */
  symbol: Scalars["String"];
};

export type Erc20Amount = {
  __typename?: "Erc20Amount";
  /** The erc20 token info */
  asset: Erc20;
  /** Floating point number as string (e.g. 42.009837). It could have the entire precision of the Asset or be truncated to the last significant decimal. */
  value: Scalars["String"];
};

export type Erc20OwnershipInput = {
  /** The amount of tokens required to access the content */
  amount: Scalars["String"];
  /** The amount of tokens required to access the content */
  chainID: Scalars["ChainId"];
  /** The operator to use when comparing the amount of tokens */
  condition: ScalarOperator;
  /** The ERC20 token ethereum address */
  contractAddress: Scalars["ContractAddress"];
  /** The amount of decimals of the ERC20 contract */
  decimals: Scalars["Float"];
};

export type Erc20OwnershipOutput = {
  __typename?: "Erc20OwnershipOutput";
  /** The amount of tokens required to access the content */
  amount: Scalars["String"];
  /** The amount of tokens required to access the content */
  chainID: Scalars["ChainId"];
  /** The operator to use when comparing the amount of tokens */
  condition: ScalarOperator;
  /** The ERC20 token ethereum address */
  contractAddress: Scalars["ContractAddress"];
  /** The amount of decimals of the ERC20 contract */
  decimals: Scalars["Float"];
  /** The name of the ERC20 token */
  name: Scalars["String"];
  /** The symbol of the ERC20 token */
  symbol: Scalars["String"];
};

/** The paginated publication result */
export type ExploreProfileResult = {
  __typename?: "ExploreProfileResult";
  items: Array<Profile>;
  pageInfo: PaginatedResultInfo;
};

export type ExploreProfilesRequest = {
  cursor?: InputMaybe<Scalars["Cursor"]>;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  sortCriteria: ProfileSortCriteria;
  timestamp?: InputMaybe<Scalars["TimestampScalar"]>;
};

export type ExplorePublicationRequest = {
  cursor?: InputMaybe<Scalars["Cursor"]>;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
  /** If you wish to exclude any results for profile ids */
  excludeProfileIds?: InputMaybe<Array<Scalars["ProfileId"]>>;
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** If you want the randomizer off (default on) */
  noRandomize?: InputMaybe<Scalars["Boolean"]>;
  /** The publication types you want to query */
  publicationTypes?: InputMaybe<Array<PublicationTypes>>;
  sortCriteria: PublicationSortCriteria;
  /** The App Id */
  sources?: InputMaybe<Array<Scalars["Sources"]>>;
  timestamp?: InputMaybe<Scalars["TimestampScalar"]>;
};

/** The paginated publication result */
export type ExplorePublicationResult = {
  __typename?: "ExplorePublicationResult";
  items: Array<Publication>;
  pageInfo: PaginatedResultInfo;
};

export type FeeCollectModuleParams = {
  /** The collect module amount info */
  amount: ModuleFeeAmountParams;
  /** Follower only */
  followerOnly: Scalars["Boolean"];
  /** The collect module recipient address */
  recipient: Scalars["EthereumAddress"];
  /** The collect module referral fee */
  referralFee: Scalars["Float"];
};

export type FeeCollectModuleSettings = {
  __typename?: "FeeCollectModuleSettings";
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  contractAddress: Scalars["ContractAddress"];
  /** Follower only */
  followerOnly: Scalars["Boolean"];
  /** The collect module recipient address */
  recipient: Scalars["EthereumAddress"];
  /** The collect module referral fee */
  referralFee: Scalars["Float"];
  /** The collect modules enum */
  type: CollectModules;
};

export type FeeFollowModuleParams = {
  /** The follow module amount info */
  amount: ModuleFeeAmountParams;
  /** The follow module recipient address */
  recipient: Scalars["EthereumAddress"];
};

export type FeeFollowModuleRedeemParams = {
  /** The expected amount to pay */
  amount: ModuleFeeAmountParams;
};

export type FeeFollowModuleSettings = {
  __typename?: "FeeFollowModuleSettings";
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  contractAddress: Scalars["ContractAddress"];
  /** The collect module recipient address */
  recipient: Scalars["EthereumAddress"];
  /** The follow modules enum */
  type: FollowModules;
};

/** The feed event item filter types */
export enum FeedEventItemType {
  CollectComment = "COLLECT_COMMENT",
  CollectPost = "COLLECT_POST",
  Comment = "COMMENT",
  Mirror = "MIRROR",
  Post = "POST",
  ReactionComment = "REACTION_COMMENT",
  ReactionPost = "REACTION_POST",
}

export type FeedHighlightsRequest = {
  cursor?: InputMaybe<Scalars["Cursor"]>;
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** The profile id */
  profileId: Scalars["ProfileId"];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars["Sources"]>>;
};

export type FeedItem = {
  __typename?: "FeedItem";
  /** Sorted by most recent first. Resolves defaultProfile and if null omits the wallet collect event from the list. */
  collects: Array<CollectedEvent>;
  /** Sorted by most recent first. Up to page size - 1 comments. */
  comments?: Maybe<Array<Comment>>;
  /** The elected mirror will be the first Mirror publication within the page results set */
  electedMirror?: Maybe<ElectedMirror>;
  /** Sorted by most recent first. Up to page size - 1 mirrors */
  mirrors: Array<MirrorEvent>;
  /** Sorted by most recent first. Up to page size - 1 reactions */
  reactions: Array<ReactionEvent>;
  root: FeedItemRoot;
};

export type FeedItemRoot = Comment | Post;

export type FeedRequest = {
  cursor?: InputMaybe<Scalars["Cursor"]>;
  /** Filter your feed to whatever you wish */
  feedEventItemTypes?: InputMaybe<Array<FeedEventItemType>>;
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** The profile id */
  profileId: Scalars["ProfileId"];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars["Sources"]>>;
};

export type Follow = {
  followModule?: InputMaybe<FollowModuleRedeemParams>;
  profile: Scalars["ProfileId"];
};

export type FollowConditionInput = {
  /** The profile id of the gated profile */
  profileId: Scalars["ProfileId"];
};

export type FollowConditionOutput = {
  __typename?: "FollowConditionOutput";
  /** The profile id of the gated profile */
  profileId: Scalars["ProfileId"];
};

export type FollowModule =
  | FeeFollowModuleSettings
  | ProfileFollowModuleSettings
  | RevertFollowModuleSettings
  | UnknownFollowModuleSettings;

export type FollowModuleParams = {
  /** The follower fee follower module */
  feeFollowModule?: InputMaybe<FeeFollowModuleParams>;
  /** The empty follow module */
  freeFollowModule?: InputMaybe<Scalars["Boolean"]>;
  /** The profile follow module */
  profileFollowModule?: InputMaybe<Scalars["Boolean"]>;
  /** The revert follow module */
  revertFollowModule?: InputMaybe<Scalars["Boolean"]>;
  /** A unknown follow module */
  unknownFollowModule?: InputMaybe<UnknownFollowModuleParams>;
};

export type FollowModuleRedeemParams = {
  /** The follower fee follower module */
  feeFollowModule?: InputMaybe<FeeFollowModuleRedeemParams>;
  /** The profile follower module */
  profileFollowModule?: InputMaybe<ProfileFollowModuleRedeemParams>;
  /** A unknown follow module */
  unknownFollowModule?: InputMaybe<UnknownFollowModuleRedeemParams>;
};

/** The follow module types */
export enum FollowModules {
  FeeFollowModule = "FeeFollowModule",
  ProfileFollowModule = "ProfileFollowModule",
  RevertFollowModule = "RevertFollowModule",
  UnknownFollowModule = "UnknownFollowModule",
}

export type FollowOnlyReferenceModuleSettings = {
  __typename?: "FollowOnlyReferenceModuleSettings";
  contractAddress: Scalars["ContractAddress"];
  /** The reference modules enum */
  type: ReferenceModules;
};

export type FollowProxyAction = {
  freeFollow?: InputMaybe<FreeFollowProxyAction>;
};

export type FollowRequest = {
  follow: Array<Follow>;
};

export type FollowRevenueResult = {
  __typename?: "FollowRevenueResult";
  revenues: Array<RevenueAggregate>;
};

export type Follower = {
  __typename?: "Follower";
  totalAmountOfTimesFollowed: Scalars["Int"];
  wallet: Wallet;
};

export type FollowerNftOwnedTokenIds = {
  __typename?: "FollowerNftOwnedTokenIds";
  followerNftAddress: Scalars["ContractAddress"];
  tokensIds: Array<Scalars["String"]>;
};

export type FollowerNftOwnedTokenIdsRequest = {
  address: Scalars["EthereumAddress"];
  profileId: Scalars["ProfileId"];
};

export type FollowersRequest = {
  cursor?: InputMaybe<Scalars["Cursor"]>;
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  profileId: Scalars["ProfileId"];
};

export type Following = {
  __typename?: "Following";
  profile: Profile;
  totalAmountOfTimesFollowing: Scalars["Int"];
};

export type FollowingRequest = {
  address: Scalars["EthereumAddress"];
  cursor?: InputMaybe<Scalars["Cursor"]>;
  limit?: InputMaybe<Scalars["LimitScalar"]>;
};

export type FraudReasonInputParams = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingFraudSubreason;
};

export type FreeCollectModuleParams = {
  /** Follower only */
  followerOnly: Scalars["Boolean"];
};

export type FreeCollectModuleSettings = {
  __typename?: "FreeCollectModuleSettings";
  contractAddress: Scalars["ContractAddress"];
  /** Follower only */
  followerOnly: Scalars["Boolean"];
  /** The collect modules enum */
  type: CollectModules;
};

export type FreeCollectProxyAction = {
  publicationId: Scalars["InternalPublicationId"];
};

export type FreeFollowProxyAction = {
  profileId: Scalars["ProfileId"];
};

/** The access conditions for the publication */
export type GatedPublicationParamsInput = {
  /** AND condition */
  and?: InputMaybe<AndConditionInput>;
  /** Profile follow condition */
  collect?: InputMaybe<CollectConditionInput>;
  /** The LIT Protocol encrypted symmetric key */
  encryptedSymmetricKey: Scalars["ContentEncryptionKey"];
  /** EOA ownership condition */
  eoa?: InputMaybe<EoaOwnershipInput>;
  /** Profile follow condition */
  follow?: InputMaybe<FollowConditionInput>;
  /** NFT ownership condition */
  nft?: InputMaybe<NftOwnershipInput>;
  /** OR condition */
  or?: InputMaybe<OrConditionInput>;
  /** Profile ownership condition */
  profile?: InputMaybe<ProfileOwnershipInput>;
  /** ERC20 token ownership condition */
  token?: InputMaybe<Erc20OwnershipInput>;
};

export type GciRequest = {
  hhh: Scalars["String"];
  secret: Scalars["String"];
  ttt: Scalars["String"];
};

export type GcrRequest = {
  hhh: Scalars["String"];
  secret: Scalars["String"];
  ttt: Scalars["String"];
};

export type GctRequest = {
  hhh: Scalars["String"];
  secret: Scalars["String"];
};

export type GddRequest = {
  domain: Scalars["Url"];
  secret: Scalars["String"];
};

export type GdmRequest = {
  secret: Scalars["String"];
};

export type GenerateModuleCurrencyApproval = {
  __typename?: "GenerateModuleCurrencyApproval";
  data: Scalars["BlockchainData"];
  from: Scalars["EthereumAddress"];
  to: Scalars["ContractAddress"];
};

export type GenerateModuleCurrencyApprovalDataRequest = {
  collectModule?: InputMaybe<CollectModules>;
  currency: Scalars["ContractAddress"];
  followModule?: InputMaybe<FollowModules>;
  referenceModule?: InputMaybe<ReferenceModules>;
  unknownCollectModule?: InputMaybe<Scalars["ContractAddress"]>;
  unknownFollowModule?: InputMaybe<Scalars["ContractAddress"]>;
  unknownReferenceModule?: InputMaybe<Scalars["ContractAddress"]>;
  /** Floating point number as string (e.g. 42.009837). The server will move its decimal places for you */
  value: Scalars["String"];
};

export type GetPublicationMetadataStatusRequest = {
  publicationId?: InputMaybe<Scalars["InternalPublicationId"]>;
  txHash?: InputMaybe<Scalars["TxHash"]>;
  txId?: InputMaybe<Scalars["TxId"]>;
};

export type GlobalProtocolStats = {
  __typename?: "GlobalProtocolStats";
  totalBurntProfiles: Scalars["Int"];
  totalCollects: Scalars["Int"];
  totalComments: Scalars["Int"];
  totalFollows: Scalars["Int"];
  totalMirrors: Scalars["Int"];
  totalPosts: Scalars["Int"];
  totalProfiles: Scalars["Int"];
  totalRevenue: Array<Erc20Amount>;
};

export type GlobalProtocolStatsRequest = {
  /** Unix time from timestamp - if not supplied it will go from 0 timestamp */
  fromTimestamp?: InputMaybe<Scalars["UnixTimestamp"]>;
  /** The App Id */
  sources?: InputMaybe<Array<Scalars["Sources"]>>;
  /** Unix time to timestamp - if not supplied it go to the present timestamp */
  toTimestamp?: InputMaybe<Scalars["UnixTimestamp"]>;
};

export type HasTxHashBeenIndexedRequest = {
  /** Tx hash.. if your using the broadcaster you should use txId due to gas price upgrades */
  txHash?: InputMaybe<Scalars["TxHash"]>;
  /** Tx id.. if your using the broadcaster you should always use this field */
  txId?: InputMaybe<Scalars["TxId"]>;
};

export type HelRequest = {
  handle: Scalars["Handle"];
  remove: Scalars["Boolean"];
  secret: Scalars["String"];
};

export type HidePublicationRequest = {
  /** Publication id */
  publicationId: Scalars["InternalPublicationId"];
};

export type IdKitPhoneVerifyWebhookRequest = {
  sharedSecret: Scalars["String"];
  worldcoin?: InputMaybe<WorldcoinPhoneVerifyWebhookRequest>;
};

/** The verify webhook result status type */
export enum IdKitPhoneVerifyWebhookResultStatusType {
  AlreadyVerified = "ALREADY_VERIFIED",
  Success = "SUCCESS",
}

export type IllegalReasonInputParams = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingIllegalSubreason;
};

export type InternalPublicationsFilterRequest = {
  cursor?: InputMaybe<Scalars["Cursor"]>;
  /** must be DD/MM/YYYY */
  fromDate: Scalars["String"];
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  /** The shared secret */
  secret: Scalars["String"];
  /** The App Id */
  source: Scalars["Sources"];
  /** must be DD/MM/YYYY */
  toDate: Scalars["String"];
};

export type LimitedFeeCollectModuleParams = {
  /** The collect module amount info */
  amount: ModuleFeeAmountParams;
  /** The collect module limit */
  collectLimit: Scalars["String"];
  /** Follower only */
  followerOnly: Scalars["Boolean"];
  /** The collect module recipient address */
  recipient: Scalars["EthereumAddress"];
  /** The collect module referral fee */
  referralFee: Scalars["Float"];
};

export type LimitedFeeCollectModuleSettings = {
  __typename?: "LimitedFeeCollectModuleSettings";
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  /** The collect module limit */
  collectLimit: Scalars["String"];
  contractAddress: Scalars["ContractAddress"];
  /** Follower only */
  followerOnly: Scalars["Boolean"];
  /** The collect module recipient address */
  recipient: Scalars["EthereumAddress"];
  /** The collect module referral fee */
  referralFee: Scalars["Float"];
  /** The collect modules enum */
  type: CollectModules;
};

export type LimitedTimedFeeCollectModuleParams = {
  /** The collect module amount info */
  amount: ModuleFeeAmountParams;
  /** The collect module limit */
  collectLimit: Scalars["String"];
  /** Follower only */
  followerOnly: Scalars["Boolean"];
  /** The collect module recipient address */
  recipient: Scalars["EthereumAddress"];
  /** The collect module referral fee */
  referralFee: Scalars["Float"];
};

export type LimitedTimedFeeCollectModuleSettings = {
  __typename?: "LimitedTimedFeeCollectModuleSettings";
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  /** The collect module limit */
  collectLimit: Scalars["String"];
  contractAddress: Scalars["ContractAddress"];
  /** The collect module end timestamp */
  endTimestamp: Scalars["DateTime"];
  /** Follower only */
  followerOnly: Scalars["Boolean"];
  /** The collect module recipient address */
  recipient: Scalars["EthereumAddress"];
  /** The collect module referral fee */
  referralFee: Scalars["Float"];
  /** The collect modules enum */
  type: CollectModules;
};

export type Log = {
  __typename?: "Log";
  address: Scalars["ContractAddress"];
  blockHash: Scalars["String"];
  blockNumber: Scalars["Int"];
  data: Scalars["String"];
  logIndex: Scalars["Int"];
  removed: Scalars["Boolean"];
  topics: Array<Scalars["String"]>;
  transactionHash: Scalars["TxHash"];
  transactionIndex: Scalars["Int"];
};

export type MainPostReference = Mirror | Post;

/** The Media url */
export type Media = {
  __typename?: "Media";
  /** The alt tags for accessibility */
  altTag?: Maybe<Scalars["String"]>;
  /** The cover for any video or audio you attached */
  cover?: Maybe<Scalars["Url"]>;
  /** Height - will always be null on the public API */
  height?: Maybe<Scalars["Int"]>;
  /** The image/audio/video mime type for the publication */
  mimeType?: Maybe<Scalars["MimeType"]>;
  /** Size - will always be null on the public API */
  size?: Maybe<Scalars["Int"]>;
  /** The token image nft */
  url: Scalars["Url"];
  /** Width - will always be null on the public API */
  width?: Maybe<Scalars["Int"]>;
};

/** Media object output */
export type MediaOutput = {
  __typename?: "MediaOutput";
  /** The alt tags for accessibility */
  altTag?: Maybe<Scalars["String"]>;
  /** The cover for any video or audio you attached */
  cover?: Maybe<Scalars["Url"]>;
  item: Scalars["Url"];
  source?: Maybe<PublicationMediaSource>;
  /** This is the mime type of media */
  type?: Maybe<Scalars["MimeType"]>;
};

/** The Media Set */
export type MediaSet = {
  __typename?: "MediaSet";
  /**
   * Medium media - will always be null on the public API
   * @deprecated should not be used will always be null - use transform function to get small media
   */
  medium?: Maybe<Media>;
  /** Original media as found on the publication metadata */
  onChain: Media;
  /** Optimized media, snapshotted and served from a CDN */
  optimized?: Maybe<Media>;
  /** On-chain or snapshotted media on a CDN */
  original: Media;
  /**
   * Small media - will always be null on the public API
   * @deprecated should not be used will always be null - use transform function to get small media
   */
  small?: Maybe<Media>;
  transformed?: Maybe<Media>;
};

/** The Media Set */
export type MediaSetTransformedArgs = {
  params: MediaTransformParams;
};

export type MediaTransformParams = {
  /** Set the transformed image's height. You can use specific size in pixels eg. 100px, a percentage eg. 50% or set as 'auto' to be set automatically. Default value is 'auto'. */
  height?: InputMaybe<Scalars["ImageSizeTransform"]>;
  /** Set if you want to keep the image's original aspect ratio. True by default. If explicitly set to false, the image will stretch based on the width and height values. */
  keepAspectRatio?: InputMaybe<Scalars["Boolean"]>;
  /** Set the transformed image's width. You can use specific size in pixels eg. 100px, a percentage eg. 50% or set as 'auto' to be set automatically. Default value is 'auto'. */
  width?: InputMaybe<Scalars["ImageSizeTransform"]>;
};

export type MentionPublication = Comment | Post;

/** The metadata attribute input */
export type MetadataAttributeInput = {
  /** The display type */
  displayType?: InputMaybe<PublicationMetadataDisplayTypes>;
  /** The trait type - can be anything its the name it will render so include spaces */
  traitType: Scalars["String"];
  /** The value */
  value: Scalars["String"];
};

/** The metadata attribute output */
export type MetadataAttributeOutput = {
  __typename?: "MetadataAttributeOutput";
  /** The display type */
  displayType?: Maybe<PublicationMetadataDisplayTypes>;
  /** The trait type - can be anything its the name it will render so include spaces */
  traitType?: Maybe<Scalars["String"]>;
  /** The value */
  value?: Maybe<Scalars["String"]>;
};

/** The metadata output */
export type MetadataOutput = {
  __typename?: "MetadataOutput";
  /** The main focus of the publication */
  animatedUrl?: Maybe<Scalars["Url"]>;
  /** The attributes */
  attributes: Array<MetadataAttributeOutput>;
  /** This is the metadata content for the publication, should be markdown */
  content?: Maybe<Scalars["Markdown"]>;
  /** The content warning for the publication */
  contentWarning?: Maybe<PublicationContentWarning>;
  /** The image cover for video/music publications */
  cover?: Maybe<MediaSet>;
  /** This is the metadata description */
  description?: Maybe<Scalars["Markdown"]>;
  /** The publication's encryption params in case it's encrypted */
  encryptionParams?: Maybe<EncryptionParamsOutput>;
  /** This is the image attached to the metadata and the property used to show the NFT! */
  image?: Maybe<Scalars["Url"]>;
  /** The locale of the publication,  */
  locale?: Maybe<Scalars["Locale"]>;
  /** The main focus of the publication */
  mainContentFocus: PublicationMainFocus;
  /** The images/audios/videos for the publication */
  media: Array<MediaSet>;
  /** The metadata name */
  name?: Maybe<Scalars["String"]>;
  /** The tags for the publication */
  tags: Array<Scalars["String"]>;
};

/** The social mirror */
export type Mirror = {
  __typename?: "Mirror";
  /** ID of the source */
  appId?: Maybe<Scalars["Sources"]>;
  canComment: CanCommentResponse;
  canDecrypt: CanDecryptResponse;
  canMirror: CanMirrorResponse;
  /** The collect module */
  collectModule: CollectModule;
  /** The contract address for the collect nft.. if its null it means nobody collected yet as it lazy deployed */
  collectNftAddress?: Maybe<Scalars["ContractAddress"]>;
  /** The date the post was created on */
  createdAt: Scalars["DateTime"];
  /** The data availability proofs you can fetch from */
  dataAvailabilityProofs?: Maybe<Scalars["String"]>;
  hasCollectedByMe: Scalars["Boolean"];
  /** If the publication has been hidden if it has then the content and media is not available */
  hidden: Scalars["Boolean"];
  /** The internal publication id */
  id: Scalars["InternalPublicationId"];
  /** Indicates if the publication is data availability post */
  isDataAvailability: Scalars["Boolean"];
  /** Indicates if the publication is gated behind some access criteria */
  isGated: Scalars["Boolean"];
  /** The metadata for the post */
  metadata: MetadataOutput;
  /** The mirror publication */
  mirrorOf: MirrorablePublication;
  /** The on chain content uri could be `ipfs://` or `https` */
  onChainContentURI: Scalars["String"];
  /** The profile ref */
  profile: Profile;
  reaction?: Maybe<ReactionTypes>;
  /** The reference module */
  referenceModule?: Maybe<ReferenceModule>;
  /** The publication stats */
  stats: PublicationStats;
};

/** The social mirror */
export type MirrorCanCommentArgs = {
  profileId?: InputMaybe<Scalars["ProfileId"]>;
};

/** The social mirror */
export type MirrorCanDecryptArgs = {
  address?: InputMaybe<Scalars["EthereumAddress"]>;
  profileId?: InputMaybe<Scalars["ProfileId"]>;
};

/** The social mirror */
export type MirrorCanMirrorArgs = {
  profileId?: InputMaybe<Scalars["ProfileId"]>;
};

/** The social mirror */
export type MirrorHasCollectedByMeArgs = {
  isFinalisedOnChain?: InputMaybe<Scalars["Boolean"]>;
};

/** The social mirror */
export type MirrorReactionArgs = {
  request?: InputMaybe<ReactionFieldResolverRequest>;
};

export type MirrorEvent = {
  __typename?: "MirrorEvent";
  profile: Profile;
  timestamp: Scalars["DateTime"];
};

export type MirrorablePublication = Comment | Post;

export type ModuleFee = {
  __typename?: "ModuleFee";
  /** The fee amount */
  amount: ModuleFeeAmount;
  /** The fee recipient */
  recipient: Scalars["EthereumAddress"];
  /** The referral fee */
  referralFee: Scalars["Float"];
};

export type ModuleFeeAmount = {
  __typename?: "ModuleFeeAmount";
  /** The erc20 token info */
  asset: Erc20;
  /** Floating point number as string (e.g. 42.009837). It could have the entire precision of the Asset or be truncated to the last significant decimal. */
  value: Scalars["String"];
};

export type ModuleFeeAmountParams = {
  /** The currency address */
  currency: Scalars["ContractAddress"];
  /** Floating point number as string (e.g. 42.009837). It could have the entire precision of the Asset or be truncated to the last significant decimal. */
  value: Scalars["String"];
};

export type ModuleFeeParams = {
  /** The fee amount */
  amount: ModuleFeeAmountParams;
  /** The fee recipient */
  recipient: Scalars["EthereumAddress"];
  /** The referral fee */
  referralFee: Scalars["Float"];
};

export type ModuleInfo = {
  __typename?: "ModuleInfo";
  name: Scalars["String"];
  type: Scalars["String"];
};

/** The momka validator error */
export enum MomokaValidatorError {
  BlockCantBeReadFromNode = "BLOCK_CANT_BE_READ_FROM_NODE",
  BlockTooFar = "BLOCK_TOO_FAR",
  CanNotConnectToBundlr = "CAN_NOT_CONNECT_TO_BUNDLR",
  ChainSignatureAlreadyUsed = "CHAIN_SIGNATURE_ALREADY_USED",
  DataCantBeReadFromNode = "DATA_CANT_BE_READ_FROM_NODE",
  EventMismatch = "EVENT_MISMATCH",
  GeneratedPublicationIdMismatch = "GENERATED_PUBLICATION_ID_MISMATCH",
  InvalidEventTimestamp = "INVALID_EVENT_TIMESTAMP",
  InvalidFormattedTypedData = "INVALID_FORMATTED_TYPED_DATA",
  InvalidPointerSetNotNeeded = "INVALID_POINTER_SET_NOT_NEEDED",
  InvalidSignatureSubmitter = "INVALID_SIGNATURE_SUBMITTER",
  InvalidTxId = "INVALID_TX_ID",
  InvalidTypedDataDeadlineTimestamp = "INVALID_TYPED_DATA_DEADLINE_TIMESTAMP",
  NotClosestBlock = "NOT_CLOSEST_BLOCK",
  NoSignatureSubmitter = "NO_SIGNATURE_SUBMITTER",
  PointerFailedVerification = "POINTER_FAILED_VERIFICATION",
  PotentialReorg = "POTENTIAL_REORG",
  PublicationNonceInvalid = "PUBLICATION_NONCE_INVALID",
  PublicationNoneDa = "PUBLICATION_NONE_DA",
  PublicationNoPointer = "PUBLICATION_NO_POINTER",
  PublicationSignerNotAllowed = "PUBLICATION_SIGNER_NOT_ALLOWED",
  SimulationFailed = "SIMULATION_FAILED",
  SimulationNodeCouldNotRun = "SIMULATION_NODE_COULD_NOT_RUN",
  TimestampProofInvalidDaId = "TIMESTAMP_PROOF_INVALID_DA_ID",
  TimestampProofInvalidSignature = "TIMESTAMP_PROOF_INVALID_SIGNATURE",
  TimestampProofInvalidType = "TIMESTAMP_PROOF_INVALID_TYPE",
  TimestampProofNotSubmitter = "TIMESTAMP_PROOF_NOT_SUBMITTER",
  Unknown = "UNKNOWN",
}

export type MultirecipientFeeCollectModuleParams = {
  /** The collecting cost associated with this publication. 0 for free collect. */
  amount: ModuleFeeAmountParams;
  /** The maximum number of collects for this publication. Omit for no limit. */
  collectLimit?: InputMaybe<Scalars["String"]>;
  /** The end timestamp after which collecting is impossible. Omit for no expiry. */
  endTimestamp?: InputMaybe<Scalars["DateTime"]>;
  /** True if only followers of publisher may collect the post. */
  followerOnly: Scalars["Boolean"];
  /** Recipient of collect fees. */
  recipients: Array<RecipientDataInput>;
  /** The referral fee associated with this publication. */
  referralFee?: InputMaybe<Scalars["Float"]>;
};

export type MultirecipientFeeCollectModuleSettings = {
  __typename?: "MultirecipientFeeCollectModuleSettings";
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  /** The maximum number of collects for this publication. 0 for no limit. */
  collectLimit?: Maybe<Scalars["String"]>;
  contractAddress: Scalars["ContractAddress"];
  /** The end timestamp after which collecting is impossible. 0 for no expiry. */
  endTimestamp?: Maybe<Scalars["DateTime"]>;
  /** True if only followers of publisher may collect the post. */
  followerOnly: Scalars["Boolean"];
  /** Recipient of collect fees. */
  recipients: Array<RecipientDataOutput>;
  /** The referral fee associated with this publication. */
  referralFee: Scalars["Float"];
  /** The collect modules enum */
  type: CollectModules;
};

export type Mutation = {
  __typename?: "Mutation";
  ach?: Maybe<Scalars["Void"]>;
  /** Adds profile interests to the given profile */
  addProfileInterests?: Maybe<Scalars["Void"]>;
  addReaction?: Maybe<Scalars["Void"]>;
  authenticate: AuthenticationResult;
  broadcast: RelayResult;
  broadcastDataAvailability: BroadcastDataAvailabilityUnion;
  claim: RelayResult;
  createAttachMediaData: PublicMediaResults;
  createBurnProfileTypedData: CreateBurnProfileBroadcastItemResult;
  createCollectTypedData: CreateCollectBroadcastItemResult;
  createCommentTypedData: CreateCommentBroadcastItemResult;
  createCommentViaDispatcher: RelayResult;
  createDataAvailabilityCommentTypedData: CreateCommentBroadcastItemResult;
  createDataAvailabilityCommentViaDispatcher: RelayDataAvailabilityResult;
  createDataAvailabilityMirrorTypedData: CreateMirrorBroadcastItemResult;
  createDataAvailabilityMirrorViaDispatcher: RelayDataAvailabilityResult;
  createDataAvailabilityPostTypedData: CreatePostBroadcastItemResult;
  createDataAvailabilityPostViaDispatcher: RelayDataAvailabilityResult;
  createFollowTypedData: CreateFollowBroadcastItemResult;
  createMirrorTypedData: CreateMirrorBroadcastItemResult;
  createMirrorViaDispatcher: RelayResult;
  /** Create a new NFT gallery */
  createNftGallery: Scalars["NftGalleryId"];
  createPostTypedData: CreatePostBroadcastItemResult;
  createPostViaDispatcher: RelayResult;
  createProfile: RelayResult;
  createSetDefaultProfileTypedData: SetDefaultProfileBroadcastItemResult;
  createSetDispatcherTypedData: CreateSetDispatcherBroadcastItemResult;
  createSetFollowModuleTypedData: CreateSetFollowModuleBroadcastItemResult;
  createSetFollowNFTUriTypedData: CreateSetFollowNftUriBroadcastItemResult;
  createSetFollowNFTUriViaDispatcher: RelayResult;
  createSetProfileImageURITypedData: CreateSetProfileImageUriBroadcastItemResult;
  createSetProfileImageURIViaDispatcher: RelayResult;
  createSetProfileMetadataTypedData: CreateSetProfileMetadataUriBroadcastItemResult;
  createSetProfileMetadataViaDispatcher: RelayResult;
  createToggleFollowTypedData: CreateToggleFollowBroadcastItemResult;
  createUnfollowTypedData: CreateUnfollowBroadcastItemResult;
  /** Delete an NFT Gallery */
  deleteNftGallery?: Maybe<Scalars["Void"]>;
  dismissRecommendedProfiles?: Maybe<Scalars["Void"]>;
  dss?: Maybe<Scalars["Void"]>;
  gci?: Maybe<Scalars["Void"]>;
  gcr?: Maybe<Scalars["Void"]>;
  gdi?: Maybe<Scalars["Void"]>;
  hel?: Maybe<Scalars["Void"]>;
  hidePublication?: Maybe<Scalars["Void"]>;
  idKitPhoneVerifyWebhook: IdKitPhoneVerifyWebhookResultStatusType;
  proxyAction: Scalars["ProxyActionId"];
  refresh: AuthenticationResult;
  /** Removes profile interests from the given profile */
  removeProfileInterests?: Maybe<Scalars["Void"]>;
  removeReaction?: Maybe<Scalars["Void"]>;
  reportPublication?: Maybe<Scalars["Void"]>;
  /** Update the name of an NFT gallery */
  updateNftGalleryInfo?: Maybe<Scalars["Void"]>;
  /** Add and/or remove NFTs to a gallery */
  updateNftGalleryItems?: Maybe<Scalars["Void"]>;
  /** Update the order of NFTs in a gallery */
  updateNftGalleryOrder?: Maybe<Scalars["Void"]>;
};

export type MutationAchArgs = {
  request: AchRequest;
};

export type MutationAddProfileInterestsArgs = {
  request: AddProfileInterestsRequest;
};

export type MutationAddReactionArgs = {
  request: ReactionRequest;
};

export type MutationAuthenticateArgs = {
  request: SignedAuthChallenge;
};

export type MutationBroadcastArgs = {
  request: BroadcastRequest;
};

export type MutationBroadcastDataAvailabilityArgs = {
  request: BroadcastRequest;
};

export type MutationClaimArgs = {
  request: ClaimHandleRequest;
};

export type MutationCreateAttachMediaDataArgs = {
  request: PublicMediaRequest;
};

export type MutationCreateBurnProfileTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: BurnProfileRequest;
};

export type MutationCreateCollectTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateCollectRequest;
};

export type MutationCreateCommentTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreatePublicCommentRequest;
};

export type MutationCreateCommentViaDispatcherArgs = {
  request: CreatePublicCommentRequest;
};

export type MutationCreateDataAvailabilityCommentTypedDataArgs = {
  request: CreateDataAvailabilityCommentRequest;
};

export type MutationCreateDataAvailabilityCommentViaDispatcherArgs = {
  request: CreateDataAvailabilityCommentRequest;
};

export type MutationCreateDataAvailabilityMirrorTypedDataArgs = {
  request: CreateDataAvailabilityMirrorRequest;
};

export type MutationCreateDataAvailabilityMirrorViaDispatcherArgs = {
  request: CreateDataAvailabilityMirrorRequest;
};

export type MutationCreateDataAvailabilityPostTypedDataArgs = {
  request: CreateDataAvailabilityPostRequest;
};

export type MutationCreateDataAvailabilityPostViaDispatcherArgs = {
  request: CreateDataAvailabilityPostRequest;
};

export type MutationCreateFollowTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: FollowRequest;
};

export type MutationCreateMirrorTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateMirrorRequest;
};

export type MutationCreateMirrorViaDispatcherArgs = {
  request: CreateMirrorRequest;
};

export type MutationCreateNftGalleryArgs = {
  request: NftGalleryCreateRequest;
};

export type MutationCreatePostTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreatePublicPostRequest;
};

export type MutationCreatePostViaDispatcherArgs = {
  request: CreatePublicPostRequest;
};

export type MutationCreateProfileArgs = {
  request: CreateProfileRequest;
};

export type MutationCreateSetDefaultProfileTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateSetDefaultProfileRequest;
};

export type MutationCreateSetDispatcherTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: SetDispatcherRequest;
};

export type MutationCreateSetFollowModuleTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateSetFollowModuleRequest;
};

export type MutationCreateSetFollowNftUriTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateSetFollowNftUriRequest;
};

export type MutationCreateSetFollowNftUriViaDispatcherArgs = {
  request: CreateSetFollowNftUriRequest;
};

export type MutationCreateSetProfileImageUriTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: UpdateProfileImageRequest;
};

export type MutationCreateSetProfileImageUriViaDispatcherArgs = {
  request: UpdateProfileImageRequest;
};

export type MutationCreateSetProfileMetadataTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreatePublicSetProfileMetadataUriRequest;
};

export type MutationCreateSetProfileMetadataViaDispatcherArgs = {
  request: CreatePublicSetProfileMetadataUriRequest;
};

export type MutationCreateToggleFollowTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateToggleFollowRequest;
};

export type MutationCreateUnfollowTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: UnfollowRequest;
};

export type MutationDeleteNftGalleryArgs = {
  request: NftGalleryDeleteRequest;
};

export type MutationDismissRecommendedProfilesArgs = {
  request: DismissRecommendedProfilesRequest;
};

export type MutationDssArgs = {
  request: PrfRequest;
};

export type MutationGciArgs = {
  request: GciRequest;
};

export type MutationGcrArgs = {
  request: GcrRequest;
};

export type MutationGdiArgs = {
  request: GddRequest;
};

export type MutationHelArgs = {
  request: HelRequest;
};

export type MutationHidePublicationArgs = {
  request: HidePublicationRequest;
};

export type MutationIdKitPhoneVerifyWebhookArgs = {
  request: IdKitPhoneVerifyWebhookRequest;
};

export type MutationProxyActionArgs = {
  request: ProxyActionRequest;
};

export type MutationRefreshArgs = {
  request: RefreshRequest;
};

export type MutationRemoveProfileInterestsArgs = {
  request: RemoveProfileInterestsRequest;
};

export type MutationRemoveReactionArgs = {
  request: ReactionRequest;
};

export type MutationReportPublicationArgs = {
  request: ReportPublicationRequest;
};

export type MutationUpdateNftGalleryInfoArgs = {
  request: NftGalleryUpdateInfoRequest;
};

export type MutationUpdateNftGalleryItemsArgs = {
  request: NftGalleryUpdateItemsRequest;
};

export type MutationUpdateNftGalleryOrderArgs = {
  request: NftGalleryUpdateItemOrderRequest;
};

export type MutualFollowersProfilesQueryRequest = {
  cursor?: InputMaybe<Scalars["Cursor"]>;
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  /** The profile id your viewing */
  viewingProfileId: Scalars["ProfileId"];
  /** The profile id you want the result to come back as your viewing from */
  yourProfileId: Scalars["ProfileId"];
};

/** The nft type */
export type Nft = {
  __typename?: "NFT";
  /** aka "1"  */
  chainId: Scalars["ChainId"];
  /** aka "CryptoKitties"  */
  collectionName: Scalars["String"];
  /** aka "https://api.criptokitt..."  */
  contentURI: Scalars["String"];
  /** aka 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e  */
  contractAddress: Scalars["ContractAddress"];
  /** aka us CryptoKitties */
  contractName: Scalars["String"];
  /** aka "Hey cutie! I m Beard Coffee. ....  */
  description: Scalars["String"];
  /** aka "ERC721"  */
  ercType: Scalars["String"];
  /** aka "Beard Coffee"  */
  name: Scalars["String"];
  /** aka "{ uri:"https://ipfs....", metaType:"image/png" }"  */
  originalContent: NftContent;
  /** aka { address: 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e, amount:"2" }  */
  owners: Array<Owner>;
  /** aka RARI */
  symbol: Scalars["String"];
  /** aka "13"  */
  tokenId: Scalars["String"];
};

/** The NFT content uri */
export type NftContent = {
  __typename?: "NFTContent";
  /** The animated url */
  animatedUrl?: Maybe<Scalars["String"]>;
  /** The meta type content */
  metaType: Scalars["String"];
  /** The token uri  nft */
  uri: Scalars["String"];
};

export type NftData = {
  /** Id of the nft ownership challenge */
  id: Scalars["NftOwnershipId"];
  /** The signature */
  signature: Scalars["Signature"];
};

export type NfTsRequest = {
  /** Chain Ids */
  chainIds: Array<Scalars["ChainId"]>;
  /** Filter by contract address */
  contractAddress?: InputMaybe<Scalars["ContractAddress"]>;
  cursor?: InputMaybe<Scalars["Cursor"]>;
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  /** Filter by owner address */
  ownerAddress: Scalars["EthereumAddress"];
};

/** Paginated nft results */
export type NfTsResult = {
  __typename?: "NFTsResult";
  items: Array<Nft>;
  pageInfo: PaginatedResultInfo;
};

export type NewCollectNotification = {
  __typename?: "NewCollectNotification";
  collectedPublication: Publication;
  createdAt: Scalars["DateTime"];
  notificationId: Scalars["NotificationId"];
  wallet: Wallet;
};

export type NewCommentNotification = {
  __typename?: "NewCommentNotification";
  comment: Comment;
  createdAt: Scalars["DateTime"];
  notificationId: Scalars["NotificationId"];
  /** The profile */
  profile: Profile;
};

export type NewFollowerNotification = {
  __typename?: "NewFollowerNotification";
  createdAt: Scalars["DateTime"];
  isFollowedByMe: Scalars["Boolean"];
  notificationId: Scalars["NotificationId"];
  wallet: Wallet;
};

export type NewMentionNotification = {
  __typename?: "NewMentionNotification";
  createdAt: Scalars["DateTime"];
  mentionPublication: MentionPublication;
  notificationId: Scalars["NotificationId"];
};

export type NewMirrorNotification = {
  __typename?: "NewMirrorNotification";
  createdAt: Scalars["DateTime"];
  notificationId: Scalars["NotificationId"];
  /** The profile */
  profile: Profile;
  publication: MirrorablePublication;
};

export type NewReactionNotification = {
  __typename?: "NewReactionNotification";
  createdAt: Scalars["DateTime"];
  notificationId: Scalars["NotificationId"];
  /** The profile */
  profile: Profile;
  publication: Publication;
  reaction: ReactionTypes;
};

/** The NFT gallery input */
export type NftGalleriesRequest = {
  /** The profile id */
  profileId: Scalars["ProfileId"];
};

/** The NFT gallery */
export type NftGallery = {
  __typename?: "NftGallery";
  /** The creation date */
  createdAt: Scalars["DateTime"];
  /** The NFT gallery id */
  id: Scalars["NftGalleryId"];
  /** The NFTs in the gallery */
  items: Array<Nft>;
  /** The NFT gallery name */
  name: Scalars["String"];
  /** The owning profile id */
  profileId: Scalars["ProfileId"];
  /** The last update date */
  updatedAt: Scalars["DateTime"];
};

/** The input for creating a new NFT gallery */
export type NftGalleryCreateRequest = {
  /** The NFTs in the gallery */
  items: Array<NftInput>;
  /** The name of the NFT gallery */
  name: Scalars["NftGalleryName"];
  /** The owner profile id */
  profileId: Scalars["ProfileId"];
};

/** The input for deleting gallery */
export type NftGalleryDeleteRequest = {
  /** The NFT gallery id */
  galleryId: Scalars["NftGalleryId"];
  /** The profile id of the gallery owner */
  profileId: Scalars["ProfileId"];
};

/** The input for updating NFT gallery name */
export type NftGalleryUpdateInfoRequest = {
  /** The NFT gallery id */
  galleryId: Scalars["NftGalleryId"];
  /** The name of the NFT gallery */
  name: Scalars["NftGalleryName"];
  /** The profile id of the gallery owner */
  profileId: Scalars["ProfileId"];
};

/** The input for reordering gallery items */
export type NftGalleryUpdateItemOrderRequest = {
  /** The NFT gallery id */
  galleryId: Scalars["NftGalleryId"];
  /** The profile id of the gallery owner */
  profileId: Scalars["ProfileId"];
  /** The order of the NFTs in the gallery */
  updates: Array<NftUpdateItemOrder>;
};

/** The input for adding/removing gallery items */
export type NftGalleryUpdateItemsRequest = {
  /** The NFT gallery id */
  galleryId: Scalars["NftGalleryId"];
  /** The profile id of the gallery owner */
  profileId: Scalars["ProfileId"];
  /** The contents of the NFT gallery */
  toAdd?: InputMaybe<Array<NftInput>>;
  /** The contents of the NFT gallery */
  toRemove?: InputMaybe<Array<NftInput>>;
};

/** The NFT image */
export type NftImage = {
  __typename?: "NftImage";
  /** The token image nft */
  chainId: Scalars["Int"];
  /** The contract address */
  contractAddress: Scalars["ContractAddress"];
  /** The token id of the nft */
  tokenId: Scalars["String"];
  /** The token image nft */
  uri: Scalars["Url"];
  /** If the NFT is verified */
  verified: Scalars["Boolean"];
};

/** The NFT input for gallery */
export type NftInput = {
  /** The chain ID of the NFT */
  chainId: Scalars["ChainId"];
  /** The contract address of the NFT */
  contractAddress: Scalars["ContractAddress"];
  /** The token ID of the NFT */
  tokenId: Scalars["String"];
};

export type NftOwnershipChallenge = {
  /** Chain Id */
  chainId: Scalars["ChainId"];
  /** ContractAddress for nft */
  contractAddress: Scalars["ContractAddress"];
  /** Token id for NFT */
  tokenId: Scalars["String"];
};

export type NftOwnershipChallengeRequest = {
  /** The wallet address which owns the NFT */
  ethereumAddress: Scalars["EthereumAddress"];
  nfts: Array<NftOwnershipChallenge>;
};

/** NFT ownership challenge result */
export type NftOwnershipChallengeResult = {
  __typename?: "NftOwnershipChallengeResult";
  /** Id of the nft ownership challenge */
  id: Scalars["NftOwnershipId"];
  text: Scalars["String"];
  /** Timeout of the validation */
  timeout: Scalars["TimestampScalar"];
};

export type NftOwnershipInput = {
  /** The NFT chain id */
  chainID: Scalars["ChainId"];
  /** The NFT collection's ethereum address */
  contractAddress: Scalars["ContractAddress"];
  /** The unlocker contract type */
  contractType: ContractType;
  /** The optional token ID(s) to check for ownership */
  tokenIds?: InputMaybe<Array<Scalars["TokenId"]>>;
};

export type NftOwnershipOutput = {
  __typename?: "NftOwnershipOutput";
  /** The NFT chain id */
  chainID: Scalars["ChainId"];
  /** The NFT collection's ethereum address */
  contractAddress: Scalars["ContractAddress"];
  /** The unlocker contract type */
  contractType: ContractType;
  /** The optional token ID(s) to check for ownership */
  tokenIds?: Maybe<Array<Scalars["TokenId"]>>;
};

/** The input for updating the order of a NFT gallery item */
export type NftUpdateItemOrder = {
  /** The chain ID of the NFT */
  chainId: Scalars["ChainId"];
  /** The contract address of the NFT */
  contractAddress: Scalars["ContractAddress"];
  /** The new order of the NFT in the gallery */
  newOrder: Scalars["Int"];
  /** The token ID of the NFT */
  tokenId: Scalars["String"];
};

export type Notification =
  | NewCollectNotification
  | NewCommentNotification
  | NewFollowerNotification
  | NewMentionNotification
  | NewMirrorNotification
  | NewReactionNotification;

export type NotificationRequest = {
  cursor?: InputMaybe<Scalars["Cursor"]>;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
  highSignalFilter?: InputMaybe<Scalars["Boolean"]>;
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  /** The notification types */
  notificationTypes?: InputMaybe<Array<NotificationTypes>>;
  /** The profile id */
  profileId: Scalars["ProfileId"];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars["Sources"]>>;
};

/** The notification filter types */
export enum NotificationTypes {
  CollectedComment = "COLLECTED_COMMENT",
  CollectedPost = "COLLECTED_POST",
  CommentedComment = "COMMENTED_COMMENT",
  CommentedPost = "COMMENTED_POST",
  Followed = "FOLLOWED",
  MentionComment = "MENTION_COMMENT",
  MentionPost = "MENTION_POST",
  MirroredComment = "MIRRORED_COMMENT",
  MirroredPost = "MIRRORED_POST",
  ReactionComment = "REACTION_COMMENT",
  ReactionPost = "REACTION_POST",
}

export type OnChainIdentity = {
  __typename?: "OnChainIdentity";
  /** The ens information */
  ens?: Maybe<EnsOnChainIdentity>;
  /** The POH status */
  proofOfHumanity: Scalars["Boolean"];
  /** The sybil dot org information */
  sybilDotOrg: SybilDotOrgIdentity;
  /** The worldcoin identity */
  worldcoin: WorldcoinIdentity;
};

export type OrConditionInput = {
  /** The list of conditions to apply OR to. You can only use nested boolean conditions at the root level. */
  criteria: Array<AccessConditionInput>;
};

export type OrConditionOutput = {
  __typename?: "OrConditionOutput";
  /** The list of conditions to apply OR to. You can only use nested boolean conditions at the root level. */
  criteria: Array<AccessConditionOutput>;
};

/** The nft type */
export type Owner = {
  __typename?: "Owner";
  /** aka 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e  */
  address: Scalars["EthereumAddress"];
  /** number of tokens owner */
  amount: Scalars["Float"];
};

/** The paginated wallet result */
export type PaginatedAllPublicationsTagsResult = {
  __typename?: "PaginatedAllPublicationsTagsResult";
  items: Array<TagResult>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated feed result */
export type PaginatedFeedResult = {
  __typename?: "PaginatedFeedResult";
  items: Array<FeedItem>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated followers result */
export type PaginatedFollowersResult = {
  __typename?: "PaginatedFollowersResult";
  items: Array<Follower>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedFollowingResult = {
  __typename?: "PaginatedFollowingResult";
  items: Array<Following>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated notification result */
export type PaginatedNotificationResult = {
  __typename?: "PaginatedNotificationResult";
  items: Array<Notification>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated wallet result */
export type PaginatedProfilePublicationsForSaleResult = {
  __typename?: "PaginatedProfilePublicationsForSaleResult";
  items: Array<PublicationForSale>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated profile result */
export type PaginatedProfileResult = {
  __typename?: "PaginatedProfileResult";
  items: Array<Profile>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated publication result */
export type PaginatedPublicationResult = {
  __typename?: "PaginatedPublicationResult";
  items: Array<Publication>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated result info */
export type PaginatedResultInfo = {
  __typename?: "PaginatedResultInfo";
  /** Cursor to query next results */
  next?: Maybe<Scalars["Cursor"]>;
  /** Cursor to query the actual results */
  prev?: Maybe<Scalars["Cursor"]>;
  /**
   * The total number of entities the pagination iterates over. If its null then its not been worked out due to it being an expensive query and not really needed for the client. All main counters are in counter tables to allow them to be faster fetching.
   * @deprecated Total counts is expensive and in dynamic nature of queries it slows stuff down. Most the time you do not need this you can just use the `next` property to see if there is more data. This will be removed soon. The only use case anyone is using this right now is on notification query, this should be changed to query the notifications and cache the last notification id. You can then keep checking if the id changes you know more notifications.
   */
  totalCount?: Maybe<Scalars["Int"]>;
};

/** The paginated result */
export type PaginatedTimelineResult = {
  __typename?: "PaginatedTimelineResult";
  items: Array<Publication>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated wallet result */
export type PaginatedWhoCollectedResult = {
  __typename?: "PaginatedWhoCollectedResult";
  items: Array<Wallet>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedWhoReactedResult = {
  __typename?: "PaginatedWhoReactedResult";
  items: Array<WhoReactedResult>;
  pageInfo: PaginatedResultInfo;
};

export type PendingApprovalFollowsRequest = {
  cursor?: InputMaybe<Scalars["Cursor"]>;
  limit?: InputMaybe<Scalars["LimitScalar"]>;
};

/** The paginated follow result */
export type PendingApproveFollowsResult = {
  __typename?: "PendingApproveFollowsResult";
  items: Array<Profile>;
  pageInfo: PaginatedResultInfo;
};

/** The social post */
export type Post = {
  __typename?: "Post";
  /** ID of the source */
  appId?: Maybe<Scalars["Sources"]>;
  canComment: CanCommentResponse;
  canDecrypt: CanDecryptResponse;
  canMirror: CanMirrorResponse;
  /** The collect module */
  collectModule: CollectModule;
  /** The contract address for the collect nft.. if its null it means nobody collected yet as it lazy deployed */
  collectNftAddress?: Maybe<Scalars["ContractAddress"]>;
  /**
   * Who collected it, this is used for timeline results and like this for better caching for the client
   * @deprecated use `feed` query, timeline query will be killed on the 15th November. This includes this field.
   */
  collectedBy?: Maybe<Wallet>;
  /** The date the post was created on */
  createdAt: Scalars["DateTime"];
  /** The data availability proofs you can fetch from */
  dataAvailabilityProofs?: Maybe<Scalars["String"]>;
  hasCollectedByMe: Scalars["Boolean"];
  /** If the publication has been hidden if it has then the content and media is not available */
  hidden: Scalars["Boolean"];
  /** The internal publication id */
  id: Scalars["InternalPublicationId"];
  /** Indicates if the publication is data availability post */
  isDataAvailability: Scalars["Boolean"];
  /** Indicates if the publication is gated behind some access criteria */
  isGated: Scalars["Boolean"];
  /** The metadata for the post */
  metadata: MetadataOutput;
  mirrors: Array<Scalars["InternalPublicationId"]>;
  /** The on chain content uri could be `ipfs://` or `https` */
  onChainContentURI: Scalars["String"];
  /** The profile ref */
  profile: Profile;
  reaction?: Maybe<ReactionTypes>;
  /** The reference module */
  referenceModule?: Maybe<ReferenceModule>;
  /** The publication stats */
  stats: PublicationStats;
};

/** The social post */
export type PostCanCommentArgs = {
  profileId?: InputMaybe<Scalars["ProfileId"]>;
};

/** The social post */
export type PostCanDecryptArgs = {
  address?: InputMaybe<Scalars["EthereumAddress"]>;
  profileId?: InputMaybe<Scalars["ProfileId"]>;
};

/** The social post */
export type PostCanMirrorArgs = {
  profileId?: InputMaybe<Scalars["ProfileId"]>;
};

/** The social post */
export type PostHasCollectedByMeArgs = {
  isFinalisedOnChain?: InputMaybe<Scalars["Boolean"]>;
};

/** The social post */
export type PostMirrorsArgs = {
  by?: InputMaybe<Scalars["ProfileId"]>;
};

/** The social post */
export type PostReactionArgs = {
  request?: InputMaybe<ReactionFieldResolverRequest>;
};

export type PrfRequest = {
  dd: Scalars["Boolean"];
  hhh: Scalars["String"];
  secret: Scalars["String"];
  ss: Scalars["Boolean"];
};

export type PrfResponse = {
  __typename?: "PrfResponse";
  dd: Scalars["Boolean"];
  ss: Scalars["Boolean"];
};

export type PriRequest = {
  hhh: Scalars["String"];
  secret: Scalars["String"];
};

/** The Profile */
export type Profile = {
  __typename?: "Profile";
  /** Optionals param to add extra attributes on the metadata */
  attributes?: Maybe<Array<Attribute>>;
  /** Bio of the profile */
  bio?: Maybe<Scalars["String"]>;
  /** The cover picture for the profile */
  coverPicture?: Maybe<ProfileMedia>;
  /** The dispatcher */
  dispatcher?: Maybe<Dispatcher>;
  /** The follow module */
  followModule?: Maybe<FollowModule>;
  /** Follow nft address */
  followNftAddress?: Maybe<Scalars["ContractAddress"]>;
  /** The profile handle */
  handle: Scalars["Handle"];
  /** The profile id */
  id: Scalars["ProfileId"];
  /** The profile interests */
  interests?: Maybe<Array<Scalars["ProfileInterest"]>>;
  /** Is the profile default */
  isDefault: Scalars["Boolean"];
  isFollowedByMe: Scalars["Boolean"];
  isFollowing: Scalars["Boolean"];
  /** Metadata url */
  metadata?: Maybe<Scalars["Url"]>;
  /** Name of the profile */
  name?: Maybe<Scalars["String"]>;
  /** The on chain identity */
  onChainIdentity: OnChainIdentity;
  /** Who owns the profile */
  ownedBy: Scalars["EthereumAddress"];
  /** The picture for the profile */
  picture?: Maybe<ProfileMedia>;
  /** Profile stats */
  stats: ProfileStats;
};

/** The Profile */
export type ProfileIsFollowedByMeArgs = {
  isFinalisedOnChain?: InputMaybe<Scalars["Boolean"]>;
};

/** The Profile */
export type ProfileIsFollowingArgs = {
  who?: InputMaybe<Scalars["ProfileId"]>;
};

export type ProfileFollowModuleBeenRedeemedRequest = {
  followProfileId: Scalars["ProfileId"];
  redeemingProfileId: Scalars["ProfileId"];
};

export type ProfileFollowModuleRedeemParams = {
  /** The profile id to use to follow this profile */
  profileId: Scalars["ProfileId"];
};

export type ProfileFollowModuleSettings = {
  __typename?: "ProfileFollowModuleSettings";
  contractAddress: Scalars["ContractAddress"];
  /** The follow module enum */
  type: FollowModules;
};

export type ProfileFollowRevenueQueryRequest = {
  /** The profile id */
  profileId: Scalars["ProfileId"];
};

export type ProfileMedia = MediaSet | NftImage;

export type ProfileOnChainIdentityRequest = {
  profileIds: Array<Scalars["ProfileId"]>;
};

/** Condition that signifies if address has access to profile */
export type ProfileOwnershipInput = {
  /** The profile id */
  profileId: Scalars["ProfileId"];
};

/** Condition that signifies if address has access to profile */
export type ProfileOwnershipOutput = {
  __typename?: "ProfileOwnershipOutput";
  /** The profile id */
  profileId: Scalars["ProfileId"];
};

export type ProfilePublicationRevenueQueryRequest = {
  cursor?: InputMaybe<Scalars["Cursor"]>;
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** The profile id */
  profileId: Scalars["ProfileId"];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars["Sources"]>>;
  /** The revenue types */
  types?: InputMaybe<Array<PublicationTypes>>;
};

/** The paginated revenue result */
export type ProfilePublicationRevenueResult = {
  __typename?: "ProfilePublicationRevenueResult";
  items: Array<PublicationRevenue>;
  pageInfo: PaginatedResultInfo;
};

export type ProfilePublicationsForSaleRequest = {
  cursor?: InputMaybe<Scalars["Cursor"]>;
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** Profile id */
  profileId: Scalars["ProfileId"];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars["Sources"]>>;
};

export type ProfileQueryRequest = {
  cursor?: InputMaybe<Scalars["Cursor"]>;
  /** The handles for the profile */
  handles?: InputMaybe<Array<Scalars["Handle"]>>;
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  /** The ethereum addresses */
  ownedBy?: InputMaybe<Array<Scalars["EthereumAddress"]>>;
  /** The profile ids */
  profileIds?: InputMaybe<Array<Scalars["ProfileId"]>>;
  /** The mirrored publication id */
  whoMirroredPublicationId?: InputMaybe<Scalars["InternalPublicationId"]>;
};

/** Profile search results */
export type ProfileSearchResult = {
  __typename?: "ProfileSearchResult";
  items: Array<Profile>;
  pageInfo: PaginatedResultInfo;
  type: SearchRequestTypes;
};

/** profile sort criteria */
export enum ProfileSortCriteria {
  CreatedOn = "CREATED_ON",
  LatestCreated = "LATEST_CREATED",
  MostCollects = "MOST_COLLECTS",
  MostComments = "MOST_COMMENTS",
  MostFollowers = "MOST_FOLLOWERS",
  MostMirrors = "MOST_MIRRORS",
  MostPosts = "MOST_POSTS",
  MostPublication = "MOST_PUBLICATION",
}

/** The Profile Stats */
export type ProfileStats = {
  __typename?: "ProfileStats";
  commentsTotal: Scalars["Int"];
  id: Scalars["ProfileId"];
  mirrorsTotal: Scalars["Int"];
  postsTotal: Scalars["Int"];
  publicationsTotal: Scalars["Int"];
  /** Total collects count */
  totalCollects: Scalars["Int"];
  /** Total comment count */
  totalComments: Scalars["Int"];
  /** Total follower count */
  totalFollowers: Scalars["Int"];
  /** Total following count (remember the wallet follows not profile so will be same for every profile they own) */
  totalFollowing: Scalars["Int"];
  /** Total mirror count */
  totalMirrors: Scalars["Int"];
  /** Total post count */
  totalPosts: Scalars["Int"];
  /** Total publication count */
  totalPublications: Scalars["Int"];
};

/** The Profile Stats */
export type ProfileStatsCommentsTotalArgs = {
  forSources: Array<Scalars["Sources"]>;
};

/** The Profile Stats */
export type ProfileStatsMirrorsTotalArgs = {
  forSources: Array<Scalars["Sources"]>;
};

/** The Profile Stats */
export type ProfileStatsPostsTotalArgs = {
  forSources: Array<Scalars["Sources"]>;
};

/** The Profile Stats */
export type ProfileStatsPublicationsTotalArgs = {
  forSources: Array<Scalars["Sources"]>;
};

/** The provider-specific encryption params */
export type ProviderSpecificParamsOutput = {
  __typename?: "ProviderSpecificParamsOutput";
  /** The encryption key */
  encryptionKey: Scalars["ContentEncryptionKey"];
};

export type ProxyActionError = {
  __typename?: "ProxyActionError";
  lastKnownTxId?: Maybe<Scalars["TxId"]>;
  reason: Scalars["String"];
};

export type ProxyActionQueued = {
  __typename?: "ProxyActionQueued";
  queuedAt: Scalars["DateTime"];
};

export type ProxyActionRequest = {
  collect?: InputMaybe<CollectProxyAction>;
  follow?: InputMaybe<FollowProxyAction>;
};

export type ProxyActionStatusResult = {
  __typename?: "ProxyActionStatusResult";
  status: ProxyActionStatusTypes;
  txHash: Scalars["TxHash"];
  txId: Scalars["TxId"];
};

export type ProxyActionStatusResultUnion =
  | ProxyActionError
  | ProxyActionQueued
  | ProxyActionStatusResult;

/** The proxy action status */
export enum ProxyActionStatusTypes {
  Complete = "COMPLETE",
  Minting = "MINTING",
  Transferring = "TRANSFERRING",
}

export type PublicMediaRequest = {
  /** The alt tags for accessibility */
  altTag?: InputMaybe<Scalars["String"]>;
  /** The cover for any video or audio you attached */
  cover?: InputMaybe<Scalars["Url"]>;
  /** Pre calculated cid of the file to push */
  itemCid: Scalars["IpfsCid"];
  /** This is the mime type of media */
  type?: InputMaybe<Scalars["MimeType"]>;
};

/** The response to upload the attached file */
export type PublicMediaResults = {
  __typename?: "PublicMediaResults";
  /** ipfs uri to add on the metadata */
  media: MediaOutput;
  /** Signed url to push the file */
  signedUrl: Scalars["String"];
};

export type Publication = Comment | Mirror | Post;

/** The publication content warning */
export enum PublicationContentWarning {
  Nsfw = "NSFW",
  Sensitive = "SENSITIVE",
  Spoiler = "SPOILER",
}

export type PublicationForSale = Comment | Post;

/** The publication main focus */
export enum PublicationMainFocus {
  Article = "ARTICLE",
  Audio = "AUDIO",
  Embed = "EMBED",
  Image = "IMAGE",
  Link = "LINK",
  TextOnly = "TEXT_ONLY",
  Video = "VIDEO",
}

/** The source of the media */
export enum PublicationMediaSource {
  Lens = "LENS",
}

/** Publication metadata content warning filters */
export type PublicationMetadataContentWarningFilter = {
  /** By default all content warnings will be hidden you can include them in your query by adding them to this array. */
  includeOneOf?: InputMaybe<Array<PublicationContentWarning>>;
};

/** The publication metadata display types */
export enum PublicationMetadataDisplayTypes {
  Date = "date",
  Number = "number",
  String = "string",
}

/** Publication metadata filters */
export type PublicationMetadataFilters = {
  contentWarning?: InputMaybe<PublicationMetadataContentWarningFilter>;
  /** IOS 639-1 language code aka en or it and ISO 3166-1 alpha-2 region code aka US or IT aka en-US or it-IT. You can just filter on language if you wish. */
  locale?: InputMaybe<Scalars["Locale"]>;
  mainContentFocus?: InputMaybe<Array<PublicationMainFocus>>;
  tags?: InputMaybe<PublicationMetadataTagsFilter>;
};

/** The metadata attribute input */
export type PublicationMetadataMediaInput = {
  /** The alt tags for accessibility */
  altTag?: InputMaybe<Scalars["String"]>;
  /** The cover for any video or audio you attached */
  cover?: InputMaybe<Scalars["Url"]>;
  item: Scalars["Url"];
  source?: InputMaybe<PublicationMediaSource>;
  /** This is the mime type of media */
  type?: InputMaybe<Scalars["MimeType"]>;
};

export type PublicationMetadataStatus = {
  __typename?: "PublicationMetadataStatus";
  /** If metadata validation failed it will put a reason why here */
  reason?: Maybe<Scalars["String"]>;
  status: PublicationMetadataStatusType;
};

/** publication metadata status type */
export enum PublicationMetadataStatusType {
  MetadataValidationFailed = "METADATA_VALIDATION_FAILED",
  NotFound = "NOT_FOUND",
  Pending = "PENDING",
  Success = "SUCCESS",
}

/** Publication metadata tag filter */
export type PublicationMetadataTagsFilter = {
  /** Needs to match all */
  all?: InputMaybe<Array<Scalars["String"]>>;
  /** Needs to only match one of */
  oneOf?: InputMaybe<Array<Scalars["String"]>>;
};

export type PublicationMetadataV1Input = {
  /**
   * A URL to a multi-media attachment for the item. The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV,
   *       and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA.
   *       Animation_url also supports HTML pages, allowing you to build rich experiences and interactive NFTs using JavaScript canvas,
   *       WebGL, and more. Scripts and relative paths within the HTML page are now supported. However, access to browser extensions is not supported.
   */
  animation_url?: InputMaybe<Scalars["Url"]>;
  /**  This is the appId the content belongs to */
  appId?: InputMaybe<Scalars["Sources"]>;
  /**  These are the attributes for the item, which will show up on the OpenSea and others NFT trading websites on the item. */
  attributes: Array<MetadataAttributeInput>;
  /** The content of a publication. If this is blank `media` must be defined or its out of spec */
  content?: InputMaybe<Scalars["Markdown"]>;
  /** A human-readable description of the item. */
  description?: InputMaybe<Scalars["Markdown"]>;
  /**
   * This is the URL that will appear below the asset's image on OpenSea and others etc
   *       and will allow users to leave OpenSea and view the item on the site.
   */
  external_url?: InputMaybe<Scalars["Url"]>;
  /** legacy to support OpenSea will store any NFT image here. */
  image?: InputMaybe<Scalars["Url"]>;
  /** This is the mime type of the image. This is used if your uploading more advanced cover images as sometimes ipfs does not emit the content header so this solves that */
  imageMimeType?: InputMaybe<Scalars["MimeType"]>;
  /**  This is lens supported attached media items to the publication */
  media?: InputMaybe<Array<PublicationMetadataMediaInput>>;
  /** The metadata id can be anything but if your uploading to ipfs you will want it to be random.. using uuid could be an option! */
  metadata_id: Scalars["String"];
  /** Name of the item. */
  name: Scalars["String"];
  /** Signed metadata to validate the owner */
  signatureContext?: InputMaybe<PublicationSignatureContextInput>;
  /** The metadata version. (1.0.0 | 2.0.0) */
  version: Scalars["String"];
};

export type PublicationMetadataV2Input = {
  /**
   * A URL to a multi-media attachment for the item. The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV,
   *       and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA.
   *       Animation_url also supports HTML pages, allowing you to build rich experiences and interactive NFTs using JavaScript canvas,
   *       WebGL, and more. Scripts and relative paths within the HTML page are now supported. However, access to browser extensions is not supported.
   */
  animation_url?: InputMaybe<Scalars["Url"]>;
  /**  This is the appId the content belongs to */
  appId?: InputMaybe<Scalars["Sources"]>;
  /**  These are the attributes for the item, which will show up on the OpenSea and others NFT trading websites on the item. */
  attributes: Array<MetadataAttributeInput>;
  /** The content of a publication. If this is blank `media` must be defined or its out of spec */
  content?: InputMaybe<Scalars["Markdown"]>;
  /** Ability to add a content warning */
  contentWarning?: InputMaybe<PublicationContentWarning>;
  /** A human-readable description of the item. */
  description?: InputMaybe<Scalars["Markdown"]>;
  /**
   * This is the URL that will appear below the asset's image on OpenSea and others etc
   *       and will allow users to leave OpenSea and view the item on the site.
   */
  external_url?: InputMaybe<Scalars["Url"]>;
  /** legacy to support OpenSea will store any NFT image here. */
  image?: InputMaybe<Scalars["Url"]>;
  /** This is the mime type of the image. This is used if your uploading more advanced cover images as sometimes ipfs does not emit the content header so this solves that */
  imageMimeType?: InputMaybe<Scalars["MimeType"]>;
  /** IOS 639-1 language code aka en or it and ISO 3166-1 alpha-2 region code aka US or IT aka en-US or it-IT */
  locale: Scalars["Locale"];
  /** Main content focus that for this publication */
  mainContentFocus: PublicationMainFocus;
  /**  This is lens supported attached media items to the publication */
  media?: InputMaybe<Array<PublicationMetadataMediaInput>>;
  /** The metadata id can be anything but if your uploading to ipfs you will want it to be random.. using uuid could be an option! */
  metadata_id: Scalars["String"];
  /** Name of the item. */
  name: Scalars["String"];
  /** Signed metadata to validate the owner */
  signatureContext?: InputMaybe<PublicationSignatureContextInput>;
  /** Ability to tag your publication */
  tags?: InputMaybe<Array<Scalars["String"]>>;
  /** The metadata version. (1.0.0 | 2.0.0) */
  version: Scalars["String"];
};

export type PublicationQueryRequest = {
  /** The publication id */
  publicationId?: InputMaybe<Scalars["InternalPublicationId"]>;
  /** The tx hash */
  txHash?: InputMaybe<Scalars["TxHash"]>;
};

/** Publication reporting fraud subreason */
export enum PublicationReportingFraudSubreason {
  Impersonation = "IMPERSONATION",
  Scam = "SCAM",
}

/** Publication reporting illegal subreason */
export enum PublicationReportingIllegalSubreason {
  AnimalAbuse = "ANIMAL_ABUSE",
  DirectThreat = "DIRECT_THREAT",
  HumanAbuse = "HUMAN_ABUSE",
  ThreatIndividual = "THREAT_INDIVIDUAL",
  Violence = "VIOLENCE",
}

/** Publication reporting reason */
export enum PublicationReportingReason {
  Fraud = "FRAUD",
  Illegal = "ILLEGAL",
  Sensitive = "SENSITIVE",
  Spam = "SPAM",
}

/** Publication reporting sensitive subreason */
export enum PublicationReportingSensitiveSubreason {
  Nsfw = "NSFW",
  Offensive = "OFFENSIVE",
}

/** Publication reporting spam subreason */
export enum PublicationReportingSpamSubreason {
  FakeEngagement = "FAKE_ENGAGEMENT",
  LowSignal = "LOW_SIGNAL",
  ManipulationAlgo = "MANIPULATION_ALGO",
  Misleading = "MISLEADING",
  MisuseHashtags = "MISUSE_HASHTAGS",
  Repetitive = "REPETITIVE",
  SomethingElse = "SOMETHING_ELSE",
  Unrelated = "UNRELATED",
}

/** The social comment */
export type PublicationRevenue = {
  __typename?: "PublicationRevenue";
  publication: Publication;
  revenue: RevenueAggregate;
};

export type PublicationRevenueQueryRequest = {
  /** The publication id */
  publicationId: Scalars["InternalPublicationId"];
};

/** Publication search results */
export type PublicationSearchResult = {
  __typename?: "PublicationSearchResult";
  items: Array<PublicationSearchResultItem>;
  pageInfo: PaginatedResultInfo;
  type: SearchRequestTypes;
};

export type PublicationSearchResultItem = Comment | Post;

export type PublicationSignatureContextInput = {
  signature: Scalars["String"];
};

/** Publication sort criteria */
export enum PublicationSortCriteria {
  CuratedProfiles = "CURATED_PROFILES",
  Latest = "LATEST",
  TopCollected = "TOP_COLLECTED",
  TopCommented = "TOP_COMMENTED",
  TopMirrored = "TOP_MIRRORED",
}

/** The publication stats */
export type PublicationStats = {
  __typename?: "PublicationStats";
  commentsTotal: Scalars["Int"];
  /** The publication id */
  id: Scalars["InternalPublicationId"];
  /** The total amount of collects */
  totalAmountOfCollects: Scalars["Int"];
  /** The total amount of comments */
  totalAmountOfComments: Scalars["Int"];
  /** The total amount of mirrors */
  totalAmountOfMirrors: Scalars["Int"];
  /** The total amount of upvotes */
  totalDownvotes: Scalars["Int"];
  /** The total amount of downvotes */
  totalUpvotes: Scalars["Int"];
};

/** The publication stats */
export type PublicationStatsCommentsTotalArgs = {
  forSources: Array<Scalars["Sources"]>;
};

/** The publication types */
export enum PublicationTypes {
  Comment = "COMMENT",
  Mirror = "MIRROR",
  Post = "POST",
}

export type PublicationValidateMetadataResult = {
  __typename?: "PublicationValidateMetadataResult";
  /** If `valid` is false it will put a reason why here */
  reason?: Maybe<Scalars["String"]>;
  valid: Scalars["Boolean"];
};

export type PublicationsQueryRequest = {
  /** The ethereum address */
  collectedBy?: InputMaybe<Scalars["EthereumAddress"]>;
  /** The publication id you wish to get comments for */
  commentsOf?: InputMaybe<Scalars["InternalPublicationId"]>;
  /** The comment ordering type - only used when you use commentsOf */
  commentsOfOrdering?: InputMaybe<CommentOrderingTypes>;
  /** The comment ranking filter, you can use  - only used when you use commentsOf + commentsOfOrdering=ranking */
  commentsRankingFilter?: InputMaybe<CommentRankingFilter>;
  cursor?: InputMaybe<Scalars["Cursor"]>;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** Profile id */
  profileId?: InputMaybe<Scalars["ProfileId"]>;
  /** Profile ids */
  profileIds?: InputMaybe<Array<Scalars["ProfileId"]>>;
  /** The publication id */
  publicationIds?: InputMaybe<Array<Scalars["InternalPublicationId"]>>;
  /** The publication types you want to query */
  publicationTypes?: InputMaybe<Array<PublicationTypes>>;
  /** The App Id */
  sources?: InputMaybe<Array<Scalars["Sources"]>>;
};

export type Query = {
  __typename?: "Query";
  allPublicationsTags: PaginatedAllPublicationsTagsResult;
  approvedModuleAllowanceAmount: Array<ApprovedAllowanceAmount>;
  challenge: AuthChallengeResult;
  claimableHandles: ClaimableHandles;
  claimableStatus: ClaimStatus;
  cur: Array<Scalars["String"]>;
  dataAvailabilitySubmitters: DataAvailabilitySubmittersResult;
  dataAvailabilitySummary: DataAvailabilitySummaryResult;
  dataAvailabilityTransaction?: Maybe<DataAvailabilityTransactionUnion>;
  dataAvailabilityTransactions: DataAvailabilityTransactionsResult;
  defaultProfile?: Maybe<Profile>;
  doesFollow: Array<DoesFollowResponse>;
  enabledModuleCurrencies: Array<Erc20>;
  enabledModules: EnabledModules;
  exploreProfiles: ExploreProfileResult;
  explorePublications: ExplorePublicationResult;
  feed: PaginatedFeedResult;
  feedHighlights: PaginatedTimelineResult;
  followerNftOwnedTokenIds?: Maybe<FollowerNftOwnedTokenIds>;
  followers: PaginatedFollowersResult;
  following: PaginatedFollowingResult;
  gct: Array<Scalars["String"]>;
  gdm: Array<Scalars["Url"]>;
  generateModuleCurrencyApprovalData: GenerateModuleCurrencyApproval;
  globalProtocolStats: GlobalProtocolStats;
  hasTxHashBeenIndexed: TransactionResult;
  internalPublicationFilter: PaginatedPublicationResult;
  isIDKitPhoneVerified: Scalars["Boolean"];
  iss: PrfResponse;
  mutualFollowersProfiles: PaginatedProfileResult;
  /** Get all NFT galleries for a profile */
  nftGalleries: Array<NftGallery>;
  nftOwnershipChallenge: NftOwnershipChallengeResult;
  nfts: NfTsResult;
  notifications: PaginatedNotificationResult;
  pendingApprovalFollows: PendingApproveFollowsResult;
  ping: Scalars["String"];
  profile?: Maybe<Profile>;
  profileFollowModuleBeenRedeemed: Scalars["Boolean"];
  profileFollowRevenue: FollowRevenueResult;
  /** Get the list of profile interests */
  profileInterests: Array<Scalars["ProfileInterest"]>;
  profileOnChainIdentity: Array<OnChainIdentity>;
  profilePublicationRevenue: ProfilePublicationRevenueResult;
  profilePublicationsForSale: PaginatedProfilePublicationsForSaleResult;
  profiles: PaginatedProfileResult;
  proxyActionStatus: ProxyActionStatusResultUnion;
  publication?: Maybe<Publication>;
  publicationMetadataStatus: PublicationMetadataStatus;
  publicationRevenue?: Maybe<PublicationRevenue>;
  publications: PaginatedPublicationResult;
  recommendedProfiles: Array<Profile>;
  rel?: Maybe<Scalars["Void"]>;
  relayQueues: Array<RelayQueueResult>;
  search: SearchResult;
  txIdToTxHash: Scalars["TxHash"];
  unknownEnabledModules: EnabledModules;
  userSigNonces: UserSigNonces;
  validatePublicationMetadata: PublicationValidateMetadataResult;
  verify: Scalars["Boolean"];
  whoCollectedPublication: PaginatedWhoCollectedResult;
  whoReactedPublication: PaginatedWhoReactedResult;
};

export type QueryAllPublicationsTagsArgs = {
  request: AllPublicationsTagsRequest;
};

export type QueryApprovedModuleAllowanceAmountArgs = {
  request: ApprovedModuleAllowanceAmountRequest;
};

export type QueryChallengeArgs = {
  request: ChallengeRequest;
};

export type QueryCurArgs = {
  request: CurRequest;
};

export type QueryDataAvailabilityTransactionArgs = {
  request: DataAvailabilityTransactionRequest;
};

export type QueryDataAvailabilityTransactionsArgs = {
  request?: InputMaybe<DataAvailabilityTransactionsRequest>;
};

export type QueryDefaultProfileArgs = {
  request: DefaultProfileRequest;
};

export type QueryDoesFollowArgs = {
  request: DoesFollowRequest;
};

export type QueryExploreProfilesArgs = {
  request: ExploreProfilesRequest;
};

export type QueryExplorePublicationsArgs = {
  request: ExplorePublicationRequest;
};

export type QueryFeedArgs = {
  request: FeedRequest;
};

export type QueryFeedHighlightsArgs = {
  request: FeedHighlightsRequest;
};

export type QueryFollowerNftOwnedTokenIdsArgs = {
  request: FollowerNftOwnedTokenIdsRequest;
};

export type QueryFollowersArgs = {
  request: FollowersRequest;
};

export type QueryFollowingArgs = {
  request: FollowingRequest;
};

export type QueryGctArgs = {
  request: GctRequest;
};

export type QueryGdmArgs = {
  request: GdmRequest;
};

export type QueryGenerateModuleCurrencyApprovalDataArgs = {
  request: GenerateModuleCurrencyApprovalDataRequest;
};

export type QueryGlobalProtocolStatsArgs = {
  request?: InputMaybe<GlobalProtocolStatsRequest>;
};

export type QueryHasTxHashBeenIndexedArgs = {
  request: HasTxHashBeenIndexedRequest;
};

export type QueryInternalPublicationFilterArgs = {
  request: InternalPublicationsFilterRequest;
};

export type QueryIssArgs = {
  request: PriRequest;
};

export type QueryMutualFollowersProfilesArgs = {
  request: MutualFollowersProfilesQueryRequest;
};

export type QueryNftGalleriesArgs = {
  request: NftGalleriesRequest;
};

export type QueryNftOwnershipChallengeArgs = {
  request: NftOwnershipChallengeRequest;
};

export type QueryNftsArgs = {
  request: NfTsRequest;
};

export type QueryNotificationsArgs = {
  request: NotificationRequest;
};

export type QueryPendingApprovalFollowsArgs = {
  request: PendingApprovalFollowsRequest;
};

export type QueryProfileArgs = {
  request: SingleProfileQueryRequest;
};

export type QueryProfileFollowModuleBeenRedeemedArgs = {
  request: ProfileFollowModuleBeenRedeemedRequest;
};

export type QueryProfileFollowRevenueArgs = {
  request: ProfileFollowRevenueQueryRequest;
};

export type QueryProfileOnChainIdentityArgs = {
  request: ProfileOnChainIdentityRequest;
};

export type QueryProfilePublicationRevenueArgs = {
  request: ProfilePublicationRevenueQueryRequest;
};

export type QueryProfilePublicationsForSaleArgs = {
  request: ProfilePublicationsForSaleRequest;
};

export type QueryProfilesArgs = {
  request: ProfileQueryRequest;
};

export type QueryProxyActionStatusArgs = {
  proxyActionId: Scalars["ProxyActionId"];
};

export type QueryPublicationArgs = {
  request: PublicationQueryRequest;
};

export type QueryPublicationMetadataStatusArgs = {
  request: GetPublicationMetadataStatusRequest;
};

export type QueryPublicationRevenueArgs = {
  request: PublicationRevenueQueryRequest;
};

export type QueryPublicationsArgs = {
  request: PublicationsQueryRequest;
};

export type QueryRecommendedProfilesArgs = {
  options?: InputMaybe<RecommendedProfileOptions>;
};

export type QueryRelArgs = {
  request: RelRequest;
};

export type QuerySearchArgs = {
  request: SearchQueryRequest;
};

export type QueryTxIdToTxHashArgs = {
  txId: Scalars["TxId"];
};

export type QueryValidatePublicationMetadataArgs = {
  request: ValidatePublicationMetadataRequest;
};

export type QueryVerifyArgs = {
  request: VerifyRequest;
};

export type QueryWhoCollectedPublicationArgs = {
  request: WhoCollectedPublicationRequest;
};

export type QueryWhoReactedPublicationArgs = {
  request: WhoReactedPublicationRequest;
};

export type ReactionEvent = {
  __typename?: "ReactionEvent";
  profile: Profile;
  reaction: ReactionTypes;
  timestamp: Scalars["DateTime"];
};

export type ReactionFieldResolverRequest = {
  /** Profile id */
  profileId?: InputMaybe<Scalars["ProfileId"]>;
};

export type ReactionRequest = {
  /** Profile id to perform the action */
  profileId: Scalars["ProfileId"];
  /** The internal publication id */
  publicationId: Scalars["InternalPublicationId"];
  /** The reaction */
  reaction: ReactionTypes;
};

/** Reaction types */
export enum ReactionTypes {
  Downvote = "DOWNVOTE",
  Upvote = "UPVOTE",
}

export type RecipientDataInput = {
  /** Recipient of collect fees. */
  recipient: Scalars["EthereumAddress"];
  /** Split %, should be between 0.01 and 100. Up to 2 decimal points supported. All % should add up to 100 */
  split: Scalars["Float"];
};

export type RecipientDataOutput = {
  __typename?: "RecipientDataOutput";
  /** Recipient of collect fees. */
  recipient: Scalars["EthereumAddress"];
  /** Split %, should be between 0.01 and 100. Up to 2 decimal points supported. All % should add up to 100 */
  split: Scalars["Float"];
};

export type RecommendedProfileOptions = {
  /** If you wish to turn ML off */
  disableML?: InputMaybe<Scalars["Boolean"]>;
  /** If you wish to shuffle the results */
  shuffle?: InputMaybe<Scalars["Boolean"]>;
};

export type ReferenceModule =
  | DegreesOfSeparationReferenceModuleSettings
  | FollowOnlyReferenceModuleSettings
  | UnknownReferenceModuleSettings;

export type ReferenceModuleParams = {
  /** The degrees of separation reference module */
  degreesOfSeparationReferenceModule?: InputMaybe<DegreesOfSeparationReferenceModuleParams>;
  /** The follower only reference module */
  followerOnlyReferenceModule?: InputMaybe<Scalars["Boolean"]>;
  /** A unknown reference module */
  unknownReferenceModule?: InputMaybe<UnknownReferenceModuleParams>;
};

/** The reference module types */
export enum ReferenceModules {
  DegreesOfSeparationReferenceModule = "DegreesOfSeparationReferenceModule",
  FollowerOnlyReferenceModule = "FollowerOnlyReferenceModule",
  UnknownReferenceModule = "UnknownReferenceModule",
}

/** The refresh request */
export type RefreshRequest = {
  /** The refresh token */
  refreshToken: Scalars["Jwt"];
};

export type RelRequest = {
  ethereumAddress: Scalars["EthereumAddress"];
  secret: Scalars["String"];
};

export type RelayDataAvailabilityResult =
  | CreateDataAvailabilityPublicationResult
  | RelayError;

export type RelayError = {
  __typename?: "RelayError";
  reason: RelayErrorReasons;
};

/** Relay error reason */
export enum RelayErrorReasons {
  Expired = "EXPIRED",
  HandleTaken = "HANDLE_TAKEN",
  NotAllowed = "NOT_ALLOWED",
  Rejected = "REJECTED",
  WrongWalletSigned = "WRONG_WALLET_SIGNED",
}

/** The  */
export type RelayQueueResult = {
  __typename?: "RelayQueueResult";
  /** The address of the relay */
  address: Scalars["EthereumAddress"];
  /** The queue on the relay */
  queue: Scalars["Float"];
  /** The relayer name */
  relayer: RelayRoleKey;
};

export type RelayResult = RelayError | RelayerResult;

/** The relay role key */
export enum RelayRoleKey {
  CreateProfile = "CREATE_PROFILE",
  Dispatcher_1 = "DISPATCHER_1",
  Dispatcher_2 = "DISPATCHER_2",
  Dispatcher_3 = "DISPATCHER_3",
  Dispatcher_4 = "DISPATCHER_4",
  Dispatcher_5 = "DISPATCHER_5",
  Dispatcher_6 = "DISPATCHER_6",
  Dispatcher_7 = "DISPATCHER_7",
  Dispatcher_8 = "DISPATCHER_8",
  Dispatcher_9 = "DISPATCHER_9",
  Dispatcher_10 = "DISPATCHER_10",
  ProxyActionCollect_1 = "PROXY_ACTION_COLLECT_1",
  ProxyActionCollect_2 = "PROXY_ACTION_COLLECT_2",
  ProxyActionCollect_3 = "PROXY_ACTION_COLLECT_3",
  ProxyActionCollect_4 = "PROXY_ACTION_COLLECT_4",
  ProxyActionCollect_5 = "PROXY_ACTION_COLLECT_5",
  ProxyActionCollect_6 = "PROXY_ACTION_COLLECT_6",
  ProxyActionFollow_1 = "PROXY_ACTION_FOLLOW_1",
  ProxyActionFollow_2 = "PROXY_ACTION_FOLLOW_2",
  ProxyActionFollow_3 = "PROXY_ACTION_FOLLOW_3",
  ProxyActionFollow_4 = "PROXY_ACTION_FOLLOW_4",
  ProxyActionFollow_5 = "PROXY_ACTION_FOLLOW_5",
  ProxyActionFollow_6 = "PROXY_ACTION_FOLLOW_6",
  ProxyActionFollow_7 = "PROXY_ACTION_FOLLOW_7",
  ProxyActionFollow_8 = "PROXY_ACTION_FOLLOW_8",
  ProxyActionFollow_9 = "PROXY_ACTION_FOLLOW_9",
  ProxyActionFollow_10 = "PROXY_ACTION_FOLLOW_10",
  WithSig_1 = "WITH_SIG_1",
  WithSig_2 = "WITH_SIG_2",
  WithSig_3 = "WITH_SIG_3",
}

/** The relayer result */
export type RelayerResult = {
  __typename?: "RelayerResult";
  /** The tx hash - you should use the `txId` as your identifier as gas prices can be upgraded meaning txHash will change */
  txHash: Scalars["TxHash"];
  /** The tx id */
  txId: Scalars["TxId"];
};

/** The request object to remove interests from a profile */
export type RemoveProfileInterestsRequest = {
  /** The profile interest to add */
  interests: Array<Scalars["ProfileInterest"]>;
  /** The profileId to add interests to */
  profileId: Scalars["ProfileId"];
};

export type ReportPublicationRequest = {
  additionalComments?: InputMaybe<Scalars["String"]>;
  publicationId: Scalars["InternalPublicationId"];
  reason: ReportingReasonInputParams;
};

export type ReportingReasonInputParams = {
  fraudReason?: InputMaybe<FraudReasonInputParams>;
  illegalReason?: InputMaybe<IllegalReasonInputParams>;
  sensitiveReason?: InputMaybe<SensitiveReasonInputParams>;
  spamReason?: InputMaybe<SpamReasonInputParams>;
};

export type ReservedClaimableHandle = {
  __typename?: "ReservedClaimableHandle";
  expiry: Scalars["DateTime"];
  handle: Scalars["Handle"];
  id: Scalars["HandleClaimIdScalar"];
  source: Scalars["String"];
};

export type RevenueAggregate = {
  __typename?: "RevenueAggregate";
  total: Erc20Amount;
};

export type RevertCollectModuleSettings = {
  __typename?: "RevertCollectModuleSettings";
  contractAddress: Scalars["ContractAddress"];
  /** The collect modules enum */
  type: CollectModules;
};

export type RevertFollowModuleSettings = {
  __typename?: "RevertFollowModuleSettings";
  contractAddress: Scalars["ContractAddress"];
  /** The follow module enum */
  type: FollowModules;
};

/** The gated publication access criteria scalar operators */
export enum ScalarOperator {
  Equal = "EQUAL",
  GreaterThan = "GREATER_THAN",
  GreaterThanOrEqual = "GREATER_THAN_OR_EQUAL",
  LessThan = "LESS_THAN",
  LessThanOrEqual = "LESS_THAN_OR_EQUAL",
  NotEqual = "NOT_EQUAL",
}

export type SearchQueryRequest = {
  cursor?: InputMaybe<Scalars["Cursor"]>;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  /** The search term */
  query: Scalars["Search"];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars["Sources"]>>;
  type: SearchRequestTypes;
};

/** Search request types */
export enum SearchRequestTypes {
  Profile = "PROFILE",
  Publication = "PUBLICATION",
}

export type SearchResult = ProfileSearchResult | PublicationSearchResult;

export type SensitiveReasonInputParams = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingSensitiveSubreason;
};

/** The broadcast item */
export type SetDefaultProfileBroadcastItemResult = {
  __typename?: "SetDefaultProfileBroadcastItemResult";
  /** The date the broadcast item expiries */
  expiresAt: Scalars["DateTime"];
  /** This broadcast item ID */
  id: Scalars["BroadcastId"];
  /** The typed data */
  typedData: SetDefaultProfileEip712TypedData;
};

/** The default profile eip 712 typed data */
export type SetDefaultProfileEip712TypedData = {
  __typename?: "SetDefaultProfileEIP712TypedData";
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: SetDefaultProfileEip712TypedDataTypes;
  /** The values */
  value: SetDefaultProfileEip712TypedDataValue;
};

/** The default profile eip 712 typed data types */
export type SetDefaultProfileEip712TypedDataTypes = {
  __typename?: "SetDefaultProfileEIP712TypedDataTypes";
  SetDefaultProfileWithSig: Array<Eip712TypedDataField>;
};

/** The default profile eip 712 typed data value */
export type SetDefaultProfileEip712TypedDataValue = {
  __typename?: "SetDefaultProfileEIP712TypedDataValue";
  deadline: Scalars["UnixTimestamp"];
  nonce: Scalars["Nonce"];
  profileId: Scalars["ProfileId"];
  wallet: Scalars["EthereumAddress"];
};

export type SetDispatcherRequest = {
  /** The dispatcher address - they can post, comment, mirror, set follow module, change your profile picture on your behalf, if left as none it will use the built in dispatcher address. */
  dispatcher?: InputMaybe<Scalars["EthereumAddress"]>;
  /** If you want to enable or disable it */
  enable?: InputMaybe<Scalars["Boolean"]>;
  /** The profile id */
  profileId: Scalars["ProfileId"];
};

/** The signed auth challenge */
export type SignedAuthChallenge = {
  /** The ethereum address you signed the signature with */
  address: Scalars["EthereumAddress"];
  /** The signature */
  signature: Scalars["Signature"];
};

export type SimpleCollectModuleParams = {
  /** The collect module limit */
  collectLimit?: InputMaybe<Scalars["String"]>;
  /** The timestamp that this collect module will expire */
  endTimestamp?: InputMaybe<Scalars["DateTime"]>;
  /** The collect module fee params */
  fee?: InputMaybe<ModuleFeeParams>;
  /** Collectible by followers only */
  followerOnly: Scalars["Boolean"];
};

export type SimpleCollectModuleSettings = {
  __typename?: "SimpleCollectModuleSettings";
  /** The maximum number of collects for this publication. 0 for no limit. */
  collectLimit?: Maybe<Scalars["String"]>;
  contractAddress: Scalars["ContractAddress"];
  /** The end timestamp after which collecting is impossible. 0 for no expiry. */
  endTimestamp?: Maybe<Scalars["DateTime"]>;
  /** The collect module fee params */
  fee?: Maybe<ModuleFee>;
  /** True if only followers of publisher may collect the post. */
  followerOnly: Scalars["Boolean"];
  /** The collect modules enum */
  type: CollectModules;
};

export type SingleProfileQueryRequest = {
  /** The handle for the profile */
  handle?: InputMaybe<Scalars["Handle"]>;
  /** The profile id */
  profileId?: InputMaybe<Scalars["ProfileId"]>;
};

export type SpamReasonInputParams = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingSpamSubreason;
};

export type Subscription = {
  __typename?: "Subscription";
  newDataAvailabilityTransaction: DataAvailabilityTransactionUnion;
};

export type SybilDotOrgIdentity = {
  __typename?: "SybilDotOrgIdentity";
  source: SybilDotOrgIdentitySource;
  /** The sybil dot org status */
  verified: Scalars["Boolean"];
};

export type SybilDotOrgIdentitySource = {
  __typename?: "SybilDotOrgIdentitySource";
  twitter: SybilDotOrgTwitterIdentity;
};

export type SybilDotOrgTwitterIdentity = {
  __typename?: "SybilDotOrgTwitterIdentity";
  handle?: Maybe<Scalars["String"]>;
};

/** The social comment */
export type TagResult = {
  __typename?: "TagResult";
  /** The tag */
  tag: Scalars["PublicationTag"];
  /** The total amount of publication tagged */
  total: Scalars["Int"];
};

/** The publications tags sort criteria */
export enum TagSortCriteria {
  Alphabetical = "ALPHABETICAL",
  MostPopular = "MOST_POPULAR",
}

export type TimedFeeCollectModuleParams = {
  /** The collect module amount info */
  amount: ModuleFeeAmountParams;
  /** Follower only */
  followerOnly: Scalars["Boolean"];
  /** The collect module recipient address */
  recipient: Scalars["EthereumAddress"];
  /** The collect module referral fee */
  referralFee: Scalars["Float"];
};

export type TimedFeeCollectModuleSettings = {
  __typename?: "TimedFeeCollectModuleSettings";
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  contractAddress: Scalars["ContractAddress"];
  /** The collect module end timestamp */
  endTimestamp: Scalars["DateTime"];
  /** Follower only */
  followerOnly: Scalars["Boolean"];
  /** The collect module recipient address */
  recipient: Scalars["EthereumAddress"];
  /** The collect module referral fee */
  referralFee: Scalars["Float"];
  /** The collect modules enum */
  type: CollectModules;
};

export type TransactionError = {
  __typename?: "TransactionError";
  reason: TransactionErrorReasons;
  txReceipt?: Maybe<TransactionReceipt>;
};

/** Transaction error reason */
export enum TransactionErrorReasons {
  Reverted = "REVERTED",
}

export type TransactionIndexedResult = {
  __typename?: "TransactionIndexedResult";
  indexed: Scalars["Boolean"];
  /** Publications can be indexed but the ipfs link for example not findable for x time. This allows you to work that out for publications. If its not a publication tx then it always be null. */
  metadataStatus?: Maybe<PublicationMetadataStatus>;
  txHash: Scalars["TxHash"];
  txReceipt?: Maybe<TransactionReceipt>;
};

export type TransactionReceipt = {
  __typename?: "TransactionReceipt";
  blockHash: Scalars["String"];
  blockNumber: Scalars["Int"];
  byzantium: Scalars["Boolean"];
  confirmations: Scalars["Int"];
  contractAddress?: Maybe<Scalars["ContractAddress"]>;
  cumulativeGasUsed: Scalars["String"];
  effectiveGasPrice: Scalars["String"];
  from: Scalars["EthereumAddress"];
  gasUsed: Scalars["String"];
  logs: Array<Log>;
  logsBloom: Scalars["String"];
  root?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["Int"]>;
  to?: Maybe<Scalars["EthereumAddress"]>;
  transactionHash: Scalars["TxHash"];
  transactionIndex: Scalars["Int"];
  type: Scalars["Int"];
};

export type TransactionResult = TransactionError | TransactionIndexedResult;

export type TypedDataOptions = {
  /** If you wish to override the nonce for the sig if you want to do some clever stuff in the client */
  overrideSigNonce: Scalars["Nonce"];
};

export type UnfollowRequest = {
  profile: Scalars["ProfileId"];
};

export type UnknownCollectModuleParams = {
  contractAddress: Scalars["ContractAddress"];
  /** The encoded data to submit with the module */
  data: Scalars["BlockchainData"];
};

export type UnknownCollectModuleSettings = {
  __typename?: "UnknownCollectModuleSettings";
  /** The data used to setup the module which you can decode with your known ABI  */
  collectModuleReturnData: Scalars["CollectModuleData"];
  contractAddress: Scalars["ContractAddress"];
  /** The collect modules enum */
  type: CollectModules;
};

export type UnknownFollowModuleParams = {
  contractAddress: Scalars["ContractAddress"];
  /** The encoded data to submit with the module */
  data: Scalars["BlockchainData"];
};

export type UnknownFollowModuleRedeemParams = {
  /** The encoded data to submit with the module */
  data: Scalars["BlockchainData"];
};

export type UnknownFollowModuleSettings = {
  __typename?: "UnknownFollowModuleSettings";
  contractAddress: Scalars["ContractAddress"];
  /** The data used to setup the module which you can decode with your known ABI  */
  followModuleReturnData: Scalars["FollowModuleData"];
  /** The follow modules enum */
  type: FollowModules;
};

export type UnknownReferenceModuleParams = {
  contractAddress: Scalars["ContractAddress"];
  /** The encoded data to submit with the module */
  data: Scalars["BlockchainData"];
};

export type UnknownReferenceModuleSettings = {
  __typename?: "UnknownReferenceModuleSettings";
  contractAddress: Scalars["ContractAddress"];
  /** The data used to setup the module which you can decode with your known ABI  */
  referenceModuleReturnData: Scalars["ReferenceModuleData"];
  /** The reference modules enum */
  type: ReferenceModules;
};

export type UpdateProfileImageRequest = {
  /** The nft data */
  nftData?: InputMaybe<NftData>;
  profileId: Scalars["ProfileId"];
  /** The url to the image if offline */
  url?: InputMaybe<Scalars["Url"]>;
};

export type UserSigNonces = {
  __typename?: "UserSigNonces";
  lensHubOnChainSigNonce: Scalars["Nonce"];
  peripheryOnChainSigNonce: Scalars["Nonce"];
};

export type ValidatePublicationMetadataRequest = {
  metadatav1?: InputMaybe<PublicationMetadataV1Input>;
  metadatav2?: InputMaybe<PublicationMetadataV2Input>;
};

/** The access request */
export type VerifyRequest = {
  /** The access token */
  accessToken: Scalars["Jwt"];
};

export type Wallet = {
  __typename?: "Wallet";
  address: Scalars["EthereumAddress"];
  /** The default profile for the wallet for now it is just their first profile, this will be the default profile they picked soon enough */
  defaultProfile?: Maybe<Profile>;
};

export type WhoCollectedPublicationRequest = {
  cursor?: InputMaybe<Scalars["Cursor"]>;
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  /** Internal publication id */
  publicationId: Scalars["InternalPublicationId"];
};

export type WhoReactedPublicationRequest = {
  cursor?: InputMaybe<Scalars["Cursor"]>;
  limit?: InputMaybe<Scalars["LimitScalar"]>;
  /** Internal publication id */
  publicationId: Scalars["InternalPublicationId"];
};

/** The Profile */
export type WhoReactedResult = {
  __typename?: "WhoReactedResult";
  profile: Profile;
  /** The reaction */
  reaction: ReactionTypes;
  /** The reaction */
  reactionAt: Scalars["DateTime"];
  /** The reaction id */
  reactionId: Scalars["ReactionId"];
};

export type WorldcoinIdentity = {
  __typename?: "WorldcoinIdentity";
  /** If the profile has verified as a user */
  isHuman: Scalars["Boolean"];
};

/** The worldcoin signal type */
export enum WorldcoinPhoneVerifyType {
  Orb = "ORB",
  Phone = "PHONE",
}

export type WorldcoinPhoneVerifyWebhookRequest = {
  nullifierHash: Scalars["String"];
  signal: Scalars["EthereumAddress"];
  signalType: WorldcoinPhoneVerifyType;
};

export type BroadcastDataAvailabilityMutationVariables = Exact<{
  request: BroadcastRequest;
}>;

export type BroadcastDataAvailabilityMutation = {
  __typename?: "Mutation";
  broadcastDataAvailability:
    | {
        __typename?: "CreateDataAvailabilityPublicationResult";
        id: any;
        proofs: string;
      }
    | { __typename?: "RelayError"; reason: RelayErrorReasons };
};

export type CreateDataAvailabilityCommentViaDispatcherMutationVariables =
  Exact<{
    request: CreateDataAvailabilityCommentRequest;
  }>;

export type CreateDataAvailabilityCommentViaDispatcherMutation = {
  __typename?: "Mutation";
  createDataAvailabilityCommentViaDispatcher:
    | {
        __typename?: "CreateDataAvailabilityPublicationResult";
        id: any;
        proofs: string;
      }
    | { __typename?: "RelayError"; reason: RelayErrorReasons };
};

export type CreateDataAvailabilityMirrorViaDispatcherMutationVariables = Exact<{
  request: CreateDataAvailabilityMirrorRequest;
}>;

export type CreateDataAvailabilityMirrorViaDispatcherMutation = {
  __typename?: "Mutation";
  createDataAvailabilityMirrorViaDispatcher:
    | {
        __typename?: "CreateDataAvailabilityPublicationResult";
        id: any;
        proofs: string;
      }
    | { __typename?: "RelayError"; reason: RelayErrorReasons };
};

export type CreateDataAvailabilityPostViaDispatcherMutationVariables = Exact<{
  request: CreateDataAvailabilityPostRequest;
}>;

export type CreateDataAvailabilityPostViaDispatcherMutation = {
  __typename?: "Mutation";
  createDataAvailabilityPostViaDispatcher:
    | {
        __typename?: "CreateDataAvailabilityPublicationResult";
        id: any;
        proofs: string;
      }
    | { __typename?: "RelayError"; reason: RelayErrorReasons };
};

type CollectFields_AaveFeeCollectModuleSettings_Fragment = {
  __typename: "AaveFeeCollectModuleSettings";
};

type CollectFields_Erc4626FeeCollectModuleSettings_Fragment = {
  __typename: "ERC4626FeeCollectModuleSettings";
};

type CollectFields_FeeCollectModuleSettings_Fragment = {
  __typename: "FeeCollectModuleSettings";
  type: CollectModules;
  recipient: any;
  referralFee: number;
  amount: {
    __typename?: "ModuleFeeAmount";
    value: string;
    asset: {
      __typename?: "Erc20";
      name: string;
      symbol: string;
      decimals: number;
      address: any;
    };
  };
};

type CollectFields_FreeCollectModuleSettings_Fragment = {
  __typename: "FreeCollectModuleSettings";
  type: CollectModules;
  followerOnly: boolean;
  contractAddress: any;
};

type CollectFields_LimitedFeeCollectModuleSettings_Fragment = {
  __typename: "LimitedFeeCollectModuleSettings";
  type: CollectModules;
  collectLimit: string;
  recipient: any;
  referralFee: number;
  amount: {
    __typename?: "ModuleFeeAmount";
    value: string;
    asset: {
      __typename?: "Erc20";
      name: string;
      symbol: string;
      decimals: number;
      address: any;
    };
  };
};

type CollectFields_LimitedTimedFeeCollectModuleSettings_Fragment = {
  __typename: "LimitedTimedFeeCollectModuleSettings";
  type: CollectModules;
  collectLimit: string;
  recipient: any;
  referralFee: number;
  endTimestamp: any;
  amount: {
    __typename?: "ModuleFeeAmount";
    value: string;
    asset: {
      __typename?: "Erc20";
      name: string;
      symbol: string;
      decimals: number;
      address: any;
    };
  };
};

type CollectFields_MultirecipientFeeCollectModuleSettings_Fragment = {
  __typename: "MultirecipientFeeCollectModuleSettings";
};

type CollectFields_RevertCollectModuleSettings_Fragment = {
  __typename: "RevertCollectModuleSettings";
  type: CollectModules;
};

type CollectFields_SimpleCollectModuleSettings_Fragment = {
  __typename: "SimpleCollectModuleSettings";
  type: CollectModules;
  contractAddress: any;
  followerOnly: boolean;
  optionalCollectLimit?: string | null;
  optionalEndTimestamp?: any | null;
  fee?: {
    __typename?: "ModuleFee";
    recipient: any;
    referralFee: number;
    amount: {
      __typename?: "ModuleFeeAmount";
      value: string;
      asset: {
        __typename?: "Erc20";
        name: string;
        symbol: string;
        decimals: number;
        address: any;
      };
    };
  } | null;
};

type CollectFields_TimedFeeCollectModuleSettings_Fragment = {
  __typename: "TimedFeeCollectModuleSettings";
  type: CollectModules;
  recipient: any;
  referralFee: number;
  endTimestamp: any;
  amount: {
    __typename?: "ModuleFeeAmount";
    value: string;
    asset: {
      __typename?: "Erc20";
      name: string;
      symbol: string;
      decimals: number;
      address: any;
    };
  };
};

type CollectFields_UnknownCollectModuleSettings_Fragment = {
  __typename: "UnknownCollectModuleSettings";
  type: CollectModules;
  contractAddress: any;
  collectModuleReturnData: any;
};

export type CollectFieldsFragment =
  | CollectFields_AaveFeeCollectModuleSettings_Fragment
  | CollectFields_Erc4626FeeCollectModuleSettings_Fragment
  | CollectFields_FeeCollectModuleSettings_Fragment
  | CollectFields_FreeCollectModuleSettings_Fragment
  | CollectFields_LimitedFeeCollectModuleSettings_Fragment
  | CollectFields_LimitedTimedFeeCollectModuleSettings_Fragment
  | CollectFields_MultirecipientFeeCollectModuleSettings_Fragment
  | CollectFields_RevertCollectModuleSettings_Fragment
  | CollectFields_SimpleCollectModuleSettings_Fragment
  | CollectFields_TimedFeeCollectModuleSettings_Fragment
  | CollectFields_UnknownCollectModuleSettings_Fragment;

export type CommentFieldsFragment = {
  __typename?: "Comment";
  id: any;
  reaction?: ReactionTypes | null;
  collectNftAddress?: any | null;
  onChainContentURI: string;
  hidden: boolean;
  hasCollectedByMe: boolean;
  isDataAvailability: boolean;
  createdAt: any;
  appId?: any | null;
  profile: {
    __typename?: "Profile";
    id: any;
    name?: string | null;
    handle: any;
    bio?: string | null;
    ownedBy: any;
    isDefault: boolean;
    interests?: Array<any> | null;
    isFollowedByMe: boolean;
    dispatcher?: { __typename?: "Dispatcher"; canUseRelay: boolean } | null;
    attributes?: Array<{
      __typename?: "Attribute";
      key: string;
      value: string;
    }> | null;
    stats: {
      __typename?: "ProfileStats";
      totalFollowers: number;
      totalFollowing: number;
      totalPosts: number;
      totalComments: number;
      totalMirrors: number;
      totalPublications: number;
      totalCollects: number;
    };
    coverPicture?:
      | {
          __typename?: "MediaSet";
          original: { __typename?: "Media"; url: any };
        }
      | { __typename?: "NftImage" }
      | null;
    picture?:
      | {
          __typename?: "MediaSet";
          original: { __typename?: "Media"; url: any };
        }
      | { __typename?: "NftImage"; uri: any }
      | null;
    followModule?:
      | { __typename: "FeeFollowModuleSettings" }
      | { __typename: "ProfileFollowModuleSettings" }
      | { __typename: "RevertFollowModuleSettings" }
      | { __typename: "UnknownFollowModuleSettings" }
      | null;
  };
  collectModule:
    | { __typename: "AaveFeeCollectModuleSettings" }
    | { __typename: "ERC4626FeeCollectModuleSettings" }
    | {
        __typename: "FeeCollectModuleSettings";
        type: CollectModules;
        recipient: any;
        referralFee: number;
        amount: {
          __typename?: "ModuleFeeAmount";
          value: string;
          asset: {
            __typename?: "Erc20";
            name: string;
            symbol: string;
            decimals: number;
            address: any;
          };
        };
      }
    | {
        __typename: "FreeCollectModuleSettings";
        type: CollectModules;
        followerOnly: boolean;
        contractAddress: any;
      }
    | {
        __typename: "LimitedFeeCollectModuleSettings";
        type: CollectModules;
        collectLimit: string;
        recipient: any;
        referralFee: number;
        amount: {
          __typename?: "ModuleFeeAmount";
          value: string;
          asset: {
            __typename?: "Erc20";
            name: string;
            symbol: string;
            decimals: number;
            address: any;
          };
        };
      }
    | {
        __typename: "LimitedTimedFeeCollectModuleSettings";
        type: CollectModules;
        collectLimit: string;
        recipient: any;
        referralFee: number;
        endTimestamp: any;
        amount: {
          __typename?: "ModuleFeeAmount";
          value: string;
          asset: {
            __typename?: "Erc20";
            name: string;
            symbol: string;
            decimals: number;
            address: any;
          };
        };
      }
    | { __typename: "MultirecipientFeeCollectModuleSettings" }
    | { __typename: "RevertCollectModuleSettings"; type: CollectModules }
    | {
        __typename: "SimpleCollectModuleSettings";
        type: CollectModules;
        contractAddress: any;
        followerOnly: boolean;
        optionalCollectLimit?: string | null;
        optionalEndTimestamp?: any | null;
        fee?: {
          __typename?: "ModuleFee";
          recipient: any;
          referralFee: number;
          amount: {
            __typename?: "ModuleFeeAmount";
            value: string;
            asset: {
              __typename?: "Erc20";
              name: string;
              symbol: string;
              decimals: number;
              address: any;
            };
          };
        } | null;
      }
    | {
        __typename: "TimedFeeCollectModuleSettings";
        type: CollectModules;
        recipient: any;
        referralFee: number;
        endTimestamp: any;
        amount: {
          __typename?: "ModuleFeeAmount";
          value: string;
          asset: {
            __typename?: "Erc20";
            name: string;
            symbol: string;
            decimals: number;
            address: any;
          };
        };
      }
    | {
        __typename: "UnknownCollectModuleSettings";
        type: CollectModules;
        contractAddress: any;
        collectModuleReturnData: any;
      };
  referenceModule?:
    | { __typename: "DegreesOfSeparationReferenceModuleSettings" }
    | { __typename: "FollowOnlyReferenceModuleSettings" }
    | { __typename: "UnknownReferenceModuleSettings" }
    | null;
  canComment: { __typename?: "CanCommentResponse"; result: boolean };
  canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
  stats: {
    __typename?: "PublicationStats";
    totalAmountOfComments: number;
    totalAmountOfCollects: number;
    totalAmountOfMirrors: number;
    totalUpvotes: number;
  };
  metadata: {
    __typename?: "MetadataOutput";
    name?: string | null;
    description?: any | null;
    content?: any | null;
    mainContentFocus: PublicationMainFocus;
    contentWarning?: PublicationContentWarning | null;
    tags: Array<string>;
    cover?: {
      __typename?: "MediaSet";
      onChain: { __typename?: "Media"; url: any };
      original: { __typename?: "Media"; url: any };
      optimized?: { __typename?: "Media"; url: any } | null;
    } | null;
    media: Array<{
      __typename?: "MediaSet";
      original: { __typename?: "Media"; url: any; mimeType?: any | null };
      onChain: { __typename?: "Media"; url: any };
      optimized?: { __typename?: "Media"; url: any } | null;
    }>;
    attributes: Array<{
      __typename?: "MetadataAttributeOutput";
      value?: string | null;
      traitType?: string | null;
    }>;
  };
  commentOn?:
    | { __typename?: "Comment" }
    | { __typename?: "Mirror" }
    | {
        __typename?: "Post";
        id: any;
        createdAt: any;
        appId?: any | null;
        profile: {
          __typename?: "Profile";
          id: any;
          name?: string | null;
          handle: any;
          bio?: string | null;
          ownedBy: any;
          isDefault: boolean;
          interests?: Array<any> | null;
          isFollowedByMe: boolean;
          dispatcher?: {
            __typename?: "Dispatcher";
            canUseRelay: boolean;
          } | null;
          attributes?: Array<{
            __typename?: "Attribute";
            key: string;
            value: string;
          }> | null;
          stats: {
            __typename?: "ProfileStats";
            totalFollowers: number;
            totalFollowing: number;
            totalPosts: number;
            totalComments: number;
            totalMirrors: number;
            totalPublications: number;
            totalCollects: number;
          };
          coverPicture?:
            | {
                __typename?: "MediaSet";
                original: { __typename?: "Media"; url: any };
              }
            | { __typename?: "NftImage" }
            | null;
          picture?:
            | {
                __typename?: "MediaSet";
                original: { __typename?: "Media"; url: any };
              }
            | { __typename?: "NftImage"; uri: any }
            | null;
          followModule?:
            | { __typename: "FeeFollowModuleSettings" }
            | { __typename: "ProfileFollowModuleSettings" }
            | { __typename: "RevertFollowModuleSettings" }
            | { __typename: "UnknownFollowModuleSettings" }
            | null;
        };
        metadata: {
          __typename?: "MetadataOutput";
          name?: string | null;
          description?: any | null;
          content?: any | null;
          mainContentFocus: PublicationMainFocus;
          contentWarning?: PublicationContentWarning | null;
          tags: Array<string>;
          cover?: {
            __typename?: "MediaSet";
            onChain: { __typename?: "Media"; url: any };
            original: { __typename?: "Media"; url: any };
            optimized?: { __typename?: "Media"; url: any } | null;
          } | null;
          media: Array<{
            __typename?: "MediaSet";
            original: { __typename?: "Media"; url: any; mimeType?: any | null };
            onChain: { __typename?: "Media"; url: any };
            optimized?: { __typename?: "Media"; url: any } | null;
          }>;
          attributes: Array<{
            __typename?: "MetadataAttributeOutput";
            value?: string | null;
            traitType?: string | null;
          }>;
        };
      }
    | null;
};

export type Erc20FieldsFragment = {
  __typename?: "Erc20";
  name: string;
  symbol: string;
  decimals: number;
  address: any;
};

export type MetadataFieldsFragment = {
  __typename?: "MetadataOutput";
  name?: string | null;
  description?: any | null;
  content?: any | null;
  mainContentFocus: PublicationMainFocus;
  contentWarning?: PublicationContentWarning | null;
  tags: Array<string>;
  cover?: {
    __typename?: "MediaSet";
    onChain: { __typename?: "Media"; url: any };
    original: { __typename?: "Media"; url: any };
    optimized?: { __typename?: "Media"; url: any } | null;
  } | null;
  media: Array<{
    __typename?: "MediaSet";
    original: { __typename?: "Media"; url: any; mimeType?: any | null };
    onChain: { __typename?: "Media"; url: any };
    optimized?: { __typename?: "Media"; url: any } | null;
  }>;
  attributes: Array<{
    __typename?: "MetadataAttributeOutput";
    value?: string | null;
    traitType?: string | null;
  }>;
};

export type MirrorFieldsFragment = {
  __typename?: "Mirror";
  id: any;
  reaction?: ReactionTypes | null;
  collectNftAddress?: any | null;
  onChainContentURI: string;
  hidden: boolean;
  isDataAvailability: boolean;
  dataAvailabilityProofs?: string | null;
  hasCollectedByMe: boolean;
  createdAt: any;
  appId?: any | null;
  profile: {
    __typename?: "Profile";
    id: any;
    name?: string | null;
    handle: any;
    bio?: string | null;
    ownedBy: any;
    isDefault: boolean;
    interests?: Array<any> | null;
    isFollowedByMe: boolean;
    dispatcher?: { __typename?: "Dispatcher"; canUseRelay: boolean } | null;
    attributes?: Array<{
      __typename?: "Attribute";
      key: string;
      value: string;
    }> | null;
    stats: {
      __typename?: "ProfileStats";
      totalFollowers: number;
      totalFollowing: number;
      totalPosts: number;
      totalComments: number;
      totalMirrors: number;
      totalPublications: number;
      totalCollects: number;
    };
    coverPicture?:
      | {
          __typename?: "MediaSet";
          original: { __typename?: "Media"; url: any };
        }
      | { __typename?: "NftImage" }
      | null;
    picture?:
      | {
          __typename?: "MediaSet";
          original: { __typename?: "Media"; url: any };
        }
      | { __typename?: "NftImage"; uri: any }
      | null;
    followModule?:
      | { __typename: "FeeFollowModuleSettings" }
      | { __typename: "ProfileFollowModuleSettings" }
      | { __typename: "RevertFollowModuleSettings" }
      | { __typename: "UnknownFollowModuleSettings" }
      | null;
  };
  referenceModule?:
    | { __typename: "DegreesOfSeparationReferenceModuleSettings" }
    | { __typename: "FollowOnlyReferenceModuleSettings" }
    | { __typename: "UnknownReferenceModuleSettings" }
    | null;
  canComment: { __typename?: "CanCommentResponse"; result: boolean };
  canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
  collectModule:
    | { __typename: "AaveFeeCollectModuleSettings" }
    | { __typename: "ERC4626FeeCollectModuleSettings" }
    | {
        __typename: "FeeCollectModuleSettings";
        type: CollectModules;
        recipient: any;
        referralFee: number;
        amount: {
          __typename?: "ModuleFeeAmount";
          value: string;
          asset: {
            __typename?: "Erc20";
            name: string;
            symbol: string;
            decimals: number;
            address: any;
          };
        };
      }
    | {
        __typename: "FreeCollectModuleSettings";
        type: CollectModules;
        followerOnly: boolean;
        contractAddress: any;
      }
    | {
        __typename: "LimitedFeeCollectModuleSettings";
        type: CollectModules;
        collectLimit: string;
        recipient: any;
        referralFee: number;
        amount: {
          __typename?: "ModuleFeeAmount";
          value: string;
          asset: {
            __typename?: "Erc20";
            name: string;
            symbol: string;
            decimals: number;
            address: any;
          };
        };
      }
    | {
        __typename: "LimitedTimedFeeCollectModuleSettings";
        type: CollectModules;
        collectLimit: string;
        recipient: any;
        referralFee: number;
        endTimestamp: any;
        amount: {
          __typename?: "ModuleFeeAmount";
          value: string;
          asset: {
            __typename?: "Erc20";
            name: string;
            symbol: string;
            decimals: number;
            address: any;
          };
        };
      }
    | { __typename: "MultirecipientFeeCollectModuleSettings" }
    | { __typename: "RevertCollectModuleSettings"; type: CollectModules }
    | {
        __typename: "SimpleCollectModuleSettings";
        type: CollectModules;
        contractAddress: any;
        followerOnly: boolean;
        optionalCollectLimit?: string | null;
        optionalEndTimestamp?: any | null;
        fee?: {
          __typename?: "ModuleFee";
          recipient: any;
          referralFee: number;
          amount: {
            __typename?: "ModuleFeeAmount";
            value: string;
            asset: {
              __typename?: "Erc20";
              name: string;
              symbol: string;
              decimals: number;
              address: any;
            };
          };
        } | null;
      }
    | {
        __typename: "TimedFeeCollectModuleSettings";
        type: CollectModules;
        recipient: any;
        referralFee: number;
        endTimestamp: any;
        amount: {
          __typename?: "ModuleFeeAmount";
          value: string;
          asset: {
            __typename?: "Erc20";
            name: string;
            symbol: string;
            decimals: number;
            address: any;
          };
        };
      }
    | {
        __typename: "UnknownCollectModuleSettings";
        type: CollectModules;
        contractAddress: any;
        collectModuleReturnData: any;
      };
  stats: {
    __typename?: "PublicationStats";
    totalUpvotes: number;
    totalAmountOfMirrors: number;
    totalAmountOfCollects: number;
    totalAmountOfComments: number;
  };
  metadata: {
    __typename?: "MetadataOutput";
    name?: string | null;
    description?: any | null;
    content?: any | null;
    mainContentFocus: PublicationMainFocus;
    contentWarning?: PublicationContentWarning | null;
    tags: Array<string>;
    cover?: {
      __typename?: "MediaSet";
      onChain: { __typename?: "Media"; url: any };
      original: { __typename?: "Media"; url: any };
      optimized?: { __typename?: "Media"; url: any } | null;
    } | null;
    media: Array<{
      __typename?: "MediaSet";
      original: { __typename?: "Media"; url: any; mimeType?: any | null };
      onChain: { __typename?: "Media"; url: any };
      optimized?: { __typename?: "Media"; url: any } | null;
    }>;
    attributes: Array<{
      __typename?: "MetadataAttributeOutput";
      value?: string | null;
      traitType?: string | null;
    }>;
  };
  mirrorOf:
    | {
        __typename?: "Comment";
        id: any;
        reaction?: ReactionTypes | null;
        collectNftAddress?: any | null;
        onChainContentURI: string;
        hidden: boolean;
        hasCollectedByMe: boolean;
        isDataAvailability: boolean;
        createdAt: any;
        appId?: any | null;
        profile: {
          __typename?: "Profile";
          id: any;
          name?: string | null;
          handle: any;
          bio?: string | null;
          ownedBy: any;
          isDefault: boolean;
          interests?: Array<any> | null;
          isFollowedByMe: boolean;
          dispatcher?: {
            __typename?: "Dispatcher";
            canUseRelay: boolean;
          } | null;
          attributes?: Array<{
            __typename?: "Attribute";
            key: string;
            value: string;
          }> | null;
          stats: {
            __typename?: "ProfileStats";
            totalFollowers: number;
            totalFollowing: number;
            totalPosts: number;
            totalComments: number;
            totalMirrors: number;
            totalPublications: number;
            totalCollects: number;
          };
          coverPicture?:
            | {
                __typename?: "MediaSet";
                original: { __typename?: "Media"; url: any };
              }
            | { __typename?: "NftImage" }
            | null;
          picture?:
            | {
                __typename?: "MediaSet";
                original: { __typename?: "Media"; url: any };
              }
            | { __typename?: "NftImage"; uri: any }
            | null;
          followModule?:
            | { __typename: "FeeFollowModuleSettings" }
            | { __typename: "ProfileFollowModuleSettings" }
            | { __typename: "RevertFollowModuleSettings" }
            | { __typename: "UnknownFollowModuleSettings" }
            | null;
        };
        collectModule:
          | { __typename: "AaveFeeCollectModuleSettings" }
          | { __typename: "ERC4626FeeCollectModuleSettings" }
          | {
              __typename: "FeeCollectModuleSettings";
              type: CollectModules;
              recipient: any;
              referralFee: number;
              amount: {
                __typename?: "ModuleFeeAmount";
                value: string;
                asset: {
                  __typename?: "Erc20";
                  name: string;
                  symbol: string;
                  decimals: number;
                  address: any;
                };
              };
            }
          | {
              __typename: "FreeCollectModuleSettings";
              type: CollectModules;
              followerOnly: boolean;
              contractAddress: any;
            }
          | {
              __typename: "LimitedFeeCollectModuleSettings";
              type: CollectModules;
              collectLimit: string;
              recipient: any;
              referralFee: number;
              amount: {
                __typename?: "ModuleFeeAmount";
                value: string;
                asset: {
                  __typename?: "Erc20";
                  name: string;
                  symbol: string;
                  decimals: number;
                  address: any;
                };
              };
            }
          | {
              __typename: "LimitedTimedFeeCollectModuleSettings";
              type: CollectModules;
              collectLimit: string;
              recipient: any;
              referralFee: number;
              endTimestamp: any;
              amount: {
                __typename?: "ModuleFeeAmount";
                value: string;
                asset: {
                  __typename?: "Erc20";
                  name: string;
                  symbol: string;
                  decimals: number;
                  address: any;
                };
              };
            }
          | { __typename: "MultirecipientFeeCollectModuleSettings" }
          | { __typename: "RevertCollectModuleSettings"; type: CollectModules }
          | {
              __typename: "SimpleCollectModuleSettings";
              type: CollectModules;
              contractAddress: any;
              followerOnly: boolean;
              optionalCollectLimit?: string | null;
              optionalEndTimestamp?: any | null;
              fee?: {
                __typename?: "ModuleFee";
                recipient: any;
                referralFee: number;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              } | null;
            }
          | {
              __typename: "TimedFeeCollectModuleSettings";
              type: CollectModules;
              recipient: any;
              referralFee: number;
              endTimestamp: any;
              amount: {
                __typename?: "ModuleFeeAmount";
                value: string;
                asset: {
                  __typename?: "Erc20";
                  name: string;
                  symbol: string;
                  decimals: number;
                  address: any;
                };
              };
            }
          | {
              __typename: "UnknownCollectModuleSettings";
              type: CollectModules;
              contractAddress: any;
              collectModuleReturnData: any;
            };
        referenceModule?:
          | { __typename: "DegreesOfSeparationReferenceModuleSettings" }
          | { __typename: "FollowOnlyReferenceModuleSettings" }
          | { __typename: "UnknownReferenceModuleSettings" }
          | null;
        canComment: { __typename?: "CanCommentResponse"; result: boolean };
        canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
        stats: {
          __typename?: "PublicationStats";
          totalAmountOfComments: number;
          totalAmountOfCollects: number;
          totalAmountOfMirrors: number;
          totalUpvotes: number;
        };
        metadata: {
          __typename?: "MetadataOutput";
          name?: string | null;
          description?: any | null;
          content?: any | null;
          mainContentFocus: PublicationMainFocus;
          contentWarning?: PublicationContentWarning | null;
          tags: Array<string>;
          cover?: {
            __typename?: "MediaSet";
            onChain: { __typename?: "Media"; url: any };
            original: { __typename?: "Media"; url: any };
            optimized?: { __typename?: "Media"; url: any } | null;
          } | null;
          media: Array<{
            __typename?: "MediaSet";
            original: { __typename?: "Media"; url: any; mimeType?: any | null };
            onChain: { __typename?: "Media"; url: any };
            optimized?: { __typename?: "Media"; url: any } | null;
          }>;
          attributes: Array<{
            __typename?: "MetadataAttributeOutput";
            value?: string | null;
            traitType?: string | null;
          }>;
        };
        commentOn?:
          | { __typename?: "Comment" }
          | { __typename?: "Mirror" }
          | {
              __typename?: "Post";
              id: any;
              createdAt: any;
              appId?: any | null;
              profile: {
                __typename?: "Profile";
                id: any;
                name?: string | null;
                handle: any;
                bio?: string | null;
                ownedBy: any;
                isDefault: boolean;
                interests?: Array<any> | null;
                isFollowedByMe: boolean;
                dispatcher?: {
                  __typename?: "Dispatcher";
                  canUseRelay: boolean;
                } | null;
                attributes?: Array<{
                  __typename?: "Attribute";
                  key: string;
                  value: string;
                }> | null;
                stats: {
                  __typename?: "ProfileStats";
                  totalFollowers: number;
                  totalFollowing: number;
                  totalPosts: number;
                  totalComments: number;
                  totalMirrors: number;
                  totalPublications: number;
                  totalCollects: number;
                };
                coverPicture?:
                  | {
                      __typename?: "MediaSet";
                      original: { __typename?: "Media"; url: any };
                    }
                  | { __typename?: "NftImage" }
                  | null;
                picture?:
                  | {
                      __typename?: "MediaSet";
                      original: { __typename?: "Media"; url: any };
                    }
                  | { __typename?: "NftImage"; uri: any }
                  | null;
                followModule?:
                  | { __typename: "FeeFollowModuleSettings" }
                  | { __typename: "ProfileFollowModuleSettings" }
                  | { __typename: "RevertFollowModuleSettings" }
                  | { __typename: "UnknownFollowModuleSettings" }
                  | null;
              };
              metadata: {
                __typename?: "MetadataOutput";
                name?: string | null;
                description?: any | null;
                content?: any | null;
                mainContentFocus: PublicationMainFocus;
                contentWarning?: PublicationContentWarning | null;
                tags: Array<string>;
                cover?: {
                  __typename?: "MediaSet";
                  onChain: { __typename?: "Media"; url: any };
                  original: { __typename?: "Media"; url: any };
                  optimized?: { __typename?: "Media"; url: any } | null;
                } | null;
                media: Array<{
                  __typename?: "MediaSet";
                  original: {
                    __typename?: "Media";
                    url: any;
                    mimeType?: any | null;
                  };
                  onChain: { __typename?: "Media"; url: any };
                  optimized?: { __typename?: "Media"; url: any } | null;
                }>;
                attributes: Array<{
                  __typename?: "MetadataAttributeOutput";
                  value?: string | null;
                  traitType?: string | null;
                }>;
              };
            }
          | null;
      }
    | {
        __typename?: "Post";
        id: any;
        reaction?: ReactionTypes | null;
        collectNftAddress?: any | null;
        onChainContentURI: string;
        isGated: boolean;
        isDataAvailability: boolean;
        dataAvailabilityProofs?: string | null;
        hidden: boolean;
        hasCollectedByMe: boolean;
        createdAt: any;
        appId?: any | null;
        profile: {
          __typename?: "Profile";
          id: any;
          name?: string | null;
          handle: any;
          bio?: string | null;
          ownedBy: any;
          isDefault: boolean;
          interests?: Array<any> | null;
          isFollowedByMe: boolean;
          dispatcher?: {
            __typename?: "Dispatcher";
            canUseRelay: boolean;
          } | null;
          attributes?: Array<{
            __typename?: "Attribute";
            key: string;
            value: string;
          }> | null;
          stats: {
            __typename?: "ProfileStats";
            totalFollowers: number;
            totalFollowing: number;
            totalPosts: number;
            totalComments: number;
            totalMirrors: number;
            totalPublications: number;
            totalCollects: number;
          };
          coverPicture?:
            | {
                __typename?: "MediaSet";
                original: { __typename?: "Media"; url: any };
              }
            | { __typename?: "NftImage" }
            | null;
          picture?:
            | {
                __typename?: "MediaSet";
                original: { __typename?: "Media"; url: any };
              }
            | { __typename?: "NftImage"; uri: any }
            | null;
          followModule?:
            | { __typename: "FeeFollowModuleSettings" }
            | { __typename: "ProfileFollowModuleSettings" }
            | { __typename: "RevertFollowModuleSettings" }
            | { __typename: "UnknownFollowModuleSettings" }
            | null;
        };
        referenceModule?:
          | { __typename: "DegreesOfSeparationReferenceModuleSettings" }
          | { __typename: "FollowOnlyReferenceModuleSettings" }
          | { __typename: "UnknownReferenceModuleSettings" }
          | null;
        canComment: { __typename?: "CanCommentResponse"; result: boolean };
        canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
        collectModule:
          | { __typename: "AaveFeeCollectModuleSettings" }
          | { __typename: "ERC4626FeeCollectModuleSettings" }
          | {
              __typename: "FeeCollectModuleSettings";
              type: CollectModules;
              recipient: any;
              referralFee: number;
              amount: {
                __typename?: "ModuleFeeAmount";
                value: string;
                asset: {
                  __typename?: "Erc20";
                  name: string;
                  symbol: string;
                  decimals: number;
                  address: any;
                };
              };
            }
          | {
              __typename: "FreeCollectModuleSettings";
              type: CollectModules;
              followerOnly: boolean;
              contractAddress: any;
            }
          | {
              __typename: "LimitedFeeCollectModuleSettings";
              type: CollectModules;
              collectLimit: string;
              recipient: any;
              referralFee: number;
              amount: {
                __typename?: "ModuleFeeAmount";
                value: string;
                asset: {
                  __typename?: "Erc20";
                  name: string;
                  symbol: string;
                  decimals: number;
                  address: any;
                };
              };
            }
          | {
              __typename: "LimitedTimedFeeCollectModuleSettings";
              type: CollectModules;
              collectLimit: string;
              recipient: any;
              referralFee: number;
              endTimestamp: any;
              amount: {
                __typename?: "ModuleFeeAmount";
                value: string;
                asset: {
                  __typename?: "Erc20";
                  name: string;
                  symbol: string;
                  decimals: number;
                  address: any;
                };
              };
            }
          | { __typename: "MultirecipientFeeCollectModuleSettings" }
          | { __typename: "RevertCollectModuleSettings"; type: CollectModules }
          | {
              __typename: "SimpleCollectModuleSettings";
              type: CollectModules;
              contractAddress: any;
              followerOnly: boolean;
              optionalCollectLimit?: string | null;
              optionalEndTimestamp?: any | null;
              fee?: {
                __typename?: "ModuleFee";
                recipient: any;
                referralFee: number;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              } | null;
            }
          | {
              __typename: "TimedFeeCollectModuleSettings";
              type: CollectModules;
              recipient: any;
              referralFee: number;
              endTimestamp: any;
              amount: {
                __typename?: "ModuleFeeAmount";
                value: string;
                asset: {
                  __typename?: "Erc20";
                  name: string;
                  symbol: string;
                  decimals: number;
                  address: any;
                };
              };
            }
          | {
              __typename: "UnknownCollectModuleSettings";
              type: CollectModules;
              contractAddress: any;
              collectModuleReturnData: any;
            };
        stats: {
          __typename?: "PublicationStats";
          totalAmountOfComments: number;
          totalAmountOfCollects: number;
          totalAmountOfMirrors: number;
          totalDownvotes: number;
          totalUpvotes: number;
        };
        metadata: {
          __typename?: "MetadataOutput";
          name?: string | null;
          description?: any | null;
          content?: any | null;
          mainContentFocus: PublicationMainFocus;
          contentWarning?: PublicationContentWarning | null;
          tags: Array<string>;
          cover?: {
            __typename?: "MediaSet";
            onChain: { __typename?: "Media"; url: any };
            original: { __typename?: "Media"; url: any };
            optimized?: { __typename?: "Media"; url: any } | null;
          } | null;
          media: Array<{
            __typename?: "MediaSet";
            original: { __typename?: "Media"; url: any; mimeType?: any | null };
            onChain: { __typename?: "Media"; url: any };
            optimized?: { __typename?: "Media"; url: any } | null;
          }>;
          attributes: Array<{
            __typename?: "MetadataAttributeOutput";
            value?: string | null;
            traitType?: string | null;
          }>;
        };
      };
};

export type PostFieldsFragment = {
  __typename?: "Post";
  id: any;
  reaction?: ReactionTypes | null;
  collectNftAddress?: any | null;
  onChainContentURI: string;
  isGated: boolean;
  isDataAvailability: boolean;
  dataAvailabilityProofs?: string | null;
  hidden: boolean;
  hasCollectedByMe: boolean;
  createdAt: any;
  appId?: any | null;
  profile: {
    __typename?: "Profile";
    id: any;
    name?: string | null;
    handle: any;
    bio?: string | null;
    ownedBy: any;
    isDefault: boolean;
    interests?: Array<any> | null;
    isFollowedByMe: boolean;
    dispatcher?: { __typename?: "Dispatcher"; canUseRelay: boolean } | null;
    attributes?: Array<{
      __typename?: "Attribute";
      key: string;
      value: string;
    }> | null;
    stats: {
      __typename?: "ProfileStats";
      totalFollowers: number;
      totalFollowing: number;
      totalPosts: number;
      totalComments: number;
      totalMirrors: number;
      totalPublications: number;
      totalCollects: number;
    };
    coverPicture?:
      | {
          __typename?: "MediaSet";
          original: { __typename?: "Media"; url: any };
        }
      | { __typename?: "NftImage" }
      | null;
    picture?:
      | {
          __typename?: "MediaSet";
          original: { __typename?: "Media"; url: any };
        }
      | { __typename?: "NftImage"; uri: any }
      | null;
    followModule?:
      | { __typename: "FeeFollowModuleSettings" }
      | { __typename: "ProfileFollowModuleSettings" }
      | { __typename: "RevertFollowModuleSettings" }
      | { __typename: "UnknownFollowModuleSettings" }
      | null;
  };
  referenceModule?:
    | { __typename: "DegreesOfSeparationReferenceModuleSettings" }
    | { __typename: "FollowOnlyReferenceModuleSettings" }
    | { __typename: "UnknownReferenceModuleSettings" }
    | null;
  canComment: { __typename?: "CanCommentResponse"; result: boolean };
  canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
  collectModule:
    | { __typename: "AaveFeeCollectModuleSettings" }
    | { __typename: "ERC4626FeeCollectModuleSettings" }
    | {
        __typename: "FeeCollectModuleSettings";
        type: CollectModules;
        recipient: any;
        referralFee: number;
        amount: {
          __typename?: "ModuleFeeAmount";
          value: string;
          asset: {
            __typename?: "Erc20";
            name: string;
            symbol: string;
            decimals: number;
            address: any;
          };
        };
      }
    | {
        __typename: "FreeCollectModuleSettings";
        type: CollectModules;
        followerOnly: boolean;
        contractAddress: any;
      }
    | {
        __typename: "LimitedFeeCollectModuleSettings";
        type: CollectModules;
        collectLimit: string;
        recipient: any;
        referralFee: number;
        amount: {
          __typename?: "ModuleFeeAmount";
          value: string;
          asset: {
            __typename?: "Erc20";
            name: string;
            symbol: string;
            decimals: number;
            address: any;
          };
        };
      }
    | {
        __typename: "LimitedTimedFeeCollectModuleSettings";
        type: CollectModules;
        collectLimit: string;
        recipient: any;
        referralFee: number;
        endTimestamp: any;
        amount: {
          __typename?: "ModuleFeeAmount";
          value: string;
          asset: {
            __typename?: "Erc20";
            name: string;
            symbol: string;
            decimals: number;
            address: any;
          };
        };
      }
    | { __typename: "MultirecipientFeeCollectModuleSettings" }
    | { __typename: "RevertCollectModuleSettings"; type: CollectModules }
    | {
        __typename: "SimpleCollectModuleSettings";
        type: CollectModules;
        contractAddress: any;
        followerOnly: boolean;
        optionalCollectLimit?: string | null;
        optionalEndTimestamp?: any | null;
        fee?: {
          __typename?: "ModuleFee";
          recipient: any;
          referralFee: number;
          amount: {
            __typename?: "ModuleFeeAmount";
            value: string;
            asset: {
              __typename?: "Erc20";
              name: string;
              symbol: string;
              decimals: number;
              address: any;
            };
          };
        } | null;
      }
    | {
        __typename: "TimedFeeCollectModuleSettings";
        type: CollectModules;
        recipient: any;
        referralFee: number;
        endTimestamp: any;
        amount: {
          __typename?: "ModuleFeeAmount";
          value: string;
          asset: {
            __typename?: "Erc20";
            name: string;
            symbol: string;
            decimals: number;
            address: any;
          };
        };
      }
    | {
        __typename: "UnknownCollectModuleSettings";
        type: CollectModules;
        contractAddress: any;
        collectModuleReturnData: any;
      };
  stats: {
    __typename?: "PublicationStats";
    totalAmountOfComments: number;
    totalAmountOfCollects: number;
    totalAmountOfMirrors: number;
    totalDownvotes: number;
    totalUpvotes: number;
  };
  metadata: {
    __typename?: "MetadataOutput";
    name?: string | null;
    description?: any | null;
    content?: any | null;
    mainContentFocus: PublicationMainFocus;
    contentWarning?: PublicationContentWarning | null;
    tags: Array<string>;
    cover?: {
      __typename?: "MediaSet";
      onChain: { __typename?: "Media"; url: any };
      original: { __typename?: "Media"; url: any };
      optimized?: { __typename?: "Media"; url: any } | null;
    } | null;
    media: Array<{
      __typename?: "MediaSet";
      original: { __typename?: "Media"; url: any; mimeType?: any | null };
      onChain: { __typename?: "Media"; url: any };
      optimized?: { __typename?: "Media"; url: any } | null;
    }>;
    attributes: Array<{
      __typename?: "MetadataAttributeOutput";
      value?: string | null;
      traitType?: string | null;
    }>;
  };
};

export type ProfileFieldsFragment = {
  __typename?: "Profile";
  id: any;
  name?: string | null;
  handle: any;
  bio?: string | null;
  ownedBy: any;
  isDefault: boolean;
  interests?: Array<any> | null;
  isFollowedByMe: boolean;
  dispatcher?: { __typename?: "Dispatcher"; canUseRelay: boolean } | null;
  attributes?: Array<{
    __typename?: "Attribute";
    key: string;
    value: string;
  }> | null;
  stats: {
    __typename?: "ProfileStats";
    totalFollowers: number;
    totalFollowing: number;
    totalPosts: number;
    totalComments: number;
    totalMirrors: number;
    totalPublications: number;
    totalCollects: number;
  };
  coverPicture?:
    | { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } }
    | { __typename?: "NftImage" }
    | null;
  picture?:
    | { __typename?: "MediaSet"; original: { __typename?: "Media"; url: any } }
    | { __typename?: "NftImage"; uri: any }
    | null;
  followModule?:
    | { __typename: "FeeFollowModuleSettings" }
    | { __typename: "ProfileFollowModuleSettings" }
    | { __typename: "RevertFollowModuleSettings" }
    | { __typename: "UnknownFollowModuleSettings" }
    | null;
};

type RelayerResult_RelayError_Fragment = {
  __typename?: "RelayError";
  reason: RelayErrorReasons;
};

type RelayerResult_RelayerResult_Fragment = {
  __typename?: "RelayerResult";
  txId: any;
  txHash: any;
};

export type RelayerResultFragment =
  | RelayerResult_RelayError_Fragment
  | RelayerResult_RelayerResult_Fragment;

export type AddProfileInterestMutationVariables = Exact<{
  request: AddProfileInterestsRequest;
}>;

export type AddProfileInterestMutation = {
  __typename?: "Mutation";
  addProfileInterests?: any | null;
};

export type AddReactionMutationVariables = Exact<{
  request: ReactionRequest;
}>;

export type AddReactionMutation = {
  __typename?: "Mutation";
  addReaction?: any | null;
};

export type AuthenticateMutationVariables = Exact<{
  request: SignedAuthChallenge;
}>;

export type AuthenticateMutation = {
  __typename?: "Mutation";
  authenticate: {
    __typename?: "AuthenticationResult";
    accessToken: any;
    refreshToken: any;
  };
};

export type BroadcastMutationVariables = Exact<{
  request: BroadcastRequest;
}>;

export type BroadcastMutation = {
  __typename?: "Mutation";
  broadcast:
    | { __typename?: "RelayError"; reason: RelayErrorReasons }
    | { __typename?: "RelayerResult"; txId: any; txHash: any };
};

export type CreateProfileMutationVariables = Exact<{
  request: CreateProfileRequest;
}>;

export type CreateProfileMutation = {
  __typename?: "Mutation";
  createProfile:
    | { __typename?: "RelayError"; reason: RelayErrorReasons }
    | { __typename?: "RelayerResult"; txHash: any };
};

export type HidePublicationMutationVariables = Exact<{
  request: HidePublicationRequest;
}>;

export type HidePublicationMutation = {
  __typename?: "Mutation";
  hidePublication?: any | null;
};

export type ProxyActionMutationVariables = Exact<{
  request: ProxyActionRequest;
}>;

export type ProxyActionMutation = { __typename?: "Mutation"; proxyAction: any };

export type RefreshTokensMutationVariables = Exact<{
  request: RefreshRequest;
}>;

export type RefreshTokensMutation = {
  __typename?: "Mutation";
  refresh: {
    __typename?: "AuthenticationResult";
    accessToken: any;
    refreshToken: any;
  };
};

export type RemoveProfileInterestMutationVariables = Exact<{
  request: RemoveProfileInterestsRequest;
}>;

export type RemoveProfileInterestMutation = {
  __typename?: "Mutation";
  removeProfileInterests?: any | null;
};

export type RemoveReactionMutationVariables = Exact<{
  request: ReactionRequest;
}>;

export type RemoveReactionMutation = {
  __typename?: "Mutation";
  removeReaction?: any | null;
};

export type ReportPublicationMutationVariables = Exact<{
  request: ReportPublicationRequest;
}>;

export type ReportPublicationMutation = {
  __typename?: "Mutation";
  reportPublication?: any | null;
};

export type CreateCommentViaDispatcherMutationVariables = Exact<{
  request: CreatePublicCommentRequest;
}>;

export type CreateCommentViaDispatcherMutation = {
  __typename?: "Mutation";
  createCommentViaDispatcher:
    | { __typename?: "RelayError"; reason: RelayErrorReasons }
    | { __typename?: "RelayerResult"; txId: any; txHash: any };
};

export type CreateMirrorViaDispatcherMutationVariables = Exact<{
  request: CreateMirrorRequest;
}>;

export type CreateMirrorViaDispatcherMutation = {
  __typename?: "Mutation";
  createMirrorViaDispatcher:
    | { __typename?: "RelayError"; reason: RelayErrorReasons }
    | { __typename?: "RelayerResult"; txId: any; txHash: any };
};

export type CreatePostViaDispatcherMutationVariables = Exact<{
  request: CreatePublicPostRequest;
}>;

export type CreatePostViaDispatcherMutation = {
  __typename?: "Mutation";
  createPostViaDispatcher:
    | { __typename?: "RelayError"; reason: RelayErrorReasons }
    | { __typename?: "RelayerResult"; txId: any; txHash: any };
};

export type CreateSetDispatcherTypedDataMutationVariables = Exact<{
  options?: InputMaybe<TypedDataOptions>;
  request: SetDispatcherRequest;
}>;

export type CreateSetDispatcherTypedDataMutation = {
  __typename?: "Mutation";
  createSetDispatcherTypedData: {
    __typename?: "CreateSetDispatcherBroadcastItemResult";
    id: any;
    typedData: {
      __typename?: "CreateSetDispatcherEIP712TypedData";
      types: {
        __typename?: "CreateSetDispatcherEIP712TypedDataTypes";
        SetDispatcherWithSig: Array<{
          __typename?: "EIP712TypedDataField";
          name: string;
          type: string;
        }>;
      };
      domain: {
        __typename?: "EIP712TypedDataDomain";
        name: string;
        chainId: any;
        version: string;
        verifyingContract: any;
      };
      value: {
        __typename?: "CreateSetDispatcherEIP712TypedDataValue";
        nonce: any;
        deadline: any;
        profileId: any;
        dispatcher: any;
      };
    };
  };
};

export type CreateSetProfileImageUriViaDispatcherMutationVariables = Exact<{
  request: UpdateProfileImageRequest;
}>;

export type CreateSetProfileImageUriViaDispatcherMutation = {
  __typename?: "Mutation";
  createSetProfileImageURIViaDispatcher:
    | { __typename?: "RelayError"; reason: RelayErrorReasons }
    | { __typename?: "RelayerResult"; txId: any; txHash: any };
};

export type CreateSetProfileMetadataViaDispatcherMutationVariables = Exact<{
  request: CreatePublicSetProfileMetadataUriRequest;
}>;

export type CreateSetProfileMetadataViaDispatcherMutation = {
  __typename?: "Mutation";
  createSetProfileMetadataViaDispatcher:
    | { __typename?: "RelayError"; reason: RelayErrorReasons }
    | { __typename?: "RelayerResult"; txId: any; txHash: any };
};

export type CreateBurnProfileTypedDataMutationVariables = Exact<{
  request: BurnProfileRequest;
}>;

export type CreateBurnProfileTypedDataMutation = {
  __typename?: "Mutation";
  createBurnProfileTypedData: {
    __typename?: "CreateBurnProfileBroadcastItemResult";
    id: any;
    expiresAt: any;
    typedData: {
      __typename?: "CreateBurnEIP712TypedData";
      domain: {
        __typename?: "EIP712TypedDataDomain";
        name: string;
        chainId: any;
        version: string;
        verifyingContract: any;
      };
      types: {
        __typename?: "CreateBurnEIP712TypedDataTypes";
        BurnWithSig: Array<{
          __typename?: "EIP712TypedDataField";
          name: string;
          type: string;
        }>;
      };
      value: {
        __typename?: "CreateBurnEIP712TypedDataValue";
        nonce: any;
        deadline: any;
        tokenId: string;
      };
    };
  };
};

export type CreateCollectTypedDataMutationVariables = Exact<{
  options?: InputMaybe<TypedDataOptions>;
  request: CreateCollectRequest;
}>;

export type CreateCollectTypedDataMutation = {
  __typename?: "Mutation";
  createCollectTypedData: {
    __typename?: "CreateCollectBroadcastItemResult";
    id: any;
    expiresAt: any;
    typedData: {
      __typename?: "CreateCollectEIP712TypedData";
      types: {
        __typename?: "CreateCollectEIP712TypedDataTypes";
        CollectWithSig: Array<{
          __typename?: "EIP712TypedDataField";
          name: string;
          type: string;
        }>;
      };
      domain: {
        __typename?: "EIP712TypedDataDomain";
        name: string;
        chainId: any;
        version: string;
        verifyingContract: any;
      };
      value: {
        __typename?: "CreateCollectEIP712TypedDataValue";
        nonce: any;
        deadline: any;
        profileId: any;
        pubId: any;
        data: any;
      };
    };
  };
};

export type CreateCommentTypedDataMutationVariables = Exact<{
  options?: InputMaybe<TypedDataOptions>;
  request: CreatePublicCommentRequest;
}>;

export type CreateCommentTypedDataMutation = {
  __typename?: "Mutation";
  createCommentTypedData: {
    __typename?: "CreateCommentBroadcastItemResult";
    id: any;
    expiresAt: any;
    typedData: {
      __typename?: "CreateCommentEIP712TypedData";
      types: {
        __typename?: "CreateCommentEIP712TypedDataTypes";
        CommentWithSig: Array<{
          __typename?: "EIP712TypedDataField";
          name: string;
          type: string;
        }>;
      };
      domain: {
        __typename?: "EIP712TypedDataDomain";
        name: string;
        chainId: any;
        version: string;
        verifyingContract: any;
      };
      value: {
        __typename?: "CreateCommentEIP712TypedDataValue";
        nonce: any;
        deadline: any;
        profileId: any;
        profileIdPointed: any;
        pubIdPointed: any;
        contentURI: any;
        collectModule: any;
        collectModuleInitData: any;
        referenceModule: any;
        referenceModuleData: any;
        referenceModuleInitData: any;
      };
    };
  };
};

export type CreateFollowTypedDataMutationVariables = Exact<{
  options?: InputMaybe<TypedDataOptions>;
  request: FollowRequest;
}>;

export type CreateFollowTypedDataMutation = {
  __typename?: "Mutation";
  createFollowTypedData: {
    __typename?: "CreateFollowBroadcastItemResult";
    id: any;
    expiresAt: any;
    typedData: {
      __typename?: "CreateFollowEIP712TypedData";
      domain: {
        __typename?: "EIP712TypedDataDomain";
        name: string;
        chainId: any;
        version: string;
        verifyingContract: any;
      };
      types: {
        __typename?: "CreateFollowEIP712TypedDataTypes";
        FollowWithSig: Array<{
          __typename?: "EIP712TypedDataField";
          name: string;
          type: string;
        }>;
      };
      value: {
        __typename?: "CreateFollowEIP712TypedDataValue";
        nonce: any;
        deadline: any;
        profileIds: Array<any>;
        datas: Array<any>;
      };
    };
  };
};

export type CreateMirrorTypedDataMutationVariables = Exact<{
  options?: InputMaybe<TypedDataOptions>;
  request: CreateMirrorRequest;
}>;

export type CreateMirrorTypedDataMutation = {
  __typename?: "Mutation";
  createMirrorTypedData: {
    __typename?: "CreateMirrorBroadcastItemResult";
    id: any;
    expiresAt: any;
    typedData: {
      __typename?: "CreateMirrorEIP712TypedData";
      types: {
        __typename?: "CreateMirrorEIP712TypedDataTypes";
        MirrorWithSig: Array<{
          __typename?: "EIP712TypedDataField";
          name: string;
          type: string;
        }>;
      };
      domain: {
        __typename?: "EIP712TypedDataDomain";
        name: string;
        chainId: any;
        version: string;
        verifyingContract: any;
      };
      value: {
        __typename?: "CreateMirrorEIP712TypedDataValue";
        nonce: any;
        deadline: any;
        profileId: any;
        profileIdPointed: any;
        pubIdPointed: any;
        referenceModule: any;
        referenceModuleData: any;
        referenceModuleInitData: any;
      };
    };
  };
};

export type CreatePostTypedDataMutationVariables = Exact<{
  request: CreatePublicPostRequest;
}>;

export type CreatePostTypedDataMutation = {
  __typename?: "Mutation";
  createPostTypedData: {
    __typename?: "CreatePostBroadcastItemResult";
    id: any;
    expiresAt: any;
    typedData: {
      __typename?: "CreatePostEIP712TypedData";
      types: {
        __typename?: "CreatePostEIP712TypedDataTypes";
        PostWithSig: Array<{
          __typename?: "EIP712TypedDataField";
          name: string;
          type: string;
        }>;
      };
      domain: {
        __typename?: "EIP712TypedDataDomain";
        name: string;
        chainId: any;
        version: string;
        verifyingContract: any;
      };
      value: {
        __typename?: "CreatePostEIP712TypedDataValue";
        nonce: any;
        deadline: any;
        profileId: any;
        contentURI: any;
        collectModule: any;
        collectModuleInitData: any;
        referenceModule: any;
        referenceModuleInitData: any;
      };
    };
  };
};

export type CreateSetFollowModuleTypedDataMutationVariables = Exact<{
  options?: InputMaybe<TypedDataOptions>;
  request: CreateSetFollowModuleRequest;
}>;

export type CreateSetFollowModuleTypedDataMutation = {
  __typename?: "Mutation";
  createSetFollowModuleTypedData: {
    __typename?: "CreateSetFollowModuleBroadcastItemResult";
    id: any;
    expiresAt: any;
    typedData: {
      __typename?: "CreateSetFollowModuleEIP712TypedData";
      types: {
        __typename?: "CreateSetFollowModuleEIP712TypedDataTypes";
        SetFollowModuleWithSig: Array<{
          __typename?: "EIP712TypedDataField";
          name: string;
          type: string;
        }>;
      };
      domain: {
        __typename?: "EIP712TypedDataDomain";
        name: string;
        chainId: any;
        version: string;
        verifyingContract: any;
      };
      value: {
        __typename?: "CreateSetFollowModuleEIP712TypedDataValue";
        nonce: any;
        deadline: any;
        profileId: any;
        followModule: any;
        followModuleInitData: any;
      };
    };
  };
};

export type CreateSetProfileImageUriTypedDataMutationVariables = Exact<{
  options?: InputMaybe<TypedDataOptions>;
  request: UpdateProfileImageRequest;
}>;

export type CreateSetProfileImageUriTypedDataMutation = {
  __typename?: "Mutation";
  createSetProfileImageURITypedData: {
    __typename?: "CreateSetProfileImageUriBroadcastItemResult";
    id: any;
    expiresAt: any;
    typedData: {
      __typename?: "CreateSetProfileImageUriEIP712TypedData";
      domain: {
        __typename?: "EIP712TypedDataDomain";
        name: string;
        chainId: any;
        version: string;
        verifyingContract: any;
      };
      types: {
        __typename?: "CreateSetProfileImageUriEIP712TypedDataTypes";
        SetProfileImageURIWithSig: Array<{
          __typename?: "EIP712TypedDataField";
          name: string;
          type: string;
        }>;
      };
      value: {
        __typename?: "CreateSetProfileImageUriEIP712TypedDataValue";
        nonce: any;
        deadline: any;
        imageURI: any;
        profileId: any;
      };
    };
  };
};

export type CreateSetProfileMetadataTypedDataMutationVariables = Exact<{
  request: CreatePublicSetProfileMetadataUriRequest;
}>;

export type CreateSetProfileMetadataTypedDataMutation = {
  __typename?: "Mutation";
  createSetProfileMetadataTypedData: {
    __typename?: "CreateSetProfileMetadataURIBroadcastItemResult";
    id: any;
    expiresAt: any;
    typedData: {
      __typename?: "CreateSetProfileMetadataURIEIP712TypedData";
      types: {
        __typename?: "CreateSetProfileMetadataURIEIP712TypedDataTypes";
        SetProfileMetadataURIWithSig: Array<{
          __typename?: "EIP712TypedDataField";
          name: string;
          type: string;
        }>;
      };
      domain: {
        __typename?: "EIP712TypedDataDomain";
        name: string;
        chainId: any;
        version: string;
        verifyingContract: any;
      };
      value: {
        __typename?: "CreateSetProfileMetadataURIEIP712TypedDataValue";
        nonce: any;
        deadline: any;
        profileId: any;
        metadata: any;
      };
    };
  };
};

export type AllFollowersQueryVariables = Exact<{
  request: FollowersRequest;
}>;

export type AllFollowersQuery = {
  __typename?: "Query";
  followers: {
    __typename?: "PaginatedFollowersResult";
    items: Array<{
      __typename?: "Follower";
      totalAmountOfTimesFollowed: number;
      wallet: {
        __typename?: "Wallet";
        address: any;
        defaultProfile?: {
          __typename?: "Profile";
          id: any;
          name?: string | null;
          handle: any;
          bio?: string | null;
          ownedBy: any;
          isDefault: boolean;
          interests?: Array<any> | null;
          isFollowedByMe: boolean;
          dispatcher?: {
            __typename?: "Dispatcher";
            canUseRelay: boolean;
          } | null;
          attributes?: Array<{
            __typename?: "Attribute";
            key: string;
            value: string;
          }> | null;
          stats: {
            __typename?: "ProfileStats";
            totalFollowers: number;
            totalFollowing: number;
            totalPosts: number;
            totalComments: number;
            totalMirrors: number;
            totalPublications: number;
            totalCollects: number;
          };
          coverPicture?:
            | {
                __typename?: "MediaSet";
                original: { __typename?: "Media"; url: any };
              }
            | { __typename?: "NftImage" }
            | null;
          picture?:
            | {
                __typename?: "MediaSet";
                original: { __typename?: "Media"; url: any };
              }
            | { __typename?: "NftImage"; uri: any }
            | null;
          followModule?:
            | { __typename: "FeeFollowModuleSettings" }
            | { __typename: "ProfileFollowModuleSettings" }
            | { __typename: "RevertFollowModuleSettings" }
            | { __typename: "UnknownFollowModuleSettings" }
            | null;
        } | null;
      };
    }>;
    pageInfo: {
      __typename?: "PaginatedResultInfo";
      prev?: any | null;
      next?: any | null;
      totalCount?: number | null;
    };
  };
};

export type AllFollowingQueryVariables = Exact<{
  request: FollowingRequest;
}>;

export type AllFollowingQuery = {
  __typename?: "Query";
  following: {
    __typename?: "PaginatedFollowingResult";
    items: Array<{
      __typename?: "Following";
      totalAmountOfTimesFollowing: number;
      profile: {
        __typename?: "Profile";
        id: any;
        name?: string | null;
        handle: any;
        bio?: string | null;
        ownedBy: any;
        isDefault: boolean;
        interests?: Array<any> | null;
        isFollowedByMe: boolean;
        dispatcher?: { __typename?: "Dispatcher"; canUseRelay: boolean } | null;
        attributes?: Array<{
          __typename?: "Attribute";
          key: string;
          value: string;
        }> | null;
        stats: {
          __typename?: "ProfileStats";
          totalFollowers: number;
          totalFollowing: number;
          totalPosts: number;
          totalComments: number;
          totalMirrors: number;
          totalPublications: number;
          totalCollects: number;
        };
        coverPicture?:
          | {
              __typename?: "MediaSet";
              original: { __typename?: "Media"; url: any };
            }
          | { __typename?: "NftImage" }
          | null;
        picture?:
          | {
              __typename?: "MediaSet";
              original: { __typename?: "Media"; url: any };
            }
          | { __typename?: "NftImage"; uri: any }
          | null;
        followModule?:
          | { __typename: "FeeFollowModuleSettings" }
          | { __typename: "ProfileFollowModuleSettings" }
          | { __typename: "RevertFollowModuleSettings" }
          | { __typename: "UnknownFollowModuleSettings" }
          | null;
      };
    }>;
    pageInfo: {
      __typename?: "PaginatedResultInfo";
      prev?: any | null;
      next?: any | null;
      totalCount?: number | null;
    };
  };
};

export type AllProfilesQueryVariables = Exact<{
  request: ProfileQueryRequest;
}>;

export type AllProfilesQuery = {
  __typename?: "Query";
  profiles: {
    __typename?: "PaginatedProfileResult";
    items: Array<{
      __typename?: "Profile";
      id: any;
      name?: string | null;
      handle: any;
      bio?: string | null;
      ownedBy: any;
      isDefault: boolean;
      interests?: Array<any> | null;
      isFollowedByMe: boolean;
      dispatcher?: { __typename?: "Dispatcher"; canUseRelay: boolean } | null;
      attributes?: Array<{
        __typename?: "Attribute";
        key: string;
        value: string;
      }> | null;
      stats: {
        __typename?: "ProfileStats";
        totalFollowers: number;
        totalFollowing: number;
        totalPosts: number;
        totalComments: number;
        totalMirrors: number;
        totalPublications: number;
        totalCollects: number;
      };
      coverPicture?:
        | {
            __typename?: "MediaSet";
            original: { __typename?: "Media"; url: any };
          }
        | { __typename?: "NftImage" }
        | null;
      picture?:
        | {
            __typename?: "MediaSet";
            original: { __typename?: "Media"; url: any };
          }
        | { __typename?: "NftImage"; uri: any }
        | null;
      followModule?:
        | { __typename: "FeeFollowModuleSettings" }
        | { __typename: "ProfileFollowModuleSettings" }
        | { __typename: "RevertFollowModuleSettings" }
        | { __typename: "UnknownFollowModuleSettings" }
        | null;
    }>;
    pageInfo: { __typename?: "PaginatedResultInfo"; next?: any | null };
  };
};

export type AllPublicationsQueryVariables = Exact<{
  request: PublicationsQueryRequest;
  reactionRequest?: InputMaybe<ReactionFieldResolverRequest>;
  channelId?: InputMaybe<Scalars["ProfileId"]>;
}>;

export type AllPublicationsQuery = {
  __typename?: "Query";
  publications: {
    __typename?: "PaginatedPublicationResult";
    items: Array<
      | { __typename?: "Comment" }
      | {
          __typename?: "Mirror";
          id: any;
          reaction?: ReactionTypes | null;
          collectNftAddress?: any | null;
          onChainContentURI: string;
          hidden: boolean;
          isDataAvailability: boolean;
          dataAvailabilityProofs?: string | null;
          hasCollectedByMe: boolean;
          createdAt: any;
          appId?: any | null;
          profile: {
            __typename?: "Profile";
            id: any;
            name?: string | null;
            handle: any;
            bio?: string | null;
            ownedBy: any;
            isDefault: boolean;
            interests?: Array<any> | null;
            isFollowedByMe: boolean;
            dispatcher?: {
              __typename?: "Dispatcher";
              canUseRelay: boolean;
            } | null;
            attributes?: Array<{
              __typename?: "Attribute";
              key: string;
              value: string;
            }> | null;
            stats: {
              __typename?: "ProfileStats";
              totalFollowers: number;
              totalFollowing: number;
              totalPosts: number;
              totalComments: number;
              totalMirrors: number;
              totalPublications: number;
              totalCollects: number;
            };
            coverPicture?:
              | {
                  __typename?: "MediaSet";
                  original: { __typename?: "Media"; url: any };
                }
              | { __typename?: "NftImage" }
              | null;
            picture?:
              | {
                  __typename?: "MediaSet";
                  original: { __typename?: "Media"; url: any };
                }
              | { __typename?: "NftImage"; uri: any }
              | null;
            followModule?:
              | { __typename: "FeeFollowModuleSettings" }
              | { __typename: "ProfileFollowModuleSettings" }
              | { __typename: "RevertFollowModuleSettings" }
              | { __typename: "UnknownFollowModuleSettings" }
              | null;
          };
          referenceModule?:
            | { __typename: "DegreesOfSeparationReferenceModuleSettings" }
            | { __typename: "FollowOnlyReferenceModuleSettings" }
            | { __typename: "UnknownReferenceModuleSettings" }
            | null;
          canComment: { __typename?: "CanCommentResponse"; result: boolean };
          canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
          collectModule:
            | { __typename: "AaveFeeCollectModuleSettings" }
            | { __typename: "ERC4626FeeCollectModuleSettings" }
            | {
                __typename: "FeeCollectModuleSettings";
                type: CollectModules;
                recipient: any;
                referralFee: number;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              }
            | {
                __typename: "FreeCollectModuleSettings";
                type: CollectModules;
                followerOnly: boolean;
                contractAddress: any;
              }
            | {
                __typename: "LimitedFeeCollectModuleSettings";
                type: CollectModules;
                collectLimit: string;
                recipient: any;
                referralFee: number;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              }
            | {
                __typename: "LimitedTimedFeeCollectModuleSettings";
                type: CollectModules;
                collectLimit: string;
                recipient: any;
                referralFee: number;
                endTimestamp: any;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              }
            | { __typename: "MultirecipientFeeCollectModuleSettings" }
            | {
                __typename: "RevertCollectModuleSettings";
                type: CollectModules;
              }
            | {
                __typename: "SimpleCollectModuleSettings";
                type: CollectModules;
                contractAddress: any;
                followerOnly: boolean;
                optionalCollectLimit?: string | null;
                optionalEndTimestamp?: any | null;
                fee?: {
                  __typename?: "ModuleFee";
                  recipient: any;
                  referralFee: number;
                  amount: {
                    __typename?: "ModuleFeeAmount";
                    value: string;
                    asset: {
                      __typename?: "Erc20";
                      name: string;
                      symbol: string;
                      decimals: number;
                      address: any;
                    };
                  };
                } | null;
              }
            | {
                __typename: "TimedFeeCollectModuleSettings";
                type: CollectModules;
                recipient: any;
                referralFee: number;
                endTimestamp: any;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              }
            | {
                __typename: "UnknownCollectModuleSettings";
                type: CollectModules;
                contractAddress: any;
                collectModuleReturnData: any;
              };
          stats: {
            __typename?: "PublicationStats";
            totalUpvotes: number;
            totalAmountOfMirrors: number;
            totalAmountOfCollects: number;
            totalAmountOfComments: number;
          };
          metadata: {
            __typename?: "MetadataOutput";
            name?: string | null;
            description?: any | null;
            content?: any | null;
            mainContentFocus: PublicationMainFocus;
            contentWarning?: PublicationContentWarning | null;
            tags: Array<string>;
            cover?: {
              __typename?: "MediaSet";
              onChain: { __typename?: "Media"; url: any };
              original: { __typename?: "Media"; url: any };
              optimized?: { __typename?: "Media"; url: any } | null;
            } | null;
            media: Array<{
              __typename?: "MediaSet";
              original: {
                __typename?: "Media";
                url: any;
                mimeType?: any | null;
              };
              onChain: { __typename?: "Media"; url: any };
              optimized?: { __typename?: "Media"; url: any } | null;
            }>;
            attributes: Array<{
              __typename?: "MetadataAttributeOutput";
              value?: string | null;
              traitType?: string | null;
            }>;
          };
          mirrorOf:
            | {
                __typename?: "Comment";
                id: any;
                reaction?: ReactionTypes | null;
                collectNftAddress?: any | null;
                onChainContentURI: string;
                hidden: boolean;
                hasCollectedByMe: boolean;
                isDataAvailability: boolean;
                createdAt: any;
                appId?: any | null;
                profile: {
                  __typename?: "Profile";
                  id: any;
                  name?: string | null;
                  handle: any;
                  bio?: string | null;
                  ownedBy: any;
                  isDefault: boolean;
                  interests?: Array<any> | null;
                  isFollowedByMe: boolean;
                  dispatcher?: {
                    __typename?: "Dispatcher";
                    canUseRelay: boolean;
                  } | null;
                  attributes?: Array<{
                    __typename?: "Attribute";
                    key: string;
                    value: string;
                  }> | null;
                  stats: {
                    __typename?: "ProfileStats";
                    totalFollowers: number;
                    totalFollowing: number;
                    totalPosts: number;
                    totalComments: number;
                    totalMirrors: number;
                    totalPublications: number;
                    totalCollects: number;
                  };
                  coverPicture?:
                    | {
                        __typename?: "MediaSet";
                        original: { __typename?: "Media"; url: any };
                      }
                    | { __typename?: "NftImage" }
                    | null;
                  picture?:
                    | {
                        __typename?: "MediaSet";
                        original: { __typename?: "Media"; url: any };
                      }
                    | { __typename?: "NftImage"; uri: any }
                    | null;
                  followModule?:
                    | { __typename: "FeeFollowModuleSettings" }
                    | { __typename: "ProfileFollowModuleSettings" }
                    | { __typename: "RevertFollowModuleSettings" }
                    | { __typename: "UnknownFollowModuleSettings" }
                    | null;
                };
                collectModule:
                  | { __typename: "AaveFeeCollectModuleSettings" }
                  | { __typename: "ERC4626FeeCollectModuleSettings" }
                  | {
                      __typename: "FeeCollectModuleSettings";
                      type: CollectModules;
                      recipient: any;
                      referralFee: number;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          name: string;
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    }
                  | {
                      __typename: "FreeCollectModuleSettings";
                      type: CollectModules;
                      followerOnly: boolean;
                      contractAddress: any;
                    }
                  | {
                      __typename: "LimitedFeeCollectModuleSettings";
                      type: CollectModules;
                      collectLimit: string;
                      recipient: any;
                      referralFee: number;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          name: string;
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    }
                  | {
                      __typename: "LimitedTimedFeeCollectModuleSettings";
                      type: CollectModules;
                      collectLimit: string;
                      recipient: any;
                      referralFee: number;
                      endTimestamp: any;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          name: string;
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    }
                  | { __typename: "MultirecipientFeeCollectModuleSettings" }
                  | {
                      __typename: "RevertCollectModuleSettings";
                      type: CollectModules;
                    }
                  | {
                      __typename: "SimpleCollectModuleSettings";
                      type: CollectModules;
                      contractAddress: any;
                      followerOnly: boolean;
                      optionalCollectLimit?: string | null;
                      optionalEndTimestamp?: any | null;
                      fee?: {
                        __typename?: "ModuleFee";
                        recipient: any;
                        referralFee: number;
                        amount: {
                          __typename?: "ModuleFeeAmount";
                          value: string;
                          asset: {
                            __typename?: "Erc20";
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                          };
                        };
                      } | null;
                    }
                  | {
                      __typename: "TimedFeeCollectModuleSettings";
                      type: CollectModules;
                      recipient: any;
                      referralFee: number;
                      endTimestamp: any;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          name: string;
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    }
                  | {
                      __typename: "UnknownCollectModuleSettings";
                      type: CollectModules;
                      contractAddress: any;
                      collectModuleReturnData: any;
                    };
                referenceModule?:
                  | { __typename: "DegreesOfSeparationReferenceModuleSettings" }
                  | { __typename: "FollowOnlyReferenceModuleSettings" }
                  | { __typename: "UnknownReferenceModuleSettings" }
                  | null;
                canComment: {
                  __typename?: "CanCommentResponse";
                  result: boolean;
                };
                canMirror: {
                  __typename?: "CanMirrorResponse";
                  result: boolean;
                };
                stats: {
                  __typename?: "PublicationStats";
                  totalAmountOfComments: number;
                  totalAmountOfCollects: number;
                  totalAmountOfMirrors: number;
                  totalUpvotes: number;
                };
                metadata: {
                  __typename?: "MetadataOutput";
                  name?: string | null;
                  description?: any | null;
                  content?: any | null;
                  mainContentFocus: PublicationMainFocus;
                  contentWarning?: PublicationContentWarning | null;
                  tags: Array<string>;
                  cover?: {
                    __typename?: "MediaSet";
                    onChain: { __typename?: "Media"; url: any };
                    original: { __typename?: "Media"; url: any };
                    optimized?: { __typename?: "Media"; url: any } | null;
                  } | null;
                  media: Array<{
                    __typename?: "MediaSet";
                    original: {
                      __typename?: "Media";
                      url: any;
                      mimeType?: any | null;
                    };
                    onChain: { __typename?: "Media"; url: any };
                    optimized?: { __typename?: "Media"; url: any } | null;
                  }>;
                  attributes: Array<{
                    __typename?: "MetadataAttributeOutput";
                    value?: string | null;
                    traitType?: string | null;
                  }>;
                };
                commentOn?:
                  | { __typename?: "Comment" }
                  | { __typename?: "Mirror" }
                  | {
                      __typename?: "Post";
                      id: any;
                      createdAt: any;
                      appId?: any | null;
                      profile: {
                        __typename?: "Profile";
                        id: any;
                        name?: string | null;
                        handle: any;
                        bio?: string | null;
                        ownedBy: any;
                        isDefault: boolean;
                        interests?: Array<any> | null;
                        isFollowedByMe: boolean;
                        dispatcher?: {
                          __typename?: "Dispatcher";
                          canUseRelay: boolean;
                        } | null;
                        attributes?: Array<{
                          __typename?: "Attribute";
                          key: string;
                          value: string;
                        }> | null;
                        stats: {
                          __typename?: "ProfileStats";
                          totalFollowers: number;
                          totalFollowing: number;
                          totalPosts: number;
                          totalComments: number;
                          totalMirrors: number;
                          totalPublications: number;
                          totalCollects: number;
                        };
                        coverPicture?:
                          | {
                              __typename?: "MediaSet";
                              original: { __typename?: "Media"; url: any };
                            }
                          | { __typename?: "NftImage" }
                          | null;
                        picture?:
                          | {
                              __typename?: "MediaSet";
                              original: { __typename?: "Media"; url: any };
                            }
                          | { __typename?: "NftImage"; uri: any }
                          | null;
                        followModule?:
                          | { __typename: "FeeFollowModuleSettings" }
                          | { __typename: "ProfileFollowModuleSettings" }
                          | { __typename: "RevertFollowModuleSettings" }
                          | { __typename: "UnknownFollowModuleSettings" }
                          | null;
                      };
                      metadata: {
                        __typename?: "MetadataOutput";
                        name?: string | null;
                        description?: any | null;
                        content?: any | null;
                        mainContentFocus: PublicationMainFocus;
                        contentWarning?: PublicationContentWarning | null;
                        tags: Array<string>;
                        cover?: {
                          __typename?: "MediaSet";
                          onChain: { __typename?: "Media"; url: any };
                          original: { __typename?: "Media"; url: any };
                          optimized?: { __typename?: "Media"; url: any } | null;
                        } | null;
                        media: Array<{
                          __typename?: "MediaSet";
                          original: {
                            __typename?: "Media";
                            url: any;
                            mimeType?: any | null;
                          };
                          onChain: { __typename?: "Media"; url: any };
                          optimized?: { __typename?: "Media"; url: any } | null;
                        }>;
                        attributes: Array<{
                          __typename?: "MetadataAttributeOutput";
                          value?: string | null;
                          traitType?: string | null;
                        }>;
                      };
                    }
                  | null;
              }
            | {
                __typename?: "Post";
                id: any;
                reaction?: ReactionTypes | null;
                collectNftAddress?: any | null;
                onChainContentURI: string;
                isGated: boolean;
                isDataAvailability: boolean;
                dataAvailabilityProofs?: string | null;
                hidden: boolean;
                hasCollectedByMe: boolean;
                createdAt: any;
                appId?: any | null;
                profile: {
                  __typename?: "Profile";
                  id: any;
                  name?: string | null;
                  handle: any;
                  bio?: string | null;
                  ownedBy: any;
                  isDefault: boolean;
                  interests?: Array<any> | null;
                  isFollowedByMe: boolean;
                  dispatcher?: {
                    __typename?: "Dispatcher";
                    canUseRelay: boolean;
                  } | null;
                  attributes?: Array<{
                    __typename?: "Attribute";
                    key: string;
                    value: string;
                  }> | null;
                  stats: {
                    __typename?: "ProfileStats";
                    totalFollowers: number;
                    totalFollowing: number;
                    totalPosts: number;
                    totalComments: number;
                    totalMirrors: number;
                    totalPublications: number;
                    totalCollects: number;
                  };
                  coverPicture?:
                    | {
                        __typename?: "MediaSet";
                        original: { __typename?: "Media"; url: any };
                      }
                    | { __typename?: "NftImage" }
                    | null;
                  picture?:
                    | {
                        __typename?: "MediaSet";
                        original: { __typename?: "Media"; url: any };
                      }
                    | { __typename?: "NftImage"; uri: any }
                    | null;
                  followModule?:
                    | { __typename: "FeeFollowModuleSettings" }
                    | { __typename: "ProfileFollowModuleSettings" }
                    | { __typename: "RevertFollowModuleSettings" }
                    | { __typename: "UnknownFollowModuleSettings" }
                    | null;
                };
                referenceModule?:
                  | { __typename: "DegreesOfSeparationReferenceModuleSettings" }
                  | { __typename: "FollowOnlyReferenceModuleSettings" }
                  | { __typename: "UnknownReferenceModuleSettings" }
                  | null;
                canComment: {
                  __typename?: "CanCommentResponse";
                  result: boolean;
                };
                canMirror: {
                  __typename?: "CanMirrorResponse";
                  result: boolean;
                };
                collectModule:
                  | { __typename: "AaveFeeCollectModuleSettings" }
                  | { __typename: "ERC4626FeeCollectModuleSettings" }
                  | {
                      __typename: "FeeCollectModuleSettings";
                      type: CollectModules;
                      recipient: any;
                      referralFee: number;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          name: string;
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    }
                  | {
                      __typename: "FreeCollectModuleSettings";
                      type: CollectModules;
                      followerOnly: boolean;
                      contractAddress: any;
                    }
                  | {
                      __typename: "LimitedFeeCollectModuleSettings";
                      type: CollectModules;
                      collectLimit: string;
                      recipient: any;
                      referralFee: number;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          name: string;
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    }
                  | {
                      __typename: "LimitedTimedFeeCollectModuleSettings";
                      type: CollectModules;
                      collectLimit: string;
                      recipient: any;
                      referralFee: number;
                      endTimestamp: any;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          name: string;
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    }
                  | { __typename: "MultirecipientFeeCollectModuleSettings" }
                  | {
                      __typename: "RevertCollectModuleSettings";
                      type: CollectModules;
                    }
                  | {
                      __typename: "SimpleCollectModuleSettings";
                      type: CollectModules;
                      contractAddress: any;
                      followerOnly: boolean;
                      optionalCollectLimit?: string | null;
                      optionalEndTimestamp?: any | null;
                      fee?: {
                        __typename?: "ModuleFee";
                        recipient: any;
                        referralFee: number;
                        amount: {
                          __typename?: "ModuleFeeAmount";
                          value: string;
                          asset: {
                            __typename?: "Erc20";
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                          };
                        };
                      } | null;
                    }
                  | {
                      __typename: "TimedFeeCollectModuleSettings";
                      type: CollectModules;
                      recipient: any;
                      referralFee: number;
                      endTimestamp: any;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          name: string;
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    }
                  | {
                      __typename: "UnknownCollectModuleSettings";
                      type: CollectModules;
                      contractAddress: any;
                      collectModuleReturnData: any;
                    };
                stats: {
                  __typename?: "PublicationStats";
                  totalAmountOfComments: number;
                  totalAmountOfCollects: number;
                  totalAmountOfMirrors: number;
                  totalDownvotes: number;
                  totalUpvotes: number;
                };
                metadata: {
                  __typename?: "MetadataOutput";
                  name?: string | null;
                  description?: any | null;
                  content?: any | null;
                  mainContentFocus: PublicationMainFocus;
                  contentWarning?: PublicationContentWarning | null;
                  tags: Array<string>;
                  cover?: {
                    __typename?: "MediaSet";
                    onChain: { __typename?: "Media"; url: any };
                    original: { __typename?: "Media"; url: any };
                    optimized?: { __typename?: "Media"; url: any } | null;
                  } | null;
                  media: Array<{
                    __typename?: "MediaSet";
                    original: {
                      __typename?: "Media";
                      url: any;
                      mimeType?: any | null;
                    };
                    onChain: { __typename?: "Media"; url: any };
                    optimized?: { __typename?: "Media"; url: any } | null;
                  }>;
                  attributes: Array<{
                    __typename?: "MetadataAttributeOutput";
                    value?: string | null;
                    traitType?: string | null;
                  }>;
                };
              };
        }
      | {
          __typename?: "Post";
          id: any;
          reaction?: ReactionTypes | null;
          collectNftAddress?: any | null;
          onChainContentURI: string;
          isGated: boolean;
          isDataAvailability: boolean;
          dataAvailabilityProofs?: string | null;
          hidden: boolean;
          hasCollectedByMe: boolean;
          createdAt: any;
          appId?: any | null;
          profile: {
            __typename?: "Profile";
            id: any;
            name?: string | null;
            handle: any;
            bio?: string | null;
            ownedBy: any;
            isDefault: boolean;
            interests?: Array<any> | null;
            isFollowedByMe: boolean;
            dispatcher?: {
              __typename?: "Dispatcher";
              canUseRelay: boolean;
            } | null;
            attributes?: Array<{
              __typename?: "Attribute";
              key: string;
              value: string;
            }> | null;
            stats: {
              __typename?: "ProfileStats";
              totalFollowers: number;
              totalFollowing: number;
              totalPosts: number;
              totalComments: number;
              totalMirrors: number;
              totalPublications: number;
              totalCollects: number;
            };
            coverPicture?:
              | {
                  __typename?: "MediaSet";
                  original: { __typename?: "Media"; url: any };
                }
              | { __typename?: "NftImage" }
              | null;
            picture?:
              | {
                  __typename?: "MediaSet";
                  original: { __typename?: "Media"; url: any };
                }
              | { __typename?: "NftImage"; uri: any }
              | null;
            followModule?:
              | { __typename: "FeeFollowModuleSettings" }
              | { __typename: "ProfileFollowModuleSettings" }
              | { __typename: "RevertFollowModuleSettings" }
              | { __typename: "UnknownFollowModuleSettings" }
              | null;
          };
          referenceModule?:
            | { __typename: "DegreesOfSeparationReferenceModuleSettings" }
            | { __typename: "FollowOnlyReferenceModuleSettings" }
            | { __typename: "UnknownReferenceModuleSettings" }
            | null;
          canComment: { __typename?: "CanCommentResponse"; result: boolean };
          canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
          collectModule:
            | { __typename: "AaveFeeCollectModuleSettings" }
            | { __typename: "ERC4626FeeCollectModuleSettings" }
            | {
                __typename: "FeeCollectModuleSettings";
                type: CollectModules;
                recipient: any;
                referralFee: number;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              }
            | {
                __typename: "FreeCollectModuleSettings";
                type: CollectModules;
                followerOnly: boolean;
                contractAddress: any;
              }
            | {
                __typename: "LimitedFeeCollectModuleSettings";
                type: CollectModules;
                collectLimit: string;
                recipient: any;
                referralFee: number;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              }
            | {
                __typename: "LimitedTimedFeeCollectModuleSettings";
                type: CollectModules;
                collectLimit: string;
                recipient: any;
                referralFee: number;
                endTimestamp: any;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              }
            | { __typename: "MultirecipientFeeCollectModuleSettings" }
            | {
                __typename: "RevertCollectModuleSettings";
                type: CollectModules;
              }
            | {
                __typename: "SimpleCollectModuleSettings";
                type: CollectModules;
                contractAddress: any;
                followerOnly: boolean;
                optionalCollectLimit?: string | null;
                optionalEndTimestamp?: any | null;
                fee?: {
                  __typename?: "ModuleFee";
                  recipient: any;
                  referralFee: number;
                  amount: {
                    __typename?: "ModuleFeeAmount";
                    value: string;
                    asset: {
                      __typename?: "Erc20";
                      name: string;
                      symbol: string;
                      decimals: number;
                      address: any;
                    };
                  };
                } | null;
              }
            | {
                __typename: "TimedFeeCollectModuleSettings";
                type: CollectModules;
                recipient: any;
                referralFee: number;
                endTimestamp: any;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              }
            | {
                __typename: "UnknownCollectModuleSettings";
                type: CollectModules;
                contractAddress: any;
                collectModuleReturnData: any;
              };
          stats: {
            __typename?: "PublicationStats";
            totalAmountOfComments: number;
            totalAmountOfCollects: number;
            totalAmountOfMirrors: number;
            totalDownvotes: number;
            totalUpvotes: number;
          };
          metadata: {
            __typename?: "MetadataOutput";
            name?: string | null;
            description?: any | null;
            content?: any | null;
            mainContentFocus: PublicationMainFocus;
            contentWarning?: PublicationContentWarning | null;
            tags: Array<string>;
            cover?: {
              __typename?: "MediaSet";
              onChain: { __typename?: "Media"; url: any };
              original: { __typename?: "Media"; url: any };
              optimized?: { __typename?: "Media"; url: any } | null;
            } | null;
            media: Array<{
              __typename?: "MediaSet";
              original: {
                __typename?: "Media";
                url: any;
                mimeType?: any | null;
              };
              onChain: { __typename?: "Media"; url: any };
              optimized?: { __typename?: "Media"; url: any } | null;
            }>;
            attributes: Array<{
              __typename?: "MetadataAttributeOutput";
              value?: string | null;
              traitType?: string | null;
            }>;
          };
        }
    >;
    pageInfo: { __typename?: "PaginatedResultInfo"; next?: any | null };
  };
};

export type ApprovedModuleAllowanceAmountQueryVariables = Exact<{
  request: ApprovedModuleAllowanceAmountRequest;
}>;

export type ApprovedModuleAllowanceAmountQuery = {
  __typename?: "Query";
  approvedModuleAllowanceAmount: Array<{
    __typename?: "ApprovedAllowanceAmount";
    currency: any;
    module: string;
    allowance: string;
    contractAddress: any;
  }>;
  enabledModuleCurrencies: Array<{
    __typename?: "Erc20";
    name: string;
    symbol: string;
    decimals: number;
    address: any;
  }>;
};

export type ChallengeQueryVariables = Exact<{
  request: ChallengeRequest;
}>;

export type ChallengeQuery = {
  __typename?: "Query";
  challenge: { __typename?: "AuthChallengeResult"; text: string };
};

export type CollectorsQueryVariables = Exact<{
  request: WhoCollectedPublicationRequest;
}>;

export type CollectorsQuery = {
  __typename?: "Query";
  whoCollectedPublication: {
    __typename?: "PaginatedWhoCollectedResult";
    items: Array<{
      __typename?: "Wallet";
      address: any;
      defaultProfile?: {
        __typename?: "Profile";
        id: any;
        name?: string | null;
        handle: any;
        bio?: string | null;
        ownedBy: any;
        isDefault: boolean;
        interests?: Array<any> | null;
        isFollowedByMe: boolean;
        dispatcher?: { __typename?: "Dispatcher"; canUseRelay: boolean } | null;
        attributes?: Array<{
          __typename?: "Attribute";
          key: string;
          value: string;
        }> | null;
        stats: {
          __typename?: "ProfileStats";
          totalFollowers: number;
          totalFollowing: number;
          totalPosts: number;
          totalComments: number;
          totalMirrors: number;
          totalPublications: number;
          totalCollects: number;
        };
        coverPicture?:
          | {
              __typename?: "MediaSet";
              original: { __typename?: "Media"; url: any };
            }
          | { __typename?: "NftImage" }
          | null;
        picture?:
          | {
              __typename?: "MediaSet";
              original: { __typename?: "Media"; url: any };
            }
          | { __typename?: "NftImage"; uri: any }
          | null;
        followModule?:
          | { __typename: "FeeFollowModuleSettings" }
          | { __typename: "ProfileFollowModuleSettings" }
          | { __typename: "RevertFollowModuleSettings" }
          | { __typename: "UnknownFollowModuleSettings" }
          | null;
      } | null;
    }>;
    pageInfo: { __typename?: "PaginatedResultInfo"; next?: any | null };
  };
};

export type CommentsQueryVariables = Exact<{
  request: PublicationsQueryRequest;
  reactionRequest?: InputMaybe<ReactionFieldResolverRequest>;
  channelId?: InputMaybe<Scalars["ProfileId"]>;
}>;

export type CommentsQuery = {
  __typename?: "Query";
  publications: {
    __typename?: "PaginatedPublicationResult";
    items: Array<
      | {
          __typename?: "Comment";
          id: any;
          reaction?: ReactionTypes | null;
          collectNftAddress?: any | null;
          onChainContentURI: string;
          hidden: boolean;
          hasCollectedByMe: boolean;
          isDataAvailability: boolean;
          createdAt: any;
          appId?: any | null;
          profile: {
            __typename?: "Profile";
            id: any;
            name?: string | null;
            handle: any;
            bio?: string | null;
            ownedBy: any;
            isDefault: boolean;
            interests?: Array<any> | null;
            isFollowedByMe: boolean;
            dispatcher?: {
              __typename?: "Dispatcher";
              canUseRelay: boolean;
            } | null;
            attributes?: Array<{
              __typename?: "Attribute";
              key: string;
              value: string;
            }> | null;
            stats: {
              __typename?: "ProfileStats";
              totalFollowers: number;
              totalFollowing: number;
              totalPosts: number;
              totalComments: number;
              totalMirrors: number;
              totalPublications: number;
              totalCollects: number;
            };
            coverPicture?:
              | {
                  __typename?: "MediaSet";
                  original: { __typename?: "Media"; url: any };
                }
              | { __typename?: "NftImage" }
              | null;
            picture?:
              | {
                  __typename?: "MediaSet";
                  original: { __typename?: "Media"; url: any };
                }
              | { __typename?: "NftImage"; uri: any }
              | null;
            followModule?:
              | { __typename: "FeeFollowModuleSettings" }
              | { __typename: "ProfileFollowModuleSettings" }
              | { __typename: "RevertFollowModuleSettings" }
              | { __typename: "UnknownFollowModuleSettings" }
              | null;
          };
          collectModule:
            | { __typename: "AaveFeeCollectModuleSettings" }
            | { __typename: "ERC4626FeeCollectModuleSettings" }
            | {
                __typename: "FeeCollectModuleSettings";
                type: CollectModules;
                recipient: any;
                referralFee: number;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              }
            | {
                __typename: "FreeCollectModuleSettings";
                type: CollectModules;
                followerOnly: boolean;
                contractAddress: any;
              }
            | {
                __typename: "LimitedFeeCollectModuleSettings";
                type: CollectModules;
                collectLimit: string;
                recipient: any;
                referralFee: number;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              }
            | {
                __typename: "LimitedTimedFeeCollectModuleSettings";
                type: CollectModules;
                collectLimit: string;
                recipient: any;
                referralFee: number;
                endTimestamp: any;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              }
            | { __typename: "MultirecipientFeeCollectModuleSettings" }
            | {
                __typename: "RevertCollectModuleSettings";
                type: CollectModules;
              }
            | {
                __typename: "SimpleCollectModuleSettings";
                type: CollectModules;
                contractAddress: any;
                followerOnly: boolean;
                optionalCollectLimit?: string | null;
                optionalEndTimestamp?: any | null;
                fee?: {
                  __typename?: "ModuleFee";
                  recipient: any;
                  referralFee: number;
                  amount: {
                    __typename?: "ModuleFeeAmount";
                    value: string;
                    asset: {
                      __typename?: "Erc20";
                      name: string;
                      symbol: string;
                      decimals: number;
                      address: any;
                    };
                  };
                } | null;
              }
            | {
                __typename: "TimedFeeCollectModuleSettings";
                type: CollectModules;
                recipient: any;
                referralFee: number;
                endTimestamp: any;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              }
            | {
                __typename: "UnknownCollectModuleSettings";
                type: CollectModules;
                contractAddress: any;
                collectModuleReturnData: any;
              };
          referenceModule?:
            | { __typename: "DegreesOfSeparationReferenceModuleSettings" }
            | { __typename: "FollowOnlyReferenceModuleSettings" }
            | { __typename: "UnknownReferenceModuleSettings" }
            | null;
          canComment: { __typename?: "CanCommentResponse"; result: boolean };
          canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
          stats: {
            __typename?: "PublicationStats";
            totalAmountOfComments: number;
            totalAmountOfCollects: number;
            totalAmountOfMirrors: number;
            totalUpvotes: number;
          };
          metadata: {
            __typename?: "MetadataOutput";
            name?: string | null;
            description?: any | null;
            content?: any | null;
            mainContentFocus: PublicationMainFocus;
            contentWarning?: PublicationContentWarning | null;
            tags: Array<string>;
            cover?: {
              __typename?: "MediaSet";
              onChain: { __typename?: "Media"; url: any };
              original: { __typename?: "Media"; url: any };
              optimized?: { __typename?: "Media"; url: any } | null;
            } | null;
            media: Array<{
              __typename?: "MediaSet";
              original: {
                __typename?: "Media";
                url: any;
                mimeType?: any | null;
              };
              onChain: { __typename?: "Media"; url: any };
              optimized?: { __typename?: "Media"; url: any } | null;
            }>;
            attributes: Array<{
              __typename?: "MetadataAttributeOutput";
              value?: string | null;
              traitType?: string | null;
            }>;
          };
          commentOn?:
            | { __typename?: "Comment" }
            | { __typename?: "Mirror" }
            | {
                __typename?: "Post";
                id: any;
                createdAt: any;
                appId?: any | null;
                profile: {
                  __typename?: "Profile";
                  id: any;
                  name?: string | null;
                  handle: any;
                  bio?: string | null;
                  ownedBy: any;
                  isDefault: boolean;
                  interests?: Array<any> | null;
                  isFollowedByMe: boolean;
                  dispatcher?: {
                    __typename?: "Dispatcher";
                    canUseRelay: boolean;
                  } | null;
                  attributes?: Array<{
                    __typename?: "Attribute";
                    key: string;
                    value: string;
                  }> | null;
                  stats: {
                    __typename?: "ProfileStats";
                    totalFollowers: number;
                    totalFollowing: number;
                    totalPosts: number;
                    totalComments: number;
                    totalMirrors: number;
                    totalPublications: number;
                    totalCollects: number;
                  };
                  coverPicture?:
                    | {
                        __typename?: "MediaSet";
                        original: { __typename?: "Media"; url: any };
                      }
                    | { __typename?: "NftImage" }
                    | null;
                  picture?:
                    | {
                        __typename?: "MediaSet";
                        original: { __typename?: "Media"; url: any };
                      }
                    | { __typename?: "NftImage"; uri: any }
                    | null;
                  followModule?:
                    | { __typename: "FeeFollowModuleSettings" }
                    | { __typename: "ProfileFollowModuleSettings" }
                    | { __typename: "RevertFollowModuleSettings" }
                    | { __typename: "UnknownFollowModuleSettings" }
                    | null;
                };
                metadata: {
                  __typename?: "MetadataOutput";
                  name?: string | null;
                  description?: any | null;
                  content?: any | null;
                  mainContentFocus: PublicationMainFocus;
                  contentWarning?: PublicationContentWarning | null;
                  tags: Array<string>;
                  cover?: {
                    __typename?: "MediaSet";
                    onChain: { __typename?: "Media"; url: any };
                    original: { __typename?: "Media"; url: any };
                    optimized?: { __typename?: "Media"; url: any } | null;
                  } | null;
                  media: Array<{
                    __typename?: "MediaSet";
                    original: {
                      __typename?: "Media";
                      url: any;
                      mimeType?: any | null;
                    };
                    onChain: { __typename?: "Media"; url: any };
                    optimized?: { __typename?: "Media"; url: any } | null;
                  }>;
                  attributes: Array<{
                    __typename?: "MetadataAttributeOutput";
                    value?: string | null;
                    traitType?: string | null;
                  }>;
                };
              }
            | null;
        }
      | { __typename?: "Mirror" }
      | { __typename?: "Post" }
    >;
    pageInfo: { __typename?: "PaginatedResultInfo"; next?: any | null };
  };
};

export type CreateUnfollowTypedDataMutationVariables = Exact<{
  request: UnfollowRequest;
}>;

export type CreateUnfollowTypedDataMutation = {
  __typename?: "Mutation";
  createUnfollowTypedData: {
    __typename?: "CreateUnfollowBroadcastItemResult";
    id: any;
    expiresAt: any;
    typedData: {
      __typename?: "CreateBurnEIP712TypedData";
      domain: {
        __typename?: "EIP712TypedDataDomain";
        name: string;
        chainId: any;
        version: string;
        verifyingContract: any;
      };
      types: {
        __typename?: "CreateBurnEIP712TypedDataTypes";
        BurnWithSig: Array<{
          __typename?: "EIP712TypedDataField";
          name: string;
          type: string;
        }>;
      };
      value: {
        __typename?: "CreateBurnEIP712TypedDataValue";
        nonce: any;
        deadline: any;
        tokenId: string;
      };
    };
  };
};

export type EnabledModuleCurrrenciesQueryVariables = Exact<{
  request: ProfileQueryRequest;
}>;

export type EnabledModuleCurrrenciesQuery = {
  __typename?: "Query";
  enabledModuleCurrencies: Array<{
    __typename?: "Erc20";
    name: string;
    symbol: string;
    decimals: number;
    address: any;
  }>;
  profiles: {
    __typename?: "PaginatedProfileResult";
    items: Array<{
      __typename?: "Profile";
      followModule?:
        | { __typename: "FeeFollowModuleSettings" }
        | { __typename: "ProfileFollowModuleSettings" }
        | { __typename: "RevertFollowModuleSettings" }
        | { __typename: "UnknownFollowModuleSettings" }
        | null;
    }>;
  };
};

export type ExploreQueryVariables = Exact<{
  request: ExplorePublicationRequest;
  reactionRequest?: InputMaybe<ReactionFieldResolverRequest>;
  channelId?: InputMaybe<Scalars["ProfileId"]>;
}>;

export type ExploreQuery = {
  __typename?: "Query";
  explorePublications: {
    __typename?: "ExplorePublicationResult";
    items: Array<
      | {
          __typename?: "Comment";
          id: any;
          reaction?: ReactionTypes | null;
          collectNftAddress?: any | null;
          onChainContentURI: string;
          hidden: boolean;
          hasCollectedByMe: boolean;
          isDataAvailability: boolean;
          createdAt: any;
          appId?: any | null;
          profile: {
            __typename?: "Profile";
            id: any;
            name?: string | null;
            handle: any;
            bio?: string | null;
            ownedBy: any;
            isDefault: boolean;
            interests?: Array<any> | null;
            isFollowedByMe: boolean;
            dispatcher?: {
              __typename?: "Dispatcher";
              canUseRelay: boolean;
            } | null;
            attributes?: Array<{
              __typename?: "Attribute";
              key: string;
              value: string;
            }> | null;
            stats: {
              __typename?: "ProfileStats";
              totalFollowers: number;
              totalFollowing: number;
              totalPosts: number;
              totalComments: number;
              totalMirrors: number;
              totalPublications: number;
              totalCollects: number;
            };
            coverPicture?:
              | {
                  __typename?: "MediaSet";
                  original: { __typename?: "Media"; url: any };
                }
              | { __typename?: "NftImage" }
              | null;
            picture?:
              | {
                  __typename?: "MediaSet";
                  original: { __typename?: "Media"; url: any };
                }
              | { __typename?: "NftImage"; uri: any }
              | null;
            followModule?:
              | { __typename: "FeeFollowModuleSettings" }
              | { __typename: "ProfileFollowModuleSettings" }
              | { __typename: "RevertFollowModuleSettings" }
              | { __typename: "UnknownFollowModuleSettings" }
              | null;
          };
          collectModule:
            | { __typename: "AaveFeeCollectModuleSettings" }
            | { __typename: "ERC4626FeeCollectModuleSettings" }
            | {
                __typename: "FeeCollectModuleSettings";
                type: CollectModules;
                recipient: any;
                referralFee: number;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              }
            | {
                __typename: "FreeCollectModuleSettings";
                type: CollectModules;
                followerOnly: boolean;
                contractAddress: any;
              }
            | {
                __typename: "LimitedFeeCollectModuleSettings";
                type: CollectModules;
                collectLimit: string;
                recipient: any;
                referralFee: number;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              }
            | {
                __typename: "LimitedTimedFeeCollectModuleSettings";
                type: CollectModules;
                collectLimit: string;
                recipient: any;
                referralFee: number;
                endTimestamp: any;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              }
            | { __typename: "MultirecipientFeeCollectModuleSettings" }
            | {
                __typename: "RevertCollectModuleSettings";
                type: CollectModules;
              }
            | {
                __typename: "SimpleCollectModuleSettings";
                type: CollectModules;
                contractAddress: any;
                followerOnly: boolean;
                optionalCollectLimit?: string | null;
                optionalEndTimestamp?: any | null;
                fee?: {
                  __typename?: "ModuleFee";
                  recipient: any;
                  referralFee: number;
                  amount: {
                    __typename?: "ModuleFeeAmount";
                    value: string;
                    asset: {
                      __typename?: "Erc20";
                      name: string;
                      symbol: string;
                      decimals: number;
                      address: any;
                    };
                  };
                } | null;
              }
            | {
                __typename: "TimedFeeCollectModuleSettings";
                type: CollectModules;
                recipient: any;
                referralFee: number;
                endTimestamp: any;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              }
            | {
                __typename: "UnknownCollectModuleSettings";
                type: CollectModules;
                contractAddress: any;
                collectModuleReturnData: any;
              };
          referenceModule?:
            | { __typename: "DegreesOfSeparationReferenceModuleSettings" }
            | { __typename: "FollowOnlyReferenceModuleSettings" }
            | { __typename: "UnknownReferenceModuleSettings" }
            | null;
          canComment: { __typename?: "CanCommentResponse"; result: boolean };
          canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
          stats: {
            __typename?: "PublicationStats";
            totalAmountOfComments: number;
            totalAmountOfCollects: number;
            totalAmountOfMirrors: number;
            totalUpvotes: number;
          };
          metadata: {
            __typename?: "MetadataOutput";
            name?: string | null;
            description?: any | null;
            content?: any | null;
            mainContentFocus: PublicationMainFocus;
            contentWarning?: PublicationContentWarning | null;
            tags: Array<string>;
            cover?: {
              __typename?: "MediaSet";
              onChain: { __typename?: "Media"; url: any };
              original: { __typename?: "Media"; url: any };
              optimized?: { __typename?: "Media"; url: any } | null;
            } | null;
            media: Array<{
              __typename?: "MediaSet";
              original: {
                __typename?: "Media";
                url: any;
                mimeType?: any | null;
              };
              onChain: { __typename?: "Media"; url: any };
              optimized?: { __typename?: "Media"; url: any } | null;
            }>;
            attributes: Array<{
              __typename?: "MetadataAttributeOutput";
              value?: string | null;
              traitType?: string | null;
            }>;
          };
          commentOn?:
            | { __typename?: "Comment" }
            | { __typename?: "Mirror" }
            | {
                __typename?: "Post";
                id: any;
                createdAt: any;
                appId?: any | null;
                profile: {
                  __typename?: "Profile";
                  id: any;
                  name?: string | null;
                  handle: any;
                  bio?: string | null;
                  ownedBy: any;
                  isDefault: boolean;
                  interests?: Array<any> | null;
                  isFollowedByMe: boolean;
                  dispatcher?: {
                    __typename?: "Dispatcher";
                    canUseRelay: boolean;
                  } | null;
                  attributes?: Array<{
                    __typename?: "Attribute";
                    key: string;
                    value: string;
                  }> | null;
                  stats: {
                    __typename?: "ProfileStats";
                    totalFollowers: number;
                    totalFollowing: number;
                    totalPosts: number;
                    totalComments: number;
                    totalMirrors: number;
                    totalPublications: number;
                    totalCollects: number;
                  };
                  coverPicture?:
                    | {
                        __typename?: "MediaSet";
                        original: { __typename?: "Media"; url: any };
                      }
                    | { __typename?: "NftImage" }
                    | null;
                  picture?:
                    | {
                        __typename?: "MediaSet";
                        original: { __typename?: "Media"; url: any };
                      }
                    | { __typename?: "NftImage"; uri: any }
                    | null;
                  followModule?:
                    | { __typename: "FeeFollowModuleSettings" }
                    | { __typename: "ProfileFollowModuleSettings" }
                    | { __typename: "RevertFollowModuleSettings" }
                    | { __typename: "UnknownFollowModuleSettings" }
                    | null;
                };
                metadata: {
                  __typename?: "MetadataOutput";
                  name?: string | null;
                  description?: any | null;
                  content?: any | null;
                  mainContentFocus: PublicationMainFocus;
                  contentWarning?: PublicationContentWarning | null;
                  tags: Array<string>;
                  cover?: {
                    __typename?: "MediaSet";
                    onChain: { __typename?: "Media"; url: any };
                    original: { __typename?: "Media"; url: any };
                    optimized?: { __typename?: "Media"; url: any } | null;
                  } | null;
                  media: Array<{
                    __typename?: "MediaSet";
                    original: {
                      __typename?: "Media";
                      url: any;
                      mimeType?: any | null;
                    };
                    onChain: { __typename?: "Media"; url: any };
                    optimized?: { __typename?: "Media"; url: any } | null;
                  }>;
                  attributes: Array<{
                    __typename?: "MetadataAttributeOutput";
                    value?: string | null;
                    traitType?: string | null;
                  }>;
                };
              }
            | null;
        }
      | { __typename?: "Mirror" }
      | {
          __typename?: "Post";
          id: any;
          reaction?: ReactionTypes | null;
          collectNftAddress?: any | null;
          onChainContentURI: string;
          isGated: boolean;
          isDataAvailability: boolean;
          dataAvailabilityProofs?: string | null;
          hidden: boolean;
          hasCollectedByMe: boolean;
          createdAt: any;
          appId?: any | null;
          profile: {
            __typename?: "Profile";
            id: any;
            name?: string | null;
            handle: any;
            bio?: string | null;
            ownedBy: any;
            isDefault: boolean;
            interests?: Array<any> | null;
            isFollowedByMe: boolean;
            dispatcher?: {
              __typename?: "Dispatcher";
              canUseRelay: boolean;
            } | null;
            attributes?: Array<{
              __typename?: "Attribute";
              key: string;
              value: string;
            }> | null;
            stats: {
              __typename?: "ProfileStats";
              totalFollowers: number;
              totalFollowing: number;
              totalPosts: number;
              totalComments: number;
              totalMirrors: number;
              totalPublications: number;
              totalCollects: number;
            };
            coverPicture?:
              | {
                  __typename?: "MediaSet";
                  original: { __typename?: "Media"; url: any };
                }
              | { __typename?: "NftImage" }
              | null;
            picture?:
              | {
                  __typename?: "MediaSet";
                  original: { __typename?: "Media"; url: any };
                }
              | { __typename?: "NftImage"; uri: any }
              | null;
            followModule?:
              | { __typename: "FeeFollowModuleSettings" }
              | { __typename: "ProfileFollowModuleSettings" }
              | { __typename: "RevertFollowModuleSettings" }
              | { __typename: "UnknownFollowModuleSettings" }
              | null;
          };
          referenceModule?:
            | { __typename: "DegreesOfSeparationReferenceModuleSettings" }
            | { __typename: "FollowOnlyReferenceModuleSettings" }
            | { __typename: "UnknownReferenceModuleSettings" }
            | null;
          canComment: { __typename?: "CanCommentResponse"; result: boolean };
          canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
          collectModule:
            | { __typename: "AaveFeeCollectModuleSettings" }
            | { __typename: "ERC4626FeeCollectModuleSettings" }
            | {
                __typename: "FeeCollectModuleSettings";
                type: CollectModules;
                recipient: any;
                referralFee: number;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              }
            | {
                __typename: "FreeCollectModuleSettings";
                type: CollectModules;
                followerOnly: boolean;
                contractAddress: any;
              }
            | {
                __typename: "LimitedFeeCollectModuleSettings";
                type: CollectModules;
                collectLimit: string;
                recipient: any;
                referralFee: number;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              }
            | {
                __typename: "LimitedTimedFeeCollectModuleSettings";
                type: CollectModules;
                collectLimit: string;
                recipient: any;
                referralFee: number;
                endTimestamp: any;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              }
            | { __typename: "MultirecipientFeeCollectModuleSettings" }
            | {
                __typename: "RevertCollectModuleSettings";
                type: CollectModules;
              }
            | {
                __typename: "SimpleCollectModuleSettings";
                type: CollectModules;
                contractAddress: any;
                followerOnly: boolean;
                optionalCollectLimit?: string | null;
                optionalEndTimestamp?: any | null;
                fee?: {
                  __typename?: "ModuleFee";
                  recipient: any;
                  referralFee: number;
                  amount: {
                    __typename?: "ModuleFeeAmount";
                    value: string;
                    asset: {
                      __typename?: "Erc20";
                      name: string;
                      symbol: string;
                      decimals: number;
                      address: any;
                    };
                  };
                } | null;
              }
            | {
                __typename: "TimedFeeCollectModuleSettings";
                type: CollectModules;
                recipient: any;
                referralFee: number;
                endTimestamp: any;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              }
            | {
                __typename: "UnknownCollectModuleSettings";
                type: CollectModules;
                contractAddress: any;
                collectModuleReturnData: any;
              };
          stats: {
            __typename?: "PublicationStats";
            totalAmountOfComments: number;
            totalAmountOfCollects: number;
            totalAmountOfMirrors: number;
            totalDownvotes: number;
            totalUpvotes: number;
          };
          metadata: {
            __typename?: "MetadataOutput";
            name?: string | null;
            description?: any | null;
            content?: any | null;
            mainContentFocus: PublicationMainFocus;
            contentWarning?: PublicationContentWarning | null;
            tags: Array<string>;
            cover?: {
              __typename?: "MediaSet";
              onChain: { __typename?: "Media"; url: any };
              original: { __typename?: "Media"; url: any };
              optimized?: { __typename?: "Media"; url: any } | null;
            } | null;
            media: Array<{
              __typename?: "MediaSet";
              original: {
                __typename?: "Media";
                url: any;
                mimeType?: any | null;
              };
              onChain: { __typename?: "Media"; url: any };
              optimized?: { __typename?: "Media"; url: any } | null;
            }>;
            attributes: Array<{
              __typename?: "MetadataAttributeOutput";
              value?: string | null;
              traitType?: string | null;
            }>;
          };
        }
    >;
    pageInfo: { __typename?: "PaginatedResultInfo"; next?: any | null };
  };
};

export type FeedQueryVariables = Exact<{
  request: FeedRequest;
  reactionRequest?: InputMaybe<ReactionFieldResolverRequest>;
  channelId?: InputMaybe<Scalars["ProfileId"]>;
}>;

export type FeedQuery = {
  __typename?: "Query";
  feed: {
    __typename?: "PaginatedFeedResult";
    items: Array<{
      __typename?: "FeedItem";
      root:
        | {
            __typename?: "Comment";
            id: any;
            reaction?: ReactionTypes | null;
            collectNftAddress?: any | null;
            onChainContentURI: string;
            hidden: boolean;
            hasCollectedByMe: boolean;
            isDataAvailability: boolean;
            createdAt: any;
            appId?: any | null;
            profile: {
              __typename?: "Profile";
              id: any;
              name?: string | null;
              handle: any;
              bio?: string | null;
              ownedBy: any;
              isDefault: boolean;
              interests?: Array<any> | null;
              isFollowedByMe: boolean;
              dispatcher?: {
                __typename?: "Dispatcher";
                canUseRelay: boolean;
              } | null;
              attributes?: Array<{
                __typename?: "Attribute";
                key: string;
                value: string;
              }> | null;
              stats: {
                __typename?: "ProfileStats";
                totalFollowers: number;
                totalFollowing: number;
                totalPosts: number;
                totalComments: number;
                totalMirrors: number;
                totalPublications: number;
                totalCollects: number;
              };
              coverPicture?:
                | {
                    __typename?: "MediaSet";
                    original: { __typename?: "Media"; url: any };
                  }
                | { __typename?: "NftImage" }
                | null;
              picture?:
                | {
                    __typename?: "MediaSet";
                    original: { __typename?: "Media"; url: any };
                  }
                | { __typename?: "NftImage"; uri: any }
                | null;
              followModule?:
                | { __typename: "FeeFollowModuleSettings" }
                | { __typename: "ProfileFollowModuleSettings" }
                | { __typename: "RevertFollowModuleSettings" }
                | { __typename: "UnknownFollowModuleSettings" }
                | null;
            };
            collectModule:
              | { __typename: "AaveFeeCollectModuleSettings" }
              | { __typename: "ERC4626FeeCollectModuleSettings" }
              | {
                  __typename: "FeeCollectModuleSettings";
                  type: CollectModules;
                  recipient: any;
                  referralFee: number;
                  amount: {
                    __typename?: "ModuleFeeAmount";
                    value: string;
                    asset: {
                      __typename?: "Erc20";
                      name: string;
                      symbol: string;
                      decimals: number;
                      address: any;
                    };
                  };
                }
              | {
                  __typename: "FreeCollectModuleSettings";
                  type: CollectModules;
                  followerOnly: boolean;
                  contractAddress: any;
                }
              | {
                  __typename: "LimitedFeeCollectModuleSettings";
                  type: CollectModules;
                  collectLimit: string;
                  recipient: any;
                  referralFee: number;
                  amount: {
                    __typename?: "ModuleFeeAmount";
                    value: string;
                    asset: {
                      __typename?: "Erc20";
                      name: string;
                      symbol: string;
                      decimals: number;
                      address: any;
                    };
                  };
                }
              | {
                  __typename: "LimitedTimedFeeCollectModuleSettings";
                  type: CollectModules;
                  collectLimit: string;
                  recipient: any;
                  referralFee: number;
                  endTimestamp: any;
                  amount: {
                    __typename?: "ModuleFeeAmount";
                    value: string;
                    asset: {
                      __typename?: "Erc20";
                      name: string;
                      symbol: string;
                      decimals: number;
                      address: any;
                    };
                  };
                }
              | { __typename: "MultirecipientFeeCollectModuleSettings" }
              | {
                  __typename: "RevertCollectModuleSettings";
                  type: CollectModules;
                }
              | {
                  __typename: "SimpleCollectModuleSettings";
                  type: CollectModules;
                  contractAddress: any;
                  followerOnly: boolean;
                  optionalCollectLimit?: string | null;
                  optionalEndTimestamp?: any | null;
                  fee?: {
                    __typename?: "ModuleFee";
                    recipient: any;
                    referralFee: number;
                    amount: {
                      __typename?: "ModuleFeeAmount";
                      value: string;
                      asset: {
                        __typename?: "Erc20";
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                      };
                    };
                  } | null;
                }
              | {
                  __typename: "TimedFeeCollectModuleSettings";
                  type: CollectModules;
                  recipient: any;
                  referralFee: number;
                  endTimestamp: any;
                  amount: {
                    __typename?: "ModuleFeeAmount";
                    value: string;
                    asset: {
                      __typename?: "Erc20";
                      name: string;
                      symbol: string;
                      decimals: number;
                      address: any;
                    };
                  };
                }
              | {
                  __typename: "UnknownCollectModuleSettings";
                  type: CollectModules;
                  contractAddress: any;
                  collectModuleReturnData: any;
                };
            referenceModule?:
              | { __typename: "DegreesOfSeparationReferenceModuleSettings" }
              | { __typename: "FollowOnlyReferenceModuleSettings" }
              | { __typename: "UnknownReferenceModuleSettings" }
              | null;
            canComment: { __typename?: "CanCommentResponse"; result: boolean };
            canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
            stats: {
              __typename?: "PublicationStats";
              totalAmountOfComments: number;
              totalAmountOfCollects: number;
              totalAmountOfMirrors: number;
              totalUpvotes: number;
            };
            metadata: {
              __typename?: "MetadataOutput";
              name?: string | null;
              description?: any | null;
              content?: any | null;
              mainContentFocus: PublicationMainFocus;
              contentWarning?: PublicationContentWarning | null;
              tags: Array<string>;
              cover?: {
                __typename?: "MediaSet";
                onChain: { __typename?: "Media"; url: any };
                original: { __typename?: "Media"; url: any };
                optimized?: { __typename?: "Media"; url: any } | null;
              } | null;
              media: Array<{
                __typename?: "MediaSet";
                original: {
                  __typename?: "Media";
                  url: any;
                  mimeType?: any | null;
                };
                onChain: { __typename?: "Media"; url: any };
                optimized?: { __typename?: "Media"; url: any } | null;
              }>;
              attributes: Array<{
                __typename?: "MetadataAttributeOutput";
                value?: string | null;
                traitType?: string | null;
              }>;
            };
            commentOn?:
              | { __typename?: "Comment" }
              | { __typename?: "Mirror" }
              | {
                  __typename?: "Post";
                  id: any;
                  createdAt: any;
                  appId?: any | null;
                  profile: {
                    __typename?: "Profile";
                    id: any;
                    name?: string | null;
                    handle: any;
                    bio?: string | null;
                    ownedBy: any;
                    isDefault: boolean;
                    interests?: Array<any> | null;
                    isFollowedByMe: boolean;
                    dispatcher?: {
                      __typename?: "Dispatcher";
                      canUseRelay: boolean;
                    } | null;
                    attributes?: Array<{
                      __typename?: "Attribute";
                      key: string;
                      value: string;
                    }> | null;
                    stats: {
                      __typename?: "ProfileStats";
                      totalFollowers: number;
                      totalFollowing: number;
                      totalPosts: number;
                      totalComments: number;
                      totalMirrors: number;
                      totalPublications: number;
                      totalCollects: number;
                    };
                    coverPicture?:
                      | {
                          __typename?: "MediaSet";
                          original: { __typename?: "Media"; url: any };
                        }
                      | { __typename?: "NftImage" }
                      | null;
                    picture?:
                      | {
                          __typename?: "MediaSet";
                          original: { __typename?: "Media"; url: any };
                        }
                      | { __typename?: "NftImage"; uri: any }
                      | null;
                    followModule?:
                      | { __typename: "FeeFollowModuleSettings" }
                      | { __typename: "ProfileFollowModuleSettings" }
                      | { __typename: "RevertFollowModuleSettings" }
                      | { __typename: "UnknownFollowModuleSettings" }
                      | null;
                  };
                  metadata: {
                    __typename?: "MetadataOutput";
                    name?: string | null;
                    description?: any | null;
                    content?: any | null;
                    mainContentFocus: PublicationMainFocus;
                    contentWarning?: PublicationContentWarning | null;
                    tags: Array<string>;
                    cover?: {
                      __typename?: "MediaSet";
                      onChain: { __typename?: "Media"; url: any };
                      original: { __typename?: "Media"; url: any };
                      optimized?: { __typename?: "Media"; url: any } | null;
                    } | null;
                    media: Array<{
                      __typename?: "MediaSet";
                      original: {
                        __typename?: "Media";
                        url: any;
                        mimeType?: any | null;
                      };
                      onChain: { __typename?: "Media"; url: any };
                      optimized?: { __typename?: "Media"; url: any } | null;
                    }>;
                    attributes: Array<{
                      __typename?: "MetadataAttributeOutput";
                      value?: string | null;
                      traitType?: string | null;
                    }>;
                  };
                }
              | null;
          }
        | {
            __typename?: "Post";
            id: any;
            reaction?: ReactionTypes | null;
            collectNftAddress?: any | null;
            onChainContentURI: string;
            isGated: boolean;
            isDataAvailability: boolean;
            dataAvailabilityProofs?: string | null;
            hidden: boolean;
            hasCollectedByMe: boolean;
            createdAt: any;
            appId?: any | null;
            profile: {
              __typename?: "Profile";
              id: any;
              name?: string | null;
              handle: any;
              bio?: string | null;
              ownedBy: any;
              isDefault: boolean;
              interests?: Array<any> | null;
              isFollowedByMe: boolean;
              dispatcher?: {
                __typename?: "Dispatcher";
                canUseRelay: boolean;
              } | null;
              attributes?: Array<{
                __typename?: "Attribute";
                key: string;
                value: string;
              }> | null;
              stats: {
                __typename?: "ProfileStats";
                totalFollowers: number;
                totalFollowing: number;
                totalPosts: number;
                totalComments: number;
                totalMirrors: number;
                totalPublications: number;
                totalCollects: number;
              };
              coverPicture?:
                | {
                    __typename?: "MediaSet";
                    original: { __typename?: "Media"; url: any };
                  }
                | { __typename?: "NftImage" }
                | null;
              picture?:
                | {
                    __typename?: "MediaSet";
                    original: { __typename?: "Media"; url: any };
                  }
                | { __typename?: "NftImage"; uri: any }
                | null;
              followModule?:
                | { __typename: "FeeFollowModuleSettings" }
                | { __typename: "ProfileFollowModuleSettings" }
                | { __typename: "RevertFollowModuleSettings" }
                | { __typename: "UnknownFollowModuleSettings" }
                | null;
            };
            referenceModule?:
              | { __typename: "DegreesOfSeparationReferenceModuleSettings" }
              | { __typename: "FollowOnlyReferenceModuleSettings" }
              | { __typename: "UnknownReferenceModuleSettings" }
              | null;
            canComment: { __typename?: "CanCommentResponse"; result: boolean };
            canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
            collectModule:
              | { __typename: "AaveFeeCollectModuleSettings" }
              | { __typename: "ERC4626FeeCollectModuleSettings" }
              | {
                  __typename: "FeeCollectModuleSettings";
                  type: CollectModules;
                  recipient: any;
                  referralFee: number;
                  amount: {
                    __typename?: "ModuleFeeAmount";
                    value: string;
                    asset: {
                      __typename?: "Erc20";
                      name: string;
                      symbol: string;
                      decimals: number;
                      address: any;
                    };
                  };
                }
              | {
                  __typename: "FreeCollectModuleSettings";
                  type: CollectModules;
                  followerOnly: boolean;
                  contractAddress: any;
                }
              | {
                  __typename: "LimitedFeeCollectModuleSettings";
                  type: CollectModules;
                  collectLimit: string;
                  recipient: any;
                  referralFee: number;
                  amount: {
                    __typename?: "ModuleFeeAmount";
                    value: string;
                    asset: {
                      __typename?: "Erc20";
                      name: string;
                      symbol: string;
                      decimals: number;
                      address: any;
                    };
                  };
                }
              | {
                  __typename: "LimitedTimedFeeCollectModuleSettings";
                  type: CollectModules;
                  collectLimit: string;
                  recipient: any;
                  referralFee: number;
                  endTimestamp: any;
                  amount: {
                    __typename?: "ModuleFeeAmount";
                    value: string;
                    asset: {
                      __typename?: "Erc20";
                      name: string;
                      symbol: string;
                      decimals: number;
                      address: any;
                    };
                  };
                }
              | { __typename: "MultirecipientFeeCollectModuleSettings" }
              | {
                  __typename: "RevertCollectModuleSettings";
                  type: CollectModules;
                }
              | {
                  __typename: "SimpleCollectModuleSettings";
                  type: CollectModules;
                  contractAddress: any;
                  followerOnly: boolean;
                  optionalCollectLimit?: string | null;
                  optionalEndTimestamp?: any | null;
                  fee?: {
                    __typename?: "ModuleFee";
                    recipient: any;
                    referralFee: number;
                    amount: {
                      __typename?: "ModuleFeeAmount";
                      value: string;
                      asset: {
                        __typename?: "Erc20";
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                      };
                    };
                  } | null;
                }
              | {
                  __typename: "TimedFeeCollectModuleSettings";
                  type: CollectModules;
                  recipient: any;
                  referralFee: number;
                  endTimestamp: any;
                  amount: {
                    __typename?: "ModuleFeeAmount";
                    value: string;
                    asset: {
                      __typename?: "Erc20";
                      name: string;
                      symbol: string;
                      decimals: number;
                      address: any;
                    };
                  };
                }
              | {
                  __typename: "UnknownCollectModuleSettings";
                  type: CollectModules;
                  contractAddress: any;
                  collectModuleReturnData: any;
                };
            stats: {
              __typename?: "PublicationStats";
              totalAmountOfComments: number;
              totalAmountOfCollects: number;
              totalAmountOfMirrors: number;
              totalDownvotes: number;
              totalUpvotes: number;
            };
            metadata: {
              __typename?: "MetadataOutput";
              name?: string | null;
              description?: any | null;
              content?: any | null;
              mainContentFocus: PublicationMainFocus;
              contentWarning?: PublicationContentWarning | null;
              tags: Array<string>;
              cover?: {
                __typename?: "MediaSet";
                onChain: { __typename?: "Media"; url: any };
                original: { __typename?: "Media"; url: any };
                optimized?: { __typename?: "Media"; url: any } | null;
              } | null;
              media: Array<{
                __typename?: "MediaSet";
                original: {
                  __typename?: "Media";
                  url: any;
                  mimeType?: any | null;
                };
                onChain: { __typename?: "Media"; url: any };
                optimized?: { __typename?: "Media"; url: any } | null;
              }>;
              attributes: Array<{
                __typename?: "MetadataAttributeOutput";
                value?: string | null;
                traitType?: string | null;
              }>;
            };
          };
    }>;
    pageInfo: { __typename?: "PaginatedResultInfo"; next?: any | null };
  };
};

export type GenerateModuleCurrencyApprovalDataQueryVariables = Exact<{
  request: GenerateModuleCurrencyApprovalDataRequest;
}>;

export type GenerateModuleCurrencyApprovalDataQuery = {
  __typename?: "Query";
  generateModuleCurrencyApprovalData: {
    __typename?: "GenerateModuleCurrencyApproval";
    to: any;
    from: any;
    data: any;
  };
};

export type PublicationReactionsQueryVariables = Exact<{
  request: PublicationsQueryRequest;
}>;

export type PublicationReactionsQuery = {
  __typename?: "Query";
  publications: {
    __typename?: "PaginatedPublicationResult";
    items: Array<
      | {
          __typename: "Comment";
          stats: {
            __typename?: "PublicationStats";
            totalAmountOfComments: number;
            totalAmountOfCollects: number;
            totalAmountOfMirrors: number;
            totalUpvotes: number;
          };
        }
      | {
          __typename: "Mirror";
          stats: {
            __typename?: "PublicationStats";
            totalAmountOfComments: number;
            totalAmountOfCollects: number;
            totalAmountOfMirrors: number;
            totalUpvotes: number;
          };
        }
      | {
          __typename: "Post";
          stats: {
            __typename?: "PublicationStats";
            totalAmountOfComments: number;
            totalAmountOfCollects: number;
            totalAmountOfMirrors: number;
            totalUpvotes: number;
          };
        }
    >;
  };
};

export type GlobalProtocolStatsQueryVariables = Exact<{
  request?: InputMaybe<GlobalProtocolStatsRequest>;
}>;

export type GlobalProtocolStatsQuery = {
  __typename?: "Query";
  globalProtocolStats: {
    __typename?: "GlobalProtocolStats";
    totalProfiles: number;
    totalBurntProfiles: number;
    totalPosts: number;
    totalMirrors: number;
    totalComments: number;
    totalCollects: number;
    totalFollows: number;
    totalRevenue: Array<{
      __typename?: "Erc20Amount";
      value: string;
      asset: {
        __typename?: "Erc20";
        name: string;
        symbol: string;
        decimals: number;
        address: any;
      };
    }>;
  };
  bytesStats: { __typename?: "GlobalProtocolStats"; totalPosts: number };
};

export type HasPublicationIndexedQueryVariables = Exact<{
  request: PublicationQueryRequest;
}>;

export type HasPublicationIndexedQuery = {
  __typename?: "Query";
  publication?:
    | { __typename?: "Comment" }
    | { __typename?: "Mirror" }
    | { __typename?: "Post"; id: any }
    | null;
};

export type HasTxHashBeenIndexedQueryVariables = Exact<{
  request: HasTxHashBeenIndexedRequest;
}>;

export type HasTxHashBeenIndexedQuery = {
  __typename?: "Query";
  hasTxHashBeenIndexed:
    | { __typename?: "TransactionError"; reason: TransactionErrorReasons }
    | {
        __typename?: "TransactionIndexedResult";
        indexed: boolean;
        txReceipt?: {
          __typename?: "TransactionReceipt";
          transactionHash: any;
        } | null;
      };
};

export type LatestNotificationIdQueryVariables = Exact<{
  request: NotificationRequest;
}>;

export type LatestNotificationIdQuery = {
  __typename?: "Query";
  notifications: {
    __typename?: "PaginatedNotificationResult";
    items: Array<
      | { __typename?: "NewCollectNotification"; notificationId: any }
      | { __typename?: "NewCommentNotification"; notificationId: any }
      | { __typename?: "NewFollowerNotification"; notificationId: any }
      | { __typename?: "NewMentionNotification"; notificationId: any }
      | { __typename?: "NewMirrorNotification"; notificationId: any }
      | { __typename?: "NewReactionNotification"; notificationId: any }
    >;
  };
};

export type MutualFollowersQueryVariables = Exact<{
  request: MutualFollowersProfilesQueryRequest;
}>;

export type MutualFollowersQuery = {
  __typename?: "Query";
  mutualFollowersProfiles: {
    __typename?: "PaginatedProfileResult";
    items: Array<{
      __typename?: "Profile";
      id: any;
      name?: string | null;
      handle: any;
      bio?: string | null;
      ownedBy: any;
      isDefault: boolean;
      interests?: Array<any> | null;
      isFollowedByMe: boolean;
      dispatcher?: { __typename?: "Dispatcher"; canUseRelay: boolean } | null;
      attributes?: Array<{
        __typename?: "Attribute";
        key: string;
        value: string;
      }> | null;
      stats: {
        __typename?: "ProfileStats";
        totalFollowers: number;
        totalFollowing: number;
        totalPosts: number;
        totalComments: number;
        totalMirrors: number;
        totalPublications: number;
        totalCollects: number;
      };
      coverPicture?:
        | {
            __typename?: "MediaSet";
            original: { __typename?: "Media"; url: any };
          }
        | { __typename?: "NftImage" }
        | null;
      picture?:
        | {
            __typename?: "MediaSet";
            original: { __typename?: "Media"; url: any };
          }
        | { __typename?: "NftImage"; uri: any }
        | null;
      followModule?:
        | { __typename: "FeeFollowModuleSettings" }
        | { __typename: "ProfileFollowModuleSettings" }
        | { __typename: "RevertFollowModuleSettings" }
        | { __typename: "UnknownFollowModuleSettings" }
        | null;
    }>;
    pageInfo: { __typename?: "PaginatedResultInfo"; next?: any | null };
  };
};

export type NotificationCountQueryVariables = Exact<{
  request: NotificationRequest;
}>;

export type NotificationCountQuery = {
  __typename?: "Query";
  notifications: {
    __typename?: "PaginatedNotificationResult";
    pageInfo: {
      __typename?: "PaginatedResultInfo";
      totalCount?: number | null;
    };
  };
};

export type NotificationsQueryVariables = Exact<{
  request: NotificationRequest;
}>;

export type NotificationsQuery = {
  __typename?: "Query";
  notifications: {
    __typename?: "PaginatedNotificationResult";
    items: Array<
      | {
          __typename?: "NewCollectNotification";
          notificationId: any;
          createdAt: any;
          wallet: {
            __typename?: "Wallet";
            address: any;
            defaultProfile?: {
              __typename?: "Profile";
              id: any;
              name?: string | null;
              handle: any;
              bio?: string | null;
              ownedBy: any;
              isDefault: boolean;
              interests?: Array<any> | null;
              isFollowedByMe: boolean;
              dispatcher?: {
                __typename?: "Dispatcher";
                canUseRelay: boolean;
              } | null;
              attributes?: Array<{
                __typename?: "Attribute";
                key: string;
                value: string;
              }> | null;
              stats: {
                __typename?: "ProfileStats";
                totalFollowers: number;
                totalFollowing: number;
                totalPosts: number;
                totalComments: number;
                totalMirrors: number;
                totalPublications: number;
                totalCollects: number;
              };
              coverPicture?:
                | {
                    __typename?: "MediaSet";
                    original: { __typename?: "Media"; url: any };
                  }
                | { __typename?: "NftImage" }
                | null;
              picture?:
                | {
                    __typename?: "MediaSet";
                    original: { __typename?: "Media"; url: any };
                  }
                | { __typename?: "NftImage"; uri: any }
                | null;
              followModule?:
                | { __typename: "FeeFollowModuleSettings" }
                | { __typename: "ProfileFollowModuleSettings" }
                | { __typename: "RevertFollowModuleSettings" }
                | { __typename: "UnknownFollowModuleSettings" }
                | null;
            } | null;
          };
          collectedPublication:
            | {
                __typename?: "Comment";
                id: any;
                metadata: {
                  __typename?: "MetadataOutput";
                  name?: string | null;
                  description?: any | null;
                  content?: any | null;
                  mainContentFocus: PublicationMainFocus;
                  contentWarning?: PublicationContentWarning | null;
                  tags: Array<string>;
                  cover?: {
                    __typename?: "MediaSet";
                    onChain: { __typename?: "Media"; url: any };
                    original: { __typename?: "Media"; url: any };
                    optimized?: { __typename?: "Media"; url: any } | null;
                  } | null;
                  media: Array<{
                    __typename?: "MediaSet";
                    original: {
                      __typename?: "Media";
                      url: any;
                      mimeType?: any | null;
                    };
                    onChain: { __typename?: "Media"; url: any };
                    optimized?: { __typename?: "Media"; url: any } | null;
                  }>;
                  attributes: Array<{
                    __typename?: "MetadataAttributeOutput";
                    value?: string | null;
                    traitType?: string | null;
                  }>;
                };
              }
            | { __typename?: "Mirror" }
            | {
                __typename?: "Post";
                id: any;
                metadata: {
                  __typename?: "MetadataOutput";
                  name?: string | null;
                  description?: any | null;
                  content?: any | null;
                  mainContentFocus: PublicationMainFocus;
                  contentWarning?: PublicationContentWarning | null;
                  tags: Array<string>;
                  cover?: {
                    __typename?: "MediaSet";
                    onChain: { __typename?: "Media"; url: any };
                    original: { __typename?: "Media"; url: any };
                    optimized?: { __typename?: "Media"; url: any } | null;
                  } | null;
                  media: Array<{
                    __typename?: "MediaSet";
                    original: {
                      __typename?: "Media";
                      url: any;
                      mimeType?: any | null;
                    };
                    onChain: { __typename?: "Media"; url: any };
                    optimized?: { __typename?: "Media"; url: any } | null;
                  }>;
                  attributes: Array<{
                    __typename?: "MetadataAttributeOutput";
                    value?: string | null;
                    traitType?: string | null;
                  }>;
                };
              };
        }
      | {
          __typename?: "NewCommentNotification";
          notificationId: any;
          createdAt: any;
          profile: {
            __typename?: "Profile";
            id: any;
            name?: string | null;
            handle: any;
            bio?: string | null;
            ownedBy: any;
            isDefault: boolean;
            interests?: Array<any> | null;
            isFollowedByMe: boolean;
            dispatcher?: {
              __typename?: "Dispatcher";
              canUseRelay: boolean;
            } | null;
            attributes?: Array<{
              __typename?: "Attribute";
              key: string;
              value: string;
            }> | null;
            stats: {
              __typename?: "ProfileStats";
              totalFollowers: number;
              totalFollowing: number;
              totalPosts: number;
              totalComments: number;
              totalMirrors: number;
              totalPublications: number;
              totalCollects: number;
            };
            coverPicture?:
              | {
                  __typename?: "MediaSet";
                  original: { __typename?: "Media"; url: any };
                }
              | { __typename?: "NftImage" }
              | null;
            picture?:
              | {
                  __typename?: "MediaSet";
                  original: { __typename?: "Media"; url: any };
                }
              | { __typename?: "NftImage"; uri: any }
              | null;
            followModule?:
              | { __typename: "FeeFollowModuleSettings" }
              | { __typename: "ProfileFollowModuleSettings" }
              | { __typename: "RevertFollowModuleSettings" }
              | { __typename: "UnknownFollowModuleSettings" }
              | null;
          };
          comment: {
            __typename?: "Comment";
            id: any;
            metadata: {
              __typename?: "MetadataOutput";
              name?: string | null;
              description?: any | null;
              content?: any | null;
              mainContentFocus: PublicationMainFocus;
              contentWarning?: PublicationContentWarning | null;
              tags: Array<string>;
              cover?: {
                __typename?: "MediaSet";
                onChain: { __typename?: "Media"; url: any };
                original: { __typename?: "Media"; url: any };
                optimized?: { __typename?: "Media"; url: any } | null;
              } | null;
              media: Array<{
                __typename?: "MediaSet";
                original: {
                  __typename?: "Media";
                  url: any;
                  mimeType?: any | null;
                };
                onChain: { __typename?: "Media"; url: any };
                optimized?: { __typename?: "Media"; url: any } | null;
              }>;
              attributes: Array<{
                __typename?: "MetadataAttributeOutput";
                value?: string | null;
                traitType?: string | null;
              }>;
            };
            commentOn?:
              | {
                  __typename?: "Comment";
                  id: any;
                  metadata: {
                    __typename?: "MetadataOutput";
                    name?: string | null;
                    description?: any | null;
                    content?: any | null;
                    mainContentFocus: PublicationMainFocus;
                    contentWarning?: PublicationContentWarning | null;
                    tags: Array<string>;
                    cover?: {
                      __typename?: "MediaSet";
                      onChain: { __typename?: "Media"; url: any };
                      original: { __typename?: "Media"; url: any };
                      optimized?: { __typename?: "Media"; url: any } | null;
                    } | null;
                    media: Array<{
                      __typename?: "MediaSet";
                      original: {
                        __typename?: "Media";
                        url: any;
                        mimeType?: any | null;
                      };
                      onChain: { __typename?: "Media"; url: any };
                      optimized?: { __typename?: "Media"; url: any } | null;
                    }>;
                    attributes: Array<{
                      __typename?: "MetadataAttributeOutput";
                      value?: string | null;
                      traitType?: string | null;
                    }>;
                  };
                }
              | {
                  __typename?: "Mirror";
                  id: any;
                  metadata: {
                    __typename?: "MetadataOutput";
                    name?: string | null;
                    description?: any | null;
                    content?: any | null;
                    mainContentFocus: PublicationMainFocus;
                    contentWarning?: PublicationContentWarning | null;
                    tags: Array<string>;
                    cover?: {
                      __typename?: "MediaSet";
                      onChain: { __typename?: "Media"; url: any };
                      original: { __typename?: "Media"; url: any };
                      optimized?: { __typename?: "Media"; url: any } | null;
                    } | null;
                    media: Array<{
                      __typename?: "MediaSet";
                      original: {
                        __typename?: "Media";
                        url: any;
                        mimeType?: any | null;
                      };
                      onChain: { __typename?: "Media"; url: any };
                      optimized?: { __typename?: "Media"; url: any } | null;
                    }>;
                    attributes: Array<{
                      __typename?: "MetadataAttributeOutput";
                      value?: string | null;
                      traitType?: string | null;
                    }>;
                  };
                }
              | {
                  __typename?: "Post";
                  id: any;
                  metadata: {
                    __typename?: "MetadataOutput";
                    name?: string | null;
                    description?: any | null;
                    content?: any | null;
                    mainContentFocus: PublicationMainFocus;
                    contentWarning?: PublicationContentWarning | null;
                    tags: Array<string>;
                    cover?: {
                      __typename?: "MediaSet";
                      onChain: { __typename?: "Media"; url: any };
                      original: { __typename?: "Media"; url: any };
                      optimized?: { __typename?: "Media"; url: any } | null;
                    } | null;
                    media: Array<{
                      __typename?: "MediaSet";
                      original: {
                        __typename?: "Media";
                        url: any;
                        mimeType?: any | null;
                      };
                      onChain: { __typename?: "Media"; url: any };
                      optimized?: { __typename?: "Media"; url: any } | null;
                    }>;
                    attributes: Array<{
                      __typename?: "MetadataAttributeOutput";
                      value?: string | null;
                      traitType?: string | null;
                    }>;
                  };
                }
              | null;
          };
        }
      | {
          __typename?: "NewFollowerNotification";
          notificationId: any;
          createdAt: any;
          wallet: {
            __typename?: "Wallet";
            address: any;
            defaultProfile?: {
              __typename?: "Profile";
              id: any;
              name?: string | null;
              handle: any;
              bio?: string | null;
              ownedBy: any;
              isDefault: boolean;
              interests?: Array<any> | null;
              isFollowedByMe: boolean;
              dispatcher?: {
                __typename?: "Dispatcher";
                canUseRelay: boolean;
              } | null;
              attributes?: Array<{
                __typename?: "Attribute";
                key: string;
                value: string;
              }> | null;
              stats: {
                __typename?: "ProfileStats";
                totalFollowers: number;
                totalFollowing: number;
                totalPosts: number;
                totalComments: number;
                totalMirrors: number;
                totalPublications: number;
                totalCollects: number;
              };
              coverPicture?:
                | {
                    __typename?: "MediaSet";
                    original: { __typename?: "Media"; url: any };
                  }
                | { __typename?: "NftImage" }
                | null;
              picture?:
                | {
                    __typename?: "MediaSet";
                    original: { __typename?: "Media"; url: any };
                  }
                | { __typename?: "NftImage"; uri: any }
                | null;
              followModule?:
                | { __typename: "FeeFollowModuleSettings" }
                | { __typename: "ProfileFollowModuleSettings" }
                | { __typename: "RevertFollowModuleSettings" }
                | { __typename: "UnknownFollowModuleSettings" }
                | null;
            } | null;
          };
        }
      | {
          __typename?: "NewMentionNotification";
          notificationId: any;
          createdAt: any;
          mentionPublication:
            | {
                __typename?: "Comment";
                id: any;
                metadata: {
                  __typename?: "MetadataOutput";
                  name?: string | null;
                  description?: any | null;
                  content?: any | null;
                  mainContentFocus: PublicationMainFocus;
                  contentWarning?: PublicationContentWarning | null;
                  tags: Array<string>;
                  cover?: {
                    __typename?: "MediaSet";
                    onChain: { __typename?: "Media"; url: any };
                    original: { __typename?: "Media"; url: any };
                    optimized?: { __typename?: "Media"; url: any } | null;
                  } | null;
                  media: Array<{
                    __typename?: "MediaSet";
                    original: {
                      __typename?: "Media";
                      url: any;
                      mimeType?: any | null;
                    };
                    onChain: { __typename?: "Media"; url: any };
                    optimized?: { __typename?: "Media"; url: any } | null;
                  }>;
                  attributes: Array<{
                    __typename?: "MetadataAttributeOutput";
                    value?: string | null;
                    traitType?: string | null;
                  }>;
                };
                profile: {
                  __typename?: "Profile";
                  id: any;
                  name?: string | null;
                  handle: any;
                  bio?: string | null;
                  ownedBy: any;
                  isDefault: boolean;
                  interests?: Array<any> | null;
                  isFollowedByMe: boolean;
                  dispatcher?: {
                    __typename?: "Dispatcher";
                    canUseRelay: boolean;
                  } | null;
                  attributes?: Array<{
                    __typename?: "Attribute";
                    key: string;
                    value: string;
                  }> | null;
                  stats: {
                    __typename?: "ProfileStats";
                    totalFollowers: number;
                    totalFollowing: number;
                    totalPosts: number;
                    totalComments: number;
                    totalMirrors: number;
                    totalPublications: number;
                    totalCollects: number;
                  };
                  coverPicture?:
                    | {
                        __typename?: "MediaSet";
                        original: { __typename?: "Media"; url: any };
                      }
                    | { __typename?: "NftImage" }
                    | null;
                  picture?:
                    | {
                        __typename?: "MediaSet";
                        original: { __typename?: "Media"; url: any };
                      }
                    | { __typename?: "NftImage"; uri: any }
                    | null;
                  followModule?:
                    | { __typename: "FeeFollowModuleSettings" }
                    | { __typename: "ProfileFollowModuleSettings" }
                    | { __typename: "RevertFollowModuleSettings" }
                    | { __typename: "UnknownFollowModuleSettings" }
                    | null;
                };
              }
            | {
                __typename?: "Post";
                id: any;
                metadata: {
                  __typename?: "MetadataOutput";
                  name?: string | null;
                  description?: any | null;
                  content?: any | null;
                  mainContentFocus: PublicationMainFocus;
                  contentWarning?: PublicationContentWarning | null;
                  tags: Array<string>;
                  cover?: {
                    __typename?: "MediaSet";
                    onChain: { __typename?: "Media"; url: any };
                    original: { __typename?: "Media"; url: any };
                    optimized?: { __typename?: "Media"; url: any } | null;
                  } | null;
                  media: Array<{
                    __typename?: "MediaSet";
                    original: {
                      __typename?: "Media";
                      url: any;
                      mimeType?: any | null;
                    };
                    onChain: { __typename?: "Media"; url: any };
                    optimized?: { __typename?: "Media"; url: any } | null;
                  }>;
                  attributes: Array<{
                    __typename?: "MetadataAttributeOutput";
                    value?: string | null;
                    traitType?: string | null;
                  }>;
                };
                profile: {
                  __typename?: "Profile";
                  id: any;
                  name?: string | null;
                  handle: any;
                  bio?: string | null;
                  ownedBy: any;
                  isDefault: boolean;
                  interests?: Array<any> | null;
                  isFollowedByMe: boolean;
                  dispatcher?: {
                    __typename?: "Dispatcher";
                    canUseRelay: boolean;
                  } | null;
                  attributes?: Array<{
                    __typename?: "Attribute";
                    key: string;
                    value: string;
                  }> | null;
                  stats: {
                    __typename?: "ProfileStats";
                    totalFollowers: number;
                    totalFollowing: number;
                    totalPosts: number;
                    totalComments: number;
                    totalMirrors: number;
                    totalPublications: number;
                    totalCollects: number;
                  };
                  coverPicture?:
                    | {
                        __typename?: "MediaSet";
                        original: { __typename?: "Media"; url: any };
                      }
                    | { __typename?: "NftImage" }
                    | null;
                  picture?:
                    | {
                        __typename?: "MediaSet";
                        original: { __typename?: "Media"; url: any };
                      }
                    | { __typename?: "NftImage"; uri: any }
                    | null;
                  followModule?:
                    | { __typename: "FeeFollowModuleSettings" }
                    | { __typename: "ProfileFollowModuleSettings" }
                    | { __typename: "RevertFollowModuleSettings" }
                    | { __typename: "UnknownFollowModuleSettings" }
                    | null;
                };
              };
        }
      | {
          __typename?: "NewMirrorNotification";
          notificationId: any;
          createdAt: any;
          profile: {
            __typename?: "Profile";
            id: any;
            name?: string | null;
            handle: any;
            bio?: string | null;
            ownedBy: any;
            isDefault: boolean;
            interests?: Array<any> | null;
            isFollowedByMe: boolean;
            dispatcher?: {
              __typename?: "Dispatcher";
              canUseRelay: boolean;
            } | null;
            attributes?: Array<{
              __typename?: "Attribute";
              key: string;
              value: string;
            }> | null;
            stats: {
              __typename?: "ProfileStats";
              totalFollowers: number;
              totalFollowing: number;
              totalPosts: number;
              totalComments: number;
              totalMirrors: number;
              totalPublications: number;
              totalCollects: number;
            };
            coverPicture?:
              | {
                  __typename?: "MediaSet";
                  original: { __typename?: "Media"; url: any };
                }
              | { __typename?: "NftImage" }
              | null;
            picture?:
              | {
                  __typename?: "MediaSet";
                  original: { __typename?: "Media"; url: any };
                }
              | { __typename?: "NftImage"; uri: any }
              | null;
            followModule?:
              | { __typename: "FeeFollowModuleSettings" }
              | { __typename: "ProfileFollowModuleSettings" }
              | { __typename: "RevertFollowModuleSettings" }
              | { __typename: "UnknownFollowModuleSettings" }
              | null;
          };
          publication:
            | {
                __typename?: "Comment";
                id: any;
                metadata: {
                  __typename?: "MetadataOutput";
                  name?: string | null;
                  description?: any | null;
                  content?: any | null;
                  mainContentFocus: PublicationMainFocus;
                  contentWarning?: PublicationContentWarning | null;
                  tags: Array<string>;
                  cover?: {
                    __typename?: "MediaSet";
                    onChain: { __typename?: "Media"; url: any };
                    original: { __typename?: "Media"; url: any };
                    optimized?: { __typename?: "Media"; url: any } | null;
                  } | null;
                  media: Array<{
                    __typename?: "MediaSet";
                    original: {
                      __typename?: "Media";
                      url: any;
                      mimeType?: any | null;
                    };
                    onChain: { __typename?: "Media"; url: any };
                    optimized?: { __typename?: "Media"; url: any } | null;
                  }>;
                  attributes: Array<{
                    __typename?: "MetadataAttributeOutput";
                    value?: string | null;
                    traitType?: string | null;
                  }>;
                };
              }
            | {
                __typename?: "Post";
                id: any;
                metadata: {
                  __typename?: "MetadataOutput";
                  name?: string | null;
                  description?: any | null;
                  content?: any | null;
                  mainContentFocus: PublicationMainFocus;
                  contentWarning?: PublicationContentWarning | null;
                  tags: Array<string>;
                  cover?: {
                    __typename?: "MediaSet";
                    onChain: { __typename?: "Media"; url: any };
                    original: { __typename?: "Media"; url: any };
                    optimized?: { __typename?: "Media"; url: any } | null;
                  } | null;
                  media: Array<{
                    __typename?: "MediaSet";
                    original: {
                      __typename?: "Media";
                      url: any;
                      mimeType?: any | null;
                    };
                    onChain: { __typename?: "Media"; url: any };
                    optimized?: { __typename?: "Media"; url: any } | null;
                  }>;
                  attributes: Array<{
                    __typename?: "MetadataAttributeOutput";
                    value?: string | null;
                    traitType?: string | null;
                  }>;
                };
              };
        }
      | {
          __typename?: "NewReactionNotification";
          notificationId: any;
          reaction: ReactionTypes;
          createdAt: any;
          profile: {
            __typename?: "Profile";
            id: any;
            name?: string | null;
            handle: any;
            bio?: string | null;
            ownedBy: any;
            isDefault: boolean;
            interests?: Array<any> | null;
            isFollowedByMe: boolean;
            dispatcher?: {
              __typename?: "Dispatcher";
              canUseRelay: boolean;
            } | null;
            attributes?: Array<{
              __typename?: "Attribute";
              key: string;
              value: string;
            }> | null;
            stats: {
              __typename?: "ProfileStats";
              totalFollowers: number;
              totalFollowing: number;
              totalPosts: number;
              totalComments: number;
              totalMirrors: number;
              totalPublications: number;
              totalCollects: number;
            };
            coverPicture?:
              | {
                  __typename?: "MediaSet";
                  original: { __typename?: "Media"; url: any };
                }
              | { __typename?: "NftImage" }
              | null;
            picture?:
              | {
                  __typename?: "MediaSet";
                  original: { __typename?: "Media"; url: any };
                }
              | { __typename?: "NftImage"; uri: any }
              | null;
            followModule?:
              | { __typename: "FeeFollowModuleSettings" }
              | { __typename: "ProfileFollowModuleSettings" }
              | { __typename: "RevertFollowModuleSettings" }
              | { __typename: "UnknownFollowModuleSettings" }
              | null;
          };
          publication:
            | {
                __typename?: "Comment";
                id: any;
                metadata: {
                  __typename?: "MetadataOutput";
                  name?: string | null;
                  description?: any | null;
                  content?: any | null;
                  mainContentFocus: PublicationMainFocus;
                  contentWarning?: PublicationContentWarning | null;
                  tags: Array<string>;
                  cover?: {
                    __typename?: "MediaSet";
                    onChain: { __typename?: "Media"; url: any };
                    original: { __typename?: "Media"; url: any };
                    optimized?: { __typename?: "Media"; url: any } | null;
                  } | null;
                  media: Array<{
                    __typename?: "MediaSet";
                    original: {
                      __typename?: "Media";
                      url: any;
                      mimeType?: any | null;
                    };
                    onChain: { __typename?: "Media"; url: any };
                    optimized?: { __typename?: "Media"; url: any } | null;
                  }>;
                  attributes: Array<{
                    __typename?: "MetadataAttributeOutput";
                    value?: string | null;
                    traitType?: string | null;
                  }>;
                };
                mainPost:
                  | { __typename?: "Mirror" }
                  | {
                      __typename?: "Post";
                      id: any;
                      metadata: {
                        __typename?: "MetadataOutput";
                        name?: string | null;
                        description?: any | null;
                        content?: any | null;
                        mainContentFocus: PublicationMainFocus;
                        contentWarning?: PublicationContentWarning | null;
                        tags: Array<string>;
                        cover?: {
                          __typename?: "MediaSet";
                          onChain: { __typename?: "Media"; url: any };
                          original: { __typename?: "Media"; url: any };
                          optimized?: { __typename?: "Media"; url: any } | null;
                        } | null;
                        media: Array<{
                          __typename?: "MediaSet";
                          original: {
                            __typename?: "Media";
                            url: any;
                            mimeType?: any | null;
                          };
                          onChain: { __typename?: "Media"; url: any };
                          optimized?: { __typename?: "Media"; url: any } | null;
                        }>;
                        attributes: Array<{
                          __typename?: "MetadataAttributeOutput";
                          value?: string | null;
                          traitType?: string | null;
                        }>;
                      };
                    };
              }
            | {
                __typename?: "Mirror";
                id: any;
                metadata: {
                  __typename?: "MetadataOutput";
                  name?: string | null;
                  description?: any | null;
                  content?: any | null;
                  mainContentFocus: PublicationMainFocus;
                  contentWarning?: PublicationContentWarning | null;
                  tags: Array<string>;
                  cover?: {
                    __typename?: "MediaSet";
                    onChain: { __typename?: "Media"; url: any };
                    original: { __typename?: "Media"; url: any };
                    optimized?: { __typename?: "Media"; url: any } | null;
                  } | null;
                  media: Array<{
                    __typename?: "MediaSet";
                    original: {
                      __typename?: "Media";
                      url: any;
                      mimeType?: any | null;
                    };
                    onChain: { __typename?: "Media"; url: any };
                    optimized?: { __typename?: "Media"; url: any } | null;
                  }>;
                  attributes: Array<{
                    __typename?: "MetadataAttributeOutput";
                    value?: string | null;
                    traitType?: string | null;
                  }>;
                };
              }
            | {
                __typename?: "Post";
                id: any;
                metadata: {
                  __typename?: "MetadataOutput";
                  name?: string | null;
                  description?: any | null;
                  content?: any | null;
                  mainContentFocus: PublicationMainFocus;
                  contentWarning?: PublicationContentWarning | null;
                  tags: Array<string>;
                  cover?: {
                    __typename?: "MediaSet";
                    onChain: { __typename?: "Media"; url: any };
                    original: { __typename?: "Media"; url: any };
                    optimized?: { __typename?: "Media"; url: any } | null;
                  } | null;
                  media: Array<{
                    __typename?: "MediaSet";
                    original: {
                      __typename?: "Media";
                      url: any;
                      mimeType?: any | null;
                    };
                    onChain: { __typename?: "Media"; url: any };
                    optimized?: { __typename?: "Media"; url: any } | null;
                  }>;
                  attributes: Array<{
                    __typename?: "MetadataAttributeOutput";
                    value?: string | null;
                    traitType?: string | null;
                  }>;
                };
              };
        }
    >;
    pageInfo: { __typename?: "PaginatedResultInfo"; next?: any | null };
  };
};

export type ProfileQueryVariables = Exact<{
  request: SingleProfileQueryRequest;
  who?: InputMaybe<Scalars["ProfileId"]>;
}>;

export type ProfileQuery = {
  __typename?: "Query";
  profile?: {
    __typename?: "Profile";
    id: any;
    handle: any;
    ownedBy: any;
    name?: string | null;
    interests?: Array<any> | null;
    isFollowedByMe: boolean;
    isFollowing: boolean;
    bio?: string | null;
    dispatcher?: { __typename?: "Dispatcher"; canUseRelay: boolean } | null;
    onChainIdentity: {
      __typename?: "OnChainIdentity";
      proofOfHumanity: boolean;
      worldcoin: { __typename?: "WorldcoinIdentity"; isHuman: boolean };
      sybilDotOrg: {
        __typename?: "SybilDotOrgIdentity";
        verified: boolean;
        source: {
          __typename?: "SybilDotOrgIdentitySource";
          twitter: {
            __typename?: "SybilDotOrgTwitterIdentity";
            handle?: string | null;
          };
        };
      };
      ens?: { __typename?: "EnsOnChainIdentity"; name?: any | null } | null;
    };
    attributes?: Array<{
      __typename?: "Attribute";
      key: string;
      value: string;
      traitType?: string | null;
      displayType?: string | null;
    }> | null;
    stats: {
      __typename?: "ProfileStats";
      totalFollowers: number;
      totalFollowing: number;
      totalPosts: number;
      totalComments: number;
      totalMirrors: number;
      totalCollects: number;
      totalPublications: number;
    };
    picture?:
      | {
          __typename?: "MediaSet";
          original: { __typename?: "Media"; url: any };
        }
      | { __typename?: "NftImage"; uri: any }
      | null;
    coverPicture?:
      | {
          __typename?: "MediaSet";
          original: { __typename?: "Media"; url: any };
        }
      | { __typename?: "NftImage" }
      | null;
    followModule?:
      | { __typename: "FeeFollowModuleSettings" }
      | { __typename: "ProfileFollowModuleSettings" }
      | { __typename: "RevertFollowModuleSettings" }
      | { __typename: "UnknownFollowModuleSettings" }
      | null;
  } | null;
};

export type ProfileCollectsQueryVariables = Exact<{
  request: PublicationsQueryRequest;
  reactionRequest?: InputMaybe<ReactionFieldResolverRequest>;
  channelId?: InputMaybe<Scalars["ProfileId"]>;
}>;

export type ProfileCollectsQuery = {
  __typename?: "Query";
  publications: {
    __typename?: "PaginatedPublicationResult";
    items: Array<
      | { __typename?: "Comment" }
      | {
          __typename?: "Mirror";
          id: any;
          reaction?: ReactionTypes | null;
          collectNftAddress?: any | null;
          onChainContentURI: string;
          hidden: boolean;
          isDataAvailability: boolean;
          dataAvailabilityProofs?: string | null;
          hasCollectedByMe: boolean;
          createdAt: any;
          appId?: any | null;
          profile: {
            __typename?: "Profile";
            id: any;
            name?: string | null;
            handle: any;
            bio?: string | null;
            ownedBy: any;
            isDefault: boolean;
            interests?: Array<any> | null;
            isFollowedByMe: boolean;
            dispatcher?: {
              __typename?: "Dispatcher";
              canUseRelay: boolean;
            } | null;
            attributes?: Array<{
              __typename?: "Attribute";
              key: string;
              value: string;
            }> | null;
            stats: {
              __typename?: "ProfileStats";
              totalFollowers: number;
              totalFollowing: number;
              totalPosts: number;
              totalComments: number;
              totalMirrors: number;
              totalPublications: number;
              totalCollects: number;
            };
            coverPicture?:
              | {
                  __typename?: "MediaSet";
                  original: { __typename?: "Media"; url: any };
                }
              | { __typename?: "NftImage" }
              | null;
            picture?:
              | {
                  __typename?: "MediaSet";
                  original: { __typename?: "Media"; url: any };
                }
              | { __typename?: "NftImage"; uri: any }
              | null;
            followModule?:
              | { __typename: "FeeFollowModuleSettings" }
              | { __typename: "ProfileFollowModuleSettings" }
              | { __typename: "RevertFollowModuleSettings" }
              | { __typename: "UnknownFollowModuleSettings" }
              | null;
          };
          referenceModule?:
            | { __typename: "DegreesOfSeparationReferenceModuleSettings" }
            | { __typename: "FollowOnlyReferenceModuleSettings" }
            | { __typename: "UnknownReferenceModuleSettings" }
            | null;
          canComment: { __typename?: "CanCommentResponse"; result: boolean };
          canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
          collectModule:
            | { __typename: "AaveFeeCollectModuleSettings" }
            | { __typename: "ERC4626FeeCollectModuleSettings" }
            | {
                __typename: "FeeCollectModuleSettings";
                type: CollectModules;
                recipient: any;
                referralFee: number;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              }
            | {
                __typename: "FreeCollectModuleSettings";
                type: CollectModules;
                followerOnly: boolean;
                contractAddress: any;
              }
            | {
                __typename: "LimitedFeeCollectModuleSettings";
                type: CollectModules;
                collectLimit: string;
                recipient: any;
                referralFee: number;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              }
            | {
                __typename: "LimitedTimedFeeCollectModuleSettings";
                type: CollectModules;
                collectLimit: string;
                recipient: any;
                referralFee: number;
                endTimestamp: any;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              }
            | { __typename: "MultirecipientFeeCollectModuleSettings" }
            | {
                __typename: "RevertCollectModuleSettings";
                type: CollectModules;
              }
            | {
                __typename: "SimpleCollectModuleSettings";
                type: CollectModules;
                contractAddress: any;
                followerOnly: boolean;
                optionalCollectLimit?: string | null;
                optionalEndTimestamp?: any | null;
                fee?: {
                  __typename?: "ModuleFee";
                  recipient: any;
                  referralFee: number;
                  amount: {
                    __typename?: "ModuleFeeAmount";
                    value: string;
                    asset: {
                      __typename?: "Erc20";
                      name: string;
                      symbol: string;
                      decimals: number;
                      address: any;
                    };
                  };
                } | null;
              }
            | {
                __typename: "TimedFeeCollectModuleSettings";
                type: CollectModules;
                recipient: any;
                referralFee: number;
                endTimestamp: any;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              }
            | {
                __typename: "UnknownCollectModuleSettings";
                type: CollectModules;
                contractAddress: any;
                collectModuleReturnData: any;
              };
          stats: {
            __typename?: "PublicationStats";
            totalUpvotes: number;
            totalAmountOfMirrors: number;
            totalAmountOfCollects: number;
            totalAmountOfComments: number;
          };
          metadata: {
            __typename?: "MetadataOutput";
            name?: string | null;
            description?: any | null;
            content?: any | null;
            mainContentFocus: PublicationMainFocus;
            contentWarning?: PublicationContentWarning | null;
            tags: Array<string>;
            cover?: {
              __typename?: "MediaSet";
              onChain: { __typename?: "Media"; url: any };
              original: { __typename?: "Media"; url: any };
              optimized?: { __typename?: "Media"; url: any } | null;
            } | null;
            media: Array<{
              __typename?: "MediaSet";
              original: {
                __typename?: "Media";
                url: any;
                mimeType?: any | null;
              };
              onChain: { __typename?: "Media"; url: any };
              optimized?: { __typename?: "Media"; url: any } | null;
            }>;
            attributes: Array<{
              __typename?: "MetadataAttributeOutput";
              value?: string | null;
              traitType?: string | null;
            }>;
          };
          mirrorOf:
            | {
                __typename?: "Comment";
                id: any;
                reaction?: ReactionTypes | null;
                collectNftAddress?: any | null;
                onChainContentURI: string;
                hidden: boolean;
                hasCollectedByMe: boolean;
                isDataAvailability: boolean;
                createdAt: any;
                appId?: any | null;
                profile: {
                  __typename?: "Profile";
                  id: any;
                  name?: string | null;
                  handle: any;
                  bio?: string | null;
                  ownedBy: any;
                  isDefault: boolean;
                  interests?: Array<any> | null;
                  isFollowedByMe: boolean;
                  dispatcher?: {
                    __typename?: "Dispatcher";
                    canUseRelay: boolean;
                  } | null;
                  attributes?: Array<{
                    __typename?: "Attribute";
                    key: string;
                    value: string;
                  }> | null;
                  stats: {
                    __typename?: "ProfileStats";
                    totalFollowers: number;
                    totalFollowing: number;
                    totalPosts: number;
                    totalComments: number;
                    totalMirrors: number;
                    totalPublications: number;
                    totalCollects: number;
                  };
                  coverPicture?:
                    | {
                        __typename?: "MediaSet";
                        original: { __typename?: "Media"; url: any };
                      }
                    | { __typename?: "NftImage" }
                    | null;
                  picture?:
                    | {
                        __typename?: "MediaSet";
                        original: { __typename?: "Media"; url: any };
                      }
                    | { __typename?: "NftImage"; uri: any }
                    | null;
                  followModule?:
                    | { __typename: "FeeFollowModuleSettings" }
                    | { __typename: "ProfileFollowModuleSettings" }
                    | { __typename: "RevertFollowModuleSettings" }
                    | { __typename: "UnknownFollowModuleSettings" }
                    | null;
                };
                collectModule:
                  | { __typename: "AaveFeeCollectModuleSettings" }
                  | { __typename: "ERC4626FeeCollectModuleSettings" }
                  | {
                      __typename: "FeeCollectModuleSettings";
                      type: CollectModules;
                      recipient: any;
                      referralFee: number;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          name: string;
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    }
                  | {
                      __typename: "FreeCollectModuleSettings";
                      type: CollectModules;
                      followerOnly: boolean;
                      contractAddress: any;
                    }
                  | {
                      __typename: "LimitedFeeCollectModuleSettings";
                      type: CollectModules;
                      collectLimit: string;
                      recipient: any;
                      referralFee: number;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          name: string;
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    }
                  | {
                      __typename: "LimitedTimedFeeCollectModuleSettings";
                      type: CollectModules;
                      collectLimit: string;
                      recipient: any;
                      referralFee: number;
                      endTimestamp: any;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          name: string;
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    }
                  | { __typename: "MultirecipientFeeCollectModuleSettings" }
                  | {
                      __typename: "RevertCollectModuleSettings";
                      type: CollectModules;
                    }
                  | {
                      __typename: "SimpleCollectModuleSettings";
                      type: CollectModules;
                      contractAddress: any;
                      followerOnly: boolean;
                      optionalCollectLimit?: string | null;
                      optionalEndTimestamp?: any | null;
                      fee?: {
                        __typename?: "ModuleFee";
                        recipient: any;
                        referralFee: number;
                        amount: {
                          __typename?: "ModuleFeeAmount";
                          value: string;
                          asset: {
                            __typename?: "Erc20";
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                          };
                        };
                      } | null;
                    }
                  | {
                      __typename: "TimedFeeCollectModuleSettings";
                      type: CollectModules;
                      recipient: any;
                      referralFee: number;
                      endTimestamp: any;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          name: string;
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    }
                  | {
                      __typename: "UnknownCollectModuleSettings";
                      type: CollectModules;
                      contractAddress: any;
                      collectModuleReturnData: any;
                    };
                referenceModule?:
                  | { __typename: "DegreesOfSeparationReferenceModuleSettings" }
                  | { __typename: "FollowOnlyReferenceModuleSettings" }
                  | { __typename: "UnknownReferenceModuleSettings" }
                  | null;
                canComment: {
                  __typename?: "CanCommentResponse";
                  result: boolean;
                };
                canMirror: {
                  __typename?: "CanMirrorResponse";
                  result: boolean;
                };
                stats: {
                  __typename?: "PublicationStats";
                  totalAmountOfComments: number;
                  totalAmountOfCollects: number;
                  totalAmountOfMirrors: number;
                  totalUpvotes: number;
                };
                metadata: {
                  __typename?: "MetadataOutput";
                  name?: string | null;
                  description?: any | null;
                  content?: any | null;
                  mainContentFocus: PublicationMainFocus;
                  contentWarning?: PublicationContentWarning | null;
                  tags: Array<string>;
                  cover?: {
                    __typename?: "MediaSet";
                    onChain: { __typename?: "Media"; url: any };
                    original: { __typename?: "Media"; url: any };
                    optimized?: { __typename?: "Media"; url: any } | null;
                  } | null;
                  media: Array<{
                    __typename?: "MediaSet";
                    original: {
                      __typename?: "Media";
                      url: any;
                      mimeType?: any | null;
                    };
                    onChain: { __typename?: "Media"; url: any };
                    optimized?: { __typename?: "Media"; url: any } | null;
                  }>;
                  attributes: Array<{
                    __typename?: "MetadataAttributeOutput";
                    value?: string | null;
                    traitType?: string | null;
                  }>;
                };
                commentOn?:
                  | { __typename?: "Comment" }
                  | { __typename?: "Mirror" }
                  | {
                      __typename?: "Post";
                      id: any;
                      createdAt: any;
                      appId?: any | null;
                      profile: {
                        __typename?: "Profile";
                        id: any;
                        name?: string | null;
                        handle: any;
                        bio?: string | null;
                        ownedBy: any;
                        isDefault: boolean;
                        interests?: Array<any> | null;
                        isFollowedByMe: boolean;
                        dispatcher?: {
                          __typename?: "Dispatcher";
                          canUseRelay: boolean;
                        } | null;
                        attributes?: Array<{
                          __typename?: "Attribute";
                          key: string;
                          value: string;
                        }> | null;
                        stats: {
                          __typename?: "ProfileStats";
                          totalFollowers: number;
                          totalFollowing: number;
                          totalPosts: number;
                          totalComments: number;
                          totalMirrors: number;
                          totalPublications: number;
                          totalCollects: number;
                        };
                        coverPicture?:
                          | {
                              __typename?: "MediaSet";
                              original: { __typename?: "Media"; url: any };
                            }
                          | { __typename?: "NftImage" }
                          | null;
                        picture?:
                          | {
                              __typename?: "MediaSet";
                              original: { __typename?: "Media"; url: any };
                            }
                          | { __typename?: "NftImage"; uri: any }
                          | null;
                        followModule?:
                          | { __typename: "FeeFollowModuleSettings" }
                          | { __typename: "ProfileFollowModuleSettings" }
                          | { __typename: "RevertFollowModuleSettings" }
                          | { __typename: "UnknownFollowModuleSettings" }
                          | null;
                      };
                      metadata: {
                        __typename?: "MetadataOutput";
                        name?: string | null;
                        description?: any | null;
                        content?: any | null;
                        mainContentFocus: PublicationMainFocus;
                        contentWarning?: PublicationContentWarning | null;
                        tags: Array<string>;
                        cover?: {
                          __typename?: "MediaSet";
                          onChain: { __typename?: "Media"; url: any };
                          original: { __typename?: "Media"; url: any };
                          optimized?: { __typename?: "Media"; url: any } | null;
                        } | null;
                        media: Array<{
                          __typename?: "MediaSet";
                          original: {
                            __typename?: "Media";
                            url: any;
                            mimeType?: any | null;
                          };
                          onChain: { __typename?: "Media"; url: any };
                          optimized?: { __typename?: "Media"; url: any } | null;
                        }>;
                        attributes: Array<{
                          __typename?: "MetadataAttributeOutput";
                          value?: string | null;
                          traitType?: string | null;
                        }>;
                      };
                    }
                  | null;
              }
            | {
                __typename?: "Post";
                id: any;
                reaction?: ReactionTypes | null;
                collectNftAddress?: any | null;
                onChainContentURI: string;
                isGated: boolean;
                isDataAvailability: boolean;
                dataAvailabilityProofs?: string | null;
                hidden: boolean;
                hasCollectedByMe: boolean;
                createdAt: any;
                appId?: any | null;
                profile: {
                  __typename?: "Profile";
                  id: any;
                  name?: string | null;
                  handle: any;
                  bio?: string | null;
                  ownedBy: any;
                  isDefault: boolean;
                  interests?: Array<any> | null;
                  isFollowedByMe: boolean;
                  dispatcher?: {
                    __typename?: "Dispatcher";
                    canUseRelay: boolean;
                  } | null;
                  attributes?: Array<{
                    __typename?: "Attribute";
                    key: string;
                    value: string;
                  }> | null;
                  stats: {
                    __typename?: "ProfileStats";
                    totalFollowers: number;
                    totalFollowing: number;
                    totalPosts: number;
                    totalComments: number;
                    totalMirrors: number;
                    totalPublications: number;
                    totalCollects: number;
                  };
                  coverPicture?:
                    | {
                        __typename?: "MediaSet";
                        original: { __typename?: "Media"; url: any };
                      }
                    | { __typename?: "NftImage" }
                    | null;
                  picture?:
                    | {
                        __typename?: "MediaSet";
                        original: { __typename?: "Media"; url: any };
                      }
                    | { __typename?: "NftImage"; uri: any }
                    | null;
                  followModule?:
                    | { __typename: "FeeFollowModuleSettings" }
                    | { __typename: "ProfileFollowModuleSettings" }
                    | { __typename: "RevertFollowModuleSettings" }
                    | { __typename: "UnknownFollowModuleSettings" }
                    | null;
                };
                referenceModule?:
                  | { __typename: "DegreesOfSeparationReferenceModuleSettings" }
                  | { __typename: "FollowOnlyReferenceModuleSettings" }
                  | { __typename: "UnknownReferenceModuleSettings" }
                  | null;
                canComment: {
                  __typename?: "CanCommentResponse";
                  result: boolean;
                };
                canMirror: {
                  __typename?: "CanMirrorResponse";
                  result: boolean;
                };
                collectModule:
                  | { __typename: "AaveFeeCollectModuleSettings" }
                  | { __typename: "ERC4626FeeCollectModuleSettings" }
                  | {
                      __typename: "FeeCollectModuleSettings";
                      type: CollectModules;
                      recipient: any;
                      referralFee: number;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          name: string;
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    }
                  | {
                      __typename: "FreeCollectModuleSettings";
                      type: CollectModules;
                      followerOnly: boolean;
                      contractAddress: any;
                    }
                  | {
                      __typename: "LimitedFeeCollectModuleSettings";
                      type: CollectModules;
                      collectLimit: string;
                      recipient: any;
                      referralFee: number;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          name: string;
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    }
                  | {
                      __typename: "LimitedTimedFeeCollectModuleSettings";
                      type: CollectModules;
                      collectLimit: string;
                      recipient: any;
                      referralFee: number;
                      endTimestamp: any;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          name: string;
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    }
                  | { __typename: "MultirecipientFeeCollectModuleSettings" }
                  | {
                      __typename: "RevertCollectModuleSettings";
                      type: CollectModules;
                    }
                  | {
                      __typename: "SimpleCollectModuleSettings";
                      type: CollectModules;
                      contractAddress: any;
                      followerOnly: boolean;
                      optionalCollectLimit?: string | null;
                      optionalEndTimestamp?: any | null;
                      fee?: {
                        __typename?: "ModuleFee";
                        recipient: any;
                        referralFee: number;
                        amount: {
                          __typename?: "ModuleFeeAmount";
                          value: string;
                          asset: {
                            __typename?: "Erc20";
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                          };
                        };
                      } | null;
                    }
                  | {
                      __typename: "TimedFeeCollectModuleSettings";
                      type: CollectModules;
                      recipient: any;
                      referralFee: number;
                      endTimestamp: any;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          name: string;
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    }
                  | {
                      __typename: "UnknownCollectModuleSettings";
                      type: CollectModules;
                      contractAddress: any;
                      collectModuleReturnData: any;
                    };
                stats: {
                  __typename?: "PublicationStats";
                  totalAmountOfComments: number;
                  totalAmountOfCollects: number;
                  totalAmountOfMirrors: number;
                  totalDownvotes: number;
                  totalUpvotes: number;
                };
                metadata: {
                  __typename?: "MetadataOutput";
                  name?: string | null;
                  description?: any | null;
                  content?: any | null;
                  mainContentFocus: PublicationMainFocus;
                  contentWarning?: PublicationContentWarning | null;
                  tags: Array<string>;
                  cover?: {
                    __typename?: "MediaSet";
                    onChain: { __typename?: "Media"; url: any };
                    original: { __typename?: "Media"; url: any };
                    optimized?: { __typename?: "Media"; url: any } | null;
                  } | null;
                  media: Array<{
                    __typename?: "MediaSet";
                    original: {
                      __typename?: "Media";
                      url: any;
                      mimeType?: any | null;
                    };
                    onChain: { __typename?: "Media"; url: any };
                    optimized?: { __typename?: "Media"; url: any } | null;
                  }>;
                  attributes: Array<{
                    __typename?: "MetadataAttributeOutput";
                    value?: string | null;
                    traitType?: string | null;
                  }>;
                };
              };
        }
      | {
          __typename?: "Post";
          id: any;
          reaction?: ReactionTypes | null;
          collectNftAddress?: any | null;
          onChainContentURI: string;
          isGated: boolean;
          isDataAvailability: boolean;
          dataAvailabilityProofs?: string | null;
          hidden: boolean;
          hasCollectedByMe: boolean;
          createdAt: any;
          appId?: any | null;
          profile: {
            __typename?: "Profile";
            id: any;
            name?: string | null;
            handle: any;
            bio?: string | null;
            ownedBy: any;
            isDefault: boolean;
            interests?: Array<any> | null;
            isFollowedByMe: boolean;
            dispatcher?: {
              __typename?: "Dispatcher";
              canUseRelay: boolean;
            } | null;
            attributes?: Array<{
              __typename?: "Attribute";
              key: string;
              value: string;
            }> | null;
            stats: {
              __typename?: "ProfileStats";
              totalFollowers: number;
              totalFollowing: number;
              totalPosts: number;
              totalComments: number;
              totalMirrors: number;
              totalPublications: number;
              totalCollects: number;
            };
            coverPicture?:
              | {
                  __typename?: "MediaSet";
                  original: { __typename?: "Media"; url: any };
                }
              | { __typename?: "NftImage" }
              | null;
            picture?:
              | {
                  __typename?: "MediaSet";
                  original: { __typename?: "Media"; url: any };
                }
              | { __typename?: "NftImage"; uri: any }
              | null;
            followModule?:
              | { __typename: "FeeFollowModuleSettings" }
              | { __typename: "ProfileFollowModuleSettings" }
              | { __typename: "RevertFollowModuleSettings" }
              | { __typename: "UnknownFollowModuleSettings" }
              | null;
          };
          referenceModule?:
            | { __typename: "DegreesOfSeparationReferenceModuleSettings" }
            | { __typename: "FollowOnlyReferenceModuleSettings" }
            | { __typename: "UnknownReferenceModuleSettings" }
            | null;
          canComment: { __typename?: "CanCommentResponse"; result: boolean };
          canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
          collectModule:
            | { __typename: "AaveFeeCollectModuleSettings" }
            | { __typename: "ERC4626FeeCollectModuleSettings" }
            | {
                __typename: "FeeCollectModuleSettings";
                type: CollectModules;
                recipient: any;
                referralFee: number;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              }
            | {
                __typename: "FreeCollectModuleSettings";
                type: CollectModules;
                followerOnly: boolean;
                contractAddress: any;
              }
            | {
                __typename: "LimitedFeeCollectModuleSettings";
                type: CollectModules;
                collectLimit: string;
                recipient: any;
                referralFee: number;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              }
            | {
                __typename: "LimitedTimedFeeCollectModuleSettings";
                type: CollectModules;
                collectLimit: string;
                recipient: any;
                referralFee: number;
                endTimestamp: any;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              }
            | { __typename: "MultirecipientFeeCollectModuleSettings" }
            | {
                __typename: "RevertCollectModuleSettings";
                type: CollectModules;
              }
            | {
                __typename: "SimpleCollectModuleSettings";
                type: CollectModules;
                contractAddress: any;
                followerOnly: boolean;
                optionalCollectLimit?: string | null;
                optionalEndTimestamp?: any | null;
                fee?: {
                  __typename?: "ModuleFee";
                  recipient: any;
                  referralFee: number;
                  amount: {
                    __typename?: "ModuleFeeAmount";
                    value: string;
                    asset: {
                      __typename?: "Erc20";
                      name: string;
                      symbol: string;
                      decimals: number;
                      address: any;
                    };
                  };
                } | null;
              }
            | {
                __typename: "TimedFeeCollectModuleSettings";
                type: CollectModules;
                recipient: any;
                referralFee: number;
                endTimestamp: any;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              }
            | {
                __typename: "UnknownCollectModuleSettings";
                type: CollectModules;
                contractAddress: any;
                collectModuleReturnData: any;
              };
          stats: {
            __typename?: "PublicationStats";
            totalAmountOfComments: number;
            totalAmountOfCollects: number;
            totalAmountOfMirrors: number;
            totalDownvotes: number;
            totalUpvotes: number;
          };
          metadata: {
            __typename?: "MetadataOutput";
            name?: string | null;
            description?: any | null;
            content?: any | null;
            mainContentFocus: PublicationMainFocus;
            contentWarning?: PublicationContentWarning | null;
            tags: Array<string>;
            cover?: {
              __typename?: "MediaSet";
              onChain: { __typename?: "Media"; url: any };
              original: { __typename?: "Media"; url: any };
              optimized?: { __typename?: "Media"; url: any } | null;
            } | null;
            media: Array<{
              __typename?: "MediaSet";
              original: {
                __typename?: "Media";
                url: any;
                mimeType?: any | null;
              };
              onChain: { __typename?: "Media"; url: any };
              optimized?: { __typename?: "Media"; url: any } | null;
            }>;
            attributes: Array<{
              __typename?: "MetadataAttributeOutput";
              value?: string | null;
              traitType?: string | null;
            }>;
          };
        }
    >;
    pageInfo: { __typename?: "PaginatedResultInfo"; next?: any | null };
  };
};

export type ProfileFollowModuleQueryVariables = Exact<{
  request: ProfileQueryRequest;
}>;

export type ProfileFollowModuleQuery = {
  __typename?: "Query";
  profiles: {
    __typename?: "PaginatedProfileResult";
    items: Array<{
      __typename?: "Profile";
      followModule?:
        | {
            __typename?: "FeeFollowModuleSettings";
            recipient: any;
            amount: {
              __typename?: "ModuleFeeAmount";
              value: string;
              asset: {
                __typename?: "Erc20";
                name: string;
                symbol: string;
                decimals: number;
                address: any;
              };
            };
          }
        | { __typename?: "ProfileFollowModuleSettings" }
        | { __typename?: "RevertFollowModuleSettings" }
        | { __typename?: "UnknownFollowModuleSettings" }
        | null;
    }>;
  };
};

export type ProfileInterestsQueryVariables = Exact<{ [key: string]: never }>;

export type ProfileInterestsQuery = {
  __typename?: "Query";
  profileInterests: Array<any>;
};

export type ProfileMirrorsQueryVariables = Exact<{
  request: PublicationsQueryRequest;
  reactionRequest?: InputMaybe<ReactionFieldResolverRequest>;
  channelId?: InputMaybe<Scalars["ProfileId"]>;
}>;

export type ProfileMirrorsQuery = {
  __typename?: "Query";
  publications: {
    __typename?: "PaginatedPublicationResult";
    items: Array<
      | { __typename?: "Comment" }
      | {
          __typename?: "Mirror";
          id: any;
          reaction?: ReactionTypes | null;
          collectNftAddress?: any | null;
          onChainContentURI: string;
          hidden: boolean;
          isDataAvailability: boolean;
          dataAvailabilityProofs?: string | null;
          hasCollectedByMe: boolean;
          createdAt: any;
          appId?: any | null;
          profile: {
            __typename?: "Profile";
            id: any;
            name?: string | null;
            handle: any;
            bio?: string | null;
            ownedBy: any;
            isDefault: boolean;
            interests?: Array<any> | null;
            isFollowedByMe: boolean;
            dispatcher?: {
              __typename?: "Dispatcher";
              canUseRelay: boolean;
            } | null;
            attributes?: Array<{
              __typename?: "Attribute";
              key: string;
              value: string;
            }> | null;
            stats: {
              __typename?: "ProfileStats";
              totalFollowers: number;
              totalFollowing: number;
              totalPosts: number;
              totalComments: number;
              totalMirrors: number;
              totalPublications: number;
              totalCollects: number;
            };
            coverPicture?:
              | {
                  __typename?: "MediaSet";
                  original: { __typename?: "Media"; url: any };
                }
              | { __typename?: "NftImage" }
              | null;
            picture?:
              | {
                  __typename?: "MediaSet";
                  original: { __typename?: "Media"; url: any };
                }
              | { __typename?: "NftImage"; uri: any }
              | null;
            followModule?:
              | { __typename: "FeeFollowModuleSettings" }
              | { __typename: "ProfileFollowModuleSettings" }
              | { __typename: "RevertFollowModuleSettings" }
              | { __typename: "UnknownFollowModuleSettings" }
              | null;
          };
          referenceModule?:
            | { __typename: "DegreesOfSeparationReferenceModuleSettings" }
            | { __typename: "FollowOnlyReferenceModuleSettings" }
            | { __typename: "UnknownReferenceModuleSettings" }
            | null;
          canComment: { __typename?: "CanCommentResponse"; result: boolean };
          canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
          collectModule:
            | { __typename: "AaveFeeCollectModuleSettings" }
            | { __typename: "ERC4626FeeCollectModuleSettings" }
            | {
                __typename: "FeeCollectModuleSettings";
                type: CollectModules;
                recipient: any;
                referralFee: number;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              }
            | {
                __typename: "FreeCollectModuleSettings";
                type: CollectModules;
                followerOnly: boolean;
                contractAddress: any;
              }
            | {
                __typename: "LimitedFeeCollectModuleSettings";
                type: CollectModules;
                collectLimit: string;
                recipient: any;
                referralFee: number;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              }
            | {
                __typename: "LimitedTimedFeeCollectModuleSettings";
                type: CollectModules;
                collectLimit: string;
                recipient: any;
                referralFee: number;
                endTimestamp: any;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              }
            | { __typename: "MultirecipientFeeCollectModuleSettings" }
            | {
                __typename: "RevertCollectModuleSettings";
                type: CollectModules;
              }
            | {
                __typename: "SimpleCollectModuleSettings";
                type: CollectModules;
                contractAddress: any;
                followerOnly: boolean;
                optionalCollectLimit?: string | null;
                optionalEndTimestamp?: any | null;
                fee?: {
                  __typename?: "ModuleFee";
                  recipient: any;
                  referralFee: number;
                  amount: {
                    __typename?: "ModuleFeeAmount";
                    value: string;
                    asset: {
                      __typename?: "Erc20";
                      name: string;
                      symbol: string;
                      decimals: number;
                      address: any;
                    };
                  };
                } | null;
              }
            | {
                __typename: "TimedFeeCollectModuleSettings";
                type: CollectModules;
                recipient: any;
                referralFee: number;
                endTimestamp: any;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              }
            | {
                __typename: "UnknownCollectModuleSettings";
                type: CollectModules;
                contractAddress: any;
                collectModuleReturnData: any;
              };
          stats: {
            __typename?: "PublicationStats";
            totalUpvotes: number;
            totalAmountOfMirrors: number;
            totalAmountOfCollects: number;
            totalAmountOfComments: number;
          };
          metadata: {
            __typename?: "MetadataOutput";
            name?: string | null;
            description?: any | null;
            content?: any | null;
            mainContentFocus: PublicationMainFocus;
            contentWarning?: PublicationContentWarning | null;
            tags: Array<string>;
            cover?: {
              __typename?: "MediaSet";
              onChain: { __typename?: "Media"; url: any };
              original: { __typename?: "Media"; url: any };
              optimized?: { __typename?: "Media"; url: any } | null;
            } | null;
            media: Array<{
              __typename?: "MediaSet";
              original: {
                __typename?: "Media";
                url: any;
                mimeType?: any | null;
              };
              onChain: { __typename?: "Media"; url: any };
              optimized?: { __typename?: "Media"; url: any } | null;
            }>;
            attributes: Array<{
              __typename?: "MetadataAttributeOutput";
              value?: string | null;
              traitType?: string | null;
            }>;
          };
          mirrorOf:
            | {
                __typename?: "Comment";
                id: any;
                reaction?: ReactionTypes | null;
                collectNftAddress?: any | null;
                onChainContentURI: string;
                hidden: boolean;
                hasCollectedByMe: boolean;
                isDataAvailability: boolean;
                createdAt: any;
                appId?: any | null;
                profile: {
                  __typename?: "Profile";
                  id: any;
                  name?: string | null;
                  handle: any;
                  bio?: string | null;
                  ownedBy: any;
                  isDefault: boolean;
                  interests?: Array<any> | null;
                  isFollowedByMe: boolean;
                  dispatcher?: {
                    __typename?: "Dispatcher";
                    canUseRelay: boolean;
                  } | null;
                  attributes?: Array<{
                    __typename?: "Attribute";
                    key: string;
                    value: string;
                  }> | null;
                  stats: {
                    __typename?: "ProfileStats";
                    totalFollowers: number;
                    totalFollowing: number;
                    totalPosts: number;
                    totalComments: number;
                    totalMirrors: number;
                    totalPublications: number;
                    totalCollects: number;
                  };
                  coverPicture?:
                    | {
                        __typename?: "MediaSet";
                        original: { __typename?: "Media"; url: any };
                      }
                    | { __typename?: "NftImage" }
                    | null;
                  picture?:
                    | {
                        __typename?: "MediaSet";
                        original: { __typename?: "Media"; url: any };
                      }
                    | { __typename?: "NftImage"; uri: any }
                    | null;
                  followModule?:
                    | { __typename: "FeeFollowModuleSettings" }
                    | { __typename: "ProfileFollowModuleSettings" }
                    | { __typename: "RevertFollowModuleSettings" }
                    | { __typename: "UnknownFollowModuleSettings" }
                    | null;
                };
                collectModule:
                  | { __typename: "AaveFeeCollectModuleSettings" }
                  | { __typename: "ERC4626FeeCollectModuleSettings" }
                  | {
                      __typename: "FeeCollectModuleSettings";
                      type: CollectModules;
                      recipient: any;
                      referralFee: number;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          name: string;
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    }
                  | {
                      __typename: "FreeCollectModuleSettings";
                      type: CollectModules;
                      followerOnly: boolean;
                      contractAddress: any;
                    }
                  | {
                      __typename: "LimitedFeeCollectModuleSettings";
                      type: CollectModules;
                      collectLimit: string;
                      recipient: any;
                      referralFee: number;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          name: string;
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    }
                  | {
                      __typename: "LimitedTimedFeeCollectModuleSettings";
                      type: CollectModules;
                      collectLimit: string;
                      recipient: any;
                      referralFee: number;
                      endTimestamp: any;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          name: string;
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    }
                  | { __typename: "MultirecipientFeeCollectModuleSettings" }
                  | {
                      __typename: "RevertCollectModuleSettings";
                      type: CollectModules;
                    }
                  | {
                      __typename: "SimpleCollectModuleSettings";
                      type: CollectModules;
                      contractAddress: any;
                      followerOnly: boolean;
                      optionalCollectLimit?: string | null;
                      optionalEndTimestamp?: any | null;
                      fee?: {
                        __typename?: "ModuleFee";
                        recipient: any;
                        referralFee: number;
                        amount: {
                          __typename?: "ModuleFeeAmount";
                          value: string;
                          asset: {
                            __typename?: "Erc20";
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                          };
                        };
                      } | null;
                    }
                  | {
                      __typename: "TimedFeeCollectModuleSettings";
                      type: CollectModules;
                      recipient: any;
                      referralFee: number;
                      endTimestamp: any;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          name: string;
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    }
                  | {
                      __typename: "UnknownCollectModuleSettings";
                      type: CollectModules;
                      contractAddress: any;
                      collectModuleReturnData: any;
                    };
                referenceModule?:
                  | { __typename: "DegreesOfSeparationReferenceModuleSettings" }
                  | { __typename: "FollowOnlyReferenceModuleSettings" }
                  | { __typename: "UnknownReferenceModuleSettings" }
                  | null;
                canComment: {
                  __typename?: "CanCommentResponse";
                  result: boolean;
                };
                canMirror: {
                  __typename?: "CanMirrorResponse";
                  result: boolean;
                };
                stats: {
                  __typename?: "PublicationStats";
                  totalAmountOfComments: number;
                  totalAmountOfCollects: number;
                  totalAmountOfMirrors: number;
                  totalUpvotes: number;
                };
                metadata: {
                  __typename?: "MetadataOutput";
                  name?: string | null;
                  description?: any | null;
                  content?: any | null;
                  mainContentFocus: PublicationMainFocus;
                  contentWarning?: PublicationContentWarning | null;
                  tags: Array<string>;
                  cover?: {
                    __typename?: "MediaSet";
                    onChain: { __typename?: "Media"; url: any };
                    original: { __typename?: "Media"; url: any };
                    optimized?: { __typename?: "Media"; url: any } | null;
                  } | null;
                  media: Array<{
                    __typename?: "MediaSet";
                    original: {
                      __typename?: "Media";
                      url: any;
                      mimeType?: any | null;
                    };
                    onChain: { __typename?: "Media"; url: any };
                    optimized?: { __typename?: "Media"; url: any } | null;
                  }>;
                  attributes: Array<{
                    __typename?: "MetadataAttributeOutput";
                    value?: string | null;
                    traitType?: string | null;
                  }>;
                };
                commentOn?:
                  | { __typename?: "Comment" }
                  | { __typename?: "Mirror" }
                  | {
                      __typename?: "Post";
                      id: any;
                      createdAt: any;
                      appId?: any | null;
                      profile: {
                        __typename?: "Profile";
                        id: any;
                        name?: string | null;
                        handle: any;
                        bio?: string | null;
                        ownedBy: any;
                        isDefault: boolean;
                        interests?: Array<any> | null;
                        isFollowedByMe: boolean;
                        dispatcher?: {
                          __typename?: "Dispatcher";
                          canUseRelay: boolean;
                        } | null;
                        attributes?: Array<{
                          __typename?: "Attribute";
                          key: string;
                          value: string;
                        }> | null;
                        stats: {
                          __typename?: "ProfileStats";
                          totalFollowers: number;
                          totalFollowing: number;
                          totalPosts: number;
                          totalComments: number;
                          totalMirrors: number;
                          totalPublications: number;
                          totalCollects: number;
                        };
                        coverPicture?:
                          | {
                              __typename?: "MediaSet";
                              original: { __typename?: "Media"; url: any };
                            }
                          | { __typename?: "NftImage" }
                          | null;
                        picture?:
                          | {
                              __typename?: "MediaSet";
                              original: { __typename?: "Media"; url: any };
                            }
                          | { __typename?: "NftImage"; uri: any }
                          | null;
                        followModule?:
                          | { __typename: "FeeFollowModuleSettings" }
                          | { __typename: "ProfileFollowModuleSettings" }
                          | { __typename: "RevertFollowModuleSettings" }
                          | { __typename: "UnknownFollowModuleSettings" }
                          | null;
                      };
                      metadata: {
                        __typename?: "MetadataOutput";
                        name?: string | null;
                        description?: any | null;
                        content?: any | null;
                        mainContentFocus: PublicationMainFocus;
                        contentWarning?: PublicationContentWarning | null;
                        tags: Array<string>;
                        cover?: {
                          __typename?: "MediaSet";
                          onChain: { __typename?: "Media"; url: any };
                          original: { __typename?: "Media"; url: any };
                          optimized?: { __typename?: "Media"; url: any } | null;
                        } | null;
                        media: Array<{
                          __typename?: "MediaSet";
                          original: {
                            __typename?: "Media";
                            url: any;
                            mimeType?: any | null;
                          };
                          onChain: { __typename?: "Media"; url: any };
                          optimized?: { __typename?: "Media"; url: any } | null;
                        }>;
                        attributes: Array<{
                          __typename?: "MetadataAttributeOutput";
                          value?: string | null;
                          traitType?: string | null;
                        }>;
                      };
                    }
                  | null;
              }
            | {
                __typename?: "Post";
                id: any;
                reaction?: ReactionTypes | null;
                collectNftAddress?: any | null;
                onChainContentURI: string;
                isGated: boolean;
                isDataAvailability: boolean;
                dataAvailabilityProofs?: string | null;
                hidden: boolean;
                hasCollectedByMe: boolean;
                createdAt: any;
                appId?: any | null;
                profile: {
                  __typename?: "Profile";
                  id: any;
                  name?: string | null;
                  handle: any;
                  bio?: string | null;
                  ownedBy: any;
                  isDefault: boolean;
                  interests?: Array<any> | null;
                  isFollowedByMe: boolean;
                  dispatcher?: {
                    __typename?: "Dispatcher";
                    canUseRelay: boolean;
                  } | null;
                  attributes?: Array<{
                    __typename?: "Attribute";
                    key: string;
                    value: string;
                  }> | null;
                  stats: {
                    __typename?: "ProfileStats";
                    totalFollowers: number;
                    totalFollowing: number;
                    totalPosts: number;
                    totalComments: number;
                    totalMirrors: number;
                    totalPublications: number;
                    totalCollects: number;
                  };
                  coverPicture?:
                    | {
                        __typename?: "MediaSet";
                        original: { __typename?: "Media"; url: any };
                      }
                    | { __typename?: "NftImage" }
                    | null;
                  picture?:
                    | {
                        __typename?: "MediaSet";
                        original: { __typename?: "Media"; url: any };
                      }
                    | { __typename?: "NftImage"; uri: any }
                    | null;
                  followModule?:
                    | { __typename: "FeeFollowModuleSettings" }
                    | { __typename: "ProfileFollowModuleSettings" }
                    | { __typename: "RevertFollowModuleSettings" }
                    | { __typename: "UnknownFollowModuleSettings" }
                    | null;
                };
                referenceModule?:
                  | { __typename: "DegreesOfSeparationReferenceModuleSettings" }
                  | { __typename: "FollowOnlyReferenceModuleSettings" }
                  | { __typename: "UnknownReferenceModuleSettings" }
                  | null;
                canComment: {
                  __typename?: "CanCommentResponse";
                  result: boolean;
                };
                canMirror: {
                  __typename?: "CanMirrorResponse";
                  result: boolean;
                };
                collectModule:
                  | { __typename: "AaveFeeCollectModuleSettings" }
                  | { __typename: "ERC4626FeeCollectModuleSettings" }
                  | {
                      __typename: "FeeCollectModuleSettings";
                      type: CollectModules;
                      recipient: any;
                      referralFee: number;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          name: string;
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    }
                  | {
                      __typename: "FreeCollectModuleSettings";
                      type: CollectModules;
                      followerOnly: boolean;
                      contractAddress: any;
                    }
                  | {
                      __typename: "LimitedFeeCollectModuleSettings";
                      type: CollectModules;
                      collectLimit: string;
                      recipient: any;
                      referralFee: number;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          name: string;
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    }
                  | {
                      __typename: "LimitedTimedFeeCollectModuleSettings";
                      type: CollectModules;
                      collectLimit: string;
                      recipient: any;
                      referralFee: number;
                      endTimestamp: any;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          name: string;
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    }
                  | { __typename: "MultirecipientFeeCollectModuleSettings" }
                  | {
                      __typename: "RevertCollectModuleSettings";
                      type: CollectModules;
                    }
                  | {
                      __typename: "SimpleCollectModuleSettings";
                      type: CollectModules;
                      contractAddress: any;
                      followerOnly: boolean;
                      optionalCollectLimit?: string | null;
                      optionalEndTimestamp?: any | null;
                      fee?: {
                        __typename?: "ModuleFee";
                        recipient: any;
                        referralFee: number;
                        amount: {
                          __typename?: "ModuleFeeAmount";
                          value: string;
                          asset: {
                            __typename?: "Erc20";
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                          };
                        };
                      } | null;
                    }
                  | {
                      __typename: "TimedFeeCollectModuleSettings";
                      type: CollectModules;
                      recipient: any;
                      referralFee: number;
                      endTimestamp: any;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          name: string;
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    }
                  | {
                      __typename: "UnknownCollectModuleSettings";
                      type: CollectModules;
                      contractAddress: any;
                      collectModuleReturnData: any;
                    };
                stats: {
                  __typename?: "PublicationStats";
                  totalAmountOfComments: number;
                  totalAmountOfCollects: number;
                  totalAmountOfMirrors: number;
                  totalDownvotes: number;
                  totalUpvotes: number;
                };
                metadata: {
                  __typename?: "MetadataOutput";
                  name?: string | null;
                  description?: any | null;
                  content?: any | null;
                  mainContentFocus: PublicationMainFocus;
                  contentWarning?: PublicationContentWarning | null;
                  tags: Array<string>;
                  cover?: {
                    __typename?: "MediaSet";
                    onChain: { __typename?: "Media"; url: any };
                    original: { __typename?: "Media"; url: any };
                    optimized?: { __typename?: "Media"; url: any } | null;
                  } | null;
                  media: Array<{
                    __typename?: "MediaSet";
                    original: {
                      __typename?: "Media";
                      url: any;
                      mimeType?: any | null;
                    };
                    onChain: { __typename?: "Media"; url: any };
                    optimized?: { __typename?: "Media"; url: any } | null;
                  }>;
                  attributes: Array<{
                    __typename?: "MetadataAttributeOutput";
                    value?: string | null;
                    traitType?: string | null;
                  }>;
                };
              };
        }
      | { __typename?: "Post" }
    >;
    pageInfo: { __typename?: "PaginatedResultInfo"; next?: any | null };
  };
};

export type ProfileNfTsQueryVariables = Exact<{
  request: NfTsRequest;
}>;

export type ProfileNfTsQuery = {
  __typename?: "Query";
  nfts: {
    __typename?: "NFTsResult";
    items: Array<{
      __typename?: "NFT";
      contractAddress: any;
      tokenId: string;
      name: string;
      collectionName: string;
      originalContent: {
        __typename?: "NFTContent";
        animatedUrl?: string | null;
        uri: string;
        metaType: string;
      };
    }>;
    pageInfo: { __typename?: "PaginatedResultInfo"; next?: any | null };
  };
};

export type ProfilePostsQueryVariables = Exact<{
  request: PublicationsQueryRequest;
  reactionRequest?: InputMaybe<ReactionFieldResolverRequest>;
  channelId?: InputMaybe<Scalars["ProfileId"]>;
}>;

export type ProfilePostsQuery = {
  __typename?: "Query";
  publications: {
    __typename?: "PaginatedPublicationResult";
    items: Array<
      | { __typename?: "Comment" }
      | { __typename?: "Mirror" }
      | {
          __typename?: "Post";
          id: any;
          reaction?: ReactionTypes | null;
          collectNftAddress?: any | null;
          onChainContentURI: string;
          isGated: boolean;
          isDataAvailability: boolean;
          dataAvailabilityProofs?: string | null;
          hidden: boolean;
          hasCollectedByMe: boolean;
          createdAt: any;
          appId?: any | null;
          profile: {
            __typename?: "Profile";
            id: any;
            name?: string | null;
            handle: any;
            bio?: string | null;
            ownedBy: any;
            isDefault: boolean;
            interests?: Array<any> | null;
            isFollowedByMe: boolean;
            dispatcher?: {
              __typename?: "Dispatcher";
              canUseRelay: boolean;
            } | null;
            attributes?: Array<{
              __typename?: "Attribute";
              key: string;
              value: string;
            }> | null;
            stats: {
              __typename?: "ProfileStats";
              totalFollowers: number;
              totalFollowing: number;
              totalPosts: number;
              totalComments: number;
              totalMirrors: number;
              totalPublications: number;
              totalCollects: number;
            };
            coverPicture?:
              | {
                  __typename?: "MediaSet";
                  original: { __typename?: "Media"; url: any };
                }
              | { __typename?: "NftImage" }
              | null;
            picture?:
              | {
                  __typename?: "MediaSet";
                  original: { __typename?: "Media"; url: any };
                }
              | { __typename?: "NftImage"; uri: any }
              | null;
            followModule?:
              | { __typename: "FeeFollowModuleSettings" }
              | { __typename: "ProfileFollowModuleSettings" }
              | { __typename: "RevertFollowModuleSettings" }
              | { __typename: "UnknownFollowModuleSettings" }
              | null;
          };
          referenceModule?:
            | { __typename: "DegreesOfSeparationReferenceModuleSettings" }
            | { __typename: "FollowOnlyReferenceModuleSettings" }
            | { __typename: "UnknownReferenceModuleSettings" }
            | null;
          canComment: { __typename?: "CanCommentResponse"; result: boolean };
          canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
          collectModule:
            | { __typename: "AaveFeeCollectModuleSettings" }
            | { __typename: "ERC4626FeeCollectModuleSettings" }
            | {
                __typename: "FeeCollectModuleSettings";
                type: CollectModules;
                recipient: any;
                referralFee: number;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              }
            | {
                __typename: "FreeCollectModuleSettings";
                type: CollectModules;
                followerOnly: boolean;
                contractAddress: any;
              }
            | {
                __typename: "LimitedFeeCollectModuleSettings";
                type: CollectModules;
                collectLimit: string;
                recipient: any;
                referralFee: number;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              }
            | {
                __typename: "LimitedTimedFeeCollectModuleSettings";
                type: CollectModules;
                collectLimit: string;
                recipient: any;
                referralFee: number;
                endTimestamp: any;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              }
            | { __typename: "MultirecipientFeeCollectModuleSettings" }
            | {
                __typename: "RevertCollectModuleSettings";
                type: CollectModules;
              }
            | {
                __typename: "SimpleCollectModuleSettings";
                type: CollectModules;
                contractAddress: any;
                followerOnly: boolean;
                optionalCollectLimit?: string | null;
                optionalEndTimestamp?: any | null;
                fee?: {
                  __typename?: "ModuleFee";
                  recipient: any;
                  referralFee: number;
                  amount: {
                    __typename?: "ModuleFeeAmount";
                    value: string;
                    asset: {
                      __typename?: "Erc20";
                      name: string;
                      symbol: string;
                      decimals: number;
                      address: any;
                    };
                  };
                } | null;
              }
            | {
                __typename: "TimedFeeCollectModuleSettings";
                type: CollectModules;
                recipient: any;
                referralFee: number;
                endTimestamp: any;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              }
            | {
                __typename: "UnknownCollectModuleSettings";
                type: CollectModules;
                contractAddress: any;
                collectModuleReturnData: any;
              };
          stats: {
            __typename?: "PublicationStats";
            totalAmountOfComments: number;
            totalAmountOfCollects: number;
            totalAmountOfMirrors: number;
            totalDownvotes: number;
            totalUpvotes: number;
          };
          metadata: {
            __typename?: "MetadataOutput";
            name?: string | null;
            description?: any | null;
            content?: any | null;
            mainContentFocus: PublicationMainFocus;
            contentWarning?: PublicationContentWarning | null;
            tags: Array<string>;
            cover?: {
              __typename?: "MediaSet";
              onChain: { __typename?: "Media"; url: any };
              original: { __typename?: "Media"; url: any };
              optimized?: { __typename?: "Media"; url: any } | null;
            } | null;
            media: Array<{
              __typename?: "MediaSet";
              original: {
                __typename?: "Media";
                url: any;
                mimeType?: any | null;
              };
              onChain: { __typename?: "Media"; url: any };
              optimized?: { __typename?: "Media"; url: any } | null;
            }>;
            attributes: Array<{
              __typename?: "MetadataAttributeOutput";
              value?: string | null;
              traitType?: string | null;
            }>;
          };
        }
    >;
    pageInfo: { __typename?: "PaginatedResultInfo"; next?: any | null };
  };
};

export type ProfilePublicationsRevenueQueryVariables = Exact<{
  request: ProfilePublicationRevenueQueryRequest;
  reactionRequest?: InputMaybe<ReactionFieldResolverRequest>;
  channelId?: InputMaybe<Scalars["ProfileId"]>;
}>;

export type ProfilePublicationsRevenueQuery = {
  __typename?: "Query";
  profilePublicationRevenue: {
    __typename?: "ProfilePublicationRevenueResult";
    items: Array<{
      __typename?: "PublicationRevenue";
      publication:
        | {
            __typename: "Comment";
            id: any;
            reaction?: ReactionTypes | null;
            collectNftAddress?: any | null;
            onChainContentURI: string;
            hidden: boolean;
            hasCollectedByMe: boolean;
            isDataAvailability: boolean;
            createdAt: any;
            appId?: any | null;
            profile: {
              __typename?: "Profile";
              id: any;
              name?: string | null;
              handle: any;
              bio?: string | null;
              ownedBy: any;
              isDefault: boolean;
              interests?: Array<any> | null;
              isFollowedByMe: boolean;
              dispatcher?: {
                __typename?: "Dispatcher";
                canUseRelay: boolean;
              } | null;
              attributes?: Array<{
                __typename?: "Attribute";
                key: string;
                value: string;
              }> | null;
              stats: {
                __typename?: "ProfileStats";
                totalFollowers: number;
                totalFollowing: number;
                totalPosts: number;
                totalComments: number;
                totalMirrors: number;
                totalPublications: number;
                totalCollects: number;
              };
              coverPicture?:
                | {
                    __typename?: "MediaSet";
                    original: { __typename?: "Media"; url: any };
                  }
                | { __typename?: "NftImage" }
                | null;
              picture?:
                | {
                    __typename?: "MediaSet";
                    original: { __typename?: "Media"; url: any };
                  }
                | { __typename?: "NftImage"; uri: any }
                | null;
              followModule?:
                | { __typename: "FeeFollowModuleSettings" }
                | { __typename: "ProfileFollowModuleSettings" }
                | { __typename: "RevertFollowModuleSettings" }
                | { __typename: "UnknownFollowModuleSettings" }
                | null;
            };
            collectModule:
              | { __typename: "AaveFeeCollectModuleSettings" }
              | { __typename: "ERC4626FeeCollectModuleSettings" }
              | {
                  __typename: "FeeCollectModuleSettings";
                  type: CollectModules;
                  recipient: any;
                  referralFee: number;
                  amount: {
                    __typename?: "ModuleFeeAmount";
                    value: string;
                    asset: {
                      __typename?: "Erc20";
                      name: string;
                      symbol: string;
                      decimals: number;
                      address: any;
                    };
                  };
                }
              | {
                  __typename: "FreeCollectModuleSettings";
                  type: CollectModules;
                  followerOnly: boolean;
                  contractAddress: any;
                }
              | {
                  __typename: "LimitedFeeCollectModuleSettings";
                  type: CollectModules;
                  collectLimit: string;
                  recipient: any;
                  referralFee: number;
                  amount: {
                    __typename?: "ModuleFeeAmount";
                    value: string;
                    asset: {
                      __typename?: "Erc20";
                      name: string;
                      symbol: string;
                      decimals: number;
                      address: any;
                    };
                  };
                }
              | {
                  __typename: "LimitedTimedFeeCollectModuleSettings";
                  type: CollectModules;
                  collectLimit: string;
                  recipient: any;
                  referralFee: number;
                  endTimestamp: any;
                  amount: {
                    __typename?: "ModuleFeeAmount";
                    value: string;
                    asset: {
                      __typename?: "Erc20";
                      name: string;
                      symbol: string;
                      decimals: number;
                      address: any;
                    };
                  };
                }
              | { __typename: "MultirecipientFeeCollectModuleSettings" }
              | {
                  __typename: "RevertCollectModuleSettings";
                  type: CollectModules;
                }
              | {
                  __typename: "SimpleCollectModuleSettings";
                  type: CollectModules;
                  contractAddress: any;
                  followerOnly: boolean;
                  optionalCollectLimit?: string | null;
                  optionalEndTimestamp?: any | null;
                  fee?: {
                    __typename?: "ModuleFee";
                    recipient: any;
                    referralFee: number;
                    amount: {
                      __typename?: "ModuleFeeAmount";
                      value: string;
                      asset: {
                        __typename?: "Erc20";
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                      };
                    };
                  } | null;
                }
              | {
                  __typename: "TimedFeeCollectModuleSettings";
                  type: CollectModules;
                  recipient: any;
                  referralFee: number;
                  endTimestamp: any;
                  amount: {
                    __typename?: "ModuleFeeAmount";
                    value: string;
                    asset: {
                      __typename?: "Erc20";
                      name: string;
                      symbol: string;
                      decimals: number;
                      address: any;
                    };
                  };
                }
              | {
                  __typename: "UnknownCollectModuleSettings";
                  type: CollectModules;
                  contractAddress: any;
                  collectModuleReturnData: any;
                };
            referenceModule?:
              | { __typename: "DegreesOfSeparationReferenceModuleSettings" }
              | { __typename: "FollowOnlyReferenceModuleSettings" }
              | { __typename: "UnknownReferenceModuleSettings" }
              | null;
            canComment: { __typename?: "CanCommentResponse"; result: boolean };
            canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
            stats: {
              __typename?: "PublicationStats";
              totalAmountOfComments: number;
              totalAmountOfCollects: number;
              totalAmountOfMirrors: number;
              totalUpvotes: number;
            };
            metadata: {
              __typename?: "MetadataOutput";
              name?: string | null;
              description?: any | null;
              content?: any | null;
              mainContentFocus: PublicationMainFocus;
              contentWarning?: PublicationContentWarning | null;
              tags: Array<string>;
              cover?: {
                __typename?: "MediaSet";
                onChain: { __typename?: "Media"; url: any };
                original: { __typename?: "Media"; url: any };
                optimized?: { __typename?: "Media"; url: any } | null;
              } | null;
              media: Array<{
                __typename?: "MediaSet";
                original: {
                  __typename?: "Media";
                  url: any;
                  mimeType?: any | null;
                };
                onChain: { __typename?: "Media"; url: any };
                optimized?: { __typename?: "Media"; url: any } | null;
              }>;
              attributes: Array<{
                __typename?: "MetadataAttributeOutput";
                value?: string | null;
                traitType?: string | null;
              }>;
            };
            commentOn?:
              | { __typename?: "Comment" }
              | { __typename?: "Mirror" }
              | {
                  __typename?: "Post";
                  id: any;
                  createdAt: any;
                  appId?: any | null;
                  profile: {
                    __typename?: "Profile";
                    id: any;
                    name?: string | null;
                    handle: any;
                    bio?: string | null;
                    ownedBy: any;
                    isDefault: boolean;
                    interests?: Array<any> | null;
                    isFollowedByMe: boolean;
                    dispatcher?: {
                      __typename?: "Dispatcher";
                      canUseRelay: boolean;
                    } | null;
                    attributes?: Array<{
                      __typename?: "Attribute";
                      key: string;
                      value: string;
                    }> | null;
                    stats: {
                      __typename?: "ProfileStats";
                      totalFollowers: number;
                      totalFollowing: number;
                      totalPosts: number;
                      totalComments: number;
                      totalMirrors: number;
                      totalPublications: number;
                      totalCollects: number;
                    };
                    coverPicture?:
                      | {
                          __typename?: "MediaSet";
                          original: { __typename?: "Media"; url: any };
                        }
                      | { __typename?: "NftImage" }
                      | null;
                    picture?:
                      | {
                          __typename?: "MediaSet";
                          original: { __typename?: "Media"; url: any };
                        }
                      | { __typename?: "NftImage"; uri: any }
                      | null;
                    followModule?:
                      | { __typename: "FeeFollowModuleSettings" }
                      | { __typename: "ProfileFollowModuleSettings" }
                      | { __typename: "RevertFollowModuleSettings" }
                      | { __typename: "UnknownFollowModuleSettings" }
                      | null;
                  };
                  metadata: {
                    __typename?: "MetadataOutput";
                    name?: string | null;
                    description?: any | null;
                    content?: any | null;
                    mainContentFocus: PublicationMainFocus;
                    contentWarning?: PublicationContentWarning | null;
                    tags: Array<string>;
                    cover?: {
                      __typename?: "MediaSet";
                      onChain: { __typename?: "Media"; url: any };
                      original: { __typename?: "Media"; url: any };
                      optimized?: { __typename?: "Media"; url: any } | null;
                    } | null;
                    media: Array<{
                      __typename?: "MediaSet";
                      original: {
                        __typename?: "Media";
                        url: any;
                        mimeType?: any | null;
                      };
                      onChain: { __typename?: "Media"; url: any };
                      optimized?: { __typename?: "Media"; url: any } | null;
                    }>;
                    attributes: Array<{
                      __typename?: "MetadataAttributeOutput";
                      value?: string | null;
                      traitType?: string | null;
                    }>;
                  };
                }
              | null;
          }
        | {
            __typename: "Mirror";
            id: any;
            reaction?: ReactionTypes | null;
            collectNftAddress?: any | null;
            onChainContentURI: string;
            hidden: boolean;
            isDataAvailability: boolean;
            dataAvailabilityProofs?: string | null;
            hasCollectedByMe: boolean;
            createdAt: any;
            appId?: any | null;
            profile: {
              __typename?: "Profile";
              id: any;
              name?: string | null;
              handle: any;
              bio?: string | null;
              ownedBy: any;
              isDefault: boolean;
              interests?: Array<any> | null;
              isFollowedByMe: boolean;
              dispatcher?: {
                __typename?: "Dispatcher";
                canUseRelay: boolean;
              } | null;
              attributes?: Array<{
                __typename?: "Attribute";
                key: string;
                value: string;
              }> | null;
              stats: {
                __typename?: "ProfileStats";
                totalFollowers: number;
                totalFollowing: number;
                totalPosts: number;
                totalComments: number;
                totalMirrors: number;
                totalPublications: number;
                totalCollects: number;
              };
              coverPicture?:
                | {
                    __typename?: "MediaSet";
                    original: { __typename?: "Media"; url: any };
                  }
                | { __typename?: "NftImage" }
                | null;
              picture?:
                | {
                    __typename?: "MediaSet";
                    original: { __typename?: "Media"; url: any };
                  }
                | { __typename?: "NftImage"; uri: any }
                | null;
              followModule?:
                | { __typename: "FeeFollowModuleSettings" }
                | { __typename: "ProfileFollowModuleSettings" }
                | { __typename: "RevertFollowModuleSettings" }
                | { __typename: "UnknownFollowModuleSettings" }
                | null;
            };
            referenceModule?:
              | { __typename: "DegreesOfSeparationReferenceModuleSettings" }
              | { __typename: "FollowOnlyReferenceModuleSettings" }
              | { __typename: "UnknownReferenceModuleSettings" }
              | null;
            canComment: { __typename?: "CanCommentResponse"; result: boolean };
            canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
            collectModule:
              | { __typename: "AaveFeeCollectModuleSettings" }
              | { __typename: "ERC4626FeeCollectModuleSettings" }
              | {
                  __typename: "FeeCollectModuleSettings";
                  type: CollectModules;
                  recipient: any;
                  referralFee: number;
                  amount: {
                    __typename?: "ModuleFeeAmount";
                    value: string;
                    asset: {
                      __typename?: "Erc20";
                      name: string;
                      symbol: string;
                      decimals: number;
                      address: any;
                    };
                  };
                }
              | {
                  __typename: "FreeCollectModuleSettings";
                  type: CollectModules;
                  followerOnly: boolean;
                  contractAddress: any;
                }
              | {
                  __typename: "LimitedFeeCollectModuleSettings";
                  type: CollectModules;
                  collectLimit: string;
                  recipient: any;
                  referralFee: number;
                  amount: {
                    __typename?: "ModuleFeeAmount";
                    value: string;
                    asset: {
                      __typename?: "Erc20";
                      name: string;
                      symbol: string;
                      decimals: number;
                      address: any;
                    };
                  };
                }
              | {
                  __typename: "LimitedTimedFeeCollectModuleSettings";
                  type: CollectModules;
                  collectLimit: string;
                  recipient: any;
                  referralFee: number;
                  endTimestamp: any;
                  amount: {
                    __typename?: "ModuleFeeAmount";
                    value: string;
                    asset: {
                      __typename?: "Erc20";
                      name: string;
                      symbol: string;
                      decimals: number;
                      address: any;
                    };
                  };
                }
              | { __typename: "MultirecipientFeeCollectModuleSettings" }
              | {
                  __typename: "RevertCollectModuleSettings";
                  type: CollectModules;
                }
              | {
                  __typename: "SimpleCollectModuleSettings";
                  type: CollectModules;
                  contractAddress: any;
                  followerOnly: boolean;
                  optionalCollectLimit?: string | null;
                  optionalEndTimestamp?: any | null;
                  fee?: {
                    __typename?: "ModuleFee";
                    recipient: any;
                    referralFee: number;
                    amount: {
                      __typename?: "ModuleFeeAmount";
                      value: string;
                      asset: {
                        __typename?: "Erc20";
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                      };
                    };
                  } | null;
                }
              | {
                  __typename: "TimedFeeCollectModuleSettings";
                  type: CollectModules;
                  recipient: any;
                  referralFee: number;
                  endTimestamp: any;
                  amount: {
                    __typename?: "ModuleFeeAmount";
                    value: string;
                    asset: {
                      __typename?: "Erc20";
                      name: string;
                      symbol: string;
                      decimals: number;
                      address: any;
                    };
                  };
                }
              | {
                  __typename: "UnknownCollectModuleSettings";
                  type: CollectModules;
                  contractAddress: any;
                  collectModuleReturnData: any;
                };
            stats: {
              __typename?: "PublicationStats";
              totalUpvotes: number;
              totalAmountOfMirrors: number;
              totalAmountOfCollects: number;
              totalAmountOfComments: number;
            };
            metadata: {
              __typename?: "MetadataOutput";
              name?: string | null;
              description?: any | null;
              content?: any | null;
              mainContentFocus: PublicationMainFocus;
              contentWarning?: PublicationContentWarning | null;
              tags: Array<string>;
              cover?: {
                __typename?: "MediaSet";
                onChain: { __typename?: "Media"; url: any };
                original: { __typename?: "Media"; url: any };
                optimized?: { __typename?: "Media"; url: any } | null;
              } | null;
              media: Array<{
                __typename?: "MediaSet";
                original: {
                  __typename?: "Media";
                  url: any;
                  mimeType?: any | null;
                };
                onChain: { __typename?: "Media"; url: any };
                optimized?: { __typename?: "Media"; url: any } | null;
              }>;
              attributes: Array<{
                __typename?: "MetadataAttributeOutput";
                value?: string | null;
                traitType?: string | null;
              }>;
            };
            mirrorOf:
              | {
                  __typename?: "Comment";
                  id: any;
                  reaction?: ReactionTypes | null;
                  collectNftAddress?: any | null;
                  onChainContentURI: string;
                  hidden: boolean;
                  hasCollectedByMe: boolean;
                  isDataAvailability: boolean;
                  createdAt: any;
                  appId?: any | null;
                  profile: {
                    __typename?: "Profile";
                    id: any;
                    name?: string | null;
                    handle: any;
                    bio?: string | null;
                    ownedBy: any;
                    isDefault: boolean;
                    interests?: Array<any> | null;
                    isFollowedByMe: boolean;
                    dispatcher?: {
                      __typename?: "Dispatcher";
                      canUseRelay: boolean;
                    } | null;
                    attributes?: Array<{
                      __typename?: "Attribute";
                      key: string;
                      value: string;
                    }> | null;
                    stats: {
                      __typename?: "ProfileStats";
                      totalFollowers: number;
                      totalFollowing: number;
                      totalPosts: number;
                      totalComments: number;
                      totalMirrors: number;
                      totalPublications: number;
                      totalCollects: number;
                    };
                    coverPicture?:
                      | {
                          __typename?: "MediaSet";
                          original: { __typename?: "Media"; url: any };
                        }
                      | { __typename?: "NftImage" }
                      | null;
                    picture?:
                      | {
                          __typename?: "MediaSet";
                          original: { __typename?: "Media"; url: any };
                        }
                      | { __typename?: "NftImage"; uri: any }
                      | null;
                    followModule?:
                      | { __typename: "FeeFollowModuleSettings" }
                      | { __typename: "ProfileFollowModuleSettings" }
                      | { __typename: "RevertFollowModuleSettings" }
                      | { __typename: "UnknownFollowModuleSettings" }
                      | null;
                  };
                  collectModule:
                    | { __typename: "AaveFeeCollectModuleSettings" }
                    | { __typename: "ERC4626FeeCollectModuleSettings" }
                    | {
                        __typename: "FeeCollectModuleSettings";
                        type: CollectModules;
                        recipient: any;
                        referralFee: number;
                        amount: {
                          __typename?: "ModuleFeeAmount";
                          value: string;
                          asset: {
                            __typename?: "Erc20";
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                          };
                        };
                      }
                    | {
                        __typename: "FreeCollectModuleSettings";
                        type: CollectModules;
                        followerOnly: boolean;
                        contractAddress: any;
                      }
                    | {
                        __typename: "LimitedFeeCollectModuleSettings";
                        type: CollectModules;
                        collectLimit: string;
                        recipient: any;
                        referralFee: number;
                        amount: {
                          __typename?: "ModuleFeeAmount";
                          value: string;
                          asset: {
                            __typename?: "Erc20";
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                          };
                        };
                      }
                    | {
                        __typename: "LimitedTimedFeeCollectModuleSettings";
                        type: CollectModules;
                        collectLimit: string;
                        recipient: any;
                        referralFee: number;
                        endTimestamp: any;
                        amount: {
                          __typename?: "ModuleFeeAmount";
                          value: string;
                          asset: {
                            __typename?: "Erc20";
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                          };
                        };
                      }
                    | { __typename: "MultirecipientFeeCollectModuleSettings" }
                    | {
                        __typename: "RevertCollectModuleSettings";
                        type: CollectModules;
                      }
                    | {
                        __typename: "SimpleCollectModuleSettings";
                        type: CollectModules;
                        contractAddress: any;
                        followerOnly: boolean;
                        optionalCollectLimit?: string | null;
                        optionalEndTimestamp?: any | null;
                        fee?: {
                          __typename?: "ModuleFee";
                          recipient: any;
                          referralFee: number;
                          amount: {
                            __typename?: "ModuleFeeAmount";
                            value: string;
                            asset: {
                              __typename?: "Erc20";
                              name: string;
                              symbol: string;
                              decimals: number;
                              address: any;
                            };
                          };
                        } | null;
                      }
                    | {
                        __typename: "TimedFeeCollectModuleSettings";
                        type: CollectModules;
                        recipient: any;
                        referralFee: number;
                        endTimestamp: any;
                        amount: {
                          __typename?: "ModuleFeeAmount";
                          value: string;
                          asset: {
                            __typename?: "Erc20";
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                          };
                        };
                      }
                    | {
                        __typename: "UnknownCollectModuleSettings";
                        type: CollectModules;
                        contractAddress: any;
                        collectModuleReturnData: any;
                      };
                  referenceModule?:
                    | {
                        __typename: "DegreesOfSeparationReferenceModuleSettings";
                      }
                    | { __typename: "FollowOnlyReferenceModuleSettings" }
                    | { __typename: "UnknownReferenceModuleSettings" }
                    | null;
                  canComment: {
                    __typename?: "CanCommentResponse";
                    result: boolean;
                  };
                  canMirror: {
                    __typename?: "CanMirrorResponse";
                    result: boolean;
                  };
                  stats: {
                    __typename?: "PublicationStats";
                    totalAmountOfComments: number;
                    totalAmountOfCollects: number;
                    totalAmountOfMirrors: number;
                    totalUpvotes: number;
                  };
                  metadata: {
                    __typename?: "MetadataOutput";
                    name?: string | null;
                    description?: any | null;
                    content?: any | null;
                    mainContentFocus: PublicationMainFocus;
                    contentWarning?: PublicationContentWarning | null;
                    tags: Array<string>;
                    cover?: {
                      __typename?: "MediaSet";
                      onChain: { __typename?: "Media"; url: any };
                      original: { __typename?: "Media"; url: any };
                      optimized?: { __typename?: "Media"; url: any } | null;
                    } | null;
                    media: Array<{
                      __typename?: "MediaSet";
                      original: {
                        __typename?: "Media";
                        url: any;
                        mimeType?: any | null;
                      };
                      onChain: { __typename?: "Media"; url: any };
                      optimized?: { __typename?: "Media"; url: any } | null;
                    }>;
                    attributes: Array<{
                      __typename?: "MetadataAttributeOutput";
                      value?: string | null;
                      traitType?: string | null;
                    }>;
                  };
                  commentOn?:
                    | { __typename?: "Comment" }
                    | { __typename?: "Mirror" }
                    | {
                        __typename?: "Post";
                        id: any;
                        createdAt: any;
                        appId?: any | null;
                        profile: {
                          __typename?: "Profile";
                          id: any;
                          name?: string | null;
                          handle: any;
                          bio?: string | null;
                          ownedBy: any;
                          isDefault: boolean;
                          interests?: Array<any> | null;
                          isFollowedByMe: boolean;
                          dispatcher?: {
                            __typename?: "Dispatcher";
                            canUseRelay: boolean;
                          } | null;
                          attributes?: Array<{
                            __typename?: "Attribute";
                            key: string;
                            value: string;
                          }> | null;
                          stats: {
                            __typename?: "ProfileStats";
                            totalFollowers: number;
                            totalFollowing: number;
                            totalPosts: number;
                            totalComments: number;
                            totalMirrors: number;
                            totalPublications: number;
                            totalCollects: number;
                          };
                          coverPicture?:
                            | {
                                __typename?: "MediaSet";
                                original: { __typename?: "Media"; url: any };
                              }
                            | { __typename?: "NftImage" }
                            | null;
                          picture?:
                            | {
                                __typename?: "MediaSet";
                                original: { __typename?: "Media"; url: any };
                              }
                            | { __typename?: "NftImage"; uri: any }
                            | null;
                          followModule?:
                            | { __typename: "FeeFollowModuleSettings" }
                            | { __typename: "ProfileFollowModuleSettings" }
                            | { __typename: "RevertFollowModuleSettings" }
                            | { __typename: "UnknownFollowModuleSettings" }
                            | null;
                        };
                        metadata: {
                          __typename?: "MetadataOutput";
                          name?: string | null;
                          description?: any | null;
                          content?: any | null;
                          mainContentFocus: PublicationMainFocus;
                          contentWarning?: PublicationContentWarning | null;
                          tags: Array<string>;
                          cover?: {
                            __typename?: "MediaSet";
                            onChain: { __typename?: "Media"; url: any };
                            original: { __typename?: "Media"; url: any };
                            optimized?: {
                              __typename?: "Media";
                              url: any;
                            } | null;
                          } | null;
                          media: Array<{
                            __typename?: "MediaSet";
                            original: {
                              __typename?: "Media";
                              url: any;
                              mimeType?: any | null;
                            };
                            onChain: { __typename?: "Media"; url: any };
                            optimized?: {
                              __typename?: "Media";
                              url: any;
                            } | null;
                          }>;
                          attributes: Array<{
                            __typename?: "MetadataAttributeOutput";
                            value?: string | null;
                            traitType?: string | null;
                          }>;
                        };
                      }
                    | null;
                }
              | {
                  __typename?: "Post";
                  id: any;
                  reaction?: ReactionTypes | null;
                  collectNftAddress?: any | null;
                  onChainContentURI: string;
                  isGated: boolean;
                  isDataAvailability: boolean;
                  dataAvailabilityProofs?: string | null;
                  hidden: boolean;
                  hasCollectedByMe: boolean;
                  createdAt: any;
                  appId?: any | null;
                  profile: {
                    __typename?: "Profile";
                    id: any;
                    name?: string | null;
                    handle: any;
                    bio?: string | null;
                    ownedBy: any;
                    isDefault: boolean;
                    interests?: Array<any> | null;
                    isFollowedByMe: boolean;
                    dispatcher?: {
                      __typename?: "Dispatcher";
                      canUseRelay: boolean;
                    } | null;
                    attributes?: Array<{
                      __typename?: "Attribute";
                      key: string;
                      value: string;
                    }> | null;
                    stats: {
                      __typename?: "ProfileStats";
                      totalFollowers: number;
                      totalFollowing: number;
                      totalPosts: number;
                      totalComments: number;
                      totalMirrors: number;
                      totalPublications: number;
                      totalCollects: number;
                    };
                    coverPicture?:
                      | {
                          __typename?: "MediaSet";
                          original: { __typename?: "Media"; url: any };
                        }
                      | { __typename?: "NftImage" }
                      | null;
                    picture?:
                      | {
                          __typename?: "MediaSet";
                          original: { __typename?: "Media"; url: any };
                        }
                      | { __typename?: "NftImage"; uri: any }
                      | null;
                    followModule?:
                      | { __typename: "FeeFollowModuleSettings" }
                      | { __typename: "ProfileFollowModuleSettings" }
                      | { __typename: "RevertFollowModuleSettings" }
                      | { __typename: "UnknownFollowModuleSettings" }
                      | null;
                  };
                  referenceModule?:
                    | {
                        __typename: "DegreesOfSeparationReferenceModuleSettings";
                      }
                    | { __typename: "FollowOnlyReferenceModuleSettings" }
                    | { __typename: "UnknownReferenceModuleSettings" }
                    | null;
                  canComment: {
                    __typename?: "CanCommentResponse";
                    result: boolean;
                  };
                  canMirror: {
                    __typename?: "CanMirrorResponse";
                    result: boolean;
                  };
                  collectModule:
                    | { __typename: "AaveFeeCollectModuleSettings" }
                    | { __typename: "ERC4626FeeCollectModuleSettings" }
                    | {
                        __typename: "FeeCollectModuleSettings";
                        type: CollectModules;
                        recipient: any;
                        referralFee: number;
                        amount: {
                          __typename?: "ModuleFeeAmount";
                          value: string;
                          asset: {
                            __typename?: "Erc20";
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                          };
                        };
                      }
                    | {
                        __typename: "FreeCollectModuleSettings";
                        type: CollectModules;
                        followerOnly: boolean;
                        contractAddress: any;
                      }
                    | {
                        __typename: "LimitedFeeCollectModuleSettings";
                        type: CollectModules;
                        collectLimit: string;
                        recipient: any;
                        referralFee: number;
                        amount: {
                          __typename?: "ModuleFeeAmount";
                          value: string;
                          asset: {
                            __typename?: "Erc20";
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                          };
                        };
                      }
                    | {
                        __typename: "LimitedTimedFeeCollectModuleSettings";
                        type: CollectModules;
                        collectLimit: string;
                        recipient: any;
                        referralFee: number;
                        endTimestamp: any;
                        amount: {
                          __typename?: "ModuleFeeAmount";
                          value: string;
                          asset: {
                            __typename?: "Erc20";
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                          };
                        };
                      }
                    | { __typename: "MultirecipientFeeCollectModuleSettings" }
                    | {
                        __typename: "RevertCollectModuleSettings";
                        type: CollectModules;
                      }
                    | {
                        __typename: "SimpleCollectModuleSettings";
                        type: CollectModules;
                        contractAddress: any;
                        followerOnly: boolean;
                        optionalCollectLimit?: string | null;
                        optionalEndTimestamp?: any | null;
                        fee?: {
                          __typename?: "ModuleFee";
                          recipient: any;
                          referralFee: number;
                          amount: {
                            __typename?: "ModuleFeeAmount";
                            value: string;
                            asset: {
                              __typename?: "Erc20";
                              name: string;
                              symbol: string;
                              decimals: number;
                              address: any;
                            };
                          };
                        } | null;
                      }
                    | {
                        __typename: "TimedFeeCollectModuleSettings";
                        type: CollectModules;
                        recipient: any;
                        referralFee: number;
                        endTimestamp: any;
                        amount: {
                          __typename?: "ModuleFeeAmount";
                          value: string;
                          asset: {
                            __typename?: "Erc20";
                            name: string;
                            symbol: string;
                            decimals: number;
                            address: any;
                          };
                        };
                      }
                    | {
                        __typename: "UnknownCollectModuleSettings";
                        type: CollectModules;
                        contractAddress: any;
                        collectModuleReturnData: any;
                      };
                  stats: {
                    __typename?: "PublicationStats";
                    totalAmountOfComments: number;
                    totalAmountOfCollects: number;
                    totalAmountOfMirrors: number;
                    totalDownvotes: number;
                    totalUpvotes: number;
                  };
                  metadata: {
                    __typename?: "MetadataOutput";
                    name?: string | null;
                    description?: any | null;
                    content?: any | null;
                    mainContentFocus: PublicationMainFocus;
                    contentWarning?: PublicationContentWarning | null;
                    tags: Array<string>;
                    cover?: {
                      __typename?: "MediaSet";
                      onChain: { __typename?: "Media"; url: any };
                      original: { __typename?: "Media"; url: any };
                      optimized?: { __typename?: "Media"; url: any } | null;
                    } | null;
                    media: Array<{
                      __typename?: "MediaSet";
                      original: {
                        __typename?: "Media";
                        url: any;
                        mimeType?: any | null;
                      };
                      onChain: { __typename?: "Media"; url: any };
                      optimized?: { __typename?: "Media"; url: any } | null;
                    }>;
                    attributes: Array<{
                      __typename?: "MetadataAttributeOutput";
                      value?: string | null;
                      traitType?: string | null;
                    }>;
                  };
                };
          }
        | {
            __typename: "Post";
            id: any;
            reaction?: ReactionTypes | null;
            collectNftAddress?: any | null;
            onChainContentURI: string;
            isGated: boolean;
            isDataAvailability: boolean;
            dataAvailabilityProofs?: string | null;
            hidden: boolean;
            hasCollectedByMe: boolean;
            createdAt: any;
            appId?: any | null;
            profile: {
              __typename?: "Profile";
              id: any;
              name?: string | null;
              handle: any;
              bio?: string | null;
              ownedBy: any;
              isDefault: boolean;
              interests?: Array<any> | null;
              isFollowedByMe: boolean;
              dispatcher?: {
                __typename?: "Dispatcher";
                canUseRelay: boolean;
              } | null;
              attributes?: Array<{
                __typename?: "Attribute";
                key: string;
                value: string;
              }> | null;
              stats: {
                __typename?: "ProfileStats";
                totalFollowers: number;
                totalFollowing: number;
                totalPosts: number;
                totalComments: number;
                totalMirrors: number;
                totalPublications: number;
                totalCollects: number;
              };
              coverPicture?:
                | {
                    __typename?: "MediaSet";
                    original: { __typename?: "Media"; url: any };
                  }
                | { __typename?: "NftImage" }
                | null;
              picture?:
                | {
                    __typename?: "MediaSet";
                    original: { __typename?: "Media"; url: any };
                  }
                | { __typename?: "NftImage"; uri: any }
                | null;
              followModule?:
                | { __typename: "FeeFollowModuleSettings" }
                | { __typename: "ProfileFollowModuleSettings" }
                | { __typename: "RevertFollowModuleSettings" }
                | { __typename: "UnknownFollowModuleSettings" }
                | null;
            };
            referenceModule?:
              | { __typename: "DegreesOfSeparationReferenceModuleSettings" }
              | { __typename: "FollowOnlyReferenceModuleSettings" }
              | { __typename: "UnknownReferenceModuleSettings" }
              | null;
            canComment: { __typename?: "CanCommentResponse"; result: boolean };
            canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
            collectModule:
              | { __typename: "AaveFeeCollectModuleSettings" }
              | { __typename: "ERC4626FeeCollectModuleSettings" }
              | {
                  __typename: "FeeCollectModuleSettings";
                  type: CollectModules;
                  recipient: any;
                  referralFee: number;
                  amount: {
                    __typename?: "ModuleFeeAmount";
                    value: string;
                    asset: {
                      __typename?: "Erc20";
                      name: string;
                      symbol: string;
                      decimals: number;
                      address: any;
                    };
                  };
                }
              | {
                  __typename: "FreeCollectModuleSettings";
                  type: CollectModules;
                  followerOnly: boolean;
                  contractAddress: any;
                }
              | {
                  __typename: "LimitedFeeCollectModuleSettings";
                  type: CollectModules;
                  collectLimit: string;
                  recipient: any;
                  referralFee: number;
                  amount: {
                    __typename?: "ModuleFeeAmount";
                    value: string;
                    asset: {
                      __typename?: "Erc20";
                      name: string;
                      symbol: string;
                      decimals: number;
                      address: any;
                    };
                  };
                }
              | {
                  __typename: "LimitedTimedFeeCollectModuleSettings";
                  type: CollectModules;
                  collectLimit: string;
                  recipient: any;
                  referralFee: number;
                  endTimestamp: any;
                  amount: {
                    __typename?: "ModuleFeeAmount";
                    value: string;
                    asset: {
                      __typename?: "Erc20";
                      name: string;
                      symbol: string;
                      decimals: number;
                      address: any;
                    };
                  };
                }
              | { __typename: "MultirecipientFeeCollectModuleSettings" }
              | {
                  __typename: "RevertCollectModuleSettings";
                  type: CollectModules;
                }
              | {
                  __typename: "SimpleCollectModuleSettings";
                  type: CollectModules;
                  contractAddress: any;
                  followerOnly: boolean;
                  optionalCollectLimit?: string | null;
                  optionalEndTimestamp?: any | null;
                  fee?: {
                    __typename?: "ModuleFee";
                    recipient: any;
                    referralFee: number;
                    amount: {
                      __typename?: "ModuleFeeAmount";
                      value: string;
                      asset: {
                        __typename?: "Erc20";
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                      };
                    };
                  } | null;
                }
              | {
                  __typename: "TimedFeeCollectModuleSettings";
                  type: CollectModules;
                  recipient: any;
                  referralFee: number;
                  endTimestamp: any;
                  amount: {
                    __typename?: "ModuleFeeAmount";
                    value: string;
                    asset: {
                      __typename?: "Erc20";
                      name: string;
                      symbol: string;
                      decimals: number;
                      address: any;
                    };
                  };
                }
              | {
                  __typename: "UnknownCollectModuleSettings";
                  type: CollectModules;
                  contractAddress: any;
                  collectModuleReturnData: any;
                };
            stats: {
              __typename?: "PublicationStats";
              totalAmountOfComments: number;
              totalAmountOfCollects: number;
              totalAmountOfMirrors: number;
              totalDownvotes: number;
              totalUpvotes: number;
            };
            metadata: {
              __typename?: "MetadataOutput";
              name?: string | null;
              description?: any | null;
              content?: any | null;
              mainContentFocus: PublicationMainFocus;
              contentWarning?: PublicationContentWarning | null;
              tags: Array<string>;
              cover?: {
                __typename?: "MediaSet";
                onChain: { __typename?: "Media"; url: any };
                original: { __typename?: "Media"; url: any };
                optimized?: { __typename?: "Media"; url: any } | null;
              } | null;
              media: Array<{
                __typename?: "MediaSet";
                original: {
                  __typename?: "Media";
                  url: any;
                  mimeType?: any | null;
                };
                onChain: { __typename?: "Media"; url: any };
                optimized?: { __typename?: "Media"; url: any } | null;
              }>;
              attributes: Array<{
                __typename?: "MetadataAttributeOutput";
                value?: string | null;
                traitType?: string | null;
              }>;
            };
          };
      revenue: {
        __typename?: "RevenueAggregate";
        total: {
          __typename?: "Erc20Amount";
          value: string;
          asset: {
            __typename?: "Erc20";
            name: string;
            symbol: string;
            decimals: number;
            address: any;
          };
        };
      };
    }>;
    pageInfo: {
      __typename?: "PaginatedResultInfo";
      prev?: any | null;
      next?: any | null;
      totalCount?: number | null;
    };
  };
};

export type ProxyActionStatusQueryVariables = Exact<{
  proxyActionId: Scalars["ProxyActionId"];
}>;

export type ProxyActionStatusQuery = {
  __typename?: "Query";
  proxyActionStatus:
    | { __typename?: "ProxyActionError"; reason: string }
    | { __typename?: "ProxyActionQueued" }
    | {
        __typename?: "ProxyActionStatusResult";
        txId: any;
        status: ProxyActionStatusTypes;
      };
};

export type PublicationCollectModuleQueryVariables = Exact<{
  request: PublicationQueryRequest;
}>;

export type PublicationCollectModuleQuery = {
  __typename?: "Query";
  publication?:
    | { __typename?: "Comment" }
    | { __typename?: "Mirror" }
    | {
        __typename?: "Post";
        collectNftAddress?: any | null;
        collectModule:
          | { __typename: "AaveFeeCollectModuleSettings" }
          | { __typename: "ERC4626FeeCollectModuleSettings" }
          | {
              __typename: "FeeCollectModuleSettings";
              type: CollectModules;
              recipient: any;
              referralFee: number;
              amount: {
                __typename?: "ModuleFeeAmount";
                value: string;
                asset: {
                  __typename?: "Erc20";
                  name: string;
                  symbol: string;
                  decimals: number;
                  address: any;
                };
              };
            }
          | {
              __typename: "FreeCollectModuleSettings";
              type: CollectModules;
              followerOnly: boolean;
              contractAddress: any;
            }
          | {
              __typename: "LimitedFeeCollectModuleSettings";
              type: CollectModules;
              collectLimit: string;
              recipient: any;
              referralFee: number;
              amount: {
                __typename?: "ModuleFeeAmount";
                value: string;
                asset: {
                  __typename?: "Erc20";
                  name: string;
                  symbol: string;
                  decimals: number;
                  address: any;
                };
              };
            }
          | {
              __typename: "LimitedTimedFeeCollectModuleSettings";
              type: CollectModules;
              collectLimit: string;
              recipient: any;
              referralFee: number;
              endTimestamp: any;
              amount: {
                __typename?: "ModuleFeeAmount";
                value: string;
                asset: {
                  __typename?: "Erc20";
                  name: string;
                  symbol: string;
                  decimals: number;
                  address: any;
                };
              };
            }
          | { __typename: "MultirecipientFeeCollectModuleSettings" }
          | { __typename: "RevertCollectModuleSettings"; type: CollectModules }
          | {
              __typename: "SimpleCollectModuleSettings";
              type: CollectModules;
              contractAddress: any;
              followerOnly: boolean;
              optionalCollectLimit?: string | null;
              optionalEndTimestamp?: any | null;
              fee?: {
                __typename?: "ModuleFee";
                recipient: any;
                referralFee: number;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              } | null;
            }
          | {
              __typename: "TimedFeeCollectModuleSettings";
              type: CollectModules;
              recipient: any;
              referralFee: number;
              endTimestamp: any;
              amount: {
                __typename?: "ModuleFeeAmount";
                value: string;
                asset: {
                  __typename?: "Erc20";
                  name: string;
                  symbol: string;
                  decimals: number;
                  address: any;
                };
              };
            }
          | {
              __typename: "UnknownCollectModuleSettings";
              type: CollectModules;
              contractAddress: any;
              collectModuleReturnData: any;
            };
      }
    | null;
};

export type PublicationDetailsQueryVariables = Exact<{
  request: PublicationQueryRequest;
  reactionRequest?: InputMaybe<ReactionFieldResolverRequest>;
  channelId?: InputMaybe<Scalars["ProfileId"]>;
}>;

export type PublicationDetailsQuery = {
  __typename?: "Query";
  publication?:
    | {
        __typename?: "Comment";
        id: any;
        reaction?: ReactionTypes | null;
        collectNftAddress?: any | null;
        onChainContentURI: string;
        hidden: boolean;
        hasCollectedByMe: boolean;
        isDataAvailability: boolean;
        createdAt: any;
        appId?: any | null;
        profile: {
          __typename?: "Profile";
          id: any;
          name?: string | null;
          handle: any;
          bio?: string | null;
          ownedBy: any;
          isDefault: boolean;
          interests?: Array<any> | null;
          isFollowedByMe: boolean;
          dispatcher?: {
            __typename?: "Dispatcher";
            canUseRelay: boolean;
          } | null;
          attributes?: Array<{
            __typename?: "Attribute";
            key: string;
            value: string;
          }> | null;
          stats: {
            __typename?: "ProfileStats";
            totalFollowers: number;
            totalFollowing: number;
            totalPosts: number;
            totalComments: number;
            totalMirrors: number;
            totalPublications: number;
            totalCollects: number;
          };
          coverPicture?:
            | {
                __typename?: "MediaSet";
                original: { __typename?: "Media"; url: any };
              }
            | { __typename?: "NftImage" }
            | null;
          picture?:
            | {
                __typename?: "MediaSet";
                original: { __typename?: "Media"; url: any };
              }
            | { __typename?: "NftImage"; uri: any }
            | null;
          followModule?:
            | { __typename: "FeeFollowModuleSettings" }
            | { __typename: "ProfileFollowModuleSettings" }
            | { __typename: "RevertFollowModuleSettings" }
            | { __typename: "UnknownFollowModuleSettings" }
            | null;
        };
        collectModule:
          | { __typename: "AaveFeeCollectModuleSettings" }
          | { __typename: "ERC4626FeeCollectModuleSettings" }
          | {
              __typename: "FeeCollectModuleSettings";
              type: CollectModules;
              recipient: any;
              referralFee: number;
              amount: {
                __typename?: "ModuleFeeAmount";
                value: string;
                asset: {
                  __typename?: "Erc20";
                  name: string;
                  symbol: string;
                  decimals: number;
                  address: any;
                };
              };
            }
          | {
              __typename: "FreeCollectModuleSettings";
              type: CollectModules;
              followerOnly: boolean;
              contractAddress: any;
            }
          | {
              __typename: "LimitedFeeCollectModuleSettings";
              type: CollectModules;
              collectLimit: string;
              recipient: any;
              referralFee: number;
              amount: {
                __typename?: "ModuleFeeAmount";
                value: string;
                asset: {
                  __typename?: "Erc20";
                  name: string;
                  symbol: string;
                  decimals: number;
                  address: any;
                };
              };
            }
          | {
              __typename: "LimitedTimedFeeCollectModuleSettings";
              type: CollectModules;
              collectLimit: string;
              recipient: any;
              referralFee: number;
              endTimestamp: any;
              amount: {
                __typename?: "ModuleFeeAmount";
                value: string;
                asset: {
                  __typename?: "Erc20";
                  name: string;
                  symbol: string;
                  decimals: number;
                  address: any;
                };
              };
            }
          | { __typename: "MultirecipientFeeCollectModuleSettings" }
          | { __typename: "RevertCollectModuleSettings"; type: CollectModules }
          | {
              __typename: "SimpleCollectModuleSettings";
              type: CollectModules;
              contractAddress: any;
              followerOnly: boolean;
              optionalCollectLimit?: string | null;
              optionalEndTimestamp?: any | null;
              fee?: {
                __typename?: "ModuleFee";
                recipient: any;
                referralFee: number;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              } | null;
            }
          | {
              __typename: "TimedFeeCollectModuleSettings";
              type: CollectModules;
              recipient: any;
              referralFee: number;
              endTimestamp: any;
              amount: {
                __typename?: "ModuleFeeAmount";
                value: string;
                asset: {
                  __typename?: "Erc20";
                  name: string;
                  symbol: string;
                  decimals: number;
                  address: any;
                };
              };
            }
          | {
              __typename: "UnknownCollectModuleSettings";
              type: CollectModules;
              contractAddress: any;
              collectModuleReturnData: any;
            };
        referenceModule?:
          | { __typename: "DegreesOfSeparationReferenceModuleSettings" }
          | { __typename: "FollowOnlyReferenceModuleSettings" }
          | { __typename: "UnknownReferenceModuleSettings" }
          | null;
        canComment: { __typename?: "CanCommentResponse"; result: boolean };
        canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
        stats: {
          __typename?: "PublicationStats";
          totalAmountOfComments: number;
          totalAmountOfCollects: number;
          totalAmountOfMirrors: number;
          totalUpvotes: number;
        };
        metadata: {
          __typename?: "MetadataOutput";
          name?: string | null;
          description?: any | null;
          content?: any | null;
          mainContentFocus: PublicationMainFocus;
          contentWarning?: PublicationContentWarning | null;
          tags: Array<string>;
          cover?: {
            __typename?: "MediaSet";
            onChain: { __typename?: "Media"; url: any };
            original: { __typename?: "Media"; url: any };
            optimized?: { __typename?: "Media"; url: any } | null;
          } | null;
          media: Array<{
            __typename?: "MediaSet";
            original: { __typename?: "Media"; url: any; mimeType?: any | null };
            onChain: { __typename?: "Media"; url: any };
            optimized?: { __typename?: "Media"; url: any } | null;
          }>;
          attributes: Array<{
            __typename?: "MetadataAttributeOutput";
            value?: string | null;
            traitType?: string | null;
          }>;
        };
        commentOn?:
          | { __typename?: "Comment" }
          | { __typename?: "Mirror" }
          | {
              __typename?: "Post";
              id: any;
              createdAt: any;
              appId?: any | null;
              profile: {
                __typename?: "Profile";
                id: any;
                name?: string | null;
                handle: any;
                bio?: string | null;
                ownedBy: any;
                isDefault: boolean;
                interests?: Array<any> | null;
                isFollowedByMe: boolean;
                dispatcher?: {
                  __typename?: "Dispatcher";
                  canUseRelay: boolean;
                } | null;
                attributes?: Array<{
                  __typename?: "Attribute";
                  key: string;
                  value: string;
                }> | null;
                stats: {
                  __typename?: "ProfileStats";
                  totalFollowers: number;
                  totalFollowing: number;
                  totalPosts: number;
                  totalComments: number;
                  totalMirrors: number;
                  totalPublications: number;
                  totalCollects: number;
                };
                coverPicture?:
                  | {
                      __typename?: "MediaSet";
                      original: { __typename?: "Media"; url: any };
                    }
                  | { __typename?: "NftImage" }
                  | null;
                picture?:
                  | {
                      __typename?: "MediaSet";
                      original: { __typename?: "Media"; url: any };
                    }
                  | { __typename?: "NftImage"; uri: any }
                  | null;
                followModule?:
                  | { __typename: "FeeFollowModuleSettings" }
                  | { __typename: "ProfileFollowModuleSettings" }
                  | { __typename: "RevertFollowModuleSettings" }
                  | { __typename: "UnknownFollowModuleSettings" }
                  | null;
              };
              metadata: {
                __typename?: "MetadataOutput";
                name?: string | null;
                description?: any | null;
                content?: any | null;
                mainContentFocus: PublicationMainFocus;
                contentWarning?: PublicationContentWarning | null;
                tags: Array<string>;
                cover?: {
                  __typename?: "MediaSet";
                  onChain: { __typename?: "Media"; url: any };
                  original: { __typename?: "Media"; url: any };
                  optimized?: { __typename?: "Media"; url: any } | null;
                } | null;
                media: Array<{
                  __typename?: "MediaSet";
                  original: {
                    __typename?: "Media";
                    url: any;
                    mimeType?: any | null;
                  };
                  onChain: { __typename?: "Media"; url: any };
                  optimized?: { __typename?: "Media"; url: any } | null;
                }>;
                attributes: Array<{
                  __typename?: "MetadataAttributeOutput";
                  value?: string | null;
                  traitType?: string | null;
                }>;
              };
            }
          | null;
      }
    | {
        __typename?: "Mirror";
        id: any;
        reaction?: ReactionTypes | null;
        collectNftAddress?: any | null;
        onChainContentURI: string;
        hidden: boolean;
        isDataAvailability: boolean;
        dataAvailabilityProofs?: string | null;
        hasCollectedByMe: boolean;
        createdAt: any;
        appId?: any | null;
        profile: {
          __typename?: "Profile";
          id: any;
          name?: string | null;
          handle: any;
          bio?: string | null;
          ownedBy: any;
          isDefault: boolean;
          interests?: Array<any> | null;
          isFollowedByMe: boolean;
          dispatcher?: {
            __typename?: "Dispatcher";
            canUseRelay: boolean;
          } | null;
          attributes?: Array<{
            __typename?: "Attribute";
            key: string;
            value: string;
          }> | null;
          stats: {
            __typename?: "ProfileStats";
            totalFollowers: number;
            totalFollowing: number;
            totalPosts: number;
            totalComments: number;
            totalMirrors: number;
            totalPublications: number;
            totalCollects: number;
          };
          coverPicture?:
            | {
                __typename?: "MediaSet";
                original: { __typename?: "Media"; url: any };
              }
            | { __typename?: "NftImage" }
            | null;
          picture?:
            | {
                __typename?: "MediaSet";
                original: { __typename?: "Media"; url: any };
              }
            | { __typename?: "NftImage"; uri: any }
            | null;
          followModule?:
            | { __typename: "FeeFollowModuleSettings" }
            | { __typename: "ProfileFollowModuleSettings" }
            | { __typename: "RevertFollowModuleSettings" }
            | { __typename: "UnknownFollowModuleSettings" }
            | null;
        };
        referenceModule?:
          | { __typename: "DegreesOfSeparationReferenceModuleSettings" }
          | { __typename: "FollowOnlyReferenceModuleSettings" }
          | { __typename: "UnknownReferenceModuleSettings" }
          | null;
        canComment: { __typename?: "CanCommentResponse"; result: boolean };
        canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
        collectModule:
          | { __typename: "AaveFeeCollectModuleSettings" }
          | { __typename: "ERC4626FeeCollectModuleSettings" }
          | {
              __typename: "FeeCollectModuleSettings";
              type: CollectModules;
              recipient: any;
              referralFee: number;
              amount: {
                __typename?: "ModuleFeeAmount";
                value: string;
                asset: {
                  __typename?: "Erc20";
                  name: string;
                  symbol: string;
                  decimals: number;
                  address: any;
                };
              };
            }
          | {
              __typename: "FreeCollectModuleSettings";
              type: CollectModules;
              followerOnly: boolean;
              contractAddress: any;
            }
          | {
              __typename: "LimitedFeeCollectModuleSettings";
              type: CollectModules;
              collectLimit: string;
              recipient: any;
              referralFee: number;
              amount: {
                __typename?: "ModuleFeeAmount";
                value: string;
                asset: {
                  __typename?: "Erc20";
                  name: string;
                  symbol: string;
                  decimals: number;
                  address: any;
                };
              };
            }
          | {
              __typename: "LimitedTimedFeeCollectModuleSettings";
              type: CollectModules;
              collectLimit: string;
              recipient: any;
              referralFee: number;
              endTimestamp: any;
              amount: {
                __typename?: "ModuleFeeAmount";
                value: string;
                asset: {
                  __typename?: "Erc20";
                  name: string;
                  symbol: string;
                  decimals: number;
                  address: any;
                };
              };
            }
          | { __typename: "MultirecipientFeeCollectModuleSettings" }
          | { __typename: "RevertCollectModuleSettings"; type: CollectModules }
          | {
              __typename: "SimpleCollectModuleSettings";
              type: CollectModules;
              contractAddress: any;
              followerOnly: boolean;
              optionalCollectLimit?: string | null;
              optionalEndTimestamp?: any | null;
              fee?: {
                __typename?: "ModuleFee";
                recipient: any;
                referralFee: number;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              } | null;
            }
          | {
              __typename: "TimedFeeCollectModuleSettings";
              type: CollectModules;
              recipient: any;
              referralFee: number;
              endTimestamp: any;
              amount: {
                __typename?: "ModuleFeeAmount";
                value: string;
                asset: {
                  __typename?: "Erc20";
                  name: string;
                  symbol: string;
                  decimals: number;
                  address: any;
                };
              };
            }
          | {
              __typename: "UnknownCollectModuleSettings";
              type: CollectModules;
              contractAddress: any;
              collectModuleReturnData: any;
            };
        stats: {
          __typename?: "PublicationStats";
          totalUpvotes: number;
          totalAmountOfMirrors: number;
          totalAmountOfCollects: number;
          totalAmountOfComments: number;
        };
        metadata: {
          __typename?: "MetadataOutput";
          name?: string | null;
          description?: any | null;
          content?: any | null;
          mainContentFocus: PublicationMainFocus;
          contentWarning?: PublicationContentWarning | null;
          tags: Array<string>;
          cover?: {
            __typename?: "MediaSet";
            onChain: { __typename?: "Media"; url: any };
            original: { __typename?: "Media"; url: any };
            optimized?: { __typename?: "Media"; url: any } | null;
          } | null;
          media: Array<{
            __typename?: "MediaSet";
            original: { __typename?: "Media"; url: any; mimeType?: any | null };
            onChain: { __typename?: "Media"; url: any };
            optimized?: { __typename?: "Media"; url: any } | null;
          }>;
          attributes: Array<{
            __typename?: "MetadataAttributeOutput";
            value?: string | null;
            traitType?: string | null;
          }>;
        };
        mirrorOf:
          | {
              __typename?: "Comment";
              id: any;
              reaction?: ReactionTypes | null;
              collectNftAddress?: any | null;
              onChainContentURI: string;
              hidden: boolean;
              hasCollectedByMe: boolean;
              isDataAvailability: boolean;
              createdAt: any;
              appId?: any | null;
              profile: {
                __typename?: "Profile";
                id: any;
                name?: string | null;
                handle: any;
                bio?: string | null;
                ownedBy: any;
                isDefault: boolean;
                interests?: Array<any> | null;
                isFollowedByMe: boolean;
                dispatcher?: {
                  __typename?: "Dispatcher";
                  canUseRelay: boolean;
                } | null;
                attributes?: Array<{
                  __typename?: "Attribute";
                  key: string;
                  value: string;
                }> | null;
                stats: {
                  __typename?: "ProfileStats";
                  totalFollowers: number;
                  totalFollowing: number;
                  totalPosts: number;
                  totalComments: number;
                  totalMirrors: number;
                  totalPublications: number;
                  totalCollects: number;
                };
                coverPicture?:
                  | {
                      __typename?: "MediaSet";
                      original: { __typename?: "Media"; url: any };
                    }
                  | { __typename?: "NftImage" }
                  | null;
                picture?:
                  | {
                      __typename?: "MediaSet";
                      original: { __typename?: "Media"; url: any };
                    }
                  | { __typename?: "NftImage"; uri: any }
                  | null;
                followModule?:
                  | { __typename: "FeeFollowModuleSettings" }
                  | { __typename: "ProfileFollowModuleSettings" }
                  | { __typename: "RevertFollowModuleSettings" }
                  | { __typename: "UnknownFollowModuleSettings" }
                  | null;
              };
              collectModule:
                | { __typename: "AaveFeeCollectModuleSettings" }
                | { __typename: "ERC4626FeeCollectModuleSettings" }
                | {
                    __typename: "FeeCollectModuleSettings";
                    type: CollectModules;
                    recipient: any;
                    referralFee: number;
                    amount: {
                      __typename?: "ModuleFeeAmount";
                      value: string;
                      asset: {
                        __typename?: "Erc20";
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                      };
                    };
                  }
                | {
                    __typename: "FreeCollectModuleSettings";
                    type: CollectModules;
                    followerOnly: boolean;
                    contractAddress: any;
                  }
                | {
                    __typename: "LimitedFeeCollectModuleSettings";
                    type: CollectModules;
                    collectLimit: string;
                    recipient: any;
                    referralFee: number;
                    amount: {
                      __typename?: "ModuleFeeAmount";
                      value: string;
                      asset: {
                        __typename?: "Erc20";
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                      };
                    };
                  }
                | {
                    __typename: "LimitedTimedFeeCollectModuleSettings";
                    type: CollectModules;
                    collectLimit: string;
                    recipient: any;
                    referralFee: number;
                    endTimestamp: any;
                    amount: {
                      __typename?: "ModuleFeeAmount";
                      value: string;
                      asset: {
                        __typename?: "Erc20";
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                      };
                    };
                  }
                | { __typename: "MultirecipientFeeCollectModuleSettings" }
                | {
                    __typename: "RevertCollectModuleSettings";
                    type: CollectModules;
                  }
                | {
                    __typename: "SimpleCollectModuleSettings";
                    type: CollectModules;
                    contractAddress: any;
                    followerOnly: boolean;
                    optionalCollectLimit?: string | null;
                    optionalEndTimestamp?: any | null;
                    fee?: {
                      __typename?: "ModuleFee";
                      recipient: any;
                      referralFee: number;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          name: string;
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    } | null;
                  }
                | {
                    __typename: "TimedFeeCollectModuleSettings";
                    type: CollectModules;
                    recipient: any;
                    referralFee: number;
                    endTimestamp: any;
                    amount: {
                      __typename?: "ModuleFeeAmount";
                      value: string;
                      asset: {
                        __typename?: "Erc20";
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                      };
                    };
                  }
                | {
                    __typename: "UnknownCollectModuleSettings";
                    type: CollectModules;
                    contractAddress: any;
                    collectModuleReturnData: any;
                  };
              referenceModule?:
                | { __typename: "DegreesOfSeparationReferenceModuleSettings" }
                | { __typename: "FollowOnlyReferenceModuleSettings" }
                | { __typename: "UnknownReferenceModuleSettings" }
                | null;
              canComment: {
                __typename?: "CanCommentResponse";
                result: boolean;
              };
              canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
              stats: {
                __typename?: "PublicationStats";
                totalAmountOfComments: number;
                totalAmountOfCollects: number;
                totalAmountOfMirrors: number;
                totalUpvotes: number;
              };
              metadata: {
                __typename?: "MetadataOutput";
                name?: string | null;
                description?: any | null;
                content?: any | null;
                mainContentFocus: PublicationMainFocus;
                contentWarning?: PublicationContentWarning | null;
                tags: Array<string>;
                cover?: {
                  __typename?: "MediaSet";
                  onChain: { __typename?: "Media"; url: any };
                  original: { __typename?: "Media"; url: any };
                  optimized?: { __typename?: "Media"; url: any } | null;
                } | null;
                media: Array<{
                  __typename?: "MediaSet";
                  original: {
                    __typename?: "Media";
                    url: any;
                    mimeType?: any | null;
                  };
                  onChain: { __typename?: "Media"; url: any };
                  optimized?: { __typename?: "Media"; url: any } | null;
                }>;
                attributes: Array<{
                  __typename?: "MetadataAttributeOutput";
                  value?: string | null;
                  traitType?: string | null;
                }>;
              };
              commentOn?:
                | { __typename?: "Comment" }
                | { __typename?: "Mirror" }
                | {
                    __typename?: "Post";
                    id: any;
                    createdAt: any;
                    appId?: any | null;
                    profile: {
                      __typename?: "Profile";
                      id: any;
                      name?: string | null;
                      handle: any;
                      bio?: string | null;
                      ownedBy: any;
                      isDefault: boolean;
                      interests?: Array<any> | null;
                      isFollowedByMe: boolean;
                      dispatcher?: {
                        __typename?: "Dispatcher";
                        canUseRelay: boolean;
                      } | null;
                      attributes?: Array<{
                        __typename?: "Attribute";
                        key: string;
                        value: string;
                      }> | null;
                      stats: {
                        __typename?: "ProfileStats";
                        totalFollowers: number;
                        totalFollowing: number;
                        totalPosts: number;
                        totalComments: number;
                        totalMirrors: number;
                        totalPublications: number;
                        totalCollects: number;
                      };
                      coverPicture?:
                        | {
                            __typename?: "MediaSet";
                            original: { __typename?: "Media"; url: any };
                          }
                        | { __typename?: "NftImage" }
                        | null;
                      picture?:
                        | {
                            __typename?: "MediaSet";
                            original: { __typename?: "Media"; url: any };
                          }
                        | { __typename?: "NftImage"; uri: any }
                        | null;
                      followModule?:
                        | { __typename: "FeeFollowModuleSettings" }
                        | { __typename: "ProfileFollowModuleSettings" }
                        | { __typename: "RevertFollowModuleSettings" }
                        | { __typename: "UnknownFollowModuleSettings" }
                        | null;
                    };
                    metadata: {
                      __typename?: "MetadataOutput";
                      name?: string | null;
                      description?: any | null;
                      content?: any | null;
                      mainContentFocus: PublicationMainFocus;
                      contentWarning?: PublicationContentWarning | null;
                      tags: Array<string>;
                      cover?: {
                        __typename?: "MediaSet";
                        onChain: { __typename?: "Media"; url: any };
                        original: { __typename?: "Media"; url: any };
                        optimized?: { __typename?: "Media"; url: any } | null;
                      } | null;
                      media: Array<{
                        __typename?: "MediaSet";
                        original: {
                          __typename?: "Media";
                          url: any;
                          mimeType?: any | null;
                        };
                        onChain: { __typename?: "Media"; url: any };
                        optimized?: { __typename?: "Media"; url: any } | null;
                      }>;
                      attributes: Array<{
                        __typename?: "MetadataAttributeOutput";
                        value?: string | null;
                        traitType?: string | null;
                      }>;
                    };
                  }
                | null;
            }
          | {
              __typename?: "Post";
              id: any;
              reaction?: ReactionTypes | null;
              collectNftAddress?: any | null;
              onChainContentURI: string;
              isGated: boolean;
              isDataAvailability: boolean;
              dataAvailabilityProofs?: string | null;
              hidden: boolean;
              hasCollectedByMe: boolean;
              createdAt: any;
              appId?: any | null;
              profile: {
                __typename?: "Profile";
                id: any;
                name?: string | null;
                handle: any;
                bio?: string | null;
                ownedBy: any;
                isDefault: boolean;
                interests?: Array<any> | null;
                isFollowedByMe: boolean;
                dispatcher?: {
                  __typename?: "Dispatcher";
                  canUseRelay: boolean;
                } | null;
                attributes?: Array<{
                  __typename?: "Attribute";
                  key: string;
                  value: string;
                }> | null;
                stats: {
                  __typename?: "ProfileStats";
                  totalFollowers: number;
                  totalFollowing: number;
                  totalPosts: number;
                  totalComments: number;
                  totalMirrors: number;
                  totalPublications: number;
                  totalCollects: number;
                };
                coverPicture?:
                  | {
                      __typename?: "MediaSet";
                      original: { __typename?: "Media"; url: any };
                    }
                  | { __typename?: "NftImage" }
                  | null;
                picture?:
                  | {
                      __typename?: "MediaSet";
                      original: { __typename?: "Media"; url: any };
                    }
                  | { __typename?: "NftImage"; uri: any }
                  | null;
                followModule?:
                  | { __typename: "FeeFollowModuleSettings" }
                  | { __typename: "ProfileFollowModuleSettings" }
                  | { __typename: "RevertFollowModuleSettings" }
                  | { __typename: "UnknownFollowModuleSettings" }
                  | null;
              };
              referenceModule?:
                | { __typename: "DegreesOfSeparationReferenceModuleSettings" }
                | { __typename: "FollowOnlyReferenceModuleSettings" }
                | { __typename: "UnknownReferenceModuleSettings" }
                | null;
              canComment: {
                __typename?: "CanCommentResponse";
                result: boolean;
              };
              canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
              collectModule:
                | { __typename: "AaveFeeCollectModuleSettings" }
                | { __typename: "ERC4626FeeCollectModuleSettings" }
                | {
                    __typename: "FeeCollectModuleSettings";
                    type: CollectModules;
                    recipient: any;
                    referralFee: number;
                    amount: {
                      __typename?: "ModuleFeeAmount";
                      value: string;
                      asset: {
                        __typename?: "Erc20";
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                      };
                    };
                  }
                | {
                    __typename: "FreeCollectModuleSettings";
                    type: CollectModules;
                    followerOnly: boolean;
                    contractAddress: any;
                  }
                | {
                    __typename: "LimitedFeeCollectModuleSettings";
                    type: CollectModules;
                    collectLimit: string;
                    recipient: any;
                    referralFee: number;
                    amount: {
                      __typename?: "ModuleFeeAmount";
                      value: string;
                      asset: {
                        __typename?: "Erc20";
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                      };
                    };
                  }
                | {
                    __typename: "LimitedTimedFeeCollectModuleSettings";
                    type: CollectModules;
                    collectLimit: string;
                    recipient: any;
                    referralFee: number;
                    endTimestamp: any;
                    amount: {
                      __typename?: "ModuleFeeAmount";
                      value: string;
                      asset: {
                        __typename?: "Erc20";
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                      };
                    };
                  }
                | { __typename: "MultirecipientFeeCollectModuleSettings" }
                | {
                    __typename: "RevertCollectModuleSettings";
                    type: CollectModules;
                  }
                | {
                    __typename: "SimpleCollectModuleSettings";
                    type: CollectModules;
                    contractAddress: any;
                    followerOnly: boolean;
                    optionalCollectLimit?: string | null;
                    optionalEndTimestamp?: any | null;
                    fee?: {
                      __typename?: "ModuleFee";
                      recipient: any;
                      referralFee: number;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          name: string;
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    } | null;
                  }
                | {
                    __typename: "TimedFeeCollectModuleSettings";
                    type: CollectModules;
                    recipient: any;
                    referralFee: number;
                    endTimestamp: any;
                    amount: {
                      __typename?: "ModuleFeeAmount";
                      value: string;
                      asset: {
                        __typename?: "Erc20";
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                      };
                    };
                  }
                | {
                    __typename: "UnknownCollectModuleSettings";
                    type: CollectModules;
                    contractAddress: any;
                    collectModuleReturnData: any;
                  };
              stats: {
                __typename?: "PublicationStats";
                totalAmountOfComments: number;
                totalAmountOfCollects: number;
                totalAmountOfMirrors: number;
                totalDownvotes: number;
                totalUpvotes: number;
              };
              metadata: {
                __typename?: "MetadataOutput";
                name?: string | null;
                description?: any | null;
                content?: any | null;
                mainContentFocus: PublicationMainFocus;
                contentWarning?: PublicationContentWarning | null;
                tags: Array<string>;
                cover?: {
                  __typename?: "MediaSet";
                  onChain: { __typename?: "Media"; url: any };
                  original: { __typename?: "Media"; url: any };
                  optimized?: { __typename?: "Media"; url: any } | null;
                } | null;
                media: Array<{
                  __typename?: "MediaSet";
                  original: {
                    __typename?: "Media";
                    url: any;
                    mimeType?: any | null;
                  };
                  onChain: { __typename?: "Media"; url: any };
                  optimized?: { __typename?: "Media"; url: any } | null;
                }>;
                attributes: Array<{
                  __typename?: "MetadataAttributeOutput";
                  value?: string | null;
                  traitType?: string | null;
                }>;
              };
            };
      }
    | {
        __typename?: "Post";
        id: any;
        reaction?: ReactionTypes | null;
        collectNftAddress?: any | null;
        onChainContentURI: string;
        isGated: boolean;
        isDataAvailability: boolean;
        dataAvailabilityProofs?: string | null;
        hidden: boolean;
        hasCollectedByMe: boolean;
        createdAt: any;
        appId?: any | null;
        profile: {
          __typename?: "Profile";
          id: any;
          name?: string | null;
          handle: any;
          bio?: string | null;
          ownedBy: any;
          isDefault: boolean;
          interests?: Array<any> | null;
          isFollowedByMe: boolean;
          dispatcher?: {
            __typename?: "Dispatcher";
            canUseRelay: boolean;
          } | null;
          attributes?: Array<{
            __typename?: "Attribute";
            key: string;
            value: string;
          }> | null;
          stats: {
            __typename?: "ProfileStats";
            totalFollowers: number;
            totalFollowing: number;
            totalPosts: number;
            totalComments: number;
            totalMirrors: number;
            totalPublications: number;
            totalCollects: number;
          };
          coverPicture?:
            | {
                __typename?: "MediaSet";
                original: { __typename?: "Media"; url: any };
              }
            | { __typename?: "NftImage" }
            | null;
          picture?:
            | {
                __typename?: "MediaSet";
                original: { __typename?: "Media"; url: any };
              }
            | { __typename?: "NftImage"; uri: any }
            | null;
          followModule?:
            | { __typename: "FeeFollowModuleSettings" }
            | { __typename: "ProfileFollowModuleSettings" }
            | { __typename: "RevertFollowModuleSettings" }
            | { __typename: "UnknownFollowModuleSettings" }
            | null;
        };
        referenceModule?:
          | { __typename: "DegreesOfSeparationReferenceModuleSettings" }
          | { __typename: "FollowOnlyReferenceModuleSettings" }
          | { __typename: "UnknownReferenceModuleSettings" }
          | null;
        canComment: { __typename?: "CanCommentResponse"; result: boolean };
        canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
        collectModule:
          | { __typename: "AaveFeeCollectModuleSettings" }
          | { __typename: "ERC4626FeeCollectModuleSettings" }
          | {
              __typename: "FeeCollectModuleSettings";
              type: CollectModules;
              recipient: any;
              referralFee: number;
              amount: {
                __typename?: "ModuleFeeAmount";
                value: string;
                asset: {
                  __typename?: "Erc20";
                  name: string;
                  symbol: string;
                  decimals: number;
                  address: any;
                };
              };
            }
          | {
              __typename: "FreeCollectModuleSettings";
              type: CollectModules;
              followerOnly: boolean;
              contractAddress: any;
            }
          | {
              __typename: "LimitedFeeCollectModuleSettings";
              type: CollectModules;
              collectLimit: string;
              recipient: any;
              referralFee: number;
              amount: {
                __typename?: "ModuleFeeAmount";
                value: string;
                asset: {
                  __typename?: "Erc20";
                  name: string;
                  symbol: string;
                  decimals: number;
                  address: any;
                };
              };
            }
          | {
              __typename: "LimitedTimedFeeCollectModuleSettings";
              type: CollectModules;
              collectLimit: string;
              recipient: any;
              referralFee: number;
              endTimestamp: any;
              amount: {
                __typename?: "ModuleFeeAmount";
                value: string;
                asset: {
                  __typename?: "Erc20";
                  name: string;
                  symbol: string;
                  decimals: number;
                  address: any;
                };
              };
            }
          | { __typename: "MultirecipientFeeCollectModuleSettings" }
          | { __typename: "RevertCollectModuleSettings"; type: CollectModules }
          | {
              __typename: "SimpleCollectModuleSettings";
              type: CollectModules;
              contractAddress: any;
              followerOnly: boolean;
              optionalCollectLimit?: string | null;
              optionalEndTimestamp?: any | null;
              fee?: {
                __typename?: "ModuleFee";
                recipient: any;
                referralFee: number;
                amount: {
                  __typename?: "ModuleFeeAmount";
                  value: string;
                  asset: {
                    __typename?: "Erc20";
                    name: string;
                    symbol: string;
                    decimals: number;
                    address: any;
                  };
                };
              } | null;
            }
          | {
              __typename: "TimedFeeCollectModuleSettings";
              type: CollectModules;
              recipient: any;
              referralFee: number;
              endTimestamp: any;
              amount: {
                __typename?: "ModuleFeeAmount";
                value: string;
                asset: {
                  __typename?: "Erc20";
                  name: string;
                  symbol: string;
                  decimals: number;
                  address: any;
                };
              };
            }
          | {
              __typename: "UnknownCollectModuleSettings";
              type: CollectModules;
              contractAddress: any;
              collectModuleReturnData: any;
            };
        stats: {
          __typename?: "PublicationStats";
          totalAmountOfComments: number;
          totalAmountOfCollects: number;
          totalAmountOfMirrors: number;
          totalDownvotes: number;
          totalUpvotes: number;
        };
        metadata: {
          __typename?: "MetadataOutput";
          name?: string | null;
          description?: any | null;
          content?: any | null;
          mainContentFocus: PublicationMainFocus;
          contentWarning?: PublicationContentWarning | null;
          tags: Array<string>;
          cover?: {
            __typename?: "MediaSet";
            onChain: { __typename?: "Media"; url: any };
            original: { __typename?: "Media"; url: any };
            optimized?: { __typename?: "Media"; url: any } | null;
          } | null;
          media: Array<{
            __typename?: "MediaSet";
            original: { __typename?: "Media"; url: any; mimeType?: any | null };
            onChain: { __typename?: "Media"; url: any };
            optimized?: { __typename?: "Media"; url: any } | null;
          }>;
          attributes: Array<{
            __typename?: "MetadataAttributeOutput";
            value?: string | null;
            traitType?: string | null;
          }>;
        };
      }
    | null;
};

export type PublicationRevenueQueryVariables = Exact<{
  request: PublicationRevenueQueryRequest;
}>;

export type PublicationRevenueQuery = {
  __typename?: "Query";
  publicationRevenue?: {
    __typename?: "PublicationRevenue";
    revenue: {
      __typename?: "RevenueAggregate";
      total: {
        __typename?: "Erc20Amount";
        value: string;
        asset: {
          __typename?: "Erc20";
          name: string;
          symbol: string;
          decimals: number;
          address: any;
        };
      };
    };
  } | null;
};

export type RecommendedProfilesQueryVariables = Exact<{ [key: string]: never }>;

export type RecommendedProfilesQuery = {
  __typename?: "Query";
  recommendedProfiles: Array<{
    __typename?: "Profile";
    id: any;
    name?: string | null;
    bio?: string | null;
    handle: any;
    picture?:
      | {
          __typename?: "MediaSet";
          original: { __typename?: "Media"; url: any };
        }
      | { __typename?: "NftImage"; uri: any }
      | null;
  }>;
};

export type ResolveProfileAddressQueryVariables = Exact<{
  request: SingleProfileQueryRequest;
}>;

export type ResolveProfileAddressQuery = {
  __typename?: "Query";
  profile?: { __typename?: "Profile"; ownedBy: any } | null;
};

export type SearchProfilesQueryVariables = Exact<{
  request: SearchQueryRequest;
}>;

export type SearchProfilesQuery = {
  __typename?: "Query";
  search:
    | {
        __typename?: "ProfileSearchResult";
        items: Array<{
          __typename?: "Profile";
          id: any;
          name?: string | null;
          handle: any;
          bio?: string | null;
          ownedBy: any;
          isDefault: boolean;
          interests?: Array<any> | null;
          isFollowedByMe: boolean;
          dispatcher?: {
            __typename?: "Dispatcher";
            canUseRelay: boolean;
          } | null;
          attributes?: Array<{
            __typename?: "Attribute";
            key: string;
            value: string;
          }> | null;
          stats: {
            __typename?: "ProfileStats";
            totalFollowers: number;
            totalFollowing: number;
            totalPosts: number;
            totalComments: number;
            totalMirrors: number;
            totalPublications: number;
            totalCollects: number;
          };
          coverPicture?:
            | {
                __typename?: "MediaSet";
                original: { __typename?: "Media"; url: any };
              }
            | { __typename?: "NftImage" }
            | null;
          picture?:
            | {
                __typename?: "MediaSet";
                original: { __typename?: "Media"; url: any };
              }
            | { __typename?: "NftImage"; uri: any }
            | null;
          followModule?:
            | { __typename: "FeeFollowModuleSettings" }
            | { __typename: "ProfileFollowModuleSettings" }
            | { __typename: "RevertFollowModuleSettings" }
            | { __typename: "UnknownFollowModuleSettings" }
            | null;
        }>;
      }
    | { __typename?: "PublicationSearchResult" };
};

export type SearchPublicationsQueryVariables = Exact<{
  request: SearchQueryRequest;
  reactionRequest?: InputMaybe<ReactionFieldResolverRequest>;
  channelId?: InputMaybe<Scalars["ProfileId"]>;
}>;

export type SearchPublicationsQuery = {
  __typename?: "Query";
  search:
    | { __typename?: "ProfileSearchResult" }
    | {
        __typename?: "PublicationSearchResult";
        items: Array<
          | {
              __typename?: "Comment";
              id: any;
              reaction?: ReactionTypes | null;
              collectNftAddress?: any | null;
              onChainContentURI: string;
              hidden: boolean;
              hasCollectedByMe: boolean;
              isDataAvailability: boolean;
              createdAt: any;
              appId?: any | null;
              profile: {
                __typename?: "Profile";
                id: any;
                name?: string | null;
                handle: any;
                bio?: string | null;
                ownedBy: any;
                isDefault: boolean;
                interests?: Array<any> | null;
                isFollowedByMe: boolean;
                dispatcher?: {
                  __typename?: "Dispatcher";
                  canUseRelay: boolean;
                } | null;
                attributes?: Array<{
                  __typename?: "Attribute";
                  key: string;
                  value: string;
                }> | null;
                stats: {
                  __typename?: "ProfileStats";
                  totalFollowers: number;
                  totalFollowing: number;
                  totalPosts: number;
                  totalComments: number;
                  totalMirrors: number;
                  totalPublications: number;
                  totalCollects: number;
                };
                coverPicture?:
                  | {
                      __typename?: "MediaSet";
                      original: { __typename?: "Media"; url: any };
                    }
                  | { __typename?: "NftImage" }
                  | null;
                picture?:
                  | {
                      __typename?: "MediaSet";
                      original: { __typename?: "Media"; url: any };
                    }
                  | { __typename?: "NftImage"; uri: any }
                  | null;
                followModule?:
                  | { __typename: "FeeFollowModuleSettings" }
                  | { __typename: "ProfileFollowModuleSettings" }
                  | { __typename: "RevertFollowModuleSettings" }
                  | { __typename: "UnknownFollowModuleSettings" }
                  | null;
              };
              collectModule:
                | { __typename: "AaveFeeCollectModuleSettings" }
                | { __typename: "ERC4626FeeCollectModuleSettings" }
                | {
                    __typename: "FeeCollectModuleSettings";
                    type: CollectModules;
                    recipient: any;
                    referralFee: number;
                    amount: {
                      __typename?: "ModuleFeeAmount";
                      value: string;
                      asset: {
                        __typename?: "Erc20";
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                      };
                    };
                  }
                | {
                    __typename: "FreeCollectModuleSettings";
                    type: CollectModules;
                    followerOnly: boolean;
                    contractAddress: any;
                  }
                | {
                    __typename: "LimitedFeeCollectModuleSettings";
                    type: CollectModules;
                    collectLimit: string;
                    recipient: any;
                    referralFee: number;
                    amount: {
                      __typename?: "ModuleFeeAmount";
                      value: string;
                      asset: {
                        __typename?: "Erc20";
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                      };
                    };
                  }
                | {
                    __typename: "LimitedTimedFeeCollectModuleSettings";
                    type: CollectModules;
                    collectLimit: string;
                    recipient: any;
                    referralFee: number;
                    endTimestamp: any;
                    amount: {
                      __typename?: "ModuleFeeAmount";
                      value: string;
                      asset: {
                        __typename?: "Erc20";
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                      };
                    };
                  }
                | { __typename: "MultirecipientFeeCollectModuleSettings" }
                | {
                    __typename: "RevertCollectModuleSettings";
                    type: CollectModules;
                  }
                | {
                    __typename: "SimpleCollectModuleSettings";
                    type: CollectModules;
                    contractAddress: any;
                    followerOnly: boolean;
                    optionalCollectLimit?: string | null;
                    optionalEndTimestamp?: any | null;
                    fee?: {
                      __typename?: "ModuleFee";
                      recipient: any;
                      referralFee: number;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          name: string;
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    } | null;
                  }
                | {
                    __typename: "TimedFeeCollectModuleSettings";
                    type: CollectModules;
                    recipient: any;
                    referralFee: number;
                    endTimestamp: any;
                    amount: {
                      __typename?: "ModuleFeeAmount";
                      value: string;
                      asset: {
                        __typename?: "Erc20";
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                      };
                    };
                  }
                | {
                    __typename: "UnknownCollectModuleSettings";
                    type: CollectModules;
                    contractAddress: any;
                    collectModuleReturnData: any;
                  };
              referenceModule?:
                | { __typename: "DegreesOfSeparationReferenceModuleSettings" }
                | { __typename: "FollowOnlyReferenceModuleSettings" }
                | { __typename: "UnknownReferenceModuleSettings" }
                | null;
              canComment: {
                __typename?: "CanCommentResponse";
                result: boolean;
              };
              canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
              stats: {
                __typename?: "PublicationStats";
                totalAmountOfComments: number;
                totalAmountOfCollects: number;
                totalAmountOfMirrors: number;
                totalUpvotes: number;
              };
              metadata: {
                __typename?: "MetadataOutput";
                name?: string | null;
                description?: any | null;
                content?: any | null;
                mainContentFocus: PublicationMainFocus;
                contentWarning?: PublicationContentWarning | null;
                tags: Array<string>;
                cover?: {
                  __typename?: "MediaSet";
                  onChain: { __typename?: "Media"; url: any };
                  original: { __typename?: "Media"; url: any };
                  optimized?: { __typename?: "Media"; url: any } | null;
                } | null;
                media: Array<{
                  __typename?: "MediaSet";
                  original: {
                    __typename?: "Media";
                    url: any;
                    mimeType?: any | null;
                  };
                  onChain: { __typename?: "Media"; url: any };
                  optimized?: { __typename?: "Media"; url: any } | null;
                }>;
                attributes: Array<{
                  __typename?: "MetadataAttributeOutput";
                  value?: string | null;
                  traitType?: string | null;
                }>;
              };
              commentOn?:
                | { __typename?: "Comment" }
                | { __typename?: "Mirror" }
                | {
                    __typename?: "Post";
                    id: any;
                    createdAt: any;
                    appId?: any | null;
                    profile: {
                      __typename?: "Profile";
                      id: any;
                      name?: string | null;
                      handle: any;
                      bio?: string | null;
                      ownedBy: any;
                      isDefault: boolean;
                      interests?: Array<any> | null;
                      isFollowedByMe: boolean;
                      dispatcher?: {
                        __typename?: "Dispatcher";
                        canUseRelay: boolean;
                      } | null;
                      attributes?: Array<{
                        __typename?: "Attribute";
                        key: string;
                        value: string;
                      }> | null;
                      stats: {
                        __typename?: "ProfileStats";
                        totalFollowers: number;
                        totalFollowing: number;
                        totalPosts: number;
                        totalComments: number;
                        totalMirrors: number;
                        totalPublications: number;
                        totalCollects: number;
                      };
                      coverPicture?:
                        | {
                            __typename?: "MediaSet";
                            original: { __typename?: "Media"; url: any };
                          }
                        | { __typename?: "NftImage" }
                        | null;
                      picture?:
                        | {
                            __typename?: "MediaSet";
                            original: { __typename?: "Media"; url: any };
                          }
                        | { __typename?: "NftImage"; uri: any }
                        | null;
                      followModule?:
                        | { __typename: "FeeFollowModuleSettings" }
                        | { __typename: "ProfileFollowModuleSettings" }
                        | { __typename: "RevertFollowModuleSettings" }
                        | { __typename: "UnknownFollowModuleSettings" }
                        | null;
                    };
                    metadata: {
                      __typename?: "MetadataOutput";
                      name?: string | null;
                      description?: any | null;
                      content?: any | null;
                      mainContentFocus: PublicationMainFocus;
                      contentWarning?: PublicationContentWarning | null;
                      tags: Array<string>;
                      cover?: {
                        __typename?: "MediaSet";
                        onChain: { __typename?: "Media"; url: any };
                        original: { __typename?: "Media"; url: any };
                        optimized?: { __typename?: "Media"; url: any } | null;
                      } | null;
                      media: Array<{
                        __typename?: "MediaSet";
                        original: {
                          __typename?: "Media";
                          url: any;
                          mimeType?: any | null;
                        };
                        onChain: { __typename?: "Media"; url: any };
                        optimized?: { __typename?: "Media"; url: any } | null;
                      }>;
                      attributes: Array<{
                        __typename?: "MetadataAttributeOutput";
                        value?: string | null;
                        traitType?: string | null;
                      }>;
                    };
                  }
                | null;
            }
          | {
              __typename?: "Post";
              id: any;
              reaction?: ReactionTypes | null;
              collectNftAddress?: any | null;
              onChainContentURI: string;
              isGated: boolean;
              isDataAvailability: boolean;
              dataAvailabilityProofs?: string | null;
              hidden: boolean;
              hasCollectedByMe: boolean;
              createdAt: any;
              appId?: any | null;
              profile: {
                __typename?: "Profile";
                id: any;
                name?: string | null;
                handle: any;
                bio?: string | null;
                ownedBy: any;
                isDefault: boolean;
                interests?: Array<any> | null;
                isFollowedByMe: boolean;
                dispatcher?: {
                  __typename?: "Dispatcher";
                  canUseRelay: boolean;
                } | null;
                attributes?: Array<{
                  __typename?: "Attribute";
                  key: string;
                  value: string;
                }> | null;
                stats: {
                  __typename?: "ProfileStats";
                  totalFollowers: number;
                  totalFollowing: number;
                  totalPosts: number;
                  totalComments: number;
                  totalMirrors: number;
                  totalPublications: number;
                  totalCollects: number;
                };
                coverPicture?:
                  | {
                      __typename?: "MediaSet";
                      original: { __typename?: "Media"; url: any };
                    }
                  | { __typename?: "NftImage" }
                  | null;
                picture?:
                  | {
                      __typename?: "MediaSet";
                      original: { __typename?: "Media"; url: any };
                    }
                  | { __typename?: "NftImage"; uri: any }
                  | null;
                followModule?:
                  | { __typename: "FeeFollowModuleSettings" }
                  | { __typename: "ProfileFollowModuleSettings" }
                  | { __typename: "RevertFollowModuleSettings" }
                  | { __typename: "UnknownFollowModuleSettings" }
                  | null;
              };
              referenceModule?:
                | { __typename: "DegreesOfSeparationReferenceModuleSettings" }
                | { __typename: "FollowOnlyReferenceModuleSettings" }
                | { __typename: "UnknownReferenceModuleSettings" }
                | null;
              canComment: {
                __typename?: "CanCommentResponse";
                result: boolean;
              };
              canMirror: { __typename?: "CanMirrorResponse"; result: boolean };
              collectModule:
                | { __typename: "AaveFeeCollectModuleSettings" }
                | { __typename: "ERC4626FeeCollectModuleSettings" }
                | {
                    __typename: "FeeCollectModuleSettings";
                    type: CollectModules;
                    recipient: any;
                    referralFee: number;
                    amount: {
                      __typename?: "ModuleFeeAmount";
                      value: string;
                      asset: {
                        __typename?: "Erc20";
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                      };
                    };
                  }
                | {
                    __typename: "FreeCollectModuleSettings";
                    type: CollectModules;
                    followerOnly: boolean;
                    contractAddress: any;
                  }
                | {
                    __typename: "LimitedFeeCollectModuleSettings";
                    type: CollectModules;
                    collectLimit: string;
                    recipient: any;
                    referralFee: number;
                    amount: {
                      __typename?: "ModuleFeeAmount";
                      value: string;
                      asset: {
                        __typename?: "Erc20";
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                      };
                    };
                  }
                | {
                    __typename: "LimitedTimedFeeCollectModuleSettings";
                    type: CollectModules;
                    collectLimit: string;
                    recipient: any;
                    referralFee: number;
                    endTimestamp: any;
                    amount: {
                      __typename?: "ModuleFeeAmount";
                      value: string;
                      asset: {
                        __typename?: "Erc20";
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                      };
                    };
                  }
                | { __typename: "MultirecipientFeeCollectModuleSettings" }
                | {
                    __typename: "RevertCollectModuleSettings";
                    type: CollectModules;
                  }
                | {
                    __typename: "SimpleCollectModuleSettings";
                    type: CollectModules;
                    contractAddress: any;
                    followerOnly: boolean;
                    optionalCollectLimit?: string | null;
                    optionalEndTimestamp?: any | null;
                    fee?: {
                      __typename?: "ModuleFee";
                      recipient: any;
                      referralFee: number;
                      amount: {
                        __typename?: "ModuleFeeAmount";
                        value: string;
                        asset: {
                          __typename?: "Erc20";
                          name: string;
                          symbol: string;
                          decimals: number;
                          address: any;
                        };
                      };
                    } | null;
                  }
                | {
                    __typename: "TimedFeeCollectModuleSettings";
                    type: CollectModules;
                    recipient: any;
                    referralFee: number;
                    endTimestamp: any;
                    amount: {
                      __typename?: "ModuleFeeAmount";
                      value: string;
                      asset: {
                        __typename?: "Erc20";
                        name: string;
                        symbol: string;
                        decimals: number;
                        address: any;
                      };
                    };
                  }
                | {
                    __typename: "UnknownCollectModuleSettings";
                    type: CollectModules;
                    contractAddress: any;
                    collectModuleReturnData: any;
                  };
              stats: {
                __typename?: "PublicationStats";
                totalAmountOfComments: number;
                totalAmountOfCollects: number;
                totalAmountOfMirrors: number;
                totalDownvotes: number;
                totalUpvotes: number;
              };
              metadata: {
                __typename?: "MetadataOutput";
                name?: string | null;
                description?: any | null;
                content?: any | null;
                mainContentFocus: PublicationMainFocus;
                contentWarning?: PublicationContentWarning | null;
                tags: Array<string>;
                cover?: {
                  __typename?: "MediaSet";
                  onChain: { __typename?: "Media"; url: any };
                  original: { __typename?: "Media"; url: any };
                  optimized?: { __typename?: "Media"; url: any } | null;
                } | null;
                media: Array<{
                  __typename?: "MediaSet";
                  original: {
                    __typename?: "Media";
                    url: any;
                    mimeType?: any | null;
                  };
                  onChain: { __typename?: "Media"; url: any };
                  optimized?: { __typename?: "Media"; url: any } | null;
                }>;
                attributes: Array<{
                  __typename?: "MetadataAttributeOutput";
                  value?: string | null;
                  traitType?: string | null;
                }>;
              };
            }
        >;
        pageInfo: { __typename?: "PaginatedResultInfo"; next?: any | null };
      };
};

export type SubscribersQueryVariables = Exact<{
  request: FollowersRequest;
}>;

export type SubscribersQuery = {
  __typename?: "Query";
  followers: {
    __typename?: "PaginatedFollowersResult";
    items: Array<{
      __typename?: "Follower";
      wallet: {
        __typename?: "Wallet";
        address: any;
        defaultProfile?: {
          __typename?: "Profile";
          id: any;
          name?: string | null;
          handle: any;
          bio?: string | null;
          ownedBy: any;
          isDefault: boolean;
          interests?: Array<any> | null;
          isFollowedByMe: boolean;
          dispatcher?: {
            __typename?: "Dispatcher";
            canUseRelay: boolean;
          } | null;
          attributes?: Array<{
            __typename?: "Attribute";
            key: string;
            value: string;
          }> | null;
          stats: {
            __typename?: "ProfileStats";
            totalFollowers: number;
            totalFollowing: number;
            totalPosts: number;
            totalComments: number;
            totalMirrors: number;
            totalPublications: number;
            totalCollects: number;
          };
          coverPicture?:
            | {
                __typename?: "MediaSet";
                original: { __typename?: "Media"; url: any };
              }
            | { __typename?: "NftImage" }
            | null;
          picture?:
            | {
                __typename?: "MediaSet";
                original: { __typename?: "Media"; url: any };
              }
            | { __typename?: "NftImage"; uri: any }
            | null;
          followModule?:
            | { __typename: "FeeFollowModuleSettings" }
            | { __typename: "ProfileFollowModuleSettings" }
            | { __typename: "RevertFollowModuleSettings" }
            | { __typename: "UnknownFollowModuleSettings" }
            | null;
        } | null;
      };
    }>;
    pageInfo: { __typename?: "PaginatedResultInfo"; next?: any | null };
  };
};

export type TxIdToTxHashQueryVariables = Exact<{
  txId: Scalars["TxId"];
}>;

export type TxIdToTxHashQuery = { __typename?: "Query"; txIdToTxHash: any };

export type UserProfilesQueryVariables = Exact<{
  request: ProfileQueryRequest;
}>;

export type UserProfilesQuery = {
  __typename?: "Query";
  profiles: {
    __typename?: "PaginatedProfileResult";
    items: Array<{
      __typename?: "Profile";
      id: any;
      name?: string | null;
      handle: any;
      bio?: string | null;
      ownedBy: any;
      isDefault: boolean;
      interests?: Array<any> | null;
      isFollowedByMe: boolean;
      dispatcher?: { __typename?: "Dispatcher"; canUseRelay: boolean } | null;
      attributes?: Array<{
        __typename?: "Attribute";
        key: string;
        value: string;
      }> | null;
      stats: {
        __typename?: "ProfileStats";
        totalFollowers: number;
        totalFollowing: number;
        totalPosts: number;
        totalComments: number;
        totalMirrors: number;
        totalPublications: number;
        totalCollects: number;
      };
      coverPicture?:
        | {
            __typename?: "MediaSet";
            original: { __typename?: "Media"; url: any };
          }
        | { __typename?: "NftImage" }
        | null;
      picture?:
        | {
            __typename?: "MediaSet";
            original: { __typename?: "Media"; url: any };
          }
        | { __typename?: "NftImage"; uri: any }
        | null;
      followModule?:
        | { __typename: "FeeFollowModuleSettings" }
        | { __typename: "ProfileFollowModuleSettings" }
        | { __typename: "RevertFollowModuleSettings" }
        | { __typename: "UnknownFollowModuleSettings" }
        | null;
    }>;
  };
  userSigNonces: { __typename?: "UserSigNonces"; lensHubOnChainSigNonce: any };
};

export type VerifyTokensQueryVariables = Exact<{
  request: VerifyRequest;
}>;

export type VerifyTokensQuery = { __typename?: "Query"; verify: boolean };

export const ProfileFieldsFragmentDoc = gql`
  fragment ProfileFields on Profile {
    id
    name
    handle
    bio
    ownedBy
    isDefault
    interests
    isFollowedByMe
    dispatcher {
      canUseRelay
    }
    attributes {
      key
      value
    }
    stats {
      totalFollowers
      totalFollowing
      totalPosts
      totalComments
      totalMirrors
      totalPublications
      totalCollects
    }
    coverPicture {
      ... on MediaSet {
        original {
          url
        }
      }
    }
    picture {
      ... on MediaSet {
        original {
          url
        }
      }
      ... on NftImage {
        uri
      }
    }
    followModule {
      __typename
    }
  }
`;
export const Erc20FieldsFragmentDoc = gql`
  fragment Erc20Fields on Erc20 {
    name
    symbol
    decimals
    address
  }
`;
export const CollectFieldsFragmentDoc = gql`
  fragment CollectFields on CollectModule {
    __typename
    ... on FreeCollectModuleSettings {
      type
      followerOnly
      contractAddress
    }
    ... on FeeCollectModuleSettings {
      type
      amount {
        asset {
          ...Erc20Fields
        }
        value
      }
      recipient
      referralFee
    }
    ... on LimitedFeeCollectModuleSettings {
      type
      collectLimit
      amount {
        asset {
          ...Erc20Fields
        }
        value
      }
      recipient
      referralFee
    }
    ... on LimitedTimedFeeCollectModuleSettings {
      type
      collectLimit
      amount {
        asset {
          ...Erc20Fields
        }
        value
      }
      recipient
      referralFee
      endTimestamp
    }
    ... on RevertCollectModuleSettings {
      type
    }
    ... on TimedFeeCollectModuleSettings {
      type
      amount {
        asset {
          ...Erc20Fields
        }
        value
      }
      recipient
      referralFee
      endTimestamp
    }
    ... on SimpleCollectModuleSettings {
      type
      optionalCollectLimit: collectLimit
      optionalEndTimestamp: endTimestamp
      contractAddress
      followerOnly
      fee {
        amount {
          asset {
            ...Erc20Fields
          }
          value
        }
        recipient
        referralFee
      }
    }
    ... on UnknownCollectModuleSettings {
      type
      contractAddress
      collectModuleReturnData
    }
  }
  ${Erc20FieldsFragmentDoc}
`;
export const MetadataFieldsFragmentDoc = gql`
  fragment MetadataFields on MetadataOutput {
    name
    description
    content
    mainContentFocus
    contentWarning
    tags
    cover {
      onChain {
        url
      }
      original {
        url
      }
      optimized {
        url
      }
    }
    media {
      original {
        url
        mimeType
      }
      onChain {
        url
      }
      optimized {
        url
      }
    }
    attributes {
      value
      traitType
    }
  }
`;
export const PostFieldsFragmentDoc = gql`
  fragment PostFields on Post {
    id
    reaction(request: $reactionRequest)
    profile {
      ...ProfileFields
    }
    referenceModule {
      __typename
    }
    canComment(profileId: $channelId) {
      result
    }
    canMirror(profileId: $channelId) {
      result
    }
    collectModule {
      ...CollectFields
    }
    collectNftAddress
    onChainContentURI
    isGated
    isDataAvailability
    dataAvailabilityProofs
    hidden
    hasCollectedByMe
    stats {
      totalAmountOfComments
      totalAmountOfCollects
      totalAmountOfMirrors
      totalDownvotes
      totalUpvotes
    }
    metadata {
      ...MetadataFields
    }
    createdAt
    appId
  }
  ${ProfileFieldsFragmentDoc}
  ${CollectFieldsFragmentDoc}
  ${MetadataFieldsFragmentDoc}
`;
export const CommentFieldsFragmentDoc = gql`
  fragment CommentFields on Comment {
    id
    reaction(request: $reactionRequest)
    profile {
      ...ProfileFields
    }
    collectModule {
      ...CollectFields
    }
    referenceModule {
      __typename
    }
    canComment(profileId: $channelId) {
      result
    }
    canMirror(profileId: $channelId) {
      result
    }
    collectNftAddress
    onChainContentURI
    hidden
    hasCollectedByMe
    isDataAvailability
    stats {
      totalAmountOfComments
      totalAmountOfCollects
      totalAmountOfMirrors
      totalUpvotes
    }
    metadata {
      ...MetadataFields
    }
    commentOn {
      ... on Post {
        id
        createdAt
        profile {
          ...ProfileFields
        }
        metadata {
          ...MetadataFields
        }
        appId
      }
    }
    createdAt
    appId
  }
  ${ProfileFieldsFragmentDoc}
  ${CollectFieldsFragmentDoc}
  ${MetadataFieldsFragmentDoc}
`;
export const MirrorFieldsFragmentDoc = gql`
  fragment MirrorFields on Mirror {
    id
    reaction(request: $reactionRequest)
    profile {
      ...ProfileFields
    }
    referenceModule {
      __typename
    }
    canComment(profileId: $channelId) {
      result
    }
    canMirror(profileId: $channelId) {
      result
    }
    collectModule {
      ...CollectFields
    }
    collectNftAddress
    onChainContentURI
    hidden
    isDataAvailability
    dataAvailabilityProofs
    hasCollectedByMe
    stats {
      totalUpvotes
      totalAmountOfMirrors
      totalAmountOfCollects
      totalAmountOfComments
    }
    metadata {
      ...MetadataFields
    }
    mirrorOf {
      ... on Post {
        ...PostFields
      }
      ... on Comment {
        ...CommentFields
      }
    }
    createdAt
    appId
  }
  ${ProfileFieldsFragmentDoc}
  ${CollectFieldsFragmentDoc}
  ${MetadataFieldsFragmentDoc}
  ${PostFieldsFragmentDoc}
  ${CommentFieldsFragmentDoc}
`;
export const RelayerResultFragmentDoc = gql`
  fragment RelayerResult on RelayResult {
    ... on RelayerResult {
      txId
      txHash
    }
    ... on RelayError {
      reason
    }
  }
`;
export const BroadcastDataAvailabilityDocument = gql`
  mutation BroadcastDataAvailability($request: BroadcastRequest!) {
    broadcastDataAvailability(request: $request) {
      ... on CreateDataAvailabilityPublicationResult {
        id
        proofs
      }
      ... on RelayError {
        reason
      }
    }
  }
`;
export type BroadcastDataAvailabilityMutationFn = Apollo.MutationFunction<
  BroadcastDataAvailabilityMutation,
  BroadcastDataAvailabilityMutationVariables
>;

/**
 * __useBroadcastDataAvailabilityMutation__
 *
 * To run a mutation, you first call `useBroadcastDataAvailabilityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBroadcastDataAvailabilityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [broadcastDataAvailabilityMutation, { data, loading, error }] = useBroadcastDataAvailabilityMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useBroadcastDataAvailabilityMutation(
  baseOptions?: Apollo.MutationHookOptions<
    BroadcastDataAvailabilityMutation,
    BroadcastDataAvailabilityMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    BroadcastDataAvailabilityMutation,
    BroadcastDataAvailabilityMutationVariables
  >(BroadcastDataAvailabilityDocument, options);
}
export type BroadcastDataAvailabilityMutationHookResult = ReturnType<
  typeof useBroadcastDataAvailabilityMutation
>;
export type BroadcastDataAvailabilityMutationResult =
  Apollo.MutationResult<BroadcastDataAvailabilityMutation>;
export type BroadcastDataAvailabilityMutationOptions =
  Apollo.BaseMutationOptions<
    BroadcastDataAvailabilityMutation,
    BroadcastDataAvailabilityMutationVariables
  >;
export const CreateDataAvailabilityCommentViaDispatcherDocument = gql`
  mutation CreateDataAvailabilityCommentViaDispatcher(
    $request: CreateDataAvailabilityCommentRequest!
  ) {
    createDataAvailabilityCommentViaDispatcher(request: $request) {
      ... on CreateDataAvailabilityPublicationResult {
        id
        proofs
      }
      ... on RelayError {
        reason
      }
    }
  }
`;
export type CreateDataAvailabilityCommentViaDispatcherMutationFn =
  Apollo.MutationFunction<
    CreateDataAvailabilityCommentViaDispatcherMutation,
    CreateDataAvailabilityCommentViaDispatcherMutationVariables
  >;

/**
 * __useCreateDataAvailabilityCommentViaDispatcherMutation__
 *
 * To run a mutation, you first call `useCreateDataAvailabilityCommentViaDispatcherMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDataAvailabilityCommentViaDispatcherMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDataAvailabilityCommentViaDispatcherMutation, { data, loading, error }] = useCreateDataAvailabilityCommentViaDispatcherMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateDataAvailabilityCommentViaDispatcherMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateDataAvailabilityCommentViaDispatcherMutation,
    CreateDataAvailabilityCommentViaDispatcherMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateDataAvailabilityCommentViaDispatcherMutation,
    CreateDataAvailabilityCommentViaDispatcherMutationVariables
  >(CreateDataAvailabilityCommentViaDispatcherDocument, options);
}
export type CreateDataAvailabilityCommentViaDispatcherMutationHookResult =
  ReturnType<typeof useCreateDataAvailabilityCommentViaDispatcherMutation>;
export type CreateDataAvailabilityCommentViaDispatcherMutationResult =
  Apollo.MutationResult<CreateDataAvailabilityCommentViaDispatcherMutation>;
export type CreateDataAvailabilityCommentViaDispatcherMutationOptions =
  Apollo.BaseMutationOptions<
    CreateDataAvailabilityCommentViaDispatcherMutation,
    CreateDataAvailabilityCommentViaDispatcherMutationVariables
  >;
export const CreateDataAvailabilityMirrorViaDispatcherDocument = gql`
  mutation CreateDataAvailabilityMirrorViaDispatcher(
    $request: CreateDataAvailabilityMirrorRequest!
  ) {
    createDataAvailabilityMirrorViaDispatcher(request: $request) {
      ... on CreateDataAvailabilityPublicationResult {
        id
        proofs
      }
      ... on RelayError {
        reason
      }
    }
  }
`;
export type CreateDataAvailabilityMirrorViaDispatcherMutationFn =
  Apollo.MutationFunction<
    CreateDataAvailabilityMirrorViaDispatcherMutation,
    CreateDataAvailabilityMirrorViaDispatcherMutationVariables
  >;

/**
 * __useCreateDataAvailabilityMirrorViaDispatcherMutation__
 *
 * To run a mutation, you first call `useCreateDataAvailabilityMirrorViaDispatcherMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDataAvailabilityMirrorViaDispatcherMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDataAvailabilityMirrorViaDispatcherMutation, { data, loading, error }] = useCreateDataAvailabilityMirrorViaDispatcherMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateDataAvailabilityMirrorViaDispatcherMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateDataAvailabilityMirrorViaDispatcherMutation,
    CreateDataAvailabilityMirrorViaDispatcherMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateDataAvailabilityMirrorViaDispatcherMutation,
    CreateDataAvailabilityMirrorViaDispatcherMutationVariables
  >(CreateDataAvailabilityMirrorViaDispatcherDocument, options);
}
export type CreateDataAvailabilityMirrorViaDispatcherMutationHookResult =
  ReturnType<typeof useCreateDataAvailabilityMirrorViaDispatcherMutation>;
export type CreateDataAvailabilityMirrorViaDispatcherMutationResult =
  Apollo.MutationResult<CreateDataAvailabilityMirrorViaDispatcherMutation>;
export type CreateDataAvailabilityMirrorViaDispatcherMutationOptions =
  Apollo.BaseMutationOptions<
    CreateDataAvailabilityMirrorViaDispatcherMutation,
    CreateDataAvailabilityMirrorViaDispatcherMutationVariables
  >;
export const CreateDataAvailabilityPostViaDispatcherDocument = gql`
  mutation CreateDataAvailabilityPostViaDispatcher(
    $request: CreateDataAvailabilityPostRequest!
  ) {
    createDataAvailabilityPostViaDispatcher(request: $request) {
      ... on CreateDataAvailabilityPublicationResult {
        id
        proofs
      }
      ... on RelayError {
        reason
      }
    }
  }
`;
export type CreateDataAvailabilityPostViaDispatcherMutationFn =
  Apollo.MutationFunction<
    CreateDataAvailabilityPostViaDispatcherMutation,
    CreateDataAvailabilityPostViaDispatcherMutationVariables
  >;

/**
 * __useCreateDataAvailabilityPostViaDispatcherMutation__
 *
 * To run a mutation, you first call `useCreateDataAvailabilityPostViaDispatcherMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDataAvailabilityPostViaDispatcherMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDataAvailabilityPostViaDispatcherMutation, { data, loading, error }] = useCreateDataAvailabilityPostViaDispatcherMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateDataAvailabilityPostViaDispatcherMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateDataAvailabilityPostViaDispatcherMutation,
    CreateDataAvailabilityPostViaDispatcherMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateDataAvailabilityPostViaDispatcherMutation,
    CreateDataAvailabilityPostViaDispatcherMutationVariables
  >(CreateDataAvailabilityPostViaDispatcherDocument, options);
}
export type CreateDataAvailabilityPostViaDispatcherMutationHookResult =
  ReturnType<typeof useCreateDataAvailabilityPostViaDispatcherMutation>;
export type CreateDataAvailabilityPostViaDispatcherMutationResult =
  Apollo.MutationResult<CreateDataAvailabilityPostViaDispatcherMutation>;
export type CreateDataAvailabilityPostViaDispatcherMutationOptions =
  Apollo.BaseMutationOptions<
    CreateDataAvailabilityPostViaDispatcherMutation,
    CreateDataAvailabilityPostViaDispatcherMutationVariables
  >;
export const AddProfileInterestDocument = gql`
  mutation AddProfileInterest($request: AddProfileInterestsRequest!) {
    addProfileInterests(request: $request)
  }
`;
export type AddProfileInterestMutationFn = Apollo.MutationFunction<
  AddProfileInterestMutation,
  AddProfileInterestMutationVariables
>;

/**
 * __useAddProfileInterestMutation__
 *
 * To run a mutation, you first call `useAddProfileInterestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProfileInterestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProfileInterestMutation, { data, loading, error }] = useAddProfileInterestMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useAddProfileInterestMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddProfileInterestMutation,
    AddProfileInterestMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AddProfileInterestMutation,
    AddProfileInterestMutationVariables
  >(AddProfileInterestDocument, options);
}
export type AddProfileInterestMutationHookResult = ReturnType<
  typeof useAddProfileInterestMutation
>;
export type AddProfileInterestMutationResult =
  Apollo.MutationResult<AddProfileInterestMutation>;
export type AddProfileInterestMutationOptions = Apollo.BaseMutationOptions<
  AddProfileInterestMutation,
  AddProfileInterestMutationVariables
>;
export const AddReactionDocument = gql`
  mutation AddReaction($request: ReactionRequest!) {
    addReaction(request: $request)
  }
`;
export type AddReactionMutationFn = Apollo.MutationFunction<
  AddReactionMutation,
  AddReactionMutationVariables
>;

/**
 * __useAddReactionMutation__
 *
 * To run a mutation, you first call `useAddReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addReactionMutation, { data, loading, error }] = useAddReactionMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useAddReactionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddReactionMutation,
    AddReactionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddReactionMutation, AddReactionMutationVariables>(
    AddReactionDocument,
    options
  );
}
export type AddReactionMutationHookResult = ReturnType<
  typeof useAddReactionMutation
>;
export type AddReactionMutationResult =
  Apollo.MutationResult<AddReactionMutation>;
export type AddReactionMutationOptions = Apollo.BaseMutationOptions<
  AddReactionMutation,
  AddReactionMutationVariables
>;
export const AuthenticateDocument = gql`
  mutation Authenticate($request: SignedAuthChallenge!) {
    authenticate(request: $request) {
      accessToken
      refreshToken
    }
  }
`;
export type AuthenticateMutationFn = Apollo.MutationFunction<
  AuthenticateMutation,
  AuthenticateMutationVariables
>;

/**
 * __useAuthenticateMutation__
 *
 * To run a mutation, you first call `useAuthenticateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthenticateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authenticateMutation, { data, loading, error }] = useAuthenticateMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useAuthenticateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AuthenticateMutation,
    AuthenticateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AuthenticateMutation,
    AuthenticateMutationVariables
  >(AuthenticateDocument, options);
}
export type AuthenticateMutationHookResult = ReturnType<
  typeof useAuthenticateMutation
>;
export type AuthenticateMutationResult =
  Apollo.MutationResult<AuthenticateMutation>;
export type AuthenticateMutationOptions = Apollo.BaseMutationOptions<
  AuthenticateMutation,
  AuthenticateMutationVariables
>;
export const BroadcastDocument = gql`
  mutation Broadcast($request: BroadcastRequest!) {
    broadcast(request: $request) {
      ... on RelayerResult {
        txId
        txHash
      }
      ... on RelayError {
        reason
      }
    }
  }
`;
export type BroadcastMutationFn = Apollo.MutationFunction<
  BroadcastMutation,
  BroadcastMutationVariables
>;

/**
 * __useBroadcastMutation__
 *
 * To run a mutation, you first call `useBroadcastMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBroadcastMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [broadcastMutation, { data, loading, error }] = useBroadcastMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useBroadcastMutation(
  baseOptions?: Apollo.MutationHookOptions<
    BroadcastMutation,
    BroadcastMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<BroadcastMutation, BroadcastMutationVariables>(
    BroadcastDocument,
    options
  );
}
export type BroadcastMutationHookResult = ReturnType<
  typeof useBroadcastMutation
>;
export type BroadcastMutationResult = Apollo.MutationResult<BroadcastMutation>;
export type BroadcastMutationOptions = Apollo.BaseMutationOptions<
  BroadcastMutation,
  BroadcastMutationVariables
>;
export const CreateProfileDocument = gql`
  mutation CreateProfile($request: CreateProfileRequest!) {
    createProfile(request: $request) {
      ... on RelayerResult {
        txHash
      }
      ... on RelayError {
        reason
      }
    }
  }
`;
export type CreateProfileMutationFn = Apollo.MutationFunction<
  CreateProfileMutation,
  CreateProfileMutationVariables
>;

/**
 * __useCreateProfileMutation__
 *
 * To run a mutation, you first call `useCreateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProfileMutation, { data, loading, error }] = useCreateProfileMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateProfileMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateProfileMutation,
    CreateProfileMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateProfileMutation,
    CreateProfileMutationVariables
  >(CreateProfileDocument, options);
}
export type CreateProfileMutationHookResult = ReturnType<
  typeof useCreateProfileMutation
>;
export type CreateProfileMutationResult =
  Apollo.MutationResult<CreateProfileMutation>;
export type CreateProfileMutationOptions = Apollo.BaseMutationOptions<
  CreateProfileMutation,
  CreateProfileMutationVariables
>;
export const HidePublicationDocument = gql`
  mutation HidePublication($request: HidePublicationRequest!) {
    hidePublication(request: $request)
  }
`;
export type HidePublicationMutationFn = Apollo.MutationFunction<
  HidePublicationMutation,
  HidePublicationMutationVariables
>;

/**
 * __useHidePublicationMutation__
 *
 * To run a mutation, you first call `useHidePublicationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useHidePublicationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [hidePublicationMutation, { data, loading, error }] = useHidePublicationMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useHidePublicationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    HidePublicationMutation,
    HidePublicationMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    HidePublicationMutation,
    HidePublicationMutationVariables
  >(HidePublicationDocument, options);
}
export type HidePublicationMutationHookResult = ReturnType<
  typeof useHidePublicationMutation
>;
export type HidePublicationMutationResult =
  Apollo.MutationResult<HidePublicationMutation>;
export type HidePublicationMutationOptions = Apollo.BaseMutationOptions<
  HidePublicationMutation,
  HidePublicationMutationVariables
>;
export const ProxyActionDocument = gql`
  mutation proxyAction($request: ProxyActionRequest!) {
    proxyAction(request: $request)
  }
`;
export type ProxyActionMutationFn = Apollo.MutationFunction<
  ProxyActionMutation,
  ProxyActionMutationVariables
>;

/**
 * __useProxyActionMutation__
 *
 * To run a mutation, you first call `useProxyActionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProxyActionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [proxyActionMutation, { data, loading, error }] = useProxyActionMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useProxyActionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ProxyActionMutation,
    ProxyActionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ProxyActionMutation, ProxyActionMutationVariables>(
    ProxyActionDocument,
    options
  );
}
export type ProxyActionMutationHookResult = ReturnType<
  typeof useProxyActionMutation
>;
export type ProxyActionMutationResult =
  Apollo.MutationResult<ProxyActionMutation>;
export type ProxyActionMutationOptions = Apollo.BaseMutationOptions<
  ProxyActionMutation,
  ProxyActionMutationVariables
>;
export const RefreshTokensDocument = gql`
  mutation RefreshTokens($request: RefreshRequest!) {
    refresh(request: $request) {
      accessToken
      refreshToken
    }
  }
`;
export type RefreshTokensMutationFn = Apollo.MutationFunction<
  RefreshTokensMutation,
  RefreshTokensMutationVariables
>;

/**
 * __useRefreshTokensMutation__
 *
 * To run a mutation, you first call `useRefreshTokensMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokensMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokensMutation, { data, loading, error }] = useRefreshTokensMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useRefreshTokensMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RefreshTokensMutation,
    RefreshTokensMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RefreshTokensMutation,
    RefreshTokensMutationVariables
  >(RefreshTokensDocument, options);
}
export type RefreshTokensMutationHookResult = ReturnType<
  typeof useRefreshTokensMutation
>;
export type RefreshTokensMutationResult =
  Apollo.MutationResult<RefreshTokensMutation>;
export type RefreshTokensMutationOptions = Apollo.BaseMutationOptions<
  RefreshTokensMutation,
  RefreshTokensMutationVariables
>;
export const RemoveProfileInterestDocument = gql`
  mutation RemoveProfileInterest($request: RemoveProfileInterestsRequest!) {
    removeProfileInterests(request: $request)
  }
`;
export type RemoveProfileInterestMutationFn = Apollo.MutationFunction<
  RemoveProfileInterestMutation,
  RemoveProfileInterestMutationVariables
>;

/**
 * __useRemoveProfileInterestMutation__
 *
 * To run a mutation, you first call `useRemoveProfileInterestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveProfileInterestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeProfileInterestMutation, { data, loading, error }] = useRemoveProfileInterestMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useRemoveProfileInterestMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveProfileInterestMutation,
    RemoveProfileInterestMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RemoveProfileInterestMutation,
    RemoveProfileInterestMutationVariables
  >(RemoveProfileInterestDocument, options);
}
export type RemoveProfileInterestMutationHookResult = ReturnType<
  typeof useRemoveProfileInterestMutation
>;
export type RemoveProfileInterestMutationResult =
  Apollo.MutationResult<RemoveProfileInterestMutation>;
export type RemoveProfileInterestMutationOptions = Apollo.BaseMutationOptions<
  RemoveProfileInterestMutation,
  RemoveProfileInterestMutationVariables
>;
export const RemoveReactionDocument = gql`
  mutation RemoveReaction($request: ReactionRequest!) {
    removeReaction(request: $request)
  }
`;
export type RemoveReactionMutationFn = Apollo.MutationFunction<
  RemoveReactionMutation,
  RemoveReactionMutationVariables
>;

/**
 * __useRemoveReactionMutation__
 *
 * To run a mutation, you first call `useRemoveReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeReactionMutation, { data, loading, error }] = useRemoveReactionMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useRemoveReactionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveReactionMutation,
    RemoveReactionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RemoveReactionMutation,
    RemoveReactionMutationVariables
  >(RemoveReactionDocument, options);
}
export type RemoveReactionMutationHookResult = ReturnType<
  typeof useRemoveReactionMutation
>;
export type RemoveReactionMutationResult =
  Apollo.MutationResult<RemoveReactionMutation>;
export type RemoveReactionMutationOptions = Apollo.BaseMutationOptions<
  RemoveReactionMutation,
  RemoveReactionMutationVariables
>;
export const ReportPublicationDocument = gql`
  mutation ReportPublication($request: ReportPublicationRequest!) {
    reportPublication(request: $request)
  }
`;
export type ReportPublicationMutationFn = Apollo.MutationFunction<
  ReportPublicationMutation,
  ReportPublicationMutationVariables
>;

/**
 * __useReportPublicationMutation__
 *
 * To run a mutation, you first call `useReportPublicationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReportPublicationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reportPublicationMutation, { data, loading, error }] = useReportPublicationMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useReportPublicationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ReportPublicationMutation,
    ReportPublicationMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ReportPublicationMutation,
    ReportPublicationMutationVariables
  >(ReportPublicationDocument, options);
}
export type ReportPublicationMutationHookResult = ReturnType<
  typeof useReportPublicationMutation
>;
export type ReportPublicationMutationResult =
  Apollo.MutationResult<ReportPublicationMutation>;
export type ReportPublicationMutationOptions = Apollo.BaseMutationOptions<
  ReportPublicationMutation,
  ReportPublicationMutationVariables
>;
export const CreateCommentViaDispatcherDocument = gql`
  mutation CreateCommentViaDispatcher($request: CreatePublicCommentRequest!) {
    createCommentViaDispatcher(request: $request) {
      ...RelayerResult
    }
  }
  ${RelayerResultFragmentDoc}
`;
export type CreateCommentViaDispatcherMutationFn = Apollo.MutationFunction<
  CreateCommentViaDispatcherMutation,
  CreateCommentViaDispatcherMutationVariables
>;

/**
 * __useCreateCommentViaDispatcherMutation__
 *
 * To run a mutation, you first call `useCreateCommentViaDispatcherMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentViaDispatcherMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentViaDispatcherMutation, { data, loading, error }] = useCreateCommentViaDispatcherMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateCommentViaDispatcherMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCommentViaDispatcherMutation,
    CreateCommentViaDispatcherMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateCommentViaDispatcherMutation,
    CreateCommentViaDispatcherMutationVariables
  >(CreateCommentViaDispatcherDocument, options);
}
export type CreateCommentViaDispatcherMutationHookResult = ReturnType<
  typeof useCreateCommentViaDispatcherMutation
>;
export type CreateCommentViaDispatcherMutationResult =
  Apollo.MutationResult<CreateCommentViaDispatcherMutation>;
export type CreateCommentViaDispatcherMutationOptions =
  Apollo.BaseMutationOptions<
    CreateCommentViaDispatcherMutation,
    CreateCommentViaDispatcherMutationVariables
  >;
export const CreateMirrorViaDispatcherDocument = gql`
  mutation CreateMirrorViaDispatcher($request: CreateMirrorRequest!) {
    createMirrorViaDispatcher(request: $request) {
      ...RelayerResult
    }
  }
  ${RelayerResultFragmentDoc}
`;
export type CreateMirrorViaDispatcherMutationFn = Apollo.MutationFunction<
  CreateMirrorViaDispatcherMutation,
  CreateMirrorViaDispatcherMutationVariables
>;

/**
 * __useCreateMirrorViaDispatcherMutation__
 *
 * To run a mutation, you first call `useCreateMirrorViaDispatcherMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMirrorViaDispatcherMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMirrorViaDispatcherMutation, { data, loading, error }] = useCreateMirrorViaDispatcherMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateMirrorViaDispatcherMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateMirrorViaDispatcherMutation,
    CreateMirrorViaDispatcherMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateMirrorViaDispatcherMutation,
    CreateMirrorViaDispatcherMutationVariables
  >(CreateMirrorViaDispatcherDocument, options);
}
export type CreateMirrorViaDispatcherMutationHookResult = ReturnType<
  typeof useCreateMirrorViaDispatcherMutation
>;
export type CreateMirrorViaDispatcherMutationResult =
  Apollo.MutationResult<CreateMirrorViaDispatcherMutation>;
export type CreateMirrorViaDispatcherMutationOptions =
  Apollo.BaseMutationOptions<
    CreateMirrorViaDispatcherMutation,
    CreateMirrorViaDispatcherMutationVariables
  >;
export const CreatePostViaDispatcherDocument = gql`
  mutation CreatePostViaDispatcher($request: CreatePublicPostRequest!) {
    createPostViaDispatcher(request: $request) {
      ...RelayerResult
    }
  }
  ${RelayerResultFragmentDoc}
`;
export type CreatePostViaDispatcherMutationFn = Apollo.MutationFunction<
  CreatePostViaDispatcherMutation,
  CreatePostViaDispatcherMutationVariables
>;

/**
 * __useCreatePostViaDispatcherMutation__
 *
 * To run a mutation, you first call `useCreatePostViaDispatcherMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostViaDispatcherMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostViaDispatcherMutation, { data, loading, error }] = useCreatePostViaDispatcherMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreatePostViaDispatcherMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePostViaDispatcherMutation,
    CreatePostViaDispatcherMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreatePostViaDispatcherMutation,
    CreatePostViaDispatcherMutationVariables
  >(CreatePostViaDispatcherDocument, options);
}
export type CreatePostViaDispatcherMutationHookResult = ReturnType<
  typeof useCreatePostViaDispatcherMutation
>;
export type CreatePostViaDispatcherMutationResult =
  Apollo.MutationResult<CreatePostViaDispatcherMutation>;
export type CreatePostViaDispatcherMutationOptions = Apollo.BaseMutationOptions<
  CreatePostViaDispatcherMutation,
  CreatePostViaDispatcherMutationVariables
>;
export const CreateSetDispatcherTypedDataDocument = gql`
  mutation CreateSetDispatcherTypedData(
    $options: TypedDataOptions
    $request: SetDispatcherRequest!
  ) {
    createSetDispatcherTypedData(options: $options, request: $request) {
      id
      typedData {
        types {
          SetDispatcherWithSig {
            name
            type
          }
        }
        domain {
          name
          chainId
          version
          verifyingContract
        }
        value {
          nonce
          deadline
          profileId
          dispatcher
        }
      }
    }
  }
`;
export type CreateSetDispatcherTypedDataMutationFn = Apollo.MutationFunction<
  CreateSetDispatcherTypedDataMutation,
  CreateSetDispatcherTypedDataMutationVariables
>;

/**
 * __useCreateSetDispatcherTypedDataMutation__
 *
 * To run a mutation, you first call `useCreateSetDispatcherTypedDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSetDispatcherTypedDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSetDispatcherTypedDataMutation, { data, loading, error }] = useCreateSetDispatcherTypedDataMutation({
 *   variables: {
 *      options: // value for 'options'
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateSetDispatcherTypedDataMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateSetDispatcherTypedDataMutation,
    CreateSetDispatcherTypedDataMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateSetDispatcherTypedDataMutation,
    CreateSetDispatcherTypedDataMutationVariables
  >(CreateSetDispatcherTypedDataDocument, options);
}
export type CreateSetDispatcherTypedDataMutationHookResult = ReturnType<
  typeof useCreateSetDispatcherTypedDataMutation
>;
export type CreateSetDispatcherTypedDataMutationResult =
  Apollo.MutationResult<CreateSetDispatcherTypedDataMutation>;
export type CreateSetDispatcherTypedDataMutationOptions =
  Apollo.BaseMutationOptions<
    CreateSetDispatcherTypedDataMutation,
    CreateSetDispatcherTypedDataMutationVariables
  >;
export const CreateSetProfileImageUriViaDispatcherDocument = gql`
  mutation CreateSetProfileImageURIViaDispatcher(
    $request: UpdateProfileImageRequest!
  ) {
    createSetProfileImageURIViaDispatcher(request: $request) {
      ...RelayerResult
    }
  }
  ${RelayerResultFragmentDoc}
`;
export type CreateSetProfileImageUriViaDispatcherMutationFn =
  Apollo.MutationFunction<
    CreateSetProfileImageUriViaDispatcherMutation,
    CreateSetProfileImageUriViaDispatcherMutationVariables
  >;

/**
 * __useCreateSetProfileImageUriViaDispatcherMutation__
 *
 * To run a mutation, you first call `useCreateSetProfileImageUriViaDispatcherMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSetProfileImageUriViaDispatcherMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSetProfileImageUriViaDispatcherMutation, { data, loading, error }] = useCreateSetProfileImageUriViaDispatcherMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateSetProfileImageUriViaDispatcherMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateSetProfileImageUriViaDispatcherMutation,
    CreateSetProfileImageUriViaDispatcherMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateSetProfileImageUriViaDispatcherMutation,
    CreateSetProfileImageUriViaDispatcherMutationVariables
  >(CreateSetProfileImageUriViaDispatcherDocument, options);
}
export type CreateSetProfileImageUriViaDispatcherMutationHookResult =
  ReturnType<typeof useCreateSetProfileImageUriViaDispatcherMutation>;
export type CreateSetProfileImageUriViaDispatcherMutationResult =
  Apollo.MutationResult<CreateSetProfileImageUriViaDispatcherMutation>;
export type CreateSetProfileImageUriViaDispatcherMutationOptions =
  Apollo.BaseMutationOptions<
    CreateSetProfileImageUriViaDispatcherMutation,
    CreateSetProfileImageUriViaDispatcherMutationVariables
  >;
export const CreateSetProfileMetadataViaDispatcherDocument = gql`
  mutation CreateSetProfileMetadataViaDispatcher(
    $request: CreatePublicSetProfileMetadataURIRequest!
  ) {
    createSetProfileMetadataViaDispatcher(request: $request) {
      ...RelayerResult
    }
  }
  ${RelayerResultFragmentDoc}
`;
export type CreateSetProfileMetadataViaDispatcherMutationFn =
  Apollo.MutationFunction<
    CreateSetProfileMetadataViaDispatcherMutation,
    CreateSetProfileMetadataViaDispatcherMutationVariables
  >;

/**
 * __useCreateSetProfileMetadataViaDispatcherMutation__
 *
 * To run a mutation, you first call `useCreateSetProfileMetadataViaDispatcherMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSetProfileMetadataViaDispatcherMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSetProfileMetadataViaDispatcherMutation, { data, loading, error }] = useCreateSetProfileMetadataViaDispatcherMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateSetProfileMetadataViaDispatcherMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateSetProfileMetadataViaDispatcherMutation,
    CreateSetProfileMetadataViaDispatcherMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateSetProfileMetadataViaDispatcherMutation,
    CreateSetProfileMetadataViaDispatcherMutationVariables
  >(CreateSetProfileMetadataViaDispatcherDocument, options);
}
export type CreateSetProfileMetadataViaDispatcherMutationHookResult =
  ReturnType<typeof useCreateSetProfileMetadataViaDispatcherMutation>;
export type CreateSetProfileMetadataViaDispatcherMutationResult =
  Apollo.MutationResult<CreateSetProfileMetadataViaDispatcherMutation>;
export type CreateSetProfileMetadataViaDispatcherMutationOptions =
  Apollo.BaseMutationOptions<
    CreateSetProfileMetadataViaDispatcherMutation,
    CreateSetProfileMetadataViaDispatcherMutationVariables
  >;
export const CreateBurnProfileTypedDataDocument = gql`
  mutation CreateBurnProfileTypedData($request: BurnProfileRequest!) {
    createBurnProfileTypedData(request: $request) {
      id
      expiresAt
      typedData {
        domain {
          name
          chainId
          version
          verifyingContract
        }
        types {
          BurnWithSig {
            name
            type
          }
        }
        value {
          nonce
          deadline
          tokenId
        }
      }
    }
  }
`;
export type CreateBurnProfileTypedDataMutationFn = Apollo.MutationFunction<
  CreateBurnProfileTypedDataMutation,
  CreateBurnProfileTypedDataMutationVariables
>;

/**
 * __useCreateBurnProfileTypedDataMutation__
 *
 * To run a mutation, you first call `useCreateBurnProfileTypedDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBurnProfileTypedDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBurnProfileTypedDataMutation, { data, loading, error }] = useCreateBurnProfileTypedDataMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateBurnProfileTypedDataMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateBurnProfileTypedDataMutation,
    CreateBurnProfileTypedDataMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateBurnProfileTypedDataMutation,
    CreateBurnProfileTypedDataMutationVariables
  >(CreateBurnProfileTypedDataDocument, options);
}
export type CreateBurnProfileTypedDataMutationHookResult = ReturnType<
  typeof useCreateBurnProfileTypedDataMutation
>;
export type CreateBurnProfileTypedDataMutationResult =
  Apollo.MutationResult<CreateBurnProfileTypedDataMutation>;
export type CreateBurnProfileTypedDataMutationOptions =
  Apollo.BaseMutationOptions<
    CreateBurnProfileTypedDataMutation,
    CreateBurnProfileTypedDataMutationVariables
  >;
export const CreateCollectTypedDataDocument = gql`
  mutation CreateCollectTypedData(
    $options: TypedDataOptions
    $request: CreateCollectRequest!
  ) {
    createCollectTypedData(options: $options, request: $request) {
      id
      expiresAt
      typedData {
        types {
          CollectWithSig {
            name
            type
          }
        }
        domain {
          name
          chainId
          version
          verifyingContract
        }
        value {
          nonce
          deadline
          profileId
          pubId
          data
        }
      }
    }
  }
`;
export type CreateCollectTypedDataMutationFn = Apollo.MutationFunction<
  CreateCollectTypedDataMutation,
  CreateCollectTypedDataMutationVariables
>;

/**
 * __useCreateCollectTypedDataMutation__
 *
 * To run a mutation, you first call `useCreateCollectTypedDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCollectTypedDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCollectTypedDataMutation, { data, loading, error }] = useCreateCollectTypedDataMutation({
 *   variables: {
 *      options: // value for 'options'
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateCollectTypedDataMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCollectTypedDataMutation,
    CreateCollectTypedDataMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateCollectTypedDataMutation,
    CreateCollectTypedDataMutationVariables
  >(CreateCollectTypedDataDocument, options);
}
export type CreateCollectTypedDataMutationHookResult = ReturnType<
  typeof useCreateCollectTypedDataMutation
>;
export type CreateCollectTypedDataMutationResult =
  Apollo.MutationResult<CreateCollectTypedDataMutation>;
export type CreateCollectTypedDataMutationOptions = Apollo.BaseMutationOptions<
  CreateCollectTypedDataMutation,
  CreateCollectTypedDataMutationVariables
>;
export const CreateCommentTypedDataDocument = gql`
  mutation CreateCommentTypedData(
    $options: TypedDataOptions
    $request: CreatePublicCommentRequest!
  ) {
    createCommentTypedData(options: $options, request: $request) {
      id
      expiresAt
      typedData {
        types {
          CommentWithSig {
            name
            type
          }
        }
        domain {
          name
          chainId
          version
          verifyingContract
        }
        value {
          nonce
          deadline
          profileId
          profileIdPointed
          pubIdPointed
          contentURI
          collectModule
          collectModuleInitData
          referenceModule
          referenceModuleData
          referenceModuleInitData
        }
      }
    }
  }
`;
export type CreateCommentTypedDataMutationFn = Apollo.MutationFunction<
  CreateCommentTypedDataMutation,
  CreateCommentTypedDataMutationVariables
>;

/**
 * __useCreateCommentTypedDataMutation__
 *
 * To run a mutation, you first call `useCreateCommentTypedDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentTypedDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentTypedDataMutation, { data, loading, error }] = useCreateCommentTypedDataMutation({
 *   variables: {
 *      options: // value for 'options'
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateCommentTypedDataMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCommentTypedDataMutation,
    CreateCommentTypedDataMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateCommentTypedDataMutation,
    CreateCommentTypedDataMutationVariables
  >(CreateCommentTypedDataDocument, options);
}
export type CreateCommentTypedDataMutationHookResult = ReturnType<
  typeof useCreateCommentTypedDataMutation
>;
export type CreateCommentTypedDataMutationResult =
  Apollo.MutationResult<CreateCommentTypedDataMutation>;
export type CreateCommentTypedDataMutationOptions = Apollo.BaseMutationOptions<
  CreateCommentTypedDataMutation,
  CreateCommentTypedDataMutationVariables
>;
export const CreateFollowTypedDataDocument = gql`
  mutation CreateFollowTypedData(
    $options: TypedDataOptions
    $request: FollowRequest!
  ) {
    createFollowTypedData(options: $options, request: $request) {
      id
      expiresAt
      typedData {
        domain {
          name
          chainId
          version
          verifyingContract
        }
        types {
          FollowWithSig {
            name
            type
          }
        }
        value {
          nonce
          deadline
          profileIds
          datas
        }
      }
    }
  }
`;
export type CreateFollowTypedDataMutationFn = Apollo.MutationFunction<
  CreateFollowTypedDataMutation,
  CreateFollowTypedDataMutationVariables
>;

/**
 * __useCreateFollowTypedDataMutation__
 *
 * To run a mutation, you first call `useCreateFollowTypedDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFollowTypedDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFollowTypedDataMutation, { data, loading, error }] = useCreateFollowTypedDataMutation({
 *   variables: {
 *      options: // value for 'options'
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateFollowTypedDataMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateFollowTypedDataMutation,
    CreateFollowTypedDataMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateFollowTypedDataMutation,
    CreateFollowTypedDataMutationVariables
  >(CreateFollowTypedDataDocument, options);
}
export type CreateFollowTypedDataMutationHookResult = ReturnType<
  typeof useCreateFollowTypedDataMutation
>;
export type CreateFollowTypedDataMutationResult =
  Apollo.MutationResult<CreateFollowTypedDataMutation>;
export type CreateFollowTypedDataMutationOptions = Apollo.BaseMutationOptions<
  CreateFollowTypedDataMutation,
  CreateFollowTypedDataMutationVariables
>;
export const CreateMirrorTypedDataDocument = gql`
  mutation CreateMirrorTypedData(
    $options: TypedDataOptions
    $request: CreateMirrorRequest!
  ) {
    createMirrorTypedData(options: $options, request: $request) {
      id
      expiresAt
      typedData {
        types {
          MirrorWithSig {
            name
            type
          }
        }
        domain {
          name
          chainId
          version
          verifyingContract
        }
        value {
          nonce
          deadline
          profileId
          profileIdPointed
          pubIdPointed
          referenceModule
          referenceModuleData
          referenceModuleInitData
        }
      }
    }
  }
`;
export type CreateMirrorTypedDataMutationFn = Apollo.MutationFunction<
  CreateMirrorTypedDataMutation,
  CreateMirrorTypedDataMutationVariables
>;

/**
 * __useCreateMirrorTypedDataMutation__
 *
 * To run a mutation, you first call `useCreateMirrorTypedDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMirrorTypedDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMirrorTypedDataMutation, { data, loading, error }] = useCreateMirrorTypedDataMutation({
 *   variables: {
 *      options: // value for 'options'
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateMirrorTypedDataMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateMirrorTypedDataMutation,
    CreateMirrorTypedDataMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateMirrorTypedDataMutation,
    CreateMirrorTypedDataMutationVariables
  >(CreateMirrorTypedDataDocument, options);
}
export type CreateMirrorTypedDataMutationHookResult = ReturnType<
  typeof useCreateMirrorTypedDataMutation
>;
export type CreateMirrorTypedDataMutationResult =
  Apollo.MutationResult<CreateMirrorTypedDataMutation>;
export type CreateMirrorTypedDataMutationOptions = Apollo.BaseMutationOptions<
  CreateMirrorTypedDataMutation,
  CreateMirrorTypedDataMutationVariables
>;
export const CreatePostTypedDataDocument = gql`
  mutation CreatePostTypedData($request: CreatePublicPostRequest!) {
    createPostTypedData(request: $request) {
      id
      expiresAt
      typedData {
        types {
          PostWithSig {
            name
            type
          }
        }
        domain {
          name
          chainId
          version
          verifyingContract
        }
        value {
          nonce
          deadline
          profileId
          contentURI
          collectModule
          collectModuleInitData
          referenceModule
          referenceModuleInitData
        }
      }
    }
  }
`;
export type CreatePostTypedDataMutationFn = Apollo.MutationFunction<
  CreatePostTypedDataMutation,
  CreatePostTypedDataMutationVariables
>;

/**
 * __useCreatePostTypedDataMutation__
 *
 * To run a mutation, you first call `useCreatePostTypedDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostTypedDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostTypedDataMutation, { data, loading, error }] = useCreatePostTypedDataMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreatePostTypedDataMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePostTypedDataMutation,
    CreatePostTypedDataMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreatePostTypedDataMutation,
    CreatePostTypedDataMutationVariables
  >(CreatePostTypedDataDocument, options);
}
export type CreatePostTypedDataMutationHookResult = ReturnType<
  typeof useCreatePostTypedDataMutation
>;
export type CreatePostTypedDataMutationResult =
  Apollo.MutationResult<CreatePostTypedDataMutation>;
export type CreatePostTypedDataMutationOptions = Apollo.BaseMutationOptions<
  CreatePostTypedDataMutation,
  CreatePostTypedDataMutationVariables
>;
export const CreateSetFollowModuleTypedDataDocument = gql`
  mutation CreateSetFollowModuleTypedData(
    $options: TypedDataOptions
    $request: CreateSetFollowModuleRequest!
  ) {
    createSetFollowModuleTypedData(options: $options, request: $request) {
      id
      expiresAt
      typedData {
        types {
          SetFollowModuleWithSig {
            name
            type
          }
        }
        domain {
          name
          chainId
          version
          verifyingContract
        }
        value {
          nonce
          deadline
          profileId
          followModule
          followModuleInitData
        }
      }
    }
  }
`;
export type CreateSetFollowModuleTypedDataMutationFn = Apollo.MutationFunction<
  CreateSetFollowModuleTypedDataMutation,
  CreateSetFollowModuleTypedDataMutationVariables
>;

/**
 * __useCreateSetFollowModuleTypedDataMutation__
 *
 * To run a mutation, you first call `useCreateSetFollowModuleTypedDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSetFollowModuleTypedDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSetFollowModuleTypedDataMutation, { data, loading, error }] = useCreateSetFollowModuleTypedDataMutation({
 *   variables: {
 *      options: // value for 'options'
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateSetFollowModuleTypedDataMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateSetFollowModuleTypedDataMutation,
    CreateSetFollowModuleTypedDataMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateSetFollowModuleTypedDataMutation,
    CreateSetFollowModuleTypedDataMutationVariables
  >(CreateSetFollowModuleTypedDataDocument, options);
}
export type CreateSetFollowModuleTypedDataMutationHookResult = ReturnType<
  typeof useCreateSetFollowModuleTypedDataMutation
>;
export type CreateSetFollowModuleTypedDataMutationResult =
  Apollo.MutationResult<CreateSetFollowModuleTypedDataMutation>;
export type CreateSetFollowModuleTypedDataMutationOptions =
  Apollo.BaseMutationOptions<
    CreateSetFollowModuleTypedDataMutation,
    CreateSetFollowModuleTypedDataMutationVariables
  >;
export const CreateSetProfileImageUriTypedDataDocument = gql`
  mutation CreateSetProfileImageURITypedData(
    $options: TypedDataOptions
    $request: UpdateProfileImageRequest!
  ) {
    createSetProfileImageURITypedData(options: $options, request: $request) {
      id
      expiresAt
      typedData {
        domain {
          name
          chainId
          version
          verifyingContract
        }
        types {
          SetProfileImageURIWithSig {
            name
            type
          }
        }
        value {
          nonce
          deadline
          imageURI
          profileId
        }
      }
    }
  }
`;
export type CreateSetProfileImageUriTypedDataMutationFn =
  Apollo.MutationFunction<
    CreateSetProfileImageUriTypedDataMutation,
    CreateSetProfileImageUriTypedDataMutationVariables
  >;

/**
 * __useCreateSetProfileImageUriTypedDataMutation__
 *
 * To run a mutation, you first call `useCreateSetProfileImageUriTypedDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSetProfileImageUriTypedDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSetProfileImageUriTypedDataMutation, { data, loading, error }] = useCreateSetProfileImageUriTypedDataMutation({
 *   variables: {
 *      options: // value for 'options'
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateSetProfileImageUriTypedDataMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateSetProfileImageUriTypedDataMutation,
    CreateSetProfileImageUriTypedDataMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateSetProfileImageUriTypedDataMutation,
    CreateSetProfileImageUriTypedDataMutationVariables
  >(CreateSetProfileImageUriTypedDataDocument, options);
}
export type CreateSetProfileImageUriTypedDataMutationHookResult = ReturnType<
  typeof useCreateSetProfileImageUriTypedDataMutation
>;
export type CreateSetProfileImageUriTypedDataMutationResult =
  Apollo.MutationResult<CreateSetProfileImageUriTypedDataMutation>;
export type CreateSetProfileImageUriTypedDataMutationOptions =
  Apollo.BaseMutationOptions<
    CreateSetProfileImageUriTypedDataMutation,
    CreateSetProfileImageUriTypedDataMutationVariables
  >;
export const CreateSetProfileMetadataTypedDataDocument = gql`
  mutation CreateSetProfileMetadataTypedData(
    $request: CreatePublicSetProfileMetadataURIRequest!
  ) {
    createSetProfileMetadataTypedData(request: $request) {
      id
      expiresAt
      typedData {
        types {
          SetProfileMetadataURIWithSig {
            name
            type
          }
        }
        domain {
          name
          chainId
          version
          verifyingContract
        }
        value {
          nonce
          deadline
          profileId
          metadata
        }
      }
    }
  }
`;
export type CreateSetProfileMetadataTypedDataMutationFn =
  Apollo.MutationFunction<
    CreateSetProfileMetadataTypedDataMutation,
    CreateSetProfileMetadataTypedDataMutationVariables
  >;

/**
 * __useCreateSetProfileMetadataTypedDataMutation__
 *
 * To run a mutation, you first call `useCreateSetProfileMetadataTypedDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSetProfileMetadataTypedDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSetProfileMetadataTypedDataMutation, { data, loading, error }] = useCreateSetProfileMetadataTypedDataMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateSetProfileMetadataTypedDataMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateSetProfileMetadataTypedDataMutation,
    CreateSetProfileMetadataTypedDataMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateSetProfileMetadataTypedDataMutation,
    CreateSetProfileMetadataTypedDataMutationVariables
  >(CreateSetProfileMetadataTypedDataDocument, options);
}
export type CreateSetProfileMetadataTypedDataMutationHookResult = ReturnType<
  typeof useCreateSetProfileMetadataTypedDataMutation
>;
export type CreateSetProfileMetadataTypedDataMutationResult =
  Apollo.MutationResult<CreateSetProfileMetadataTypedDataMutation>;
export type CreateSetProfileMetadataTypedDataMutationOptions =
  Apollo.BaseMutationOptions<
    CreateSetProfileMetadataTypedDataMutation,
    CreateSetProfileMetadataTypedDataMutationVariables
  >;
export const AllFollowersDocument = gql`
  query AllFollowers($request: FollowersRequest!) {
    followers(request: $request) {
      items {
        wallet {
          address
          defaultProfile {
            ...ProfileFields
          }
        }
        totalAmountOfTimesFollowed
      }
      pageInfo {
        prev
        next
        totalCount
      }
    }
  }
  ${ProfileFieldsFragmentDoc}
`;

/**
 * __useAllFollowersQuery__
 *
 * To run a query within a React component, call `useAllFollowersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllFollowersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllFollowersQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useAllFollowersQuery(
  baseOptions: Apollo.QueryHookOptions<
    AllFollowersQuery,
    AllFollowersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllFollowersQuery, AllFollowersQueryVariables>(
    AllFollowersDocument,
    options
  );
}
export function useAllFollowersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllFollowersQuery,
    AllFollowersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllFollowersQuery, AllFollowersQueryVariables>(
    AllFollowersDocument,
    options
  );
}
export type AllFollowersQueryHookResult = ReturnType<
  typeof useAllFollowersQuery
>;
export type AllFollowersLazyQueryHookResult = ReturnType<
  typeof useAllFollowersLazyQuery
>;
export type AllFollowersQueryResult = Apollo.QueryResult<
  AllFollowersQuery,
  AllFollowersQueryVariables
>;
export const AllFollowingDocument = gql`
  query AllFollowing($request: FollowingRequest!) {
    following(request: $request) {
      items {
        profile {
          ...ProfileFields
        }
        totalAmountOfTimesFollowing
      }
      pageInfo {
        prev
        next
        totalCount
      }
    }
  }
  ${ProfileFieldsFragmentDoc}
`;

/**
 * __useAllFollowingQuery__
 *
 * To run a query within a React component, call `useAllFollowingQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllFollowingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllFollowingQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useAllFollowingQuery(
  baseOptions: Apollo.QueryHookOptions<
    AllFollowingQuery,
    AllFollowingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllFollowingQuery, AllFollowingQueryVariables>(
    AllFollowingDocument,
    options
  );
}
export function useAllFollowingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllFollowingQuery,
    AllFollowingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllFollowingQuery, AllFollowingQueryVariables>(
    AllFollowingDocument,
    options
  );
}
export type AllFollowingQueryHookResult = ReturnType<
  typeof useAllFollowingQuery
>;
export type AllFollowingLazyQueryHookResult = ReturnType<
  typeof useAllFollowingLazyQuery
>;
export type AllFollowingQueryResult = Apollo.QueryResult<
  AllFollowingQuery,
  AllFollowingQueryVariables
>;
export const AllProfilesDocument = gql`
  query AllProfiles($request: ProfileQueryRequest!) {
    profiles(request: $request) {
      items {
        ...ProfileFields
      }
      pageInfo {
        next
      }
    }
  }
  ${ProfileFieldsFragmentDoc}
`;

/**
 * __useAllProfilesQuery__
 *
 * To run a query within a React component, call `useAllProfilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProfilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProfilesQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useAllProfilesQuery(
  baseOptions: Apollo.QueryHookOptions<
    AllProfilesQuery,
    AllProfilesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllProfilesQuery, AllProfilesQueryVariables>(
    AllProfilesDocument,
    options
  );
}
export function useAllProfilesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllProfilesQuery,
    AllProfilesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllProfilesQuery, AllProfilesQueryVariables>(
    AllProfilesDocument,
    options
  );
}
export type AllProfilesQueryHookResult = ReturnType<typeof useAllProfilesQuery>;
export type AllProfilesLazyQueryHookResult = ReturnType<
  typeof useAllProfilesLazyQuery
>;
export type AllProfilesQueryResult = Apollo.QueryResult<
  AllProfilesQuery,
  AllProfilesQueryVariables
>;
export const AllPublicationsDocument = gql`
  query AllPublications(
    $request: PublicationsQueryRequest!
    $reactionRequest: ReactionFieldResolverRequest
    $channelId: ProfileId
  ) {
    publications(request: $request) {
      items {
        ... on Post {
          ...PostFields
        }
        ... on Mirror {
          ...MirrorFields
        }
      }
      pageInfo {
        next
      }
    }
  }
  ${PostFieldsFragmentDoc}
  ${MirrorFieldsFragmentDoc}
`;

/**
 * __useAllPublicationsQuery__
 *
 * To run a query within a React component, call `useAllPublicationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPublicationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPublicationsQuery({
 *   variables: {
 *      request: // value for 'request'
 *      reactionRequest: // value for 'reactionRequest'
 *      channelId: // value for 'channelId'
 *   },
 * });
 */
export function useAllPublicationsQuery(
  baseOptions: Apollo.QueryHookOptions<
    AllPublicationsQuery,
    AllPublicationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllPublicationsQuery, AllPublicationsQueryVariables>(
    AllPublicationsDocument,
    options
  );
}
export function useAllPublicationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllPublicationsQuery,
    AllPublicationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    AllPublicationsQuery,
    AllPublicationsQueryVariables
  >(AllPublicationsDocument, options);
}
export type AllPublicationsQueryHookResult = ReturnType<
  typeof useAllPublicationsQuery
>;
export type AllPublicationsLazyQueryHookResult = ReturnType<
  typeof useAllPublicationsLazyQuery
>;
export type AllPublicationsQueryResult = Apollo.QueryResult<
  AllPublicationsQuery,
  AllPublicationsQueryVariables
>;
export const ApprovedModuleAllowanceAmountDocument = gql`
  query ApprovedModuleAllowanceAmount(
    $request: ApprovedModuleAllowanceAmountRequest!
  ) {
    approvedModuleAllowanceAmount(request: $request) {
      currency
      module
      allowance
      contractAddress
    }
    enabledModuleCurrencies {
      name
      symbol
      decimals
      address
    }
  }
`;

/**
 * __useApprovedModuleAllowanceAmountQuery__
 *
 * To run a query within a React component, call `useApprovedModuleAllowanceAmountQuery` and pass it any options that fit your needs.
 * When your component renders, `useApprovedModuleAllowanceAmountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApprovedModuleAllowanceAmountQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useApprovedModuleAllowanceAmountQuery(
  baseOptions: Apollo.QueryHookOptions<
    ApprovedModuleAllowanceAmountQuery,
    ApprovedModuleAllowanceAmountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ApprovedModuleAllowanceAmountQuery,
    ApprovedModuleAllowanceAmountQueryVariables
  >(ApprovedModuleAllowanceAmountDocument, options);
}
export function useApprovedModuleAllowanceAmountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApprovedModuleAllowanceAmountQuery,
    ApprovedModuleAllowanceAmountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ApprovedModuleAllowanceAmountQuery,
    ApprovedModuleAllowanceAmountQueryVariables
  >(ApprovedModuleAllowanceAmountDocument, options);
}
export type ApprovedModuleAllowanceAmountQueryHookResult = ReturnType<
  typeof useApprovedModuleAllowanceAmountQuery
>;
export type ApprovedModuleAllowanceAmountLazyQueryHookResult = ReturnType<
  typeof useApprovedModuleAllowanceAmountLazyQuery
>;
export type ApprovedModuleAllowanceAmountQueryResult = Apollo.QueryResult<
  ApprovedModuleAllowanceAmountQuery,
  ApprovedModuleAllowanceAmountQueryVariables
>;
export const ChallengeDocument = gql`
  query Challenge($request: ChallengeRequest!) {
    challenge(request: $request) {
      text
    }
  }
`;

/**
 * __useChallengeQuery__
 *
 * To run a query within a React component, call `useChallengeQuery` and pass it any options that fit your needs.
 * When your component renders, `useChallengeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChallengeQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useChallengeQuery(
  baseOptions: Apollo.QueryHookOptions<ChallengeQuery, ChallengeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ChallengeQuery, ChallengeQueryVariables>(
    ChallengeDocument,
    options
  );
}
export function useChallengeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ChallengeQuery,
    ChallengeQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ChallengeQuery, ChallengeQueryVariables>(
    ChallengeDocument,
    options
  );
}
export type ChallengeQueryHookResult = ReturnType<typeof useChallengeQuery>;
export type ChallengeLazyQueryHookResult = ReturnType<
  typeof useChallengeLazyQuery
>;
export type ChallengeQueryResult = Apollo.QueryResult<
  ChallengeQuery,
  ChallengeQueryVariables
>;
export const CollectorsDocument = gql`
  query Collectors($request: WhoCollectedPublicationRequest!) {
    whoCollectedPublication(request: $request) {
      items {
        address
        defaultProfile {
          ...ProfileFields
        }
      }
      pageInfo {
        next
      }
    }
  }
  ${ProfileFieldsFragmentDoc}
`;

/**
 * __useCollectorsQuery__
 *
 * To run a query within a React component, call `useCollectorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectorsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCollectorsQuery(
  baseOptions: Apollo.QueryHookOptions<
    CollectorsQuery,
    CollectorsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CollectorsQuery, CollectorsQueryVariables>(
    CollectorsDocument,
    options
  );
}
export function useCollectorsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CollectorsQuery,
    CollectorsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CollectorsQuery, CollectorsQueryVariables>(
    CollectorsDocument,
    options
  );
}
export type CollectorsQueryHookResult = ReturnType<typeof useCollectorsQuery>;
export type CollectorsLazyQueryHookResult = ReturnType<
  typeof useCollectorsLazyQuery
>;
export type CollectorsQueryResult = Apollo.QueryResult<
  CollectorsQuery,
  CollectorsQueryVariables
>;
export const CommentsDocument = gql`
  query Comments(
    $request: PublicationsQueryRequest!
    $reactionRequest: ReactionFieldResolverRequest
    $channelId: ProfileId
  ) {
    publications(request: $request) {
      items {
        ... on Comment {
          ...CommentFields
        }
      }
      pageInfo {
        next
      }
    }
  }
  ${CommentFieldsFragmentDoc}
`;

/**
 * __useCommentsQuery__
 *
 * To run a query within a React component, call `useCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentsQuery({
 *   variables: {
 *      request: // value for 'request'
 *      reactionRequest: // value for 'reactionRequest'
 *      channelId: // value for 'channelId'
 *   },
 * });
 */
export function useCommentsQuery(
  baseOptions: Apollo.QueryHookOptions<CommentsQuery, CommentsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CommentsQuery, CommentsQueryVariables>(
    CommentsDocument,
    options
  );
}
export function useCommentsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CommentsQuery,
    CommentsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CommentsQuery, CommentsQueryVariables>(
    CommentsDocument,
    options
  );
}
export type CommentsQueryHookResult = ReturnType<typeof useCommentsQuery>;
export type CommentsLazyQueryHookResult = ReturnType<
  typeof useCommentsLazyQuery
>;
export type CommentsQueryResult = Apollo.QueryResult<
  CommentsQuery,
  CommentsQueryVariables
>;
export const CreateUnfollowTypedDataDocument = gql`
  mutation CreateUnfollowTypedData($request: UnfollowRequest!) {
    createUnfollowTypedData(request: $request) {
      id
      expiresAt
      typedData {
        domain {
          name
          chainId
          version
          verifyingContract
        }
        types {
          BurnWithSig {
            name
            type
          }
        }
        value {
          nonce
          deadline
          tokenId
        }
      }
    }
  }
`;
export type CreateUnfollowTypedDataMutationFn = Apollo.MutationFunction<
  CreateUnfollowTypedDataMutation,
  CreateUnfollowTypedDataMutationVariables
>;

/**
 * __useCreateUnfollowTypedDataMutation__
 *
 * To run a mutation, you first call `useCreateUnfollowTypedDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUnfollowTypedDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUnfollowTypedDataMutation, { data, loading, error }] = useCreateUnfollowTypedDataMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateUnfollowTypedDataMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUnfollowTypedDataMutation,
    CreateUnfollowTypedDataMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateUnfollowTypedDataMutation,
    CreateUnfollowTypedDataMutationVariables
  >(CreateUnfollowTypedDataDocument, options);
}
export type CreateUnfollowTypedDataMutationHookResult = ReturnType<
  typeof useCreateUnfollowTypedDataMutation
>;
export type CreateUnfollowTypedDataMutationResult =
  Apollo.MutationResult<CreateUnfollowTypedDataMutation>;
export type CreateUnfollowTypedDataMutationOptions = Apollo.BaseMutationOptions<
  CreateUnfollowTypedDataMutation,
  CreateUnfollowTypedDataMutationVariables
>;
export const EnabledModuleCurrrenciesDocument = gql`
  query EnabledModuleCurrrencies($request: ProfileQueryRequest!) {
    enabledModuleCurrencies {
      name
      symbol
      decimals
      address
    }
    profiles(request: $request) {
      items {
        followModule {
          __typename
        }
      }
    }
  }
`;

/**
 * __useEnabledModuleCurrrenciesQuery__
 *
 * To run a query within a React component, call `useEnabledModuleCurrrenciesQuery` and pass it any options that fit your needs.
 * When your component renders, `useEnabledModuleCurrrenciesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEnabledModuleCurrrenciesQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useEnabledModuleCurrrenciesQuery(
  baseOptions: Apollo.QueryHookOptions<
    EnabledModuleCurrrenciesQuery,
    EnabledModuleCurrrenciesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    EnabledModuleCurrrenciesQuery,
    EnabledModuleCurrrenciesQueryVariables
  >(EnabledModuleCurrrenciesDocument, options);
}
export function useEnabledModuleCurrrenciesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    EnabledModuleCurrrenciesQuery,
    EnabledModuleCurrrenciesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    EnabledModuleCurrrenciesQuery,
    EnabledModuleCurrrenciesQueryVariables
  >(EnabledModuleCurrrenciesDocument, options);
}
export type EnabledModuleCurrrenciesQueryHookResult = ReturnType<
  typeof useEnabledModuleCurrrenciesQuery
>;
export type EnabledModuleCurrrenciesLazyQueryHookResult = ReturnType<
  typeof useEnabledModuleCurrrenciesLazyQuery
>;
export type EnabledModuleCurrrenciesQueryResult = Apollo.QueryResult<
  EnabledModuleCurrrenciesQuery,
  EnabledModuleCurrrenciesQueryVariables
>;
export const ExploreDocument = gql`
  query Explore(
    $request: ExplorePublicationRequest!
    $reactionRequest: ReactionFieldResolverRequest
    $channelId: ProfileId
  ) {
    explorePublications(request: $request) {
      items {
        ... on Post {
          ...PostFields
        }
        ... on Comment {
          ...CommentFields
        }
      }
      pageInfo {
        next
      }
    }
  }
  ${PostFieldsFragmentDoc}
  ${CommentFieldsFragmentDoc}
`;

/**
 * __useExploreQuery__
 *
 * To run a query within a React component, call `useExploreQuery` and pass it any options that fit your needs.
 * When your component renders, `useExploreQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExploreQuery({
 *   variables: {
 *      request: // value for 'request'
 *      reactionRequest: // value for 'reactionRequest'
 *      channelId: // value for 'channelId'
 *   },
 * });
 */
export function useExploreQuery(
  baseOptions: Apollo.QueryHookOptions<ExploreQuery, ExploreQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ExploreQuery, ExploreQueryVariables>(
    ExploreDocument,
    options
  );
}
export function useExploreLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ExploreQuery, ExploreQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ExploreQuery, ExploreQueryVariables>(
    ExploreDocument,
    options
  );
}
export type ExploreQueryHookResult = ReturnType<typeof useExploreQuery>;
export type ExploreLazyQueryHookResult = ReturnType<typeof useExploreLazyQuery>;
export type ExploreQueryResult = Apollo.QueryResult<
  ExploreQuery,
  ExploreQueryVariables
>;
export const FeedDocument = gql`
  query Feed(
    $request: FeedRequest!
    $reactionRequest: ReactionFieldResolverRequest
    $channelId: ProfileId
  ) {
    feed(request: $request) {
      items {
        root {
          ... on Post {
            ...PostFields
          }
          ... on Comment {
            ...CommentFields
          }
        }
      }
      pageInfo {
        next
      }
    }
  }
  ${PostFieldsFragmentDoc}
  ${CommentFieldsFragmentDoc}
`;

/**
 * __useFeedQuery__
 *
 * To run a query within a React component, call `useFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeedQuery({
 *   variables: {
 *      request: // value for 'request'
 *      reactionRequest: // value for 'reactionRequest'
 *      channelId: // value for 'channelId'
 *   },
 * });
 */
export function useFeedQuery(
  baseOptions: Apollo.QueryHookOptions<FeedQuery, FeedQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FeedQuery, FeedQueryVariables>(FeedDocument, options);
}
export function useFeedLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FeedQuery, FeedQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FeedQuery, FeedQueryVariables>(
    FeedDocument,
    options
  );
}
export type FeedQueryHookResult = ReturnType<typeof useFeedQuery>;
export type FeedLazyQueryHookResult = ReturnType<typeof useFeedLazyQuery>;
export type FeedQueryResult = Apollo.QueryResult<FeedQuery, FeedQueryVariables>;
export const GenerateModuleCurrencyApprovalDataDocument = gql`
  query GenerateModuleCurrencyApprovalData(
    $request: GenerateModuleCurrencyApprovalDataRequest!
  ) {
    generateModuleCurrencyApprovalData(request: $request) {
      to
      from
      data
    }
  }
`;

/**
 * __useGenerateModuleCurrencyApprovalDataQuery__
 *
 * To run a query within a React component, call `useGenerateModuleCurrencyApprovalDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenerateModuleCurrencyApprovalDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGenerateModuleCurrencyApprovalDataQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useGenerateModuleCurrencyApprovalDataQuery(
  baseOptions: Apollo.QueryHookOptions<
    GenerateModuleCurrencyApprovalDataQuery,
    GenerateModuleCurrencyApprovalDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GenerateModuleCurrencyApprovalDataQuery,
    GenerateModuleCurrencyApprovalDataQueryVariables
  >(GenerateModuleCurrencyApprovalDataDocument, options);
}
export function useGenerateModuleCurrencyApprovalDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GenerateModuleCurrencyApprovalDataQuery,
    GenerateModuleCurrencyApprovalDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GenerateModuleCurrencyApprovalDataQuery,
    GenerateModuleCurrencyApprovalDataQueryVariables
  >(GenerateModuleCurrencyApprovalDataDocument, options);
}
export type GenerateModuleCurrencyApprovalDataQueryHookResult = ReturnType<
  typeof useGenerateModuleCurrencyApprovalDataQuery
>;
export type GenerateModuleCurrencyApprovalDataLazyQueryHookResult = ReturnType<
  typeof useGenerateModuleCurrencyApprovalDataLazyQuery
>;
export type GenerateModuleCurrencyApprovalDataQueryResult = Apollo.QueryResult<
  GenerateModuleCurrencyApprovalDataQuery,
  GenerateModuleCurrencyApprovalDataQueryVariables
>;
export const PublicationReactionsDocument = gql`
  query PublicationReactions($request: PublicationsQueryRequest!) {
    publications(request: $request) {
      items {
        __typename
        ... on Post {
          stats {
            totalAmountOfComments
            totalAmountOfCollects
            totalAmountOfMirrors
            totalUpvotes
          }
        }
        ... on Comment {
          stats {
            totalAmountOfComments
            totalAmountOfCollects
            totalAmountOfMirrors
            totalUpvotes
          }
        }
        ... on Mirror {
          stats {
            totalAmountOfComments
            totalAmountOfCollects
            totalAmountOfMirrors
            totalUpvotes
          }
        }
      }
    }
  }
`;

/**
 * __usePublicationReactionsQuery__
 *
 * To run a query within a React component, call `usePublicationReactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicationReactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicationReactionsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function usePublicationReactionsQuery(
  baseOptions: Apollo.QueryHookOptions<
    PublicationReactionsQuery,
    PublicationReactionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    PublicationReactionsQuery,
    PublicationReactionsQueryVariables
  >(PublicationReactionsDocument, options);
}
export function usePublicationReactionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PublicationReactionsQuery,
    PublicationReactionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PublicationReactionsQuery,
    PublicationReactionsQueryVariables
  >(PublicationReactionsDocument, options);
}
export type PublicationReactionsQueryHookResult = ReturnType<
  typeof usePublicationReactionsQuery
>;
export type PublicationReactionsLazyQueryHookResult = ReturnType<
  typeof usePublicationReactionsLazyQuery
>;
export type PublicationReactionsQueryResult = Apollo.QueryResult<
  PublicationReactionsQuery,
  PublicationReactionsQueryVariables
>;
export const GlobalProtocolStatsDocument = gql`
  query GlobalProtocolStats($request: GlobalProtocolStatsRequest) {
    globalProtocolStats(request: $request) {
      totalProfiles
      totalBurntProfiles
      totalPosts
      totalMirrors
      totalComments
      totalCollects
      totalFollows
      totalRevenue {
        asset {
          ...Erc20Fields
        }
        value
      }
    }
    bytesStats: globalProtocolStats(request: { sources: "lenstube-bytes" }) {
      totalPosts
    }
  }
  ${Erc20FieldsFragmentDoc}
`;

/**
 * __useGlobalProtocolStatsQuery__
 *
 * To run a query within a React component, call `useGlobalProtocolStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGlobalProtocolStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGlobalProtocolStatsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useGlobalProtocolStatsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GlobalProtocolStatsQuery,
    GlobalProtocolStatsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GlobalProtocolStatsQuery,
    GlobalProtocolStatsQueryVariables
  >(GlobalProtocolStatsDocument, options);
}
export function useGlobalProtocolStatsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GlobalProtocolStatsQuery,
    GlobalProtocolStatsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GlobalProtocolStatsQuery,
    GlobalProtocolStatsQueryVariables
  >(GlobalProtocolStatsDocument, options);
}
export type GlobalProtocolStatsQueryHookResult = ReturnType<
  typeof useGlobalProtocolStatsQuery
>;
export type GlobalProtocolStatsLazyQueryHookResult = ReturnType<
  typeof useGlobalProtocolStatsLazyQuery
>;
export type GlobalProtocolStatsQueryResult = Apollo.QueryResult<
  GlobalProtocolStatsQuery,
  GlobalProtocolStatsQueryVariables
>;
export const HasPublicationIndexedDocument = gql`
  query HasPublicationIndexed($request: PublicationQueryRequest!) {
    publication(request: $request) {
      ... on Post {
        id
      }
    }
  }
`;

/**
 * __useHasPublicationIndexedQuery__
 *
 * To run a query within a React component, call `useHasPublicationIndexedQuery` and pass it any options that fit your needs.
 * When your component renders, `useHasPublicationIndexedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHasPublicationIndexedQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useHasPublicationIndexedQuery(
  baseOptions: Apollo.QueryHookOptions<
    HasPublicationIndexedQuery,
    HasPublicationIndexedQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    HasPublicationIndexedQuery,
    HasPublicationIndexedQueryVariables
  >(HasPublicationIndexedDocument, options);
}
export function useHasPublicationIndexedLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    HasPublicationIndexedQuery,
    HasPublicationIndexedQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    HasPublicationIndexedQuery,
    HasPublicationIndexedQueryVariables
  >(HasPublicationIndexedDocument, options);
}
export type HasPublicationIndexedQueryHookResult = ReturnType<
  typeof useHasPublicationIndexedQuery
>;
export type HasPublicationIndexedLazyQueryHookResult = ReturnType<
  typeof useHasPublicationIndexedLazyQuery
>;
export type HasPublicationIndexedQueryResult = Apollo.QueryResult<
  HasPublicationIndexedQuery,
  HasPublicationIndexedQueryVariables
>;
export const HasTxHashBeenIndexedDocument = gql`
  query HasTxHashBeenIndexed($request: HasTxHashBeenIndexedRequest!) {
    hasTxHashBeenIndexed(request: $request) {
      ... on TransactionIndexedResult {
        indexed
        txReceipt {
          transactionHash
        }
      }
      ... on TransactionError {
        reason
      }
    }
  }
`;

/**
 * __useHasTxHashBeenIndexedQuery__
 *
 * To run a query within a React component, call `useHasTxHashBeenIndexedQuery` and pass it any options that fit your needs.
 * When your component renders, `useHasTxHashBeenIndexedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHasTxHashBeenIndexedQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useHasTxHashBeenIndexedQuery(
  baseOptions: Apollo.QueryHookOptions<
    HasTxHashBeenIndexedQuery,
    HasTxHashBeenIndexedQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    HasTxHashBeenIndexedQuery,
    HasTxHashBeenIndexedQueryVariables
  >(HasTxHashBeenIndexedDocument, options);
}
export function useHasTxHashBeenIndexedLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    HasTxHashBeenIndexedQuery,
    HasTxHashBeenIndexedQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    HasTxHashBeenIndexedQuery,
    HasTxHashBeenIndexedQueryVariables
  >(HasTxHashBeenIndexedDocument, options);
}
export type HasTxHashBeenIndexedQueryHookResult = ReturnType<
  typeof useHasTxHashBeenIndexedQuery
>;
export type HasTxHashBeenIndexedLazyQueryHookResult = ReturnType<
  typeof useHasTxHashBeenIndexedLazyQuery
>;
export type HasTxHashBeenIndexedQueryResult = Apollo.QueryResult<
  HasTxHashBeenIndexedQuery,
  HasTxHashBeenIndexedQueryVariables
>;
export const LatestNotificationIdDocument = gql`
  query LatestNotificationId($request: NotificationRequest!) {
    notifications(request: $request) {
      items {
        ... on NewFollowerNotification {
          notificationId
        }
        ... on NewMentionNotification {
          notificationId
        }
        ... on NewCommentNotification {
          notificationId
        }
        ... on NewMirrorNotification {
          notificationId
        }
        ... on NewCollectNotification {
          notificationId
        }
        ... on NewReactionNotification {
          notificationId
        }
      }
    }
  }
`;

/**
 * __useLatestNotificationIdQuery__
 *
 * To run a query within a React component, call `useLatestNotificationIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestNotificationIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestNotificationIdQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useLatestNotificationIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    LatestNotificationIdQuery,
    LatestNotificationIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    LatestNotificationIdQuery,
    LatestNotificationIdQueryVariables
  >(LatestNotificationIdDocument, options);
}
export function useLatestNotificationIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    LatestNotificationIdQuery,
    LatestNotificationIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    LatestNotificationIdQuery,
    LatestNotificationIdQueryVariables
  >(LatestNotificationIdDocument, options);
}
export type LatestNotificationIdQueryHookResult = ReturnType<
  typeof useLatestNotificationIdQuery
>;
export type LatestNotificationIdLazyQueryHookResult = ReturnType<
  typeof useLatestNotificationIdLazyQuery
>;
export type LatestNotificationIdQueryResult = Apollo.QueryResult<
  LatestNotificationIdQuery,
  LatestNotificationIdQueryVariables
>;
export const MutualFollowersDocument = gql`
  query MutualFollowers($request: MutualFollowersProfilesQueryRequest!) {
    mutualFollowersProfiles(request: $request) {
      items {
        ...ProfileFields
      }
      pageInfo {
        next
      }
    }
  }
  ${ProfileFieldsFragmentDoc}
`;

/**
 * __useMutualFollowersQuery__
 *
 * To run a query within a React component, call `useMutualFollowersQuery` and pass it any options that fit your needs.
 * When your component renders, `useMutualFollowersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMutualFollowersQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useMutualFollowersQuery(
  baseOptions: Apollo.QueryHookOptions<
    MutualFollowersQuery,
    MutualFollowersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MutualFollowersQuery, MutualFollowersQueryVariables>(
    MutualFollowersDocument,
    options
  );
}
export function useMutualFollowersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MutualFollowersQuery,
    MutualFollowersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    MutualFollowersQuery,
    MutualFollowersQueryVariables
  >(MutualFollowersDocument, options);
}
export type MutualFollowersQueryHookResult = ReturnType<
  typeof useMutualFollowersQuery
>;
export type MutualFollowersLazyQueryHookResult = ReturnType<
  typeof useMutualFollowersLazyQuery
>;
export type MutualFollowersQueryResult = Apollo.QueryResult<
  MutualFollowersQuery,
  MutualFollowersQueryVariables
>;
export const NotificationCountDocument = gql`
  query NotificationCount($request: NotificationRequest!) {
    notifications(request: $request) {
      pageInfo {
        totalCount
      }
    }
  }
`;

/**
 * __useNotificationCountQuery__
 *
 * To run a query within a React component, call `useNotificationCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useNotificationCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotificationCountQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useNotificationCountQuery(
  baseOptions: Apollo.QueryHookOptions<
    NotificationCountQuery,
    NotificationCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    NotificationCountQuery,
    NotificationCountQueryVariables
  >(NotificationCountDocument, options);
}
export function useNotificationCountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    NotificationCountQuery,
    NotificationCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    NotificationCountQuery,
    NotificationCountQueryVariables
  >(NotificationCountDocument, options);
}
export type NotificationCountQueryHookResult = ReturnType<
  typeof useNotificationCountQuery
>;
export type NotificationCountLazyQueryHookResult = ReturnType<
  typeof useNotificationCountLazyQuery
>;
export type NotificationCountQueryResult = Apollo.QueryResult<
  NotificationCountQuery,
  NotificationCountQueryVariables
>;
export const NotificationsDocument = gql`
  query Notifications($request: NotificationRequest!) {
    notifications(request: $request) {
      items {
        ... on NewFollowerNotification {
          notificationId
          wallet {
            address
            defaultProfile {
              ...ProfileFields
            }
          }
          createdAt
        }
        ... on NewMentionNotification {
          notificationId
          mentionPublication {
            ... on Post {
              id
              metadata {
                ...MetadataFields
              }
              profile {
                ...ProfileFields
              }
            }
            ... on Comment {
              id
              metadata {
                ...MetadataFields
              }
              profile {
                ...ProfileFields
              }
            }
          }
          createdAt
        }
        ... on NewCommentNotification {
          notificationId
          profile {
            ...ProfileFields
          }
          comment {
            id
            metadata {
              ...MetadataFields
            }
            commentOn {
              ... on Post {
                id
                metadata {
                  ...MetadataFields
                }
              }
              ... on Comment {
                id
                metadata {
                  ...MetadataFields
                }
              }
              ... on Mirror {
                id
                metadata {
                  ...MetadataFields
                }
              }
            }
          }
          createdAt
        }
        ... on NewMirrorNotification {
          notificationId
          profile {
            ...ProfileFields
          }
          publication {
            ... on Post {
              id
              metadata {
                ...MetadataFields
              }
            }
            ... on Comment {
              id
              metadata {
                ...MetadataFields
              }
            }
          }
          createdAt
        }
        ... on NewCollectNotification {
          notificationId
          wallet {
            address
            defaultProfile {
              ...ProfileFields
            }
          }
          collectedPublication {
            ... on Post {
              id
              metadata {
                ...MetadataFields
              }
            }
            ... on Comment {
              id
              metadata {
                ...MetadataFields
              }
            }
          }
          createdAt
        }
        ... on NewReactionNotification {
          notificationId
          profile {
            ...ProfileFields
          }
          reaction
          publication {
            ... on Comment {
              id
              metadata {
                ...MetadataFields
              }
              mainPost {
                ... on Post {
                  id
                  metadata {
                    ...MetadataFields
                  }
                }
              }
            }
            ... on Post {
              id
              metadata {
                ...MetadataFields
              }
            }
            ... on Mirror {
              id
              metadata {
                ...MetadataFields
              }
            }
          }
          createdAt
        }
      }
      pageInfo {
        next
      }
    }
  }
  ${ProfileFieldsFragmentDoc}
  ${MetadataFieldsFragmentDoc}
`;

/**
 * __useNotificationsQuery__
 *
 * To run a query within a React component, call `useNotificationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNotificationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotificationsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useNotificationsQuery(
  baseOptions: Apollo.QueryHookOptions<
    NotificationsQuery,
    NotificationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<NotificationsQuery, NotificationsQueryVariables>(
    NotificationsDocument,
    options
  );
}
export function useNotificationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    NotificationsQuery,
    NotificationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<NotificationsQuery, NotificationsQueryVariables>(
    NotificationsDocument,
    options
  );
}
export type NotificationsQueryHookResult = ReturnType<
  typeof useNotificationsQuery
>;
export type NotificationsLazyQueryHookResult = ReturnType<
  typeof useNotificationsLazyQuery
>;
export type NotificationsQueryResult = Apollo.QueryResult<
  NotificationsQuery,
  NotificationsQueryVariables
>;
export const ProfileDocument = gql`
  query Profile($request: SingleProfileQueryRequest!, $who: ProfileId) {
    profile(request: $request) {
      id
      handle
      ownedBy
      name
      dispatcher {
        canUseRelay
      }
      interests
      isFollowedByMe
      isFollowing(who: $who)
      onChainIdentity {
        proofOfHumanity
        worldcoin {
          isHuman
        }
        sybilDotOrg {
          verified
          source {
            twitter {
              handle
            }
          }
        }
        ens {
          name
        }
      }
      attributes {
        key
        value
        traitType
        displayType
      }
      bio
      stats {
        totalFollowers
        totalFollowing
        totalPosts
        totalComments
        totalMirrors
        totalCollects
        totalPublications
      }
      picture {
        ... on MediaSet {
          original {
            url
          }
        }
        ... on NftImage {
          uri
        }
      }
      coverPicture {
        ... on MediaSet {
          original {
            url
          }
        }
      }
      followModule {
        __typename
      }
    }
  }
`;

/**
 * __useProfileQuery__
 *
 * To run a query within a React component, call `useProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileQuery({
 *   variables: {
 *      request: // value for 'request'
 *      who: // value for 'who'
 *   },
 * });
 */
export function useProfileQuery(
  baseOptions: Apollo.QueryHookOptions<ProfileQuery, ProfileQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProfileQuery, ProfileQueryVariables>(
    ProfileDocument,
    options
  );
}
export function useProfileLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProfileQuery, ProfileQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProfileQuery, ProfileQueryVariables>(
    ProfileDocument,
    options
  );
}
export type ProfileQueryHookResult = ReturnType<typeof useProfileQuery>;
export type ProfileLazyQueryHookResult = ReturnType<typeof useProfileLazyQuery>;
export type ProfileQueryResult = Apollo.QueryResult<
  ProfileQuery,
  ProfileQueryVariables
>;
export const ProfileCollectsDocument = gql`
  query ProfileCollects(
    $request: PublicationsQueryRequest!
    $reactionRequest: ReactionFieldResolverRequest
    $channelId: ProfileId
  ) {
    publications(request: $request) {
      items {
        ... on Post {
          ...PostFields
        }
        ... on Mirror {
          ...MirrorFields
        }
      }
      pageInfo {
        next
      }
    }
  }
  ${PostFieldsFragmentDoc}
  ${MirrorFieldsFragmentDoc}
`;

/**
 * __useProfileCollectsQuery__
 *
 * To run a query within a React component, call `useProfileCollectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileCollectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileCollectsQuery({
 *   variables: {
 *      request: // value for 'request'
 *      reactionRequest: // value for 'reactionRequest'
 *      channelId: // value for 'channelId'
 *   },
 * });
 */
export function useProfileCollectsQuery(
  baseOptions: Apollo.QueryHookOptions<
    ProfileCollectsQuery,
    ProfileCollectsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProfileCollectsQuery, ProfileCollectsQueryVariables>(
    ProfileCollectsDocument,
    options
  );
}
export function useProfileCollectsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ProfileCollectsQuery,
    ProfileCollectsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ProfileCollectsQuery,
    ProfileCollectsQueryVariables
  >(ProfileCollectsDocument, options);
}
export type ProfileCollectsQueryHookResult = ReturnType<
  typeof useProfileCollectsQuery
>;
export type ProfileCollectsLazyQueryHookResult = ReturnType<
  typeof useProfileCollectsLazyQuery
>;
export type ProfileCollectsQueryResult = Apollo.QueryResult<
  ProfileCollectsQuery,
  ProfileCollectsQueryVariables
>;
export const ProfileFollowModuleDocument = gql`
  query ProfileFollowModule($request: ProfileQueryRequest!) {
    profiles(request: $request) {
      items {
        followModule {
          ... on FeeFollowModuleSettings {
            amount {
              asset {
                ...Erc20Fields
              }
              value
            }
            recipient
          }
        }
      }
    }
  }
  ${Erc20FieldsFragmentDoc}
`;

/**
 * __useProfileFollowModuleQuery__
 *
 * To run a query within a React component, call `useProfileFollowModuleQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileFollowModuleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileFollowModuleQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useProfileFollowModuleQuery(
  baseOptions: Apollo.QueryHookOptions<
    ProfileFollowModuleQuery,
    ProfileFollowModuleQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ProfileFollowModuleQuery,
    ProfileFollowModuleQueryVariables
  >(ProfileFollowModuleDocument, options);
}
export function useProfileFollowModuleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ProfileFollowModuleQuery,
    ProfileFollowModuleQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ProfileFollowModuleQuery,
    ProfileFollowModuleQueryVariables
  >(ProfileFollowModuleDocument, options);
}
export type ProfileFollowModuleQueryHookResult = ReturnType<
  typeof useProfileFollowModuleQuery
>;
export type ProfileFollowModuleLazyQueryHookResult = ReturnType<
  typeof useProfileFollowModuleLazyQuery
>;
export type ProfileFollowModuleQueryResult = Apollo.QueryResult<
  ProfileFollowModuleQuery,
  ProfileFollowModuleQueryVariables
>;
export const ProfileInterestsDocument = gql`
  query ProfileInterests {
    profileInterests
  }
`;

/**
 * __useProfileInterestsQuery__
 *
 * To run a query within a React component, call `useProfileInterestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileInterestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileInterestsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProfileInterestsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ProfileInterestsQuery,
    ProfileInterestsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProfileInterestsQuery, ProfileInterestsQueryVariables>(
    ProfileInterestsDocument,
    options
  );
}
export function useProfileInterestsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ProfileInterestsQuery,
    ProfileInterestsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ProfileInterestsQuery,
    ProfileInterestsQueryVariables
  >(ProfileInterestsDocument, options);
}
export type ProfileInterestsQueryHookResult = ReturnType<
  typeof useProfileInterestsQuery
>;
export type ProfileInterestsLazyQueryHookResult = ReturnType<
  typeof useProfileInterestsLazyQuery
>;
export type ProfileInterestsQueryResult = Apollo.QueryResult<
  ProfileInterestsQuery,
  ProfileInterestsQueryVariables
>;
export const ProfileMirrorsDocument = gql`
  query ProfileMirrors(
    $request: PublicationsQueryRequest!
    $reactionRequest: ReactionFieldResolverRequest
    $channelId: ProfileId
  ) {
    publications(request: $request) {
      items {
        ... on Mirror {
          ...MirrorFields
        }
      }
      pageInfo {
        next
      }
    }
  }
  ${MirrorFieldsFragmentDoc}
`;

/**
 * __useProfileMirrorsQuery__
 *
 * To run a query within a React component, call `useProfileMirrorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileMirrorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileMirrorsQuery({
 *   variables: {
 *      request: // value for 'request'
 *      reactionRequest: // value for 'reactionRequest'
 *      channelId: // value for 'channelId'
 *   },
 * });
 */
export function useProfileMirrorsQuery(
  baseOptions: Apollo.QueryHookOptions<
    ProfileMirrorsQuery,
    ProfileMirrorsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProfileMirrorsQuery, ProfileMirrorsQueryVariables>(
    ProfileMirrorsDocument,
    options
  );
}
export function useProfileMirrorsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ProfileMirrorsQuery,
    ProfileMirrorsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProfileMirrorsQuery, ProfileMirrorsQueryVariables>(
    ProfileMirrorsDocument,
    options
  );
}
export type ProfileMirrorsQueryHookResult = ReturnType<
  typeof useProfileMirrorsQuery
>;
export type ProfileMirrorsLazyQueryHookResult = ReturnType<
  typeof useProfileMirrorsLazyQuery
>;
export type ProfileMirrorsQueryResult = Apollo.QueryResult<
  ProfileMirrorsQuery,
  ProfileMirrorsQueryVariables
>;
export const ProfileNfTsDocument = gql`
  query ProfileNFTs($request: NFTsRequest!) {
    nfts(request: $request) {
      items {
        contractAddress
        tokenId
        name
        originalContent {
          animatedUrl
          uri
          metaType
        }
        collectionName
      }
      pageInfo {
        next
      }
    }
  }
`;

/**
 * __useProfileNfTsQuery__
 *
 * To run a query within a React component, call `useProfileNfTsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileNfTsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileNfTsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useProfileNfTsQuery(
  baseOptions: Apollo.QueryHookOptions<
    ProfileNfTsQuery,
    ProfileNfTsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProfileNfTsQuery, ProfileNfTsQueryVariables>(
    ProfileNfTsDocument,
    options
  );
}
export function useProfileNfTsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ProfileNfTsQuery,
    ProfileNfTsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProfileNfTsQuery, ProfileNfTsQueryVariables>(
    ProfileNfTsDocument,
    options
  );
}
export type ProfileNfTsQueryHookResult = ReturnType<typeof useProfileNfTsQuery>;
export type ProfileNfTsLazyQueryHookResult = ReturnType<
  typeof useProfileNfTsLazyQuery
>;
export type ProfileNfTsQueryResult = Apollo.QueryResult<
  ProfileNfTsQuery,
  ProfileNfTsQueryVariables
>;
export const ProfilePostsDocument = gql`
  query ProfilePosts(
    $request: PublicationsQueryRequest!
    $reactionRequest: ReactionFieldResolverRequest
    $channelId: ProfileId
  ) {
    publications(request: $request) {
      items {
        ... on Post {
          ...PostFields
        }
      }
      pageInfo {
        next
      }
    }
  }
  ${PostFieldsFragmentDoc}
`;

/**
 * __useProfilePostsQuery__
 *
 * To run a query within a React component, call `useProfilePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfilePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfilePostsQuery({
 *   variables: {
 *      request: // value for 'request'
 *      reactionRequest: // value for 'reactionRequest'
 *      channelId: // value for 'channelId'
 *   },
 * });
 */
export function useProfilePostsQuery(
  baseOptions: Apollo.QueryHookOptions<
    ProfilePostsQuery,
    ProfilePostsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProfilePostsQuery, ProfilePostsQueryVariables>(
    ProfilePostsDocument,
    options
  );
}
export function useProfilePostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ProfilePostsQuery,
    ProfilePostsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProfilePostsQuery, ProfilePostsQueryVariables>(
    ProfilePostsDocument,
    options
  );
}
export type ProfilePostsQueryHookResult = ReturnType<
  typeof useProfilePostsQuery
>;
export type ProfilePostsLazyQueryHookResult = ReturnType<
  typeof useProfilePostsLazyQuery
>;
export type ProfilePostsQueryResult = Apollo.QueryResult<
  ProfilePostsQuery,
  ProfilePostsQueryVariables
>;
export const ProfilePublicationsRevenueDocument = gql`
  query ProfilePublicationsRevenue(
    $request: ProfilePublicationRevenueQueryRequest!
    $reactionRequest: ReactionFieldResolverRequest
    $channelId: ProfileId
  ) {
    profilePublicationRevenue(request: $request) {
      items {
        publication {
          __typename
          ... on Post {
            ...PostFields
          }
          ... on Comment {
            ...CommentFields
          }
          ... on Mirror {
            ...MirrorFields
          }
        }
        revenue {
          total {
            asset {
              name
              symbol
              decimals
              address
            }
            value
          }
        }
      }
      pageInfo {
        prev
        next
        totalCount
      }
    }
  }
  ${PostFieldsFragmentDoc}
  ${CommentFieldsFragmentDoc}
  ${MirrorFieldsFragmentDoc}
`;

/**
 * __useProfilePublicationsRevenueQuery__
 *
 * To run a query within a React component, call `useProfilePublicationsRevenueQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfilePublicationsRevenueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfilePublicationsRevenueQuery({
 *   variables: {
 *      request: // value for 'request'
 *      reactionRequest: // value for 'reactionRequest'
 *      channelId: // value for 'channelId'
 *   },
 * });
 */
export function useProfilePublicationsRevenueQuery(
  baseOptions: Apollo.QueryHookOptions<
    ProfilePublicationsRevenueQuery,
    ProfilePublicationsRevenueQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ProfilePublicationsRevenueQuery,
    ProfilePublicationsRevenueQueryVariables
  >(ProfilePublicationsRevenueDocument, options);
}
export function useProfilePublicationsRevenueLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ProfilePublicationsRevenueQuery,
    ProfilePublicationsRevenueQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ProfilePublicationsRevenueQuery,
    ProfilePublicationsRevenueQueryVariables
  >(ProfilePublicationsRevenueDocument, options);
}
export type ProfilePublicationsRevenueQueryHookResult = ReturnType<
  typeof useProfilePublicationsRevenueQuery
>;
export type ProfilePublicationsRevenueLazyQueryHookResult = ReturnType<
  typeof useProfilePublicationsRevenueLazyQuery
>;
export type ProfilePublicationsRevenueQueryResult = Apollo.QueryResult<
  ProfilePublicationsRevenueQuery,
  ProfilePublicationsRevenueQueryVariables
>;
export const ProxyActionStatusDocument = gql`
  query ProxyActionStatus($proxyActionId: ProxyActionId!) {
    proxyActionStatus(proxyActionId: $proxyActionId) {
      ... on ProxyActionStatusResult {
        txId
        status
      }
      ... on ProxyActionError {
        reason
      }
    }
  }
`;

/**
 * __useProxyActionStatusQuery__
 *
 * To run a query within a React component, call `useProxyActionStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useProxyActionStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProxyActionStatusQuery({
 *   variables: {
 *      proxyActionId: // value for 'proxyActionId'
 *   },
 * });
 */
export function useProxyActionStatusQuery(
  baseOptions: Apollo.QueryHookOptions<
    ProxyActionStatusQuery,
    ProxyActionStatusQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ProxyActionStatusQuery,
    ProxyActionStatusQueryVariables
  >(ProxyActionStatusDocument, options);
}
export function useProxyActionStatusLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ProxyActionStatusQuery,
    ProxyActionStatusQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ProxyActionStatusQuery,
    ProxyActionStatusQueryVariables
  >(ProxyActionStatusDocument, options);
}
export type ProxyActionStatusQueryHookResult = ReturnType<
  typeof useProxyActionStatusQuery
>;
export type ProxyActionStatusLazyQueryHookResult = ReturnType<
  typeof useProxyActionStatusLazyQuery
>;
export type ProxyActionStatusQueryResult = Apollo.QueryResult<
  ProxyActionStatusQuery,
  ProxyActionStatusQueryVariables
>;
export const PublicationCollectModuleDocument = gql`
  query PublicationCollectModule($request: PublicationQueryRequest!) {
    publication(request: $request) {
      ... on Post {
        collectNftAddress
        collectModule {
          ...CollectFields
        }
      }
    }
  }
  ${CollectFieldsFragmentDoc}
`;

/**
 * __usePublicationCollectModuleQuery__
 *
 * To run a query within a React component, call `usePublicationCollectModuleQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicationCollectModuleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicationCollectModuleQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function usePublicationCollectModuleQuery(
  baseOptions: Apollo.QueryHookOptions<
    PublicationCollectModuleQuery,
    PublicationCollectModuleQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    PublicationCollectModuleQuery,
    PublicationCollectModuleQueryVariables
  >(PublicationCollectModuleDocument, options);
}
export function usePublicationCollectModuleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PublicationCollectModuleQuery,
    PublicationCollectModuleQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PublicationCollectModuleQuery,
    PublicationCollectModuleQueryVariables
  >(PublicationCollectModuleDocument, options);
}
export type PublicationCollectModuleQueryHookResult = ReturnType<
  typeof usePublicationCollectModuleQuery
>;
export type PublicationCollectModuleLazyQueryHookResult = ReturnType<
  typeof usePublicationCollectModuleLazyQuery
>;
export type PublicationCollectModuleQueryResult = Apollo.QueryResult<
  PublicationCollectModuleQuery,
  PublicationCollectModuleQueryVariables
>;
export const PublicationDetailsDocument = gql`
  query PublicationDetails(
    $request: PublicationQueryRequest!
    $reactionRequest: ReactionFieldResolverRequest
    $channelId: ProfileId
  ) {
    publication(request: $request) {
      ... on Post {
        ...PostFields
      }
      ... on Comment {
        ...CommentFields
      }
      ... on Mirror {
        ...MirrorFields
      }
    }
  }
  ${PostFieldsFragmentDoc}
  ${CommentFieldsFragmentDoc}
  ${MirrorFieldsFragmentDoc}
`;

/**
 * __usePublicationDetailsQuery__
 *
 * To run a query within a React component, call `usePublicationDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicationDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicationDetailsQuery({
 *   variables: {
 *      request: // value for 'request'
 *      reactionRequest: // value for 'reactionRequest'
 *      channelId: // value for 'channelId'
 *   },
 * });
 */
export function usePublicationDetailsQuery(
  baseOptions: Apollo.QueryHookOptions<
    PublicationDetailsQuery,
    PublicationDetailsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    PublicationDetailsQuery,
    PublicationDetailsQueryVariables
  >(PublicationDetailsDocument, options);
}
export function usePublicationDetailsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PublicationDetailsQuery,
    PublicationDetailsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PublicationDetailsQuery,
    PublicationDetailsQueryVariables
  >(PublicationDetailsDocument, options);
}
export type PublicationDetailsQueryHookResult = ReturnType<
  typeof usePublicationDetailsQuery
>;
export type PublicationDetailsLazyQueryHookResult = ReturnType<
  typeof usePublicationDetailsLazyQuery
>;
export type PublicationDetailsQueryResult = Apollo.QueryResult<
  PublicationDetailsQuery,
  PublicationDetailsQueryVariables
>;
export const PublicationRevenueDocument = gql`
  query PublicationRevenue($request: PublicationRevenueQueryRequest!) {
    publicationRevenue(request: $request) {
      revenue {
        total {
          asset {
            name
            symbol
            decimals
            address
          }
          value
        }
      }
    }
  }
`;

/**
 * __usePublicationRevenueQuery__
 *
 * To run a query within a React component, call `usePublicationRevenueQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicationRevenueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicationRevenueQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function usePublicationRevenueQuery(
  baseOptions: Apollo.QueryHookOptions<
    PublicationRevenueQuery,
    PublicationRevenueQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    PublicationRevenueQuery,
    PublicationRevenueQueryVariables
  >(PublicationRevenueDocument, options);
}
export function usePublicationRevenueLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PublicationRevenueQuery,
    PublicationRevenueQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PublicationRevenueQuery,
    PublicationRevenueQueryVariables
  >(PublicationRevenueDocument, options);
}
export type PublicationRevenueQueryHookResult = ReturnType<
  typeof usePublicationRevenueQuery
>;
export type PublicationRevenueLazyQueryHookResult = ReturnType<
  typeof usePublicationRevenueLazyQuery
>;
export type PublicationRevenueQueryResult = Apollo.QueryResult<
  PublicationRevenueQuery,
  PublicationRevenueQueryVariables
>;
export const RecommendedProfilesDocument = gql`
  query RecommendedProfiles {
    recommendedProfiles {
      id
      name
      bio
      handle
      picture {
        ... on MediaSet {
          original {
            url
          }
        }
        ... on NftImage {
          uri
        }
      }
    }
  }
`;

/**
 * __useRecommendedProfilesQuery__
 *
 * To run a query within a React component, call `useRecommendedProfilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecommendedProfilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecommendedProfilesQuery({
 *   variables: {
 *   },
 * });
 */
export function useRecommendedProfilesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    RecommendedProfilesQuery,
    RecommendedProfilesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    RecommendedProfilesQuery,
    RecommendedProfilesQueryVariables
  >(RecommendedProfilesDocument, options);
}
export function useRecommendedProfilesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    RecommendedProfilesQuery,
    RecommendedProfilesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    RecommendedProfilesQuery,
    RecommendedProfilesQueryVariables
  >(RecommendedProfilesDocument, options);
}
export type RecommendedProfilesQueryHookResult = ReturnType<
  typeof useRecommendedProfilesQuery
>;
export type RecommendedProfilesLazyQueryHookResult = ReturnType<
  typeof useRecommendedProfilesLazyQuery
>;
export type RecommendedProfilesQueryResult = Apollo.QueryResult<
  RecommendedProfilesQuery,
  RecommendedProfilesQueryVariables
>;
export const ResolveProfileAddressDocument = gql`
  query ResolveProfileAddress($request: SingleProfileQueryRequest!) {
    profile(request: $request) {
      ownedBy
    }
  }
`;

/**
 * __useResolveProfileAddressQuery__
 *
 * To run a query within a React component, call `useResolveProfileAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useResolveProfileAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useResolveProfileAddressQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useResolveProfileAddressQuery(
  baseOptions: Apollo.QueryHookOptions<
    ResolveProfileAddressQuery,
    ResolveProfileAddressQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ResolveProfileAddressQuery,
    ResolveProfileAddressQueryVariables
  >(ResolveProfileAddressDocument, options);
}
export function useResolveProfileAddressLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ResolveProfileAddressQuery,
    ResolveProfileAddressQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ResolveProfileAddressQuery,
    ResolveProfileAddressQueryVariables
  >(ResolveProfileAddressDocument, options);
}
export type ResolveProfileAddressQueryHookResult = ReturnType<
  typeof useResolveProfileAddressQuery
>;
export type ResolveProfileAddressLazyQueryHookResult = ReturnType<
  typeof useResolveProfileAddressLazyQuery
>;
export type ResolveProfileAddressQueryResult = Apollo.QueryResult<
  ResolveProfileAddressQuery,
  ResolveProfileAddressQueryVariables
>;
export const SearchProfilesDocument = gql`
  query SearchProfiles($request: SearchQueryRequest!) {
    search(request: $request) {
      ... on ProfileSearchResult {
        items {
          ...ProfileFields
        }
      }
    }
  }
  ${ProfileFieldsFragmentDoc}
`;

/**
 * __useSearchProfilesQuery__
 *
 * To run a query within a React component, call `useSearchProfilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchProfilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchProfilesQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSearchProfilesQuery(
  baseOptions: Apollo.QueryHookOptions<
    SearchProfilesQuery,
    SearchProfilesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SearchProfilesQuery, SearchProfilesQueryVariables>(
    SearchProfilesDocument,
    options
  );
}
export function useSearchProfilesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SearchProfilesQuery,
    SearchProfilesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SearchProfilesQuery, SearchProfilesQueryVariables>(
    SearchProfilesDocument,
    options
  );
}
export type SearchProfilesQueryHookResult = ReturnType<
  typeof useSearchProfilesQuery
>;
export type SearchProfilesLazyQueryHookResult = ReturnType<
  typeof useSearchProfilesLazyQuery
>;
export type SearchProfilesQueryResult = Apollo.QueryResult<
  SearchProfilesQuery,
  SearchProfilesQueryVariables
>;
export const SearchPublicationsDocument = gql`
  query SearchPublications(
    $request: SearchQueryRequest!
    $reactionRequest: ReactionFieldResolverRequest
    $channelId: ProfileId
  ) {
    search(request: $request) {
      ... on PublicationSearchResult {
        items {
          ... on Post {
            ...PostFields
          }
          ... on Comment {
            ...CommentFields
          }
        }
        pageInfo {
          next
        }
      }
    }
  }
  ${PostFieldsFragmentDoc}
  ${CommentFieldsFragmentDoc}
`;

/**
 * __useSearchPublicationsQuery__
 *
 * To run a query within a React component, call `useSearchPublicationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchPublicationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchPublicationsQuery({
 *   variables: {
 *      request: // value for 'request'
 *      reactionRequest: // value for 'reactionRequest'
 *      channelId: // value for 'channelId'
 *   },
 * });
 */
export function useSearchPublicationsQuery(
  baseOptions: Apollo.QueryHookOptions<
    SearchPublicationsQuery,
    SearchPublicationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    SearchPublicationsQuery,
    SearchPublicationsQueryVariables
  >(SearchPublicationsDocument, options);
}
export function useSearchPublicationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SearchPublicationsQuery,
    SearchPublicationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    SearchPublicationsQuery,
    SearchPublicationsQueryVariables
  >(SearchPublicationsDocument, options);
}
export type SearchPublicationsQueryHookResult = ReturnType<
  typeof useSearchPublicationsQuery
>;
export type SearchPublicationsLazyQueryHookResult = ReturnType<
  typeof useSearchPublicationsLazyQuery
>;
export type SearchPublicationsQueryResult = Apollo.QueryResult<
  SearchPublicationsQuery,
  SearchPublicationsQueryVariables
>;
export const SubscribersDocument = gql`
  query Subscribers($request: FollowersRequest!) {
    followers(request: $request) {
      items {
        wallet {
          address
          defaultProfile {
            ...ProfileFields
          }
        }
      }
      pageInfo {
        next
      }
    }
  }
  ${ProfileFieldsFragmentDoc}
`;

/**
 * __useSubscribersQuery__
 *
 * To run a query within a React component, call `useSubscribersQuery` and pass it any options that fit your needs.
 * When your component renders, `useSubscribersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubscribersQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSubscribersQuery(
  baseOptions: Apollo.QueryHookOptions<
    SubscribersQuery,
    SubscribersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SubscribersQuery, SubscribersQueryVariables>(
    SubscribersDocument,
    options
  );
}
export function useSubscribersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SubscribersQuery,
    SubscribersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SubscribersQuery, SubscribersQueryVariables>(
    SubscribersDocument,
    options
  );
}
export type SubscribersQueryHookResult = ReturnType<typeof useSubscribersQuery>;
export type SubscribersLazyQueryHookResult = ReturnType<
  typeof useSubscribersLazyQuery
>;
export type SubscribersQueryResult = Apollo.QueryResult<
  SubscribersQuery,
  SubscribersQueryVariables
>;
export const TxIdToTxHashDocument = gql`
  query TxIdToTxHash($txId: TxId!) {
    txIdToTxHash(txId: $txId)
  }
`;

/**
 * __useTxIdToTxHashQuery__
 *
 * To run a query within a React component, call `useTxIdToTxHashQuery` and pass it any options that fit your needs.
 * When your component renders, `useTxIdToTxHashQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTxIdToTxHashQuery({
 *   variables: {
 *      txId: // value for 'txId'
 *   },
 * });
 */
export function useTxIdToTxHashQuery(
  baseOptions: Apollo.QueryHookOptions<
    TxIdToTxHashQuery,
    TxIdToTxHashQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TxIdToTxHashQuery, TxIdToTxHashQueryVariables>(
    TxIdToTxHashDocument,
    options
  );
}
export function useTxIdToTxHashLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    TxIdToTxHashQuery,
    TxIdToTxHashQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TxIdToTxHashQuery, TxIdToTxHashQueryVariables>(
    TxIdToTxHashDocument,
    options
  );
}
export type TxIdToTxHashQueryHookResult = ReturnType<
  typeof useTxIdToTxHashQuery
>;
export type TxIdToTxHashLazyQueryHookResult = ReturnType<
  typeof useTxIdToTxHashLazyQuery
>;
export type TxIdToTxHashQueryResult = Apollo.QueryResult<
  TxIdToTxHashQuery,
  TxIdToTxHashQueryVariables
>;
export const UserProfilesDocument = gql`
  query UserProfiles($request: ProfileQueryRequest!) {
    profiles(request: $request) {
      items {
        ...ProfileFields
      }
    }
    userSigNonces {
      lensHubOnChainSigNonce
    }
  }
  ${ProfileFieldsFragmentDoc}
`;

/**
 * __useUserProfilesQuery__
 *
 * To run a query within a React component, call `useUserProfilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserProfilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserProfilesQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUserProfilesQuery(
  baseOptions: Apollo.QueryHookOptions<
    UserProfilesQuery,
    UserProfilesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserProfilesQuery, UserProfilesQueryVariables>(
    UserProfilesDocument,
    options
  );
}
export function useUserProfilesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserProfilesQuery,
    UserProfilesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserProfilesQuery, UserProfilesQueryVariables>(
    UserProfilesDocument,
    options
  );
}
export type UserProfilesQueryHookResult = ReturnType<
  typeof useUserProfilesQuery
>;
export type UserProfilesLazyQueryHookResult = ReturnType<
  typeof useUserProfilesLazyQuery
>;
export type UserProfilesQueryResult = Apollo.QueryResult<
  UserProfilesQuery,
  UserProfilesQueryVariables
>;
export const VerifyTokensDocument = gql`
  query VerifyTokens($request: VerifyRequest!) {
    verify(request: $request)
  }
`;

/**
 * __useVerifyTokensQuery__
 *
 * To run a query within a React component, call `useVerifyTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useVerifyTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVerifyTokensQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useVerifyTokensQuery(
  baseOptions: Apollo.QueryHookOptions<
    VerifyTokensQuery,
    VerifyTokensQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<VerifyTokensQuery, VerifyTokensQueryVariables>(
    VerifyTokensDocument,
    options
  );
}
export function useVerifyTokensLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    VerifyTokensQuery,
    VerifyTokensQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<VerifyTokensQuery, VerifyTokensQueryVariables>(
    VerifyTokensDocument,
    options
  );
}
export type VerifyTokensQueryHookResult = ReturnType<
  typeof useVerifyTokensQuery
>;
export type VerifyTokensLazyQueryHookResult = ReturnType<
  typeof useVerifyTokensLazyQuery
>;
export type VerifyTokensQueryResult = Apollo.QueryResult<
  VerifyTokensQuery,
  VerifyTokensQueryVariables
>;

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {
    BroadcastDataAvailabilityUnion: [
      "CreateDataAvailabilityPublicationResult",
      "RelayError",
    ],
    CollectModule: [
      "AaveFeeCollectModuleSettings",
      "ERC4626FeeCollectModuleSettings",
      "FeeCollectModuleSettings",
      "FreeCollectModuleSettings",
      "LimitedFeeCollectModuleSettings",
      "LimitedTimedFeeCollectModuleSettings",
      "MultirecipientFeeCollectModuleSettings",
      "RevertCollectModuleSettings",
      "SimpleCollectModuleSettings",
      "TimedFeeCollectModuleSettings",
      "UnknownCollectModuleSettings",
    ],
    DataAvailabilityTransactionUnion: [
      "DataAvailabilityComment",
      "DataAvailabilityMirror",
      "DataAvailabilityPost",
    ],
    DataAvailabilityVerificationStatusUnion: [
      "DataAvailabilityVerificationStatusFailure",
      "DataAvailabilityVerificationStatusSuccess",
    ],
    FeedItemRoot: ["Comment", "Post"],
    FollowModule: [
      "FeeFollowModuleSettings",
      "ProfileFollowModuleSettings",
      "RevertFollowModuleSettings",
      "UnknownFollowModuleSettings",
    ],
    MainPostReference: ["Mirror", "Post"],
    MentionPublication: ["Comment", "Post"],
    MirrorablePublication: ["Comment", "Post"],
    Notification: [
      "NewCollectNotification",
      "NewCommentNotification",
      "NewFollowerNotification",
      "NewMentionNotification",
      "NewMirrorNotification",
      "NewReactionNotification",
    ],
    ProfileMedia: ["MediaSet", "NftImage"],
    ProxyActionStatusResultUnion: [
      "ProxyActionError",
      "ProxyActionQueued",
      "ProxyActionStatusResult",
    ],
    Publication: ["Comment", "Mirror", "Post"],
    PublicationForSale: ["Comment", "Post"],
    PublicationSearchResultItem: ["Comment", "Post"],
    ReferenceModule: [
      "DegreesOfSeparationReferenceModuleSettings",
      "FollowOnlyReferenceModuleSettings",
      "UnknownReferenceModuleSettings",
    ],
    RelayDataAvailabilityResult: [
      "CreateDataAvailabilityPublicationResult",
      "RelayError",
    ],
    RelayResult: ["RelayError", "RelayerResult"],
    SearchResult: ["ProfileSearchResult", "PublicationSearchResult"],
    TransactionResult: ["TransactionError", "TransactionIndexedResult"],
  },
};
export default result;
