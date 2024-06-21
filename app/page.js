import React from "react";
import Home from "../components/Home";
import Benefits from "../components/Benefits";
import Working from "../components/Working";
import AppDemo from "../components/AppDemo";
import Last from "../components/Last";
import SupportedApps from "../components/SupportedApps";
import Reviews from "../components/Reviews";
import UseCases from "../components/UseCases";
import Benchmark from "../components/Benchmark";
import Comparison from "../components/Comparison";
import PopularBrands from "../components/PopularBrands";

export default function HomePage() {
  return (
    <>
      <Home />
      <Benefits />
      <Benchmark />
      <Comparison />
      <PopularBrands />
      {/* <Working /> */}
      <AppDemo />
      {/* <UseCases /> */}
      {/* <Reviews /> */}
      {/* <SupportedApps /> */}
      <Last />
    </>
  );
}
