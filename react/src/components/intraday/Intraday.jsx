import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
const Intraday = () => {
  const navigate = useNavigate();
  const card = [
    {
      id: 1,
      img: "../../../public/assets/ab.png",
      title: "Ab Candle Strategy",
      action: "CALCULATE",
      text: "Body smaller than wick",
      riskReard: "1:1 Risk:Reward",
      button: "View Details",
      path: "/abInfo",
      buyPath: "/ab-buy",
      SellPath: "/ab-sell",
    },
    {
      id: 2,
      img: "https://avatar.vercel.sh/shadcn1",
      title: "Three (3) Candle Strategy ",
      text1:
        "Leverage derivatives to hedge risk or amplify trading opportunities. ",
      button: "View",
      path: "/swing-tradettdhghg",
      buyPath: "/3candle-buy",
      SellPath: "/3candle-sell",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {card.map((value) => (
          <Card className=" relative mx-auto w-full max-w-sm m-10 pt-0">
            <div className=" flex justify-center align-middle absolute inset-0 z-30 aspect-video bg-black/35" />
            <img
              src={value.img}
              alt="Event cover"
              className="relative z-20 aspect-video w-full object-cover "
            />
            <CardHeader>
              <CardTitle className="text-center">{value.title}</CardTitle>
              <CardDescription className=" text-center font-bold">
                {value.text}
              </CardDescription>
              <CardDescription className="text-center font-bold">{value.riskReard}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full" onClick={() => navigate(value.path)}>
                {value.button}
              </Button>
            </CardFooter>
            <div className="flex justify-center items-center flex-col pb-4">
              <Button
                onClick={() => navigate(value.buyPath)}
                className="w-1/2 m-4 bg-green-700"
              >
                Calculate
              </Button>
              
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Intraday;
