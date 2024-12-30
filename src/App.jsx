import Footer from "./component/Footer/Footer";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import Service from "./component/Service/Service";
import Feature from "./component/Features/Feature";
import Contact from "./component/Contact/Contact";
import OurCompany from "./component/OurCompany/Ourcompany";
import { Element } from "react-scroll";
import Counter from "./component/Counter/Counter";
export default function App() {
  return (
    <>
      <Navbar />
      <Element name="Home" />
      <Home />
      <Element name="OurCompany" />
      <OurCompany />
      <Element name="service" />
      <Service />
      <Element name="counter" />
      <Counter/>
      <Element name="feature" />
      <Feature />
      <Element name="contact" />
      <Contact />
      <Footer />
    </>
  );
}
