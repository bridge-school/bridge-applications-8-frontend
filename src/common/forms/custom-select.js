import React from "react";
import { ErrorMessage } from "formik";
import { Container, Label, SelectField, Error } from "./form-styles";

const CustomSelect = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors },
  ...props
}) => {
  return (
    <Container db mv2>
      <Label db>{props.label}</Label>
      <Error>
        <ErrorMessage name={field.name} />
      </Error>
      <SelectField br2 ba bw1 w_100 name="cohorttype" component="select">
        <option value="">Select Cohort Type</option>
        <option value="frontend">Front End</option>
        <option value="backend">Back End</option>
        <option value="productdesign">Product Design</option>
      </SelectField>
    </Container>
  );
};

export default CustomSelect;
