import styled from "styled-components";
import tachyons from "styled-components-tachyons";
import arrowIcon from "../../images/triangle.svg";

export const Container = styled.div`
  ${tachyons}
`;

export const Row = styled.div`
  ${tachyons}

  > div {
    &:first-of-type {
      flex: 1;
      margin-right: 2rem;
    }

    &:last-of-type {
      margin-left: 2rem;
    }
  }
`;

export const Label = styled.label`
  padding: 0.5rem 0;
  font-size: 1rem;
  font-weight: bold;
  color: var(--black);
  ${tachyons}
`;

export const InputField = styled.input`
  padding: 0.75rem;
  border-color: var(--light-grey);
  background-color: var(--off-white);
  font-size: 1rem;
  ${tachyons}
`;

export const SelectField = styled.select`
  padding: 0.75rem;
  border-color: var(--light-grey);
  background: var(--off-white) url(${arrowIcon}) 99% center no-repeat;
  font-size: 1rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  ${tachyons}

  &::-ms-expand {
    display: none;
  }
`;

export const Error = styled.div`
  height: 1rem;
  font-size: 0.75rem;
  color: red;
`;
