import { isPaused } from "./paused";
import { getCurrentSaleStage } from "./getCurrentSaleStage";

export async function arePurchaseRequirementsSatisfied(
  usdAmount: number,
): Promise<{ reason: string; arePurchaseRequirementsSatisfied: boolean }> {
  try {
    const isCorrectAmount: boolean = usdAmount >= 50 && usdAmount < 10000;
    if (!isCorrectAmount) {
      return {
        reason:
          "To participate, the USDC Amount must be at least $50. Please enter a valid amount.",
        arePurchaseRequirementsSatisfied: false,
      };
    }

    const isSalePaused = await isPaused();
    if (isSalePaused) {
      return {
        reason:
          "The sale is currently paused. Please check back later for updates.",
        arePurchaseRequirementsSatisfied: false,
      };
    }

    const currentSaleStage: string = await getCurrentSaleStage();
    const isValidSaleStage: boolean =
      currentSaleStage === "publicOne" ||
      currentSaleStage === "publicTwo"

    if (!isValidSaleStage) {
      return {
        reason: "Invalid stage to purchase tokens.",
        arePurchaseRequirementsSatisfied: false,
      };
    }
    return {
      reason: "Invest in LBM now",
      arePurchaseRequirementsSatisfied: true,
    };
  } catch (error) {
    console.error("Error checking purchase requirements:", error);
    return {
      reason: "Purchase requirements not satisfied",
      arePurchaseRequirementsSatisfied: false,
    };
  }
}
