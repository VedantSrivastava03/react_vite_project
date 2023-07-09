import React, { useState } from "react";
import videoDB from "./data/Data";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
// import Counter from "./components/Counter"

const App = () => {
  const [videoData, setVideoData] = useState(videoDB);
  const [editableVideo, setEditableVideo] = useState(null);
  function addVideos(video) {
    setVideoData([...videoData, { ...video, id: videoDB.length + 1 }]);
  }

  function deleteVideo(id) {
    setVideoData(videoData.filter((video) => video.id !== id));
  }

  function editVideo(id) {
    setEditableVideo(videoData.find((video) => video.id === id));
  }

  function updateVideo(video) {
    const index = videoData.findIndex((v) => v.id == video.id);
    const newVideo = [...videoData];
    newVideo.splice(index, 1, video);
    setVideoData(newVideo);
  }

  return (
    <>
      <div className="App" onClick={() => console.log("app")}>
        <AddVideo
          addVideos={addVideos}
          editableVideo={editableVideo}
          updateVideo={updateVideo}
        ></AddVideo>
        <VideoList
          deleteVideo={deleteVideo}
          editVideo={editVideo}
          videoData={videoData}
        ></VideoList>

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
