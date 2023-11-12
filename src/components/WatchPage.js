import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { GET_COMMENTS_API } from "../utils/Constants";
import CommentsContainer from "./CommentsContainer";
import { useLocation } from "react-router-dom";

const WatchPage = () => {
  const [commentsData, setCommentsData] = useState([]);

  const location = useLocation();
  const [searchParams] = useSearchParams();

  const videoId = searchParams.get("v");

  const { videoData } = location.state;
  console.log(videoData);
  const videoTitle = videoData.snippet.title;
  const channelTitle = videoData.snippet.channelTitle;

  const getComments = async () => {
    const data = await fetch(`${GET_COMMENTS_API}${videoId}`);
    const comments = await data.json();
    setCommentsData(comments);
  };

  useEffect(() => {
    getComments();
  }, []);

  const commentsLoaded = commentsData.items ? true : false;

  return (
    <div className={`text-white bg-black h-[700px] ml-10 sm:ml-[200px]`}>
      <div className="flex flex-col mb-40">
        <div className="flex">
          <div>
            <iframe
              className="overflow-y-auto rounded-2xl sm:w-[66vw] w-[80vw] sm:h-[700px] h-[200px]"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <h1 className="text-[14px] sm:text-[18px] leading-10 font-youtube-sans font-semibold my-3">
          {videoTitle}
        </h1>
        <div className="flex items-center mb-5">
          <div className="rounded-3xl bg-gray-700 h-11 w-11"></div>
          <div className="flex flex-col justify-center ml-5">
            <div>{channelTitle}</div>
            <div className="text-md text-[#aaa]">... subscribers</div>
          </div>
          <button className="border-none h-9 w-24 rounded-3xl bg-white text-black ml-10 font-youtube-sans text-sm font-semibold leading-10">
            Subscribe
          </button>
        </div>
        <div className="mb-10">
          {commentsLoaded &&
            commentsData.items.map((commentData) => (
              <CommentsContainer data={commentData} key={commentData.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
