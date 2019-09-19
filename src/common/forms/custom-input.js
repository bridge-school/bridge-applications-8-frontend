import React from "react";
import { ErrorMessage } from "formik";
import { Container, Label, InputField, Error } from "./form-styles";

const CustomInput = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors },
  ...props
}) => {
  return (
    <Container db mv2>
      <Label db {...props}>
        {props.label}
      </Label>
      <Error>
        <ErrorMessage name={field.name} {...props} />
      </Error>
      <InputField
        br2
        ba
        bw1
        w_100
        {...field}
        {...props}
        type="text"
        value={field.value || ""}
      />
    </Container>
  );
};

export default CustomInput;
