import React, { FC } from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";

interface ValidationTextFieldProps extends Omit<TextFieldProps, "error" | "helperText"> {
  error?: boolean;
  helperText?: string;
  label: string;
  required?: boolean;
}

export const ValidationTextFields: FC<ValidationTextFieldProps> = ({
  label,
  required,
  error = false, 
  helperText = "",
  ...otherProps
}) => {
  return (
    <TextField
      fullWidth
      required={required}
      id="outlined-required"
      label={label}
      variant="outlined"
      error={error} // Pass the error state explicitly
      helperText={helperText} // Pass the helperText explicitly
      {...otherProps}
    />
  );
};
