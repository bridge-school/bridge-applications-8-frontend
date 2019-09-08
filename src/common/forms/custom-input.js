import React from "react";
import { ErrorMessage } from "formik";
import styled from "styled-components";
import tachyons from "styled-components-tachyons";

const CustomInput = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors },
  ...props
}) => {
  const Container = styled.div`
    ${tachyons}
  `;

  const Label = styled.label`
    padding: 0.5rem 0;
    font-size: 1.25rem;
    font-weight: bold;
    color: var(--black);
    ${tachyons}
  `;

  const InputField = styled.input`
    padding: 0.75rem;
    border-color: var(--light-grey);
    background-color: var(--off-white);
    font-size: 1rem;
    ${tachyons}
  `;

  return (
    <Container db mv2>
      <Label db>{props.label}</Label>
      <ErrorMessage name="cohortName" />
      <InputField br2 ba bw1 w_100 {...field} {...props} />
    </Container>
  );
};

export default CustomInput;
