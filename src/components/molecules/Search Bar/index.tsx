import { Search } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";

type SearchBarProps = {
  handleChange?: any;
  sx?: Object;
};

const SearchBar: React.FC<SearchBarProps> = (props) => {
  return (
    <TextField
      onChange={props.handleChange}
      sx={{ width: "100%", ...props.sx }}
      placeholder="Search by title or author"
      variant="standard"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton>
              <Search />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
