import React from 'react';
import reactDOM from "react-dom";
import Table from "/componets/MyGoal.js"
var myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
    console.log("hello world");
  }
  console.log("hello world");
  reactDOM.render(<Table />,getElementById("root"));