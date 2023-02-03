import React from "react";
import { Routes, Route } from "react-router-dom";
import Create from "./components/create/Create";
import People from "./routes/people/People";
import PeopleProfile from "./components/peopleApi/PeopleProfile";

import "./App.css";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          
            <Routes>
              <Route index element={<Create />} />
              <Route path="/people" element={<People />} />

              <Route path="/people/:id" element={<PeopleProfile />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
