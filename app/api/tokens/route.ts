import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const chainId = url.searchParams.get('chainId');

    const response = await fetch(`https://api.zcx.com/trade/v1/info/token/popular?from=0&to=100&chain_id=${chainId}`, {
      headers: {
        'X-Api-Key': process.env.NEXT_PUBLIC_UNIZEN_API_KEY as string,
      },
    });
    const data = await response.json();

    return NextResponse.json(data);
  } catch (err) {
    throw err;
  }
}
