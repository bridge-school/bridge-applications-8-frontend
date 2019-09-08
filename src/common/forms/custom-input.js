import React from "react";
import { ErrorMessage } from "formik";
import { Container, Label, InputField } from "./form-styles";

const CustomInput = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors },
  ...props
}) => {
  return (
    <Container db mv2>
      <Label db>{props.label}</Label>
      <ErrorMessage name={field.name} />
      <InputField br2 ba bw1 w_100 {...field} {...props} />
    </Container>
  );
};

export default CustomInput;
