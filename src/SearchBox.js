import React from "react";

const SearchBox = ({serachfield, searchChange}) => {
  return (
    <div className="m-2 text-center p-2">
      <input
        type={"serach"} 
        // type = "search"
        placeholder="search share holders"
        className="w-50 p-2 searchbox1"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
