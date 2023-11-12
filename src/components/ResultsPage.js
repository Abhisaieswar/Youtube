import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { GET_SEARCH_RESULTS } from "../utils/Constants";
import SearchResult from "./SearchResult";

const ResultsPage = () => {
  const [searchResultsItems, setSearchResultsItems] = useState([]);
  const [params] = useSearchParams();
  const searchQuery = params.get("search_query");

  const getSearchResults = async () => {
    const data = await fetch(GET_SEARCH_RESULTS + searchQuery);
    const jsonData = await data.json();

    setSearchResultsItems(jsonData);
  };

  useEffect(() => {
    getSearchResults();
  }, [searchQuery]);

  if (searchResultsItems.length === 0)
    return (
      <div className="flex items-center justify-center text-white w-full">
        Loading
      </div>
    );

  return (
    <>
      <div className="text-white sm:ml-[20vw] h-screen">
        {searchResultsItems.items.map((result, index) => {
          return <SearchResult data={result} key={index} />;
        })}
      </div>
    </>
  );
};

export default ResultsPage;
