import React from "react";
import {  Routes, Route } from "react-router-dom";
import { Cuisine } from "./Cuisine";
import Home from "./Home";
import  Searched  from "./Searched";
import Recipe from "./Recipe";

export default function Page() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
  );
}
