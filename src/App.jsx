import React, { useState } from "react";
import videoDB from "./data/Data";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
// import Counter from "./components/Counter"

const App = () => {
  const [videoData, setVideoData] = useState(videoDB);

  function addVideos(video) {
    setVideoData([...videoData, { ...video, id: videoDB.length + 1 }]);
  }

  function deleteVideo(id) {
    setVideoData(videoData.filter(video=>video.id!==id))
    
  }

  function editVideo(id){
    setVideoData(videoData.filter(video=>video.id===id))
  }
  return (
    <>
      <div className="App" onClick={() => console.log("app")}>
        <AddVideo addVideos={addVideos}></AddVideo>
        <VideoList deleteVideo={deleteVideo} editVideo={editVideo} videoData={videoData}></VideoList>

        {/* <div style={{ clear: "both" }}>
          <Playbutton msg="play-msg" onPlay={()=>console.log("Plaaayyy")} onPause={()=>console.log("Pause")} >Play</Playbutton>
          <Playbutton msg="pause-msg" onClick={()=>alert("Pause")} >Pause</Playbutton>
        </div> */}
        {/* <div style={{clear:"both"}}>
          <Counter></Counter>
        </div> */}
      </div>
    </>
  );
};

export default App;
