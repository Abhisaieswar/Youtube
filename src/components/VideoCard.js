import { getViews, getVideoDuration } from "../utils/helper";

const VideoCard = ({ videoData }) => {
  const { snippet, statistics, contentDetails } = videoData;
  const { channelTitle, title, thumbnails } = snippet;

  const videoDuration = getVideoDuration(contentDetails.duration);

  return (
    <div className="p-2 mx-3 my-3 w-[380px] h-[400px] hover:bg-sky-900 rounded-md">
      <div className="relative">
        <img
          alt="thumbnail"
          src={thumbnails.high.url}
          className="w-[380px] h-[270px]"
        />
        <div className="text-white absolute bottom-10 right-2 bg-black p-1 rounded-md text-sm">
          {videoDuration}
        </div>
      </div>
      <ul className="font-roboto">
        <li className="pb-2 font-bold">{title}</li>
        <div className="text-sm">
          <li>{channelTitle}</li>
          <li>{getViews(statistics.viewCount)} views</li>
        </div>
      </ul>
    </div>
  );
};

export default VideoCard;
