import React from "react";
import Header from '../header/header';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';

const PageLayout = ({children}) => {
  const Wrapper = styled.div`
    margin: 3.5rem auto;
    max-width: 1200px;
    ${tachyons}
  `;

  return(
    <div className="app-container">
      <Header title="Cohort Application" />
      <Wrapper w_90>
          {children}
      </Wrapper>
    </div>
  )
}

export default PageLayout;