import { NextRequest, NextResponse } from "next/server";

import Bundlr from "@bundlr-network/client";
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    console.log(data);

    const bundlr = new Bundlr(
      "http://node2.bundlr.network",
      "matic",
      process.env.PRIVATE_KEY
    );
    await bundlr.ready();
    const tx = await bundlr.upload(JSON.stringify(data), {
      tags: [
        { name: "Content-Type", value: "application/json" },
        { name: "App-Name", value: "SafeShare" },
      ],
    });
    return NextResponse.json({ uri: `ar://${tx.id}` });
  } catch (error) {
    console.log(error);
    console.log("errpr");
  }
}
