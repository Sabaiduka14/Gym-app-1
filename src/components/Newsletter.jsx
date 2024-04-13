import newsletter from "@/assets/newsletter.webp";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Newsletter() {
  return (
    <main className="w-full h-[400px] mb-6 relative">
      <img
        src={newsletter}
        className="w-[1300px] h-[400px] object-cover rounded-lg absolute"
        alt="Newsletter"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 rounded-lg"></div>
      <div className="px-10 py-4 w-full h-full flex justify-center flex-col relative z-10">
        <h1 className="text-4xl font-bold my-4 text-white">
          Get Fit With Our Newsletter
        </h1>
        <p className="font-semibold text-lg text-white mb-4">
          Stay up to date with working tips, gym updates, and special offers.
        </p>
        <form className="flex gap-4 max-w-[600px]">
          <Input  placeholder="Your Email Here" type="email" />
          <Button>Subscribe Now</Button>
        </form>
        <p className="text-[15px] font-semibold mt-4 text-white">
          By subscribing you agree on our Terms and Conditions
        </p>
      </div>
    </main>
  );
}
