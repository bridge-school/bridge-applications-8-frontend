import React from "react";
import { ErrorMessage } from "formik";
import { Container, CheckboxLabel, CheckField, Error } from "./form-styles";

const CustomCheckbox = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors },
  ...props
}) => {
  return (
    <Container db mv2>
      <CheckField
        id={field.name}
        br2
        ba
        bw1
        w_100
        {...field}
        {...props}
        type="checkbox"
      />
      <CheckboxLabel for={field.name} db>
        {props.label}
      </CheckboxLabel>
      <Error>
        <ErrorMessage name={field.name} />
      </Error>
    </Container>
  );
};

export default CustomCheckbox;
