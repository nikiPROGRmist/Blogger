import React, { useState } from "react";
import "./App.css";
import { AuthLoginForm } from "./components/AuthLoginForm/AuthLoginForm";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { Registration } from "./components/RegistrationForm/Registration";
import { Profile } from "./components/MyProfile/Profile";
export const LightContext = React.createContext("");
function App() {
  const [light, setLight] = useState(false);

  const setNight = () => {
    setLight(!light);
  };
  return (
    <>
      <LightContext.Provider value={{ setNight }}>
        <div className="wrapper" style={light ? { background: "#fff" } : { background: "#0e141b" }}>
          <div className="container">
            <Header />
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<AuthLoginForm />} />
            </Routes>
          </div>
        </div>
      </LightContext.Provider>
    </>
  );
}

export default App;
