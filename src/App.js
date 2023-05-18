import "./App.scss";
import Catalog from "./components/catalog/Catalog";
// import AboutUsPage from "./components/aboutUsPage/AboutUsPage";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
// import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      {/* <AboutUsPage /> */}
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
