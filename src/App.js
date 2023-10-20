import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Search } from "./components/Search/Search";
import { Card } from "./components/Card/Card";
import { Footer } from "./components/Footer/Footer";
import { Intro } from "./components/Intro/Intro";
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
            <Header setNight={setNight} />
            <Intro />
            <Search />
            <Card />
            <Footer />
          </div>
        </div>
      </LightContext.Provider>
    </>
  );
}

export default App;
