import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./Detail";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" expact element={<Home />}></Route>
        <Route path="/:id" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
