import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {initializeApp} from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPrLitUspjDy22DZZDf1OGO1RdG-zdHoc",
  authDomain: "abbyweinreb.firebaseapp.com",
  projectId: "personal-site-aw",
  storageBucket: "personal-site-aw.firebasestorage.app",
  messagingSenderId: "171353062840",
  appId: "1:171353062840:web:265e6be3e0ac82c6dce34d",
  measurementId: "G-EG6Y3VF9Q0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);