import React from "react";
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';
import Button from '../../common/button/button';

const AdminDashboard = () => {
  const H1 = styled.h1`
    padding: 0;
    margin: 0;
    font-size: 2.2rem;
    font-weight: bold;
    ${tachyons}
  `;

  const Wrapper = styled.div`
    ${tachyons}
  `;

  return(
    <Wrapper flex justify_between>
      <H1 di>Cohort Application Forms</H1>
      <Button color="green" size="large">CREATE APPLICATION GROUP</Button>
    </Wrapper>
  )
}

export default AdminDashboard;