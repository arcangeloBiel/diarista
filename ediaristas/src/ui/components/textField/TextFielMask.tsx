import InputMask from "react-input-mask";
import React from "react";
import TextField from "@material-ui/core/TextField";
import { OutlinedTextFieldProps } from "@material-ui/core";

export interface TextFieldMaskProps extends OutlinedTextFieldProps {
  mask: string;
}

const TextFieldMask: React.FC<TextFieldMaskProps> = (props) => {
  return (
    <InputMask mask={props.mask}>
      {() => {
        return <TextField />;
      }}
    </InputMask>
  );
};

export default TextFieldMask;
