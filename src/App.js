import "./App.css";
import Login from "./components/Login";
import Forecast from "./components/Forecast";
import NavigationBar from "./components/NavigationBar";
import Welcome from "./components/Welcome";
import Signup from "./components/Signup";
import "./css/Welcome.css";
import "./css/Login.css";
import "./css/Signup.css";
import "./css/Forecast.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Welcome />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/forecast" element={<Forecast />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
