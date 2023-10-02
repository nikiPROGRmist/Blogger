import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
export const LightContext = React.createContext("");
function App() {
  const [light, setLight] = useState(false);

  const setNight = () => {
    setLight(!light);
  };
  return (
    <LightContext.Provider value={{ setNight }}>
      <div className="wrapper" style={light ? { background: "#fff" } : { background: "#0e141b" }}>
        <div className="container">
          <Header setNight={setNight} />
        </div>
      </div>
    </LightContext.Provider>
  );
}

export default App;
