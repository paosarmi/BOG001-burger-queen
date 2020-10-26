import React from "react";
import logo from "./Hamburguesita.png";
import "../css/Intro.css";

function IntroView() {
  return (
    <div className="Intro-view">
      <body className="Intro-body">
        <div className="Intro-options">
          <div className="Waiter">
            <p>Mesero</p>
          </div>
          <img src={logo} className="Burguer-logo" alt="Hamburguesita" />
          <div className="Chef">
            <p>Jefe de cocina</p>
          </div>
        </div>
      </body>
    </div>
  );
}

export default IntroView;
