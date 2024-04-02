import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home";
import Details from "./pages/details";
import Favorites from "./pages/favorites";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Routes>
          <Route path="/recipeFinder" element={<Home />} />
          <Route path="/recipeFinder/favorites" element={<Favorites />} />
          <Route path="/recipeFinder/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
