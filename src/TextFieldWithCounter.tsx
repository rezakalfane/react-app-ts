import React, { useState } from 'react';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";

export function TextFieldWithCounter(props: any) {
  const { maxLength, value, ...otherProps } = props;

  const [textValue, setTextValue] = useState(value || "");
  const [count, setCount] = useState(value && value.length || 0);

  function handleChange(event: any) {
    setCount(event.target.value.length); 
    setTextValue(event.target.value);
  }

  return (
    <React.Fragment>
    <TextField
      inputProps={{
        maxLength
      }}
      {...otherProps}
      onChange={handleChange}
      value={textValue}
    />
    <Box sx={{'mt': -3, 'mb': 0.5}}>
      <Typography 
        align="right" 
        variant="body2"
        component="div">{count} / {maxLength}</Typography>
    </Box>
    </React.Fragment>
  );
}