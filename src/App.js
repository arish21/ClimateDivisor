import "./App.css";
import Login from "./components/Login";
import NavigationBar from "./components/NavigationBar";
import Welcome from "./components/Welcome";
import Signup from "./components/Signup";
import "./css/Welcome.css";
import "./css/Login.css";
import "./css/Signup.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <NavigationBar /> */}
      {/* <Welcome /> */}
      {/* <Login /> */}
      {/* <Signup /> */}
      <Router>
        <NavigationBar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Welcome />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signup" element={<Signup />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
