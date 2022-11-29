import { Footer, Navbar } from "../components";
import { About, Explore, Hero } from "../sections";

const Page = () => (
  <div className="bg-primary-black oveflow-hidden">
    <Navbar className="fixed" />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="gradient-04 z-0" />
    <Footer />
  </div>
);

export default Page;
