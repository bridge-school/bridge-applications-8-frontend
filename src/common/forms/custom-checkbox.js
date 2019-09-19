import React from "react";
import { Container, CheckboxLabel, CheckField } from "./form-styles";

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
      <CheckboxLabel htmlFor={field.name} >
        {props.label}
      </CheckboxLabel>
    </Container>
  );
};

export default CustomCheckbox;
