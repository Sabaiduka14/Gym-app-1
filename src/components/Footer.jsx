import { useEffect, useState } from "react";
import logo from "@/assets/gym-logo.png";
import { Button } from "./ui/button";
import {
  Copyright,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <main className="w-full mt-[500px] lg:mt-12">
      <div className="w-full lg:flex flex-col lg:flex-row gap-24 border-b lg:items-center justify-center">
        <div
          className={`flex flex-col ${isMobile ? "w-full" : "w-[40%]"} mb-24 ${
            isMobile ? "" : "-ml-16"
          }`}
        >
          <img src={logo} className="w-24 h-24" />
          <p className="text-lg font-semibold my-4">
            Stay Up To Date With The Latest Features By Joining Our Newsletter
          </p>
          <form className="flex gap-4">
            <input
              type="email"
              placeholder="Your Email Here"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button>Subscribe</Button>
          </form>
          <p className="font-semibold my-4">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from our company.
          </p>
        </div>
        <div
          className={`mb-24 grid grid-cols-1 gap-12 ${
            isMobile ? "grid-cols-1" : "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          <div className="flex flex-col w-full h-full">
            <h1 className="text-xl font-bold">Column 1</h1>
            <a className="font-semibold mt-4" href="">
              Link 1
            </a>
            <a className="font-semibold mt-4" href="">
              Link 2
            </a>
            <a className="font-semibold mt-4" href="">
              Link 3
            </a>
            <a className="font-semibold mt-4" href="">
              Link 4
            </a>
            <a className="font-semibold mt-4" href="">
              Link 5
            </a>
          </div>
          <div className="flex flex-col w-full h-full">
            <h1 className="text-xl font-bold">Column 2</h1>
            <a className="font-semibold mt-4" href="">
              Link 6
            </a>
            <a className="font-semibold mt-4" href="">
              Link 7
            </a>
            <a className="font-semibold mt-4" href="">
              Link 8
            </a>
            <a className="font-semibold mt-4" href="">
              Link 9
            </a>
            <a className="font-semibold mt-4" href="">
              Link 10
            </a>
          </div>
          <div>
            <div className="flex flex-col w-full h-full">
              <h1 className="text-xl font-bold">Follow Us</h1>
              <a className="flex gap-4 font-semibold mt-4" href="https://www.instagram.com/saba.idukashvili/">
                <Facebook />
                Facebook
              </a>
              <a className="flex gap-4 font-semibold mt-4" href="https://www.instagram.com/saba.idukashvili/">
                <Instagram />
                Instagram
              </a>
              <a className="flex gap-4 font-semibold mt-4" href="https://www.instagram.com/saba.idukashvili/">
                <Youtube />
                Youtube
              </a>
              <a className="flex gap-4 font-semibold mt-4" href="https://www.instagram.com/saba.idukashvili/">
                <Twitter />
                Twitter
              </a>
              <a className="flex gap-4 font-semibold mt-4" href="https://www.instagram.com/saba.idukashvili/">
                <Linkedin />
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4 mt-12 mx-4 flex flex-col lg:flex-row justify-between items-center">
        <p className="font-semibold gap-1 flex">
          <Copyright />
          2024 Saba.idukashvili. All Rights Reserved
        </p>
        <div className="flex items-center gap-4 underline mt-4 lg:mt-0">
          <a className="font-semibold" href="https://www.instagram.com/saba.idukashvili/">
            Privacy Policy
          </a>
          <a className="font-semibold" href="https://www.instagram.com/saba.idukashvili/">
            Terms Of Service
          </a>
          <a className="font-semibold" href="https://www.instagram.com/saba.idukashvili/">
            Cookie Settings
          </a>
        </div>
      </div>
    </main>
  );
}
