import './Playbutton.css';
import React from 'react';
import { useState } from 'react';

const Playbutton = ({children,msg,onPlay,onPause}) => {

  const [playing, setPlaying] = useState(false);    //don't use this this approach
    function handleClick(e){
        e.stopPropagation()
        if(playing) onPause()
        else onPlay();

        setPlaying (! playing);

    }
  return (
    <button onClick={handleClick}>{children} : {playing ? "⏸️":"▶️"}</button>
    
    
  )
}

export default Playbutton;


