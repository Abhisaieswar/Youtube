import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useIcons from "../utils/CustomHooks/useIcons";

const GetSideItems = () => {
  const icons = useIcons();
  const options1 = [
    { label: "Home", icon: icons.HomeIcon },
    { label: "Shorts", icon: icons.ShortsIcon },
    {
      label: "Subscriptions",
      icon: icons.SubscriptionsIcon,
    },
  ];

  const options2 = [
    {
      label: "Library",
      icon: icons.LibraryIcon,
    },
    { label: "History", icon: icons.HistoryIcon },
  ];

  const exploreOptions = [
    { label: "Trending", icon: icons.TrendingIcon },
    { label: "Shopping", icon: icons.ShoppingIcon },
    { label: "Music", icon: icons.MusicIcon },
    { label: "Movies", icon: icons.MoviesIcon },
    { label: "Live", icon: icons.LiveIcon },
    { label: "Gaming", icon: icons.GamingIcon },
    { label: "News", icon: icons.NewsIcon },
    { label: "Sports", icon: icons.SportsIcon },
    { label: "Learning", icon: icons.LearningIcon },
    { label: "Fasion & Beauty", icon: icons.FashionIcon },
    { label: "Podcasts", icon: icons.PodcastsIcon },
  ];
  return [options1, options2, exploreOptions];
};

const SideBar = () => {
  const isToggleOn = useSelector((store) => store.app.isToggleOn);

  const [options1, options2, exploreOptions] = GetSideItems();

  const sections = [options1, options2, exploreOptions];

  return isToggleOn ? (
    <div className="overflow-y-auto w-[250px] h-full sm:h-[calc(100vh-70px)] fixed text-white bg-black z-10">
      {sections.map((section, index) => {
        return (
          <>
            <div className="w-[220px]" key={index}>
              <div className="pl-5 flex flex-col">
                {section.map((option) => {
                  return (
                    <Link to={"/"}>
                      <div className="flex hover:bg-gray-500 p-2 rounded-lg">
                        <div className="mr-3">{option.icon}</div>
                        <div>{option.label}</div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
            {index !== sections.length - 1 && (
              <div className="underline text-gray-800 border-b-[1px] ml-2 my-5"></div>
            )}
          </>
        );
      })}
    </div>
  ) : (
    <></>
  );
};

export default SideBar;
