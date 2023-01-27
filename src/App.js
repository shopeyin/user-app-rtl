import React, { useState } from "react";
import Create from "./components/create/Create";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="row">
        <p>Messi</p>
        <div className="col-md-6">
          <Create />
        </div>
      </div>
    </div>
  );
}

export default App;
