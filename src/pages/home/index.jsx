import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import ScrollToTop from "../../layout/Scroll";
import About from "./About";
import Book from "./Book";
import Contact from "./Contact";
import Hero from "./Hero";
import How from "./How";
import News from "./News";
import Offers from "./Offers";
import Quote from "./Quote";
import Value from "./Value";

export default function Test() {
  return (
    <main className="flex flex-col">
      <ScrollToTop />
      <Header />
      <Hero />
      <Quote />
      <About />
      <Value />
      <Offers />
      <How />
      <Book />
      <News />
      <Contact />
      <Footer />
    </main>
  );
}
