import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./components/layouts/DefaultLayout";
import { Home } from "./components/pages/Home";
import { Company } from "./components/pages/Company";
import { Genki } from "./components/pages/Genki";

export const App = () => {
  return (
    <HelmetProvider>
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
        <Route
          path="/genki-station"
          element={
            <DefaultLayout>
              <Genki />
            </DefaultLayout>
          }
        />
      </Routes>
    </HelmetProvider>
  );
};
