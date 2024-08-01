import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header.component";
import Home from "./pages/home.component";
import About from "./pages/about.component";
import Contact from "./pages/contact.component";
import LogIn from "./pages/log-in.component";

const App = () => {
  return (
    <Router>
      <Header />
      <LogIn />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
