import InputMask from "react-input-mask";
import React from "react";
import TextField from "@material-ui/core/TextField";
import { OutlinedTextFieldProps } from "@material-ui/core";

export interface TextFieldMaskProps extends OutlinedTextFieldProps {
  mask: string;
}

const TextFieldMask: React.FC<TextFieldMaskProps> = ({
  mask,
  value,
  onChange,
  ...props
}) => {
  return (
    <InputMask mask={mask} value={value} onChange={onChange}>
      {() => {
        return <TextField {...props} />;
      }}
    </InputMask>
  );
};

export default TextFieldMask;
