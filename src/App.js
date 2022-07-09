import React from "react";
import Navbar from "./Component/Navbar";
import ShowCase from "./Component/ShowCase";
import SignUp from "./Component/SignUp";
import "./App.css"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <ShowCase/>
      <SignUp/>
    </div>
  );
}
export default App;
