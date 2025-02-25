import React from "react";
import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./components/layouts/DefaultLayout";
import { Home } from "./components/pages/Home";
import { Company } from "./components/pages/Company";

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
        path="/company"
        element={
          <DefaultLayout>
            <Company />
          </DefaultLayout>
        }
      />
    </Routes>
  );
};
