import React from "react";
import Header from "./Components/Header";
import Travels from "./Components/Travels";
import data from "./Data/Data";
import "./App.css"

export default function App() {
  const travels = data.map((travel) => {
    return <Travels
     {...travel}
    />

  })
  return (
    <div className="contents">
      <Header/>
      {travels}
    </div>
  )
}
