import React from "react";
import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./components/layouts/DefaultLayout";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        }
      />
      <Route
        path="/about"
        element={
          <DefaultLayout>
            <About />
          </DefaultLayout>
        }
      />
    </Routes>
  );
};
