import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import Navbar from "./components/Navbar";
import Stack from "./components/Stack";
import LittleProjects from "./components/LittleProjects";

function App() {
  return (
    <>
      <div className="App font-poppins bg-gradient-to-r from-[#101733] to-[#171923]">
        <Navbar />
        <Intro />
        <Stack />
        <Portfolio />
        <LittleProjects />
        <Timeline />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
