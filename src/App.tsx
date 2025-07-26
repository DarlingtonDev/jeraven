import "./styles/App.css";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Testimonial from "./components/Testimonial";
import Ready from "./components/Ready";
import Footer from "./components/Footer";
import { useEffect } from "react";
import Myobserver from "./utilities/observer";

function App() {
  useEffect(() => {
    const hero = document.querySelector(".hero-text");
    const carSec = document.querySelector(".car-sec");
    const delivery = document.querySelector(".delivery-card");
    const services = document.querySelector(".first-service");
    const secondServices = document.querySelector(".second-service");
    const thirdService = document.querySelector(".third-service");
    const whyUs = document.querySelector(".why-us");
    const testimonial = document.querySelector(".testimonials");
    const ready = document.querySelector(".ready");
    if (hero) {
      Myobserver.observe(hero);
    }
    if (delivery) {
      Myobserver.observe(delivery);
    }
    if (services) {
      Myobserver.observe(services);
    }
    if (secondServices) {
      Myobserver.observe(secondServices);
    }
    if (thirdService) {
      Myobserver.observe(thirdService);
    }
    if (whyUs) {
      Myobserver.observe(whyUs);
    }
    if (carSec) {
      Myobserver.observe(carSec);
    }
    if (testimonial) {
      Myobserver.observe(testimonial);
    }
    if (ready) {
      Myobserver.observe(ready);
    }

    return () => {
      if (hero) Myobserver.unobserve(hero);
      if (services) Myobserver.unobserve(services);
      if (secondServices) Myobserver.unobserve(secondServices);
      if (thirdService) Myobserver.unobserve(thirdService);
      if (carSec) Myobserver.unobserve(carSec);
      if (delivery) Myobserver.unobserve(delivery);
      if (whyUs) Myobserver.unobserve(whyUs);
      if (testimonial) Myobserver.unobserve(testimonial);
      if (ready) Myobserver.unobserve(ready);
    };
  }, []);
  return (
    <main className="main">
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
