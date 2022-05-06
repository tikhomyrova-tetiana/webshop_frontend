import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Shop from "./pages/Shop/Shop";
import Details from "./pages/Details";
import Footer from "./components/Footer/Footer";
import Categories from "./pages/Categories";
import Signup from "./pages/Signup/Signup";
import { NavBar } from "../src/components/NavBar/NavBar";
import Login from "./pages/Login/Login";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/shop/category/:id" element={<Categories />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/login"
          element={<Login setToken={setToken} token={token} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
