import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";
import NavBar from "./components/navbar/NavBar";
import ProductsPage from "./pages/ProductsPage";
import SubscriptionPopup from "./components/SubscriptionPopup";
import Category from "./pages/Category";
import CookieConsentPopup from "./components/CookieConsentPopup";

const AppContent = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <NavBar />
      <main className="flex-grow flex">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/category/:category/:id" element={<ProductsPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsentPopup />
      <SubscriptionPopup />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
