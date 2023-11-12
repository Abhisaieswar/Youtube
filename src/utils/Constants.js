const GOOGLE_API_KEY = "AIzaSyDzWW649YiCXKNKBZPlM35fL25N2lJEFcI";

export const YOUTUBE_POPULAR_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const AUTO_SUGGESTIONS_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

// export const GET_COMMENTS_API="https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=CdwIA8ZBksQ&key=AIzaSyDzWW649YiCXKNKBZPlM35fL25N2lJEFcI"
export const GET_COMMENTS_API =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key=" +
  GOOGLE_API_KEY +
  "&videoId=";

export const GET_SEARCH_RESULTS =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=" +
  GOOGLE_API_KEY +
  "&q=";
