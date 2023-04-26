import React from "react";
import './Video.css';

const Video = ({ title, channel, views, time }) => {
    let bglight = "light";
  return (
    <>
      <div className="container"  >
        <div className="pic">
          <img
            src="https://www.freecodecamp.org/news/content/images/size/w2000/2022/02/arnold-francisca-f77Bh3inUpE-unsplash.jpg" width={200}
            alt="coding"
          />
        </div>

        <div className="title">{title}</div>

        <div className="channel"> {channel} </div>

        <div className="view">
          {" "}
          {views} views <span>.</span> {time}{" "}
        </div>
      </div>
      
    </>
  );
};

export default Video;
