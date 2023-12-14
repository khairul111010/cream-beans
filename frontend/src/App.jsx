import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Project from "./pages/Project";
import Team from "./pages/Team";
import About from "./pages/Aboutus";
// import About from "./pages/AboutUs"; // Adjusted the import for consistency

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="project" element={<Project />} />
          <Route path="team" element={<Team />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
