import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Packages from "./pages/Packages"; // ✅ Add this if not already


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />  {/* ✅ This line enables /packages */}
       
      </Routes>
    </Router>
  );
}

export default App;
