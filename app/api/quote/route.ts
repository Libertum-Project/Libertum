import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const sellToken = url.searchParams.get('srcToken');
    const buyToken = url.searchParams.get('destToken');
    const sellAmount = url.searchParams.get('sellAmount');
    const chainId = url.searchParams.get('chainId');
    const destChainId = url.searchParams.get('destChainId');
    const sender = url.searchParams.get('sender');

    console.log('chainId=', chainId);
    console.log('destChainId=', destChainId);

    console.log('sellToken=', sellToken);
    console.log('buyToken=', buyToken);

    console.log('sender=', sender);

    let quoteUrl;

    if (chainId === destChainId) {
      quoteUrl = `https://api.zcx.com/trade/v1/${chainId}/quote/single?fromTokenAddress=${sellToken}&toTokenAddress=${buyToken}&amount=${sellAmount}`;
    } else {
      quoteUrl = `https://api.zcx.com/trade/v1/${chainId}/quote/cross?fromTokenAddress=${sellToken}&toTokenAddress=${buyToken}&amount=${sellAmount}&destinationChainId=${destChainId}&sender=${sender}`;
    }

    const response = await fetch(quoteUrl, {
      headers: {
        'X-Api-Key': process.env.NEXT_PUBLIC_UNIZEN_API_KEY as string,
      },
    });
    const data = await response.json();

    console.log('data=', data);

    return NextResponse.json(data);
  } catch (err) {
    throw err;
  }
}
