import React, { useState, useEffect } from "react";
import "./AddVideo.css";

const initialData = {
  views: "777k",
  time: "11 month ago",
  verified: true,
  title: "",
  channel: "",
};
const AddVideo = ({ addVideos, editableVideo, updateVideo }) => {
  const [video, setVideo] = useState(initialData);

  function handleSubmit(e) {
    e.preventDefault();
    if(editableVideo){
      updateVideo(video)
    }
    else{addVideos(video)}
    
    setVideo(initialData);
  }

  function handleChange(e) {
    e.stopPropagation();

    setVideo({ ...video, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if(editableVideo){setVideo(editableVideo)}
    
    },[editableVideo])
  

  return (
    <form>
      <input
        type="text"
        value={video.title}
        name="title"
        onChange={handleChange}
        placeholder="Title"
      />

      <input
        type="text"
        value={video.channel}
        name="channel"
        onChange={handleChange}
        placeholder="Channel Name"
      />

      <button onClick={handleSubmit}>{editableVideo?"edit":"AddVideo"}</button>
    </form>
  );
};

export default AddVideo;
