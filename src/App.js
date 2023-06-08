import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./component/NavBar";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectDetails from "./component/ProjectDetails";
import Home from "./component/Home";
function App() {
  AOS.init({
    offset: 320,
    duration: 1000,
  });
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projectDetails/:projectId" element={<ProjectDetails />} />
      </Routes>
    </>
  );
}

export default App;
