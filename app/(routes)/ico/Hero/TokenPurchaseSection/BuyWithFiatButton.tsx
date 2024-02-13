"use client";
import { type ReactElement, useContext } from "react";
import { TransakConfig, Transak } from "@transak/transak-sdk";
import Pusher from "pusher-js";
import { Interface } from "ethers";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { fetchEnvironmentVariables } from "@/utils/fetchEnvironmentVariables";
import MessageBoxContext from "@/context/MessageBoxContext";

let pusher = new Pusher("1d9ffac87de599c61283", { cluster: "ap2" });

interface BuyButtonProps {
  lbmAmount: number;
  usdAmount: number;
}

export function BuyWithFiatButton({
  lbmAmount,
  usdAmount,
}: BuyButtonProps): ReactElement {
  const { setShowConnectToPolygonMessage } = useContext(MessageBoxContext);
  const { address, isConnected } = useWeb3ModalAccount();
  let SMART_CONTRACT_ADDRESS: string =
    "0xcF6432C863D29E581e00d276C6558cE56Bb68077";
  let SOURCE_TOKEN: string = "0x62Eb600B012DBFF2fF81e963e2F0707c050DA677";
  let USER_WALLET_ADDRESS: any = address;
  let TRANSAK_API_KEY: string;

  const getEnvironmentVariables = async () => {
    const { pLBM_address, USDC_address, transakApiKey } =
      await fetchEnvironmentVariables();
    //    SMART_CONTRACT_ADDRESS = pLBM_address;
    //  SOURCE_TOKEN = USDC_address;
    TRANSAK_API_KEY = transakApiKey;
  };

  const getSupplyCalldata = (lbmAmount: number | null) => {
    if (!lbmAmount) return;

    let ABI = [
      {
        inputs: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "buy",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ];

    let parsedAmmount = BigInt(lbmAmount * 10 ** 18);

    return new Interface(ABI).encodeFunctionData("buy", [parsedAmmount]);
  };

  const handleButtonClick = async () => {
    if (!isConnected) {
      setShowConnectToPolygonMessage(true);
      return;
    }

    await getEnvironmentVariables();
    if (usdAmount >= 50) {
      const calldata = getSupplyCalldata(lbmAmount);

      if (!calldata) return;

      const settings: TransakConfig = {
        apiKey: TRANSAK_API_KEY,
        environment: Transak.ENVIRONMENTS.STAGING,
        themeColor: "00b3b5",
        defaultPaymentMethod: "credit_debit_card",
        walletAddress: USER_WALLET_ADDRESS,
        exchangeScreenTitle: "BUY LBM",
        disableWalletAddressForm: true,
        smartContractAddress: SMART_CONTRACT_ADDRESS,
        estimatedGasLimit: 70_000,
        calldata,
        sourceTokenData: [
          {
            sourceTokenCode: "USDC",
            sourceTokenAmount: usdAmount,
          },
        ],
        cryptoCurrencyData: [
          {
            cryptoCurrencyCode: "LBM",
            cryptoCurrencyName: "LBM",
            cryptoCurrencyImageURL:
              "https://www.libertum.io/_next/static/media/libertum_input.cb17a477.svg",
          },
        ],
        network: "polygon",
        isTransakOne: true,
      };

      const transak = new Transak(settings);

      transak.init();
      const subscribeToWebsockets = (orderId: string) => {
        let channel = pusher.subscribe(orderId);

        pusher.bind_global((eventId: any, orderData: any) => {
          console.log(
            `websocket Event: ${eventId} with order data:`,
            orderData,
          );
        });

        channel.bind("ORDER_COMPLETED", (orderData: any) => {
          console.log("ORDER COMPLETED websocket event", orderData);
        });

        channel.bind("ORDER_FAILED", async (orderData: any) => {
          console.log("ORDER FAILED websocket event", orderData);
        });
      };

      Transak.on(Transak.EVENTS.TRANSAK_ORDER_CREATED, (orderData: any) => {
        console.log("callback transak order created", orderData);
        const eventData = orderData;

        const orderId = eventData.status?.id;

        if (!orderId) {
          return;
        }

        subscribeToWebsockets(orderId);
      });
    }
  };

  return (
    <>
      <button onClick={handleButtonClick} disabled>Buy With Credit Card</button>
    </>
  );
}
