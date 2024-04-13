import logo from "@/assets/gym-logo.png";
import { Button } from "./ui/button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
  gsap.registerPlugin(useGSAP)

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.fromTo('.logo', {x: -250, opacity: 0}, {x: 0, opacity: 1, ease: "power2.inOut", duration: "1"})
    tl.fromTo('.nav-links', {x: -250,}, {x: 0, opacity: 1, ease: "power2.inOut", duration: "1"})
    tl.fromTo('.nav-btn', {y: -250,}, {y: 0, opacity: 1, ease: "power2.inOut", duration: "1.5"})
  })
  return (
    <header className="w-full h-3 px-5">
      <div className="flex justify-between border-b items-center">
        <div>
          <img src={logo} className="logo md:w-20 w-20 h-20 md:h-20" alt="GYM" />
        </div>
        <nav className="hidden md:flex gap-6">
          <p className="nav-links opacity-0 font-semibold text-lg cursor-pointer">Programs</p>
          <p className="nav-links opacity-0 font-semibold text-lg cursor-pointer">Membership</p>
          <p className="nav-links opacity-0 font-semibold text-lg cursor-pointer">Classes</p>
          <p className="nav-links opacity-0 font-semibold text-lg cursor-pointer">Services</p>
        </nav>
        <Button className="w-[100px] opacity-0 nav-btn">Join</Button>
      </div>
    </header>
  );
}
