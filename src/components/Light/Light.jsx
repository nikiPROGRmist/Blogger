import React from "react";
import "./light.css";
import { LightContext } from "../../App";

export const Light = () => {
  const { setNight } = React.useContext(LightContext);
  return (
    <div class="toggle-switch">
      <label>
        <input type="checkbox" onClick={setNight} />
        <span class="slider"></span>
      </label>
    </div>
  );
};
