import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { motion as m } from "framer-motion";
export default function Contact() {
  return (
    <main className="w-full h-[500px] mt-12">
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-[30%] flex flex-col items-center">
          <p className="font-semibold mt-4">Fitness</p>
          <h1 className="text-4xl font-bold my-4">Get In Touch</h1>
          <p>For Inquires and Support, Please Reach Out To Us</p>
        </div>
        <div className="mt-10 w-full h-[70%] gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <m.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full h-full flex flex-col items-center"
          >
            <Mail size={50} />
            <h1 className="text-2xl font-bold my-4">Email</h1>
            <p className="font-semibold text-lg mb-3">Send Us Email</p>
            <a className="underline font-semibold" href="">
              sabaidukashvili0@gmail.com
            </a>
          </m.div>
          <m.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: "0.6" }}
            className="w-full h-full flex flex-col items-center"
          >
            <MessageSquare size={50} />
            <h1 className="text-2xl font-bold my-4">Live Chat</h1>
            <p className="font-semibold text-lg mb-3">Chat With Our Team</p>
            <a className="underline font-semibold" href="">
              Start a Chat
            </a>
          </m.div>
          <m.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: "1.2" }}
            className="w-full h-full flex flex-col items-center"
          >
            <Phone size={50} />
            <h1 className="text-2xl font-bold my-4">Phone</h1>
            <p className="font-semibold text-lg mb-3">Give Us a Direct Call</p>
            <a className="underline font-semibold" href="">
              123 456 789
            </a>
          </m.div>
          <m.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: "1.8" }}
            className="w-full h-full flex flex-col items-center"
          >
            <MapPin size={50} />
            <h1 className="text-2xl font-bold my-4">Office</h1>
            <p className="font-semibold text-lg mb-3">Visit Our Office</p>
            <a className="underline font-semibold" href="">
              Georgia Tbilisi 123 St
            </a>
          </m.div>
        </div>
      </div>
    </main>
  );
}
