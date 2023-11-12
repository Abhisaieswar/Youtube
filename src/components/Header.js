import YoutubeIcon from "../utils/Icons/YoutubeIcon";
import { useSelector, useDispatch } from "react-redux";
import { setToggle } from "../utils/Redux/appSlice";
import { cacheResults } from "../utils/Redux/searchSlice";
import { useEffect, useState } from "react";
import { AUTO_SUGGESTIONS_API } from "../utils/Constants";
import useDebounce from "../utils/CustomHooks/useDebounce";
import { AiOutlineSearch } from "react-icons/ai";
import {
  useNavigate,
  createSearchParams,
  useSearchParams,
} from "react-router-dom";
import useIcons from "../utils/CustomHooks/useIcons";

const Header = () => {
  const { MenuIcon } = useIcons();
  const [params] = useSearchParams();
  const searchQuery = params.get("search_query");
  console.log(params);
  const [searchString, setSearchString] = useState(searchQuery ?? "");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isSuggestionClicked, setIsSuggestionClicked] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const debouncedSearchString = useDebounce(searchString, 200);
  const cachedResults = useSelector((store) => store.search);

  useEffect(() => {
    if (!cachedResults[debouncedSearchString] && debouncedSearchString) {
      getSuggestions();
    } else if (cachedResults[debouncedSearchString]) {
      setSuggestions(cachedResults[debouncedSearchString]);
    }
  }, [debouncedSearchString]);

  const getSuggestions = async () => {
    const data = await fetch(`${AUTO_SUGGESTIONS_API}${debouncedSearchString}`);

    const suggestions = await data.json();
    setSuggestions(suggestions[1]);

    if (suggestions[1].length && !isSuggestionClicked) {
      dispatch(cacheResults({ [debouncedSearchString]: suggestions[1] }));
    } else {
      setShowSuggestions(false);
    }
    return;
  };

  const handleSearch = (e) => {
    setSearchString(e.target.value);
    setIsSuggestionClicked(false);
  };

  const handleSearchClick = (s) => {
    setSearchString(s);
    setShowSuggestions(false);
    setIsSuggestionClicked(true);

    navigate({
      pathname: "results",
      search: createSearchParams({
        search_query: `${s}`,
      }).toString(),
    });
  };

  const handleMenu = () => {
    dispatch(setToggle());
  };

  return (
    <div className="text-lg flex justify-between fixed h-[70px] bg-black w-full z-10">
      <div className="flex sm:w-1/3 w-2/6">
        <div
          className="h-18 w-24 flex justify-center items-center hover:cursor-pointer"
          onClick={handleMenu}
        >
          {MenuIcon}
        </div>

        {/* TODO - Improve search UI */}

        <div
          className="h-18 w-24 flex justify-center items-center cursor-pointer mr-1"
          onClick={() => navigate("/")}
        >
          <YoutubeIcon />
        </div>
      </div>
      <div
        className="sm:w-1/3"
        onBlur={() => {
          if (showSuggestions) {
            setShowSuggestions(false);
          }
        }}
      >
        <div className="flex flex-col">
          <div className="flex justify-between border-gray-400 rounded-[25px] h-6 sm:h-10 sm:mt-3 mt-6 focus-within:border-blue-500 border">
            <input
              type="text"
              value={searchString}
              placeholder="Search"
              className="bg-black w-[150px] sm:w-[550px] h-4 sm:h-8 ml-4 mt-1 border-none focus:outline-none text-white text-[18px] .placeholder-gray-400::placeholder border-r border-gray-700"
              onChange={handleSearch}
              onFocus={() => {
                setShowSuggestions(true);
              }}
            />
            {/* TODO - add tooltip for search icon */}
            <div className="border-l-2 border-gray-600 justify-center items-center sm:w-14 w-8 p-2 flex">
              <AiOutlineSearch size={18} fill="white" />
            </div>
          </div>
          {showSuggestions && suggestions.length !== 0 && (
            <div className="text-white bg-[#212121] mt-1 rounded-lg sm:w-[590px] w-[200px] py-2 z-10">
              {suggestions?.map((suggestion, ind) => {
                return (
                  <div
                    key={ind}
                    className="pl-4 flex items-center sm:h-8 hover:cursor-default hover:bg-[#717171] z-50"
                    onMouseDown={() => handleSearchClick(suggestion)}
                  >
                    <AiOutlineSearch size={18} />
                    <p className="ml-3 text-[16px]">{suggestion}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="sm:w-1/3 flex sm:justify-end justify-center items-center w-1/6">
        <img
          alt="profile-icon"
          src="https://www.shutterstock.com/image-vector/avatar-line-icon-on-black-250nw-1323831116.jpg"
          className="sm:h-16 sm:w-16 h-12 w-12 sm:mr-12"
        />
      </div>
    </div>
  );
};

export default Header;
