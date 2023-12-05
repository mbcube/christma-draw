import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import Draw from "../components/draw";
import LotteryNumber from "@/components/lotter-number";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [drawing, setDrawing] = useState(false);
  const [participantCount, setParticipantCount] = useState(105);

  return (
    <>
      {!drawing && (
        <main
          className={`flex min-h-screen flex-col items-center justify-evenly p-24 `}
        >
          <p className="text-6xl">Vapor Rail, a Wabtec Company </p>

          <p className="text-4xl"> Welcome to the 2023 Christmas Draw! </p>

          <div className="flex items-center">
            <input
              className="shadow w-20 appearance-none px-2 py-1 border rounded  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="105"
              value={participantCount}
              onChange={(e) => {
                setParticipantCount(+e.target.value);
              }}
            />
          </div>

          <button
            onClick={() => {
              setDrawing(true);
            }}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Start Draw
          </button>
        </main>
      )}

      {drawing && <Draw count={participantCount} />}
    </>
  );
}
