import React from"react";
import Navbar  from "./Component/Navbar";
import ShowCase from "./Component/ShowCase";
import "./App.css"
function App() {
  return(
   <div className="container">
     <Navbar/> 
     <ShowCase/>
   </div>
  );
}
export default App;
