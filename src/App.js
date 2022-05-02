import './App.css';
import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Shop from "./pages/Shop";
import Details from "./pages/Details";

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={<Homepage/>} />
       <Route path="/shop" element={<Shop/>} />
       <Route path="/details/:id" element={<Details/>} />
     </Routes>
    </div>
  );
}

export default App;
