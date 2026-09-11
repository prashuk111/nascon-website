import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import PageMeta from "./components/PageMeta";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import AutomationProducts from "./pages/AutomationProducts";
import ElectricalControlProducts from "./pages/ElectricalControlProducts";
import CablesProducts from "./pages/CablesProducts";
import InstrumentationProducts from "./pages/InstrumentationProducts";
import ProductDetail from "./pages/ProductDetail";
import Solutions from "./pages/Solutions";
import SmartControlPanels from "./pages/SmartControlPanels";
import AutomationControlSolutions from "./pages/AutomationControlSolutions";
import Industries from "./pages/Industries";
import Partners from "./pages/Partners";
import IntegrationDetail from "./pages/IntegrationDetail";
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

        <Route path="/products/automation" element={<AutomationProducts />} />

        <Route path="/products/electrical-control" element={<ElectricalControlProducts />} />

        <Route path="/products/cables" element={<CablesProducts />} />

        <Route path="/products/instrumentation" element={<InstrumentationProducts />} />

        {/* Alias redirect for backwards compatibility */}
        <Route path="/products/electrical" element={<Navigate to="/products/electrical-control" replace />} />

        <Route path="/products/:category/:productId" element={<ProductDetail />} />

        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/control-panels" element={<SmartControlPanels />} />
        <Route path="/solutions/automation-control" element={<AutomationControlSolutions />} />

        <Route path="/industries" element={<Industries />} />

        <Route path="/partners" element={<Partners />} />

        {/* 3 Integration Pages */}
        <Route path="/partners/plc-hmi-scada" element={<IntegrationDetail slug="plc-hmi-scada" />} />
        <Route path="/partners/vfd-drives-motor-control" element={<IntegrationDetail slug="vfd-drives-motor-control" />} />
        <Route path="/partners/mcc-pcc-apfc-rtu" element={<IntegrationDetail slug="mcc-pcc-apfc-rtu" />} />

        {/* Alias redirect for backwards compatibility */}
        <Route path="/partners/vfd-drives" element={<Navigate to="/partners/vfd-drives-motor-control" replace />} />

        {/* Existing Partner Detail Routes */}
        <Route path="/partners/:slug" element={<Partners />} />

        <Route path="/contact" element={<Contact />} />

        {/* Catch-all fallback to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;