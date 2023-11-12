import React from "react";

export const useShimmer = () => {
  const dummy = ["", "", "", "", "", "", "", ""];

  const homeVideoShimmer = dummy.map(() => {
    return (
      <div className="p-2 mx-3 my-3 w-[380px] h-[400px] hover:bg-sky-900 rounded-md">
        <div className="w-[380px] h-[250px] bg-gray-600"></div>
        <ul className="font-roboto mt-4">
          <li className="pb-2 font-bold bg-gray-600 w-[380px] h-[20px]"></li>
          <div className="text-sm">
            <li className="bg-gray-600 h-5 w-[150px] my-3"></li>
            <li className="bg-gray-600 h-5 w-[150px]"></li>
          </div>
        </ul>
      </div>
    );
  });

  return { homeVideoShimmer };
};
