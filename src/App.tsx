import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Destinations from "./component/Destinations";
import TripTypes from "./component/TripTypes";
import ContactUs from "./component/ContactUs";
import NavBar from "./component/NavBar";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="Destinations" element={<Destinations />} />
          <Route path="TripTypes" element={<TripTypes />} />
          <Route path="ContactUs" element={<ContactUs />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
