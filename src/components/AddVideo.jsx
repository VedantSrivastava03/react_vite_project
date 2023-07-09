import React, { useState } from "react";
import "./AddVideo.css";



const initialData = {
views: "777k",
time: "11 month ago",
verified: true,
title: "",
channel: ""
}
const AddVideo = ({addVideos}) => {

    const [video, setVideo] = useState(initialData)

   function handleSubmit(e){
        e.preventDefault()
        addVideos(video)
        setVideo(initialData)
        

   }

   function handleChange(e){
    e.stopPropagation()
    
    setVideo({...video,
        [e.target.name] : e.target.value,
   })

   

   }

  return (
    <form>
      <input type="text" value={video.title} name="title" onChange={handleChange} placeholder="Title" />
      
      <input type="text" value={video.channel} name="channel" onChange={handleChange} placeholder="Channel Name" />
        
      <button onClick={handleSubmit}>
        AddVideo
      </button>
    </form>
  );
};

export default AddVideo;
