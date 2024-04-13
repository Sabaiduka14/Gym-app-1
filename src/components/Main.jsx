import getFit from "@/assets/get-fit.jpg";
import { Button } from "./ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Main() {
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".img",
      { y: 100, borderRadius: "0px" },
      {
        y: 0,
        opacity: 1,
        borderRadius: "10px",
        duration: "0.8",
        ease: "power1.inOut",
      }
    );
    tl.fromTo(".h1", { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1 });
    tl.fromTo(
      ".p1",
      { x: -150, opacity: 0 },
      { x: 0, opacity: 1, duration: "1" }
    );
    tl.fromTo(
      ".p2",
      { x: 150, opacity: 0 },
      { x: 0, opacity: 1, duration: "1" }
    );
    tl.fromTo(
      ".p3",
      { x: -150, opacity: 0 },
      { x: 0, opacity: 1, duration: "1" }
    );
    tl.fromTo(".btn", {scale: 1.5, opacity: 0}, {scale: 1, opacity: 1, duration: "1", ease: "power2.inOut"})
  });

  return (
    <main className="w-full h-screen mt-20 px-6">
      <img
        src={getFit}
        className="img opacity-0 md:w-full w-[500px] h-[300px] md:h-[60%] object-cover"
      />
      <div className="w-full h-[40%] grid grid-cols-1 md:grid-cols-2">
        <div className="w-full h-full flex items-center">
          <h1 className="lg:text-[54px] lg:leading-[65px] text-3xl mt-6 font-bold h1">
            Get Fit and Stay Active at Our Gym
          </h1>
        </div>
        <div className="flex flex-col justify-center">
          <div>
            <h1 className="md:text-2xl text-lg my-2 font-semibold">
              <p className="p1">Experience a Welcoming Atmosphere and</p>
              <p className="p2">
                Achieve Your Fitness Goals With Our State-of-
              </p>
              <p className="p3">the-art Equipment and Expert Trainers</p>
            </h1>
          </div>
          <div className="flex gap-3 mt-4">
            <Button className="btn md:w-[30%]">Join</Button>
            <Button className="btn md:w-[70%]" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
