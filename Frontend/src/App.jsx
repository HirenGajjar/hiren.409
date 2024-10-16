import React from "react";
import MainComponent from "./Components/MainComponent/MainComponent";
import NavBar from "./Components/NavBar/NavBar";
const App = () => {
  return (
    <>
      <div className=" w-full h-screen">
        <NavBar />
        <MainComponent />
      </div>
    </>
  );
};

export default App;
