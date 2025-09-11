"use client";
import React, { useEffect, useState } from "react";
import AvatarGenerator from "../../../components/Tools/AvatarGenerator/AvatarGenerator";
import { HomeHeader } from "~/components/Section/Common/Header";
import Header from "~/components/Section/Common/Header/ToolsHeader";
import Footer from "~/components/Section/Common/Header/ToolsFooter";

function App() {
  return (
    <div className="App">
      <Header />
      <AvatarGenerator />
      <Footer />
    </div>
  );
}

export default App;
