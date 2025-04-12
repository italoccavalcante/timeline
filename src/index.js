import React from "react";
import ReactDOM from "react-dom/client";
import timelineItems from "./data/timelineItems.js";
import {assignLanes} from './utils/assignLanes.js'
function App() {
  return (
    <div>
      <h2>Good luck with your assignment! {"\u2728"}</h2>
      {console.log(assignLanes(timelineItems))}
      <h3>{timelineItems.length} timeline items to render</h3>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);