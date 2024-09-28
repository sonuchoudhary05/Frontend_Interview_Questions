import './App.css';

import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const options = [
  { label: "JavaScript", value: "js" },
  { label: "Python", value: "py" },
  { label: "Java", value: "java" },
  { label: "Golang", value: "go" },
];
export function App(props) {
  return (
    <div className="App">
      <Autocomplete
        autoHighlight
        options={options}
        getOptionLabel={(option) => option.label}
        renderOption={(option) => <>{option.label}</>}
        value={""}
        renderInput={(params) => (
          <TextField
            variant="outlined"
            {...params}
            InputProps={{
              ...params.InputProps,
            }}
            InputLabelProps={{
              shrink: false,
              focused: false,
            }}
          />
        )}
      />
    </div>
  );
}
