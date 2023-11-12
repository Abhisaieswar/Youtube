import { useEffect } from "react";
import { YOUTUBE_POPULAR_VIDEOS_API } from "../utils/Constants";
import { useState } from "react";
import VideoCard from "./VideoCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const VideosContainer = () => {
  const [videos, setVideos] = useState();

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_POPULAR_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };

  if (!videos) {
    return <Shimmer />;
  }

  return (
    <>
      {videos.map((video) => (
        <Link
          to={`/watch?v=${video.id}`}
          state={{ videoData: video }}
          key={video.id}
        >
          <VideoCard videoData={video} />
        </Link>
      ))}
    </>
  );
};

export default VideosContainer;
