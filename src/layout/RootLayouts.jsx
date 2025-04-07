import React from "react";
import Home from "../pages/Home";
import { Outlet } from "react-router-dom";

function RootLayouts() {
  return (
    <>
      <main>
        <Home />
      </main>
    </>
  );
}

export default RootLayouts;
