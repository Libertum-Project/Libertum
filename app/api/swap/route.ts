import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const reqBody = await req.json();

    const chainId = url.searchParams.get('chainId');
    const crossChain = url.searchParams.get('crossChain');

    const response = await fetch(
      `https://api.zcx.com/trade/v1/${chainId}/swap/${
        crossChain ? 'cross' : 'single'
      }`,
      {
        method: 'POST',
        headers: {
          'X-Api-Key': process.env.NEXT_PUBLIC_UNIZEN_API_KEY as string,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reqBody),
      }
    );
    const data = await response.json();

    return NextResponse.json(data);
  } catch (err) {
    throw err;
  }
}
