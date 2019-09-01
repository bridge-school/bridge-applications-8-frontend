import React from "react";
import styled from "styled-components";
import tachyons from "styled-components-tachyons";

const CohortCard = () => {
  const CohortCard = styled.div`
    padding: 1.25em 0;
  `;


  return (
    <CohortCard>
      <h2>Cohort Name</h2>

      <button>Placeholder Button Component</button>
    </CohortCard>
  );
};

export default CohortCard;
