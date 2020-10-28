import React from "react";
import logo from "./Hamburguesita.png";
import "./Intro.scss";

function IntroView() {
  return (
    <div className="Intro-view">
      <body className="Intro-body">
        <div className="Intro-options">
          <div>
            <button className="Waiter">Mesero</button>
          </div>
          <img src={logo} className="Burguer-logo" alt="Hamburguesita" />
          <div>
            <button className="Chef">
              Jefe de <br></br> cocina
            </button>
          </div>
        </div>
      </body>
    </div>
  );
}

export default IntroView;
