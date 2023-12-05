import LotteryNumber from "@/components/lotter-number";
import { ForwardIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export default function Draw({ count }: { count: number }) {
  const [currentDraw, setCurrentDraw] = useState<number[]>([]);
  const [pastDraw, setPastDraw] = useState<number[]>([]);
  const [drawing, setDrawing] = useState(false);

  useEffect(() => {
    drawNextFive();
  }, []);

  function drawNextFive() {
    setDrawing(true);
    if (pastDraw.length >= count) return;

    const draw: number[] = [];
    while (draw.length < 5) {
      const random = generateRandomNumber(1, count);
      if (
        !pastDraw.includes(random) &&
        !currentDraw.includes(random) &&
        !draw.includes(random)
      ) {
        draw.push(random);
      }
    }

    setCurrentDraw(draw);
    setTimeout(() => {
      setPastDraw([...pastDraw, ...draw]);
      setDrawing(false);
    }, 2500);
  }

  function generateRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <main className={`min-h-screen px-10`}>
      <div className="py-24">
        {currentDraw.length > 0 && (
          <>
            <div className="text-center mb-10 ">
              <p className="text-4xl"> Current Draw: </p>
            </div>
            <div className="flex flex-column justify-evenly mb-10 w-100">
              {currentDraw.map((draw) => (
                <p key={`current-${draw}`} className="text-6xl">
                  <LotteryNumber digit={draw} />
                </p>
              ))}
            </div>
          </>
        )}

        <div className="text-center">
          <button
            onClick={() => {
              drawNextFive();
            }}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
            disabled={drawing}
          >
            <ForwardIcon className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
      {pastDraw.length > 0 && (
        <div className="pt-10">
          <div>
            <p className="text-2xl">All Draws (count {pastDraw.length}):</p>
          </div>
          <div className="flex flex-wrap justify-start w-100">
            {pastDraw.map((draw) => (
              <div key={`past-${draw}`} className={`text-4xl mx-3`}>
                {draw}
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
