import NavBar from "./Components/Header/NavBar";
import AboutME from "./Components/About/AboutME";
import Carousel from "./Components/Projects/Carousel";
import Skill from "./Components/Skills/Skill";
import ExpAndWork from "./Components/Experience/ExpAndWork";
import Footer from "./Components/footer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutME />
      <Carousel />
      <Skill />
      <ExpAndWork />
      <Footer />
    </div>
  );
}

export default App;
