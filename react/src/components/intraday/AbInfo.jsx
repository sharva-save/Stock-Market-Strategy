import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import strategyData from "./data";
import { useNavigate } from "react-router-dom";
const AbInfo = () => {
  console.log(strategyData);
  const [selectedData, setSelectedData] = useState(null);
  const navigate = useNavigate();
  function handleClick(data) {
    setSelectedData(data);
  }
  return (
    <div>
      <div className="m-3 flex justify-between">
        <Button onClick={() => navigate("/intraday")} className="p-5 font-bold text-xl">
          Back
        </Button>
        <h2 className="inline-block text-center text-[30px]">
          Ab Candle Strategy Body smaller than wick 1:1 Risk:Reward
        </h2>
      </div>
      <div className="text-black  flex  justify-around gap-5 align-middle  w-full min-h-screen">
        <div className="w-1/2  ">
          {strategyData.map((data) => (
            <div
              className="bg-[#012764] flex flex-col justify-center align-middle hover:bg-[#024ec8]
                            border-blue-700 border-2 
                          w-full h-10  mt-5  rounded-2xl text-white"
              onMouseEnter={() => handleClick(data)}
            >
              <p className="text-center font-bold">{data.title}</p>
            </div>
          ))}
        </div>
        <div className=" w-1/2">
          <div className="bg-[#012764]  border-blue-700 border-2 w-full h-100 p-5 mt-5 rounded-2xl text-white">
            {selectedData ? (
              <>
                <h2 className="text-4xl font-bold mb-4">
                  {selectedData.title}
                </h2>
                <p className="text-2xl  mb-4">{selectedData.description}</p>
              </>
            ) : (
              <>
                <p className="text-2xl font-bold mb-4">
                  select any data for View
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbInfo;
