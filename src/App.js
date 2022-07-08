import React from"react";
import Navbar  from "./Component/Navbar";
import ShowCase from "./Component/ShowCase";
import "./App.css"
function App() {
  return(
    <div>
        <div>
          <Navbar/> 
        </div>
        <br/><br/><br/>
        <div>
         <ShowCase/>
        </div>
    </div>
  );
}
export default App;
