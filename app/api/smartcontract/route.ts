import { getCurrentSaleStage } from "@/utils/smartContracts/pLBM/getCurrentSaleStage";
import { getRemainingTokens } from "@/utils/smartContracts/pLBM/getRemainingTokens";
import { isPaused } from "@/utils/smartContracts/pLBM/paused";
import { getPrice } from "@/utils/smartContracts/pLBM/price";
import { arePurchaseRequirementsSatisfied } from "@/utils/smartContracts/pLBM/areConditionsMetForPurchase";
import { NextRequest } from "next/server";
import { getEnvironmentVariables } from "@/utils/smartContracts/pLBM/getEnvironmentVariables";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const queryFunction: string = searchParams.get("function")!;
  const queryStage: string = searchParams.get("stage")!;
  const queryUsdAmount: string = searchParams.get("amount")!;

  switch (queryFunction) {
    case "getRemainingTokens":
      const remainingTokensData = await getRemainingTokens(queryStage);
      return new Response(remainingTokensData);

    case "getCurrentSaleStage":
      const currentSaleStageData = await getCurrentSaleStage();
      return new Response(currentSaleStageData);

    case "getPrice":
      const priceData = await getPrice(queryStage);
      return new Response(priceData);

    case "isPaused":
      const isPausedData: any = await isPaused();
      return new Response(isPausedData);

    case "arePurchaseRequirementsSatisfied":
      const usdAmount: number = Number(queryUsdAmount);
      const purchaseRequirementsResult: any =
        await arePurchaseRequirementsSatisfied(usdAmount);
      return Response.json(purchaseRequirementsResult);

    case "getEnvironmentVariables":
      return Response.json(getEnvironmentVariables());

    default:
      return new Response("Invalid query parameter", { status: 400 });
  }
}

export async function POST(request: NextRequest) {
  const res = await request.json();
  console.log(res);
  return Response.json({ res });
}
