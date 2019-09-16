import React from "react";
import { ErrorMessage } from "formik";
import { Container, Label, SelectField, Error } from "./form-styles";

const CustomSelect = ({
  field, // { name, value, onChange, onBlur }
  form,
  ...props
}) => {
  const removeSpaces = string => string.toLowerCase().replace(" ", "-");
  return (
    <Container db mv2>
      <Label db>{props.label}</Label>
      <Error>
        <ErrorMessage name={field.name} />
      </Error>
      <SelectField
        br2
        ba
        bw1
        w_100
        name="cohorttype"
        component="select"
        {...field}
      >
        <option value="">{props.optionsLabel}</option>
        {props.options.map(option => (
          <option key={removeSpaces(option)} value={removeSpaces(option)}>
            {option}
          </option>
        ))}
      </SelectField>
    </Container>
  );
};

export default CustomSelect;
