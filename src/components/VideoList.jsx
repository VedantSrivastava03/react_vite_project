import Video from "./Video";
import Playbutton from "./Playbutton";


function VideoList({videoData,deleteVideo,editVideo }){
    return(
        <>
        {videoData.map((vid) => (
          <Video
            key={vid.id}
            title={vid.title}
            channel={vid.channel}
            views={vid.views}
            time={vid.time}
            verified={vid.verified}
            id={vid.id}
            deleteVideo={deleteVideo}
            editVideo={editVideo}
          >
            <Playbutton
              msg="play-msg"
              onPlay={() => console.log("Plaaayyy",vid.title )}
              onPause={() => console.log("Pause", vid.title)}
              
            >
            {vid.title}
            </Playbutton>
          </Video>
        ))}
        </>
    )
}

export default VideoList;