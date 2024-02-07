import About from "../About/About";
import Buy from "../Buy/Buy";
import Converter from "../Converter/Converter";
import Episode from "../Episode/Episode";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Services from "../Services/Services";

const Compiler = () => {
  return (
    <div>
      <Home />
      <About />
      <Episode />
      <Services />
      <Converter />
      <Buy />
      <Footer />
    </div>
  );
};
export default Compiler;
