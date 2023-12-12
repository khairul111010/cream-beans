import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<Home />} />
          <Route path="/contact-us" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
