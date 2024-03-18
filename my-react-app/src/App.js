import "./App.css";
import { Element } from "./Components/SlidingImagesFile/Element.jsx";
import { Add } from "./Components/BodyElement/Add.jsx";
import { Nav } from "./Components/Navbarfile/Nav.jsx";
import { Some } from "./Components/FooterFile/Some.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="bg-blue-500 text-white text-center py-4">
        <h1 className="text-4xl font-bold w-full mt-10">Educate Bharat</h1>
      </div>
      <Outlet />

      <Element />
      <Add />
      <Some />
    </div>
  );
}

export default App;
