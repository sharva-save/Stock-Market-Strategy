import React from "react";

const AbInfo = () => {
  const data = [
    {
      ID: 1,
      IMG: "",
      text1: "IT MUST BE LAST 15 MIN CANDLE OF THE DAY ",
    },
    {
      ID: 2,
      IMG: "",
      text1: "COLOR MUST BE ANY  ",
    },
    {
      ID: 3,
      IMG: "",
      text1: "BIGGER WITCH AND SMALLER BODY",
    },
    {
      ID: 4,
      IMG: "",
      text1: "IT MUST BE LAST CANDLE OF THE DAY ",
    },
  ];
  return (
    <div>
      <div className="m-3">
        <h2 className="text-center text-[30px]">
          Ab Candle Strategy Body smaller than wick 1:1 Risk:Reward
        </h2>
      </div>
      <div className="text-black bg-yellow-100 flex  justify-around gap-5 align-middle  w-full min-h-screen">
        <div className="bg-yellow-300 w-1/2">
            
        </div>
        <div className="bg-red-400 w-1/2">

        </div>
      </div>
    </div>
  );
};

export default AbInfo;
