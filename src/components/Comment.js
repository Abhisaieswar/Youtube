import React from "react";

const Comment = ({ data }) => {
  const { authorProfileImageUrl, authorDisplayName, textDisplay } =
    data.snippet.topLevelComment.snippet;

  //   TODO - use it to show when it was published using ago
  //   const publishedAt= data.snippet.topLevelComment.snippet.publishedAt

  return (
    <div className="flex py-3">
      <img
        alt="logo"
        src={authorProfileImageUrl}
        className="rounded-[40px] h-10 w-10"
      />
      <div className="flex flex-col ml-5 flex-wrap">
        <div className="sm:text-sm text-[13px]">{authorDisplayName}</div>
        <div
          className="sm:text-md text-[13px]"
          dangerouslySetInnerHTML={{ __html: textDisplay }}
        />
      </div>
    </div>
  );
};

export default Comment;
