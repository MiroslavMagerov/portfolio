import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import SkillGroupSection from "./components/SkillGroupSection/SkillGroupSection";

function App() {
  return (
    <div className='page-content'>
      <Navbar />
      <Hero />
      <SkillGroupSection />
      <Footer />
    </div>
  );
}

export default App;
