import Footer from "./component/Footer/Footer";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import Service from "./component/Service/Service";
// import Services from './component/Services/Services';
import Feature from "./component/Features/Feature";
import Contact from "./component/Contact/Contact";
import OurCompany from "./component/OurCompany/Ourcompany";
import { Element } from "react-scroll";
export default function App() {
  return (
    <>
      <Navbar />
      <Home />
<OurCompany />
      <Element name="service" />
      <Service />
      <Element name="feature" />
      <Feature />
      <Element name="contact" />
      <Contact />
      <Footer />
    </>
  );
}
