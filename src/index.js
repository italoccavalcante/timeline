import React from "react";
import ReactDOM from "react-dom/client";
import timelineItems from "./data/timelineItems.js";
import {Timeline} from './components/timeline'
import {assignLanes} from './utils/assignLanes.js'
function App() {
  const timeLineOrdered = assignLanes(timelineItems)
  return (
    <div style={{textAlign:'center'}}>
      <h2 >TIMELINE {"\u2728"}</h2>
      {timeLineOrdered.map((timeLine, index) => {
        return (
          <Timeline key={index} items={timeLine}/>
        )
      })}
      <h3>{timelineItems.length} timeline items to render</h3>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);