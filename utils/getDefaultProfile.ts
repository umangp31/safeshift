import { Profile, Scalars } from "../lens";
import getProfile from "../lens/query/getProfile";
import lensClient from "../lib/client";

const getDefaultProfile = async (
    ethAddress: Scalars["EthereumAddress"]
  ): Promise<Profile | undefined> => {
    try {
      const result = await lensClient.query({
        query: getProfile,
        variables: {
          ethAddress: ethAddress,
        },
      });
        console.log(result.data);
      return result?.data?.defaultProfile;
    } catch (error) {}
  };
  
  export default getDefaultProfile;