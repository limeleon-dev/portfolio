import Navbar from "./components/Navbar/Navbar";
import Experiences from "./components/Experiences/Experiences";
import Formations from "./components/Formations/Formations";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Presentation from "./components/Presentation/Presentation";
import Competences from "./components/Competences/Competences";

const App = () => {
  return (
    <>
      <Navbar />

      <Presentation />

      <Competences />

      <Formations />

      <Experiences />

      <Contact />

      <Footer />
    </>
  );
};

export default App;
