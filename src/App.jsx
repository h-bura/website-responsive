import { useState } from "react";
import "./app.scss";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Works from "./components/works/Works";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
