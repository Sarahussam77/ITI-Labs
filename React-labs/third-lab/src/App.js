import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Artists from "./components/Artists";
import Home from "./components/Home";

import ArtistDetails from "./components/ArtistDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/artists" element={<Artists />} />
          <Route path="/artist/:id" element={<ArtistDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
