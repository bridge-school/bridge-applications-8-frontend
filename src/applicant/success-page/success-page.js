import React from 'react';
import tachyons from "styled-components-tachyons";
import styled from "styled-components";

const H3 = styled.h3`
  margin-top: 2rem;
  margin-bottom: 0;
  font-size: 2rem;
  text-align: center;
  line-height: 4rem;
  ${tachyons}
`;

const SuccessPage = props => {
  const { cohort } = props.location.state;
  return (
    <>
      <H3>🎉 Congratulations! You have successfully submitted your application to {cohort.name}.</H3>
      <H3> Applications will be open until {cohort.closeDate.split("T")[0]}. All applicants will hear back from the Bridge team by {cohort.responseDate.split("T")[0]}. 🎉</H3>
    </>
  );
};

export default SuccessPage;