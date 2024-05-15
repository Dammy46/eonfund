import "./App.css";
import { About, Footer, Hero, Portfolio } from "./components";
import { ReactLenis } from "@studio-freight/react-lenis";

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      <main className="App">
        <Hero />
        <About />
        <Portfolio />
        <Footer />
      </main>
    </ReactLenis>
  );
}

export default App;
