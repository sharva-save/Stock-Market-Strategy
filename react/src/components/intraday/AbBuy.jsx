import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
const AbBuy = () => {
const navigate = useNavigate();
  const [data, setData] = useState({
    high: 0,
    low: 0,
    close: 0,
    time: "",
    diff: 0,
    calculate: 0,
    verdict: false,
    gapUp: 0,
    gapDown: 0,
    target: 0,
  });
  const [upside, setUpside] = useState(true);

  function handleBuy() {
    setUpside(true);
    const clodedPrice = data.close;
    console.log(data);
    if (data.high > clodedPrice && clodedPrice > data.low) {
      const diff = Number(data.high - data.low);
      const cal = Number(clodedPrice * 0.005);
      if (diff >= cal) {
        setData({
          ...data,
          calculate: cal,
          diff: diff,
          verdict: true,
          gapUp:( Number(data.high + data.high * 0.005).toFixed(3)),
          target: (Number(data.high + diff).toFixed(3)),
        });
      } else {
        setData({ ...data, verdict: false });
      }
    } else {
      alert("input the value of close nitly");
    }
  }

  function handleSell() {
    setUpside(false);
    const { high, low, close } = data;
    console.log(data);
    if (high > close && close > low) {
      const diff = Number(high - low);
      const cal = Number(close * 0.005);
      if (diff >= cal) {
        setData({
          ...data,
          calculate: cal,
          diff: diff,
          verdict: true,
          gapDown: (Number(low - low * 0.005).toFixed(3)),
          target: (Number(low - diff).toFixed(3)),
        });
      } else {
        setData({ ...data, verdict: false });
      }
    } else {
      alert("input the value of close nitly sellllll");
    }
  }

  return (
    <div className="w-full ">
        <div className=" flex justify-left gap-15">
          <Button onClick={() => navigate("/intraday")} className="p-5 font-bold text-xl">
                Back
              </Button>
          <div>
            <h2 className="text-center">AB candle strategy </h2>
      <h2 className="text-center">Body smaller than wick risk:reward 1:1</h2>
          </div>
      
        </div>
        
      <div className="flex mr-10">
        <div className="flex-1  rounded-2xl w-1/4 gap-6 mt-6 mr-6 bg-gray-800 h-125">
          <div className="p-5 ">
            <h2 className="font-extrabold  text-lg mb-3">Candle Input</h2>
            <form action="">
              <p>High</p>
              <input
                value={data.high}
                onChange={(e) =>
                  setData({ ...data, high: Number(e.target.value) })
                }
                type="number"
                className="w-full bg-gray-500 p-2 mt-1 mb-3.5 rounded-xl"
                placeholder="Enter High Value of Candle"
              />
              <p>Low</p>
              <input
                value={data.low}
                onChange={(e) =>
                  setData({ ...data, low: Number(e.target.value) })
                }
                type="number"
                className=" mb-3.5 w-full bg-gray-500 p-2 mt-1 rounded-xl"
                placeholder="Enter Low value"
              />
              <p>Close</p>
              <input
                value={data.close}
                onChange={(e) =>
                  setData({ ...data, close: Number(e.target.value) })
                }
                type="number"
                className=" mb-3.5 w-full bg-gray-500 p-2 mt-1 rounded-xl"
                placeholder="Enter Close value"
              />
              <p>Time</p>
              <input
                value={data.time}
                onChange={(e) => setData({ ...data, time: e.target.value })}
                type="time"
                className=" mb-3.5 w-full bg-gray-500 p-2 mt-1 rounded-xl"
                placeholder="Enter Time"
              />
            </form>
          </div>
          <div
            className="flex items-center text-center gap-4 flex-col
"
          >
            <Button
              onClick={handleBuy}
              className="w-1/2 hover:bg-green-600 bg-green-400"
            >
              BUY
            </Button>
            <Button
              onClick={handleSell}
              className="w-1/2 hover:bg-red-600 bg-red-400"
            >
              SELL
            </Button>
            <p>Valid setup requires (High - Low) {">"} Close × 0.5%</p>
          </div>
        </div>

        <div className="flex-1 flex-col  rounded-2xl w-3/4 gap-6 mt-6  bg-gray-800 h-[500px]">
          <div className="flex w-full gap-5 p-6">
            <div className="flex-1  bg-gray-600 rounded-xl h-[75px] ">
              <p className="text-center text-xl p-1 font-bold">High-Low</p>
              <p className="text-center text-xl p-1">{data.diff.toFixed(3)}</p>
            </div>
            <div className="flex-1  bg-gray-600 rounded-xl h-[75px] ">
              <p className="text-center text-md p-1 font-bold">Close X 0.5% </p>
              <p className="text-center text-xl p-1">{data.calculate}</p>
            </div>
            <div className="flex-1  bg-green-800 text- rounded-xl h-[75px] ">
              <p className="text-center text-md p-1 font-bold">VERDICT</p>
              <p className="text-center text-xl p-1">
                {data.verdict ? "✅ VALID" : "❌ INVALID"}
              </p>
            </div>
          </div>

          <div className="bg-gray-800 h-[350px] rounded-xl p-6">
            <p className="text-center font-bold text-lg mb-4">
              {upside ? "UPSIDE" : "DOWNSIDE"}
            </p>

            <table className="w-full text-center ">
              <thead className="border-b">
                <tr className="border-b">
                  <th className=" p-2">Time</th>
                  <th className=" p-2">
                    {" "}
                    {upside ? "Gap Up or Above" : " Gap Down or Below"}
                  </th>
                  <th className=" p-2"> Entry</th>
                  <th className=" p-2"> Stoploss</th>
                  <th className=" p-2"> Target</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td className=" p-2">{data.time}</td>
                  <td className=" p-2">{upside ? data.gapUp : data.gapDown}</td>
                  <td className=" p-2">{upside ? data.high : data.low}</td>
                  <td className=" p-2">{upside ? data.low : data.high}</td>
                  <td className=" p-2">{data.target}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbBuy;
