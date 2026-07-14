import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./components/layouts/DefaultLayout";
// import { AliceLayout } from "./components/layouts/AliceLayout";
import { GenkiLayout } from "./components/layouts/GenkiLayout";
import { Home } from "./components/pages/Home";
import { Company } from "./components/pages/Company";
import { Genki } from "./components/pages/Genki";
import { Price } from "./components/pages/Price";
import { Recruit } from "./components/pages/Recruit";
// import { Alice } from "./components/pages/alice/index";

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
          path="/recruit"
          element={
            <GenkiLayout>
              <Recruit />
            </GenkiLayout>
          }
        />
        {/* げんき訪問看護ステーション */}
        <Route
          path="/genki-station"
          element={
            <GenkiLayout>
              <Genki />
            </GenkiLayout>
          }
        />
        <Route
          path="/genki-station/price"
          element={
            <GenkiLayout>
              <Price />
            </GenkiLayout>
          }
        />
        {/* 老人ホーム ありす */}
        {/* <Route
          path="/alice"
          element={
            <AliceLayout>
              <Alice />
            </AliceLayout>
          }
        />
        <Route
          path="/alice/facility"
          element={
            <AliceLayout>
              <Alice />
            </AliceLayout>
          }
        />
        <Route
          path="/alice/price"
          element={
            <AliceLayout>
              <Alice />
            </AliceLayout>
          }
        /> */}
      </Routes>
    </HelmetProvider>
  );
};
