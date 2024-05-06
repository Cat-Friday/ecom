import "./App.css";
import Header from "./Header";
import Cart from "./pages/Cart";
import Sketches from "./pages/Sketches";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Sketches />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
