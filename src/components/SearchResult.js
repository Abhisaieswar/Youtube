import React from "react";
import { Link } from "react-router-dom";

const SearchResult = ({ data }) => {
  const {
    id: { videoId, kind = "", playlistId = "" },
    snippet: {
      channelTitle,
      description,
      title,
      thumbnails: {
        high: { url },
      },
    },
  } = data;
  // console.log(data);
  const id = kind === "youtube#playlist" ? playlistId : videoId;
  return (
    <div className="flex hover:bg-gray-900 h-[350px] flex-col sm:flex-row sm:h-[280px] my-8 p-3 rounded-md">
      <div>
        <Link to={`/watch?v=${id}`} key={videoId} state={{ videoData: data }}>
          <img src={url} alt="vid" className="h-64 w-[360px]" />
        </Link>
      </div>
      <div className="flex flex-col sm:ml-5">
        <div className="font-youtube-sans text-lg leading-10">{title}</div>
        <div className="flex items-center">
          <div className="rounded-3xl bg-gray-700 h-7 w-7 mr-3"></div>
          <div className="text-sm">{channelTitle}</div>
        </div>
        <div className="text-xs mt-4 text-gray-300 hidden sm:flex">
          {description}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
