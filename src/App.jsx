import React, { useState, useReducer } from "react";
import videoDB from "./data/Data";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
// import Counter from "./components/Counter"

const App = () => {
  // const [videoData, setVideoData] = useState(videoDB);
  const [editableVideo, setEditableVideo] = useState(null);
  const [videoData, dispatch] = useReducer(videoReducer, videoDB);

  function videoReducer(videoData, action) {
    switch (action.type) {
      case "ADD":
        return [...videoData, { ...action.payload, id: videoDB.length + 1 }];
      case "Delete":
        return videoData.filter((video) => video.id !== action.payload)
      case "Update": 
        const index = videoData.findIndex((v) => v.id == action.payload.id);
        const newVideo = [...videoData];
        newVideo.splice(index, 1, action.payload);
        setEditableVideo(null)
        return newVideo
        
      default:
        return videoData;
    }
  }

  // function addVideos(video) {
  //   dispatch({ type: "ADD", payload: video });
  //   setVideoData([...videoData, { ...video, id: videoDB.length + 1 }]);
  // }

  // function deleteVideo(id) {
  //   dispatch({type:"Delete", payload:id})
  //   setVideoData(videoData.filter((video) => video.id !== id));
  // }

  // function updateVideo(video) {
  //   dispatch({type:"Update", payload:video})
  //   const index = videoData.findIndex((v) => v.id == video.id);
  //   const newVideo = [...videoData];
  //   newVideo.splice(index, 1, video);
  //   setVideoData(newVideo);
  // }

  function editVideo(id) {
    setEditableVideo(videoData.find((video) => video.id === id));
  }

  

  return (
    <>
      <div className="App" onClick={() => console.log("app")}>
        <AddVideo
          dispatch={dispatch}
          editableVideo={editableVideo}
          // updateVideo={updateVideo}
        ></AddVideo>
        <VideoList
          dispatch={dispatch}
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
