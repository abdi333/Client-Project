import { useState } from "react";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="app">
      <div>
        <Navbar />
      </div>
      <div className="">
        <img
          src="https://images.unsplash.com/photo-1597369237991-5c95d1b6e0c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z29sZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
          className=".w-5/6 "
        />
      </div>
    </div>
  );
}

export default App;
