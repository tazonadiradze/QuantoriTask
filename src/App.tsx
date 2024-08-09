import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/header.component";
import Home from "./pages/home.component";
import About from "./pages/about.component";
import Contact from "./pages/contact.component";

const App = () => {
  return (
    <div className=" flex flex-col h-screen">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
