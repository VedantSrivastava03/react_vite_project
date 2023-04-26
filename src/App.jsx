import React from "react";
import Video from "./components/Video";

const App = () => {
  return (
    <>
    <div className="App">
      <div>Video</div>
      <Video
        title="React JS tutorial"
        channel="Coding Ninja"
        views="10k"
        time="1 month ago"
      ></Video>
       <Video
        title="Node JS tutorial"
        channel="Coder Dost"
        views="100k"
        time="8 month ago"
      ></Video>
       <Video
        title="Mongo DB tutorial"
        channel="Scaler"
        views="650k"
        time="1 year ago"
      ></Video>
      </div>
      </>
    
  );
};

export default App;
