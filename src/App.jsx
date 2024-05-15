import React from "react";
import Hero from "./Component/Main/Hero";
import Navbar from "./Component/Navbar/Navbar";

function App() {
  return (
    <div className="w-[100%]  h-[100vh] flex flex-col bg-[hsl(210deg 16.67% 97.65%)]">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
