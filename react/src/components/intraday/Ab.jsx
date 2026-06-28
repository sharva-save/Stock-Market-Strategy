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
const Ab = () => {
  const navigate = useNavigate();
  const card = [
    {
      id: 1,
      img: "https://avatar.vercel.sh/shadcn1",
      title: "Swing Tread",
      text: "Hold positions for a few days to several weeks to benefit from market swings.",
      text1:
        "Use technical analysis and trend identification to ride medium-term price movements with controlled risk.",
      button: "View",
      path: "/swing-trade",
    },

    {
      id: 2,
      img: "https://avatar.vercel.sh/shadcn1",
      title: "Intraday",
      text: "Trade within the same day and close all positions before market close.",
      text1:
        "Focus on short-term price movements, momentum, and quick execution to capture opportunities in the market.",
      button: "View",
      path: "/intraday",
    },
    {
      id: 3,
      img: "https://avatar.vercel.sh/shadcn1",
      title: "Future & Options",
      text1:
        "Leverage derivatives to hedge risk or amplify trading opportunities. ",
      text: "Explore futures and options strategies for directional trades, income generation, and portfolio protection.",
      button: "View",
      path: "/swing-trade",
    },
    {
      id: 4,
      img: "https://avatar.vercel.sh/shadcn1",
      title: "Long Term",
      text1:
        "Focus on business growth, compounding returns, and long-term value creation rather than short-term market fluctuations.",
      text: "Build wealth by investing in fundamentally strong assets for years.",
      button: "View ",
      path: "/swing-trade",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {card.map((id,value) => (
          <Card key={id} className=" relative mx-auto w-full max-w-sm m-10 pt-0">
            <div className=" flex justify-center align-middle absolute inset-0 z-30 aspect-video bg-black/35" />
            <img
              src={value.img}
              alt="Event cover"
              className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
            <CardHeader>
              <CardAction></CardAction>
              <CardTitle className="text-center">{value.title}</CardTitle>
              <CardDescription className="font-bold">
                {value.text}
              </CardDescription>
              <CardDescription>{value.text1}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full" onClick={() => navigate(value.path)}>
                {value.button}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Ab;
