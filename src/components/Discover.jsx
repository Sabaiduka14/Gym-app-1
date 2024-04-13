import Gym from "@/assets/gym.png";
import { motion as m } from "framer-motion";
export default function Discover() {
  return (
    <main className="w-full h-[500px] mt-6 md:mt-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="w-full h-full">
          <m.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: "0.8", ease: "easeInOut" }}
            className="font-semibold my-2"
          >
            Get Fit
          </m.p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <m.p
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: "0.9", ease: "easeInOut", delay: "0.8" }}
            >
              Discover Our Exciting
            </m.p>
            <m.p
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: "0.9", ease: "easeInOut", delay: "0.8" }}
            >
              Workout Programs
            </m.p>
          </h1>
          <m.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: "0.6", delay: "1.5" }}
            className="text-lg mb-8 font-semibold"
          >
            Experience a wide range of workout programs designed to help you
            achieve your fitness goals. From high-intensity interval training to
            strength and conditioning classes, we have something for everyone.
          </m.p>
          <m.button
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: "0.6", delay: "2.4" }}
            className="text-slate-950 border font-semibold hover:bg-slate-950 duration-300 hover:text-white text-lg w-[200px] py-2 px-4 rounded-md"
          >
            Learn More
          </m.button>
        </div>
        <div className="md:ml-6 mt-6">
          <m.img initial={{opacity: 0, x: 100}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.7, ease: "easeInOut", delay: "3.4"}} viewport={{once: true}} src={Gym} className="rounded-lg" />
        </div>
      </div>
    </main>
  );
}
