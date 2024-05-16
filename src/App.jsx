import React from "react";
import Hero from "./Component/Main/Hero";
import Navbar from "./Component/Navbar/Navbar";
import { BuildOutlined } from "@mui/icons-material";

function App() {
  document.title = "altworld";

  return (
    <div className="w-[100%]  h-[100vh] flex flex-col bg-[rgb(246 255 254)]">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
