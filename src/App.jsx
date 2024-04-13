import Contact from "./components/Contact";
import Discover from "./components/Discover";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Testimonial from "./components/Testimonial";
import Unleash from "./components/Unleash";

export default function App() {
  return (
    <main className="max-w-[1300px] mx-auto px-4">
      <Navbar />
      <Main />
      <Discover />
      <Unleash />
      <Features />
      <Testimonial />
      <Newsletter />
      <Contact />
      <Footer />
    </main>
  )
}
