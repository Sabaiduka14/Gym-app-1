import { Box } from "lucide-react";
import { Button } from "./ui/button";
import WorkoutPro from "@/assets/workout-program.jpg";
import { motion as m } from "framer-motion";

export default function Unleash() {
  return (
    <main className="w-full h-[600px] mt-52 md:mt-6 lg:mt-6 px-4">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="w-full h-full">
          <p className="my-2 font-semibold">Transform</p>
          <h1 className="text-3xl lg:leading-[50px] lg:text-[46px] font-bold">
            Unleash Your Potential at Our State-of-the-Art Gym
          </h1>
          <p className="my-4 font-semibold text-lg">
            Experience the ultimate workout with our top-of-the-line equipment,
            expert trainers, and a supportive community that will keep you
            motivated and on track to achieve your fitness goals.
          </p>
          <ul className="flex flex-col gap-3 my-10">
            <m.li
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: "0.7", ease: "easeInOut" }}
              className="flex gap-3 font-semibold"
            >
              <Box /> State-of-the-art equipment for an effective workout
            </m.li>
            <m.li
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: "0.7", ease: "easeInOut", delay: "0.7" }}
              className="flex gap-3 font-semibold"
            >
              <Box /> Professional trainers to guide and motivate you
            </m.li>
            <m.li
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: "0.7", ease: "easeInOut", delay: "1.4" }}
              className="flex gap-3 font-semibold"
            >
              <Box /> Join the community of like-minded individuals
            </m.li>
          </ul>
          <Button variant="outline">Learn More</Button>
        </div>
        <div className="ml-6">
          <img
            src={WorkoutPro}
            className="rounded-lg w-[500px] md:w-full md:h-[500px] object-cover -ml-5"
          />
        </div>
      </div>
    </main>
  );
}
