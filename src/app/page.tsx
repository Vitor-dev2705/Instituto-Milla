import Header from "../components/Header";
import Banner from "../components/Banner";
import Stats from "../components/Stats";
import About from "../components/About";
import Services from "../components/Services";
import Agreements from "../components/Agreements";
import Method from "../components/Method";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-white overflow-x-hidden">
      <Header />
      <Banner />
      <Stats />
      <About />
      <Services />
      <Method />
      <Testimonials />
      <Agreements />
      <Contact />
      <Footer />
    </main>
  );
}
