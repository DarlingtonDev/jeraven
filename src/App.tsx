import "./styles/App.css";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Testimonial from "./components/Testimonial";
import Ready from "./components/Ready";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyUs />
      <Testimonial />
      <Ready />
      <Footer />
    </main>
  );
}

export default App;
