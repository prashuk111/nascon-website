import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import PageMeta from "./components/PageMeta";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Solutions from "./pages/Solutions";
import Industries from "./pages/Industries";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";


function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />
      <PageMeta />

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/products" element={<Products />} />

        <Route path="/solutions" element={<Solutions />} />

        <Route path="/industries" element={<Industries />} />

        <Route path="/partners" element={<Partners />} />

        <Route path="/partners/:slug" element={<Partners />} />

        <Route path="/contact" element={<Contact />} />

        

      </Routes>

    </BrowserRouter>
  );
}

export default App;