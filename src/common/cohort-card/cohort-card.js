import React from "react";
import styled from "styled-components";
import tachyons from "styled-components-tachyons";
import LinkButton from "../../common/button/link";

const CohortCard = ({name, type, link}) => {
  const CohortCard = styled.div`
    padding: 1.05rem 1.60rem;
    display: block;
    background: #F0F0F0;
    margin: 0.8rem 0;
    border-radius: 0.5rem;
    ${tachyons}

  `;

  const H2 = styled.h2`
    font-size: 1.3rem;
    margin: 0;
  `;

  let buttonColor;

  if (type==="frontend development") {
    buttonColor = "pink";
  } else if (type==="backend development") {
    buttonColor = "blue";
  } else {
    buttonColor = "green";
  }


  return (
    <CohortCard flex justify_between items_center flex_wrap>
      <H2>{name}</H2>

      <LinkButton color={buttonColor} size="small" link={link}>{type}</LinkButton>
    </CohortCard>
  );
};

export default CohortCard;
