import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
/* import * as firebase from "firebase"; */

/* var firebaseConfig = {
  apiKey: "AIzaSyDA4YS4_whEO-CujoeNR9G7gfrAw2BE3AQ",
  authDomain: "burguerqueen-6dc2c.firebaseapp.com",
  databaseURL: "https://burguerqueen-6dc2c.firebaseio.com",
  projectId: "burguerqueen-6dc2c",
  storageBucket: "burguerqueen-6dc2c.appspot.com",
  messagingSenderId: "41311849012",
  appId: "1:41311849012:web:d6d1458957c9eeb3709861",
  measurementId: "G-EG149785SG",
}; */

//.initializeApp(firebaseConfig);
//firebase deploy --only hosting:burguer-queen-wood

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
