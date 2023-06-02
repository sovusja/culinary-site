import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Catalog from "./components/catalog/Catalog";
import AboutUsPage from "./components/aboutUsPage/AboutUsPage";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Product from "./components/product/Product";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import NotFound from "./components/notFound/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
