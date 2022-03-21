import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Albums from "./pages/Albums";
import Artist from "./pages/Artist";
import Search from "./pages/Search";
import Songs from "./pages/Songs";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/search" element={<Search />} />
        <Route path="/songs" element={<Songs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
