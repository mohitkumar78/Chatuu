import React from "react";
import { BrowserRouter, Router, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<h1>Home</h1>}></Route>
        <Route path="about" element={<h1>about</h1>}></Route>
      </Router>
    </BrowserRouter>
  );
}

export default App;
