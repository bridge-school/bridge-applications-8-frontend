import styled from "styled-components";
import tachyons from "styled-components-tachyons";
import arrowIcon from "../../images/triangle.svg";

export const Container = styled.div`
  ${tachyons}
`;

export const Label = styled.label`
  padding: 0.5rem 0;
  font-size: 1.25rem;
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

