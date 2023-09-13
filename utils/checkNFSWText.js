import { ApiPromise, WsProvider, Keyring } from "@polkadot/api";
import {
  options,
  OnChainRegistry,
  signCertificate,
  PinkContractPromise,
} from "@phala/sdk";
import abi from "../target/nsfw_detector.json";


const RPC_MAINNET_URL = "wss://api.phala.network/ws"

async function checkNFSWText(text) {
  try {
    console.log('this is the rpc mainnet', RPC_MAINNET_URL);
    const api = await ApiPromise.create(
      options({
        provider: new WsProvider(RPC_MAINNET_URL),
        noInitWarn: true,
      })
    );

    const phatRegistry = await OnChainRegistry.create(api, {
      pruntimeURL: "https://phat-cluster-de.phala.network/pruntime-01",
      workerId:
        "0xe028af412138fe0a31ab0b3671243bdbe19d1a164837b04e7d8d355091fcd844",
    });

    const keyring = new Keyring({ type: "sr25519" });

    const pair = keyring.addFromUri("//Sahil");

    const contractId =
      process.env.contractId;

      console.log(process.env.contractId, 'blkffi');

    const contractKey = await phatRegistry.getContractKeyOrFail(contractId);

    const contract = new PinkContractPromise(
      api,
      phatRegistry,
      abi,
      contractId,
      contractKey
    );

    const cert = await signCertificate({ api, pair });
    const { gasRequired, storageDeposit, result, output } =
      await contract.query.isExplicitText(pair.address, { cert }, text);

    return output.value;

  } catch (error) {
    console.log(error);
  }
}

export default checkNFSWText;
