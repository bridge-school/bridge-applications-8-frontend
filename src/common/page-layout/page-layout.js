import React from "react";
import Header from '../header/header';
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';

const Wrapper = styled.div`
    margin: 3.5rem auto;
    max-width: 1200px;
    ${tachyons}
  `;

export default class PageLayout extends React.Component {

  render() {
    const { pathname } = this.props.location;
    console.log('Path Name = ', pathname);

    return (
      <div className="app-container">
        <Header title="Cohort Application" pathname={pathname} />
        <Wrapper w_90>
          {this.props.children}
        </Wrapper>
      </div>
    );
  }

};