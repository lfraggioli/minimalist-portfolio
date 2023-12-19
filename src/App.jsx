import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import Navbar from "./components/Navbar";
import Stack from "./components/Stack";
import LittleProjects from "./components/LittleProjects";

function App() {
  return (
    <>
      <div className="App font-poppins bg-gradient-to-r from-[#0b0d18] to-[#0d0e16]">
        <Navbar />
        <div className="max-w-6xl align-middle mx-auto justify-center">
          <Intro />
          <Stack />
          <Portfolio />
          <LittleProjects />
          <Timeline />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
