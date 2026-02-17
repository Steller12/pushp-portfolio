import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import TechStack from "./components/TechStack";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";
import PageWipe from "./components/PageWipe";

function App() {
  const [wipe, setWipe] = useState({
    active: false,
    title: "",
  });
  return (
    <>
      <Header />
      <PageWipe wipe={wipe} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Intro />
              <TechStack />
              <Projects setWipe={setWipe} />
              <Achievements />
              <Footer />
              <div className="h-10" />
            </>
          }
        />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </>
  );
}

export default App;
