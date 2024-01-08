import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./components/About";
import Discuss from "./pages/Discuss";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Services from "./pages/Services";
import Team from "./pages/Team";
// import About from "./pages/AboutUs"; // Adjusted the import for consistency

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
