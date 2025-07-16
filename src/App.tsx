import "./styles/App.css";
import Hero from "./components/Hero";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";

function App() {
  const [backgroundLoaded, setbackgroundLoaded] = useState(false);

  useEffect(() => {
    const bgImage = new Image();
    bgImage.src = "/assets/bg.jpeg";
    let timeoutId: number;
    bgImage.onload = () => {
      timeoutId = setTimeout(() => {
        setbackgroundLoaded(true);
      }, 1000);
    };
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return backgroundLoaded ? (
    <main>
      <Hero />
    </main>
  ) : (
    <Loading />
  );
}

export default App;
