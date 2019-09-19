import styled from "styled-components";
import tachyons from "styled-components-tachyons";
import arrowIcon from "../../images/triangle.svg";

export const Container = styled.div`
  ${tachyons}
`;

export const Row = styled.div`
  ${tachyons}

  > div {
    margin: 0 2rem;

    &:first-of-type {
      flex: 1;
      margin-left: 0;
      margin-right: 2rem;
    }

    &:last-of-type {
      margin-left: 2rem;
      margin-right: 0;
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

export const CheckField = styled.input`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  max-width: 100px;
  max-height: 100px;
  ${tachyons}

  &:checked ~ label:after {
    content: "";
    position: absolute;
    left: 42%;
    top: 78%;
    transform: rotate(45deg);
    background: var(--white);
    width: 5px;
    height: 5px;
    box-shadow: -5px 0 0 var(--white), 5px 0 0 var(--white),
      5px -12px 0 var(--white), 5px -5px 0 var(--white), 5px -6px 0 var(--white),
      5px -9px 0 var(--white), 5px -16px 0 var(--white),
      5px -19px 0 var(--white), 5px -21px 0 var(--white);
  }

  &:checked ~ label:before {
    background: var(--green);
    border-color: var(--green);
  }
`;

export const CheckboxLabel = styled.label`
  position: relative;
  padding: 0.5rem 0;
  height: 100%;
  font-size: 1rem;
  font-weight: bold;
  color: var(--black);
  ${tachyons}

  &:before {
    content: "";
    margin-right: 10px;
    display: block;
    vertical-align: text-top;
    width: 46px;
    height: 46px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    border: 0.125rem solid var(--light-grey);
    border-radius: 0.25rem;
    background-color: var(--off-white);
  }
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
