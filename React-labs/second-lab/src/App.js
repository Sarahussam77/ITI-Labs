import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Details from "./components/Details";
import Profile from "./components/Profile";
import Error from "./components/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
