import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const MultilineInputComponent = (props) => {
  const { value, name, onChange } = props;
  return (
    <Box component="form" noValidate autoComplete="off">
      <div>
        <TextField
          fullWidth
          multiline
          name={name}
          onChange={onChange}
          rows={4}
          value={value}
        />
      </div>
    </Box>
  );
};

export default MultilineInputComponent;
