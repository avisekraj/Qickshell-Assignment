import React from "react";
import ReactDOM from "react-dom";
// import Card from "./Cards";
import "./index.css";
// import sdata from "./sdata";
import App from "./App";




ReactDOM.render(
  <App/>,
  // <>
  //   <h1 className="heading_style">  </h1>
  //   {sdata.map((val)=>{
  // return (
  // <Card
  // key={val.id}
  //   imgsrc={val.imgsrc}
  //   title={val.title}
  //   sname={val.sname}
  //   link={val.link}
  // />
  // );
  // })}
  // </>,
  
  document.getElementById("root")
);
