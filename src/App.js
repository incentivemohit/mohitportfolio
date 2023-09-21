import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProjectPage from "./components/Projects/ProjectPage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Router>
        <section>
          <Navbar />
        </section>
        <Routes>
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
