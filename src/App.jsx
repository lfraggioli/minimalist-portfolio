import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";

function App() {
  return (
    <>
      <div className="App">
        <Intro />
        <Portfolio />
        <Timeline />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
