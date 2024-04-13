import features from "@/assets/features.jpg";
import { useState } from "react";

export default function Features() {
  const [showLine, setShowLine] = useState(1);

  return (
    <main className="w-full h-[600px] mt-80 md:mt-8 px-5">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="w-full h-full">
          <img
            src={features}
            className="rounded-lg md:w-full w-[450px] h-[300px] md:h-[550px] object-cover"
            alt="Features"
          />
        </div>
        <div className="md:ml-6">
          <div
            className="flex gap-3 items-start"
            onMouseEnter={() => setShowLine(1)}
            onMouseLeave={() => setShowLine(0)}
          >
            <div
              className={`bg-slate-950 w-3 h-24 mt-3 lg:h-36 transition-opacity ${
                showLine === 1 ? "opacity-100" : "opacity-0"
              }`}
            ></div>
            <div>
              <h1 className="text-[40px] font-bold">Discover Our Features</h1>
              <p className="my-1 mb-10 font-semibold text-md">
                Enjoy 24/7 access to our state-of-the-art facilities and
                equipment. Our personalized training plans and expert nutrition
                advice will help you achieve your fitness goals.
              </p>
            </div>
          </div>
          <div
            className="flex gap-3 items-start"
            onMouseEnter={() => setShowLine(2)}
            onMouseLeave={() => setShowLine(0)}
          >
            <div
              className={`bg-slate-950 w-3 h-36 transition-opacity ${
                showLine === 2 ? "opacity-100" : "opacity-0"
              }`}
            ></div>
            <div>
              <h1 className="text-[40px] font-bold">
                Personalized Training Plans
              </h1>
              <p className="my-1 mb-10 font-semibold text-md">
                Our certified trainers will create customized workout plans
                tailored to your specific needs and goals. Get the guidance and
                support you need to maximize your results.
              </p>
            </div>
          </div>
          <div
            className="flex gap-3 items-start relative"
            onMouseEnter={() => setShowLine(3)}
            onMouseLeave={() => setShowLine(0)}
          >
            <div
              className={`bg-slate-950 w-3 h-36 transition-opacity ${
                showLine === 3 ? "opacity-100" : "opacity-0"
              }`}
            ></div>
            <div className="flex flex-col">
              <h1 className="text-[40px] font-bold">Expert Nutrition Advice</h1>
              <p className="my-1 font-semibold text-md">
                Our nutritionists will provide you with personalized meal plans
                and dietary recommendations to fuel your workouts and optimize
                your health and fitness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
