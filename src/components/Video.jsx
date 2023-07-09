import React from "react";
import "./Video.css";

const Video = ({
  title,
  channel,
  views,
  time,
  verified,
  id,
  children,
  deleteVideo,
  editVideo,
}) => {
  // let verified = false;
  // let channelName;

  // if(verified){
  //   channelName=<div className="channel"> {channel} ✅ </div>
  // }
  // else{
  //   channelName=<div className="channel"> {channel} </div>
  // }

  return (
    <>
      <div className="container">
        <button
          className="close"
          onClick={() => {
            deleteVideo(id);
          }}
        >
          X
        </button>
        <button
          className="edit"
          onClick={() => {
            editVideo(id);
          }}
        >
          edit
        </button>
        <div className="pic">
          <img src={`https://picsum.photos/id/${id}/200/120`} alt="coding" />
        </div>

        <div className="title">{title}</div>

        {/* {verified ?<div className="channel"> {channel} ✅ </div>:<div className="channel"> {channel} </div>} */}
        {/* <div className="channel"> {channel} {verified ? "✅" : null}</div> */}
        <div className="channel">
          {" "}
          {channel} {verified && "✅"}
        </div>

        <div className="view">
          {" "}
          {views} views <span>.</span> {time}{" "}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Video;
