import React from "react";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

const SearchBar = ({ searchQuery, setSearchQuery }) => {

  return (
    <TextField
      id="search-bar"
      className="text"
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      label="Enter a movie name"
      variant="outlined"
      placeholder="Search..."
      size="small"
      value={searchQuery}
    />
  );
};

export default SearchBar;
