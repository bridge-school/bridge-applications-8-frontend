import React from "react";
import logo from "../../images/bridge-logo.svg";
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons'

const AdminView = ({ pathname, H4 }) => {

  if (pathname && (pathname.includes('admin-dashboard') || pathname.includes('create-cohort'))) {
    return (
      <H4 di self_center tr>Admin View</H4>
    );
  }

  return null;
}
const Header = ({title, pathname}) => {

  const Header = styled.header`
    padding: 1.25em 0;
    background-color: var(--purple);
  `;

  const HeaderAligner = styled.div`
    ${tachyons}
    margin: 0 auto;
  `;

  const Logo = styled.img`
    width: 50px;
    ${tachyons}
  `;

  const H1 = styled.h1`
    color: var(--white);
    padding: 0 1.5rem;
    margin: 0;
    font-size: 1.5rem;
    font-weight: bold;
    ${tachyons}
  `;

  const H4 = styled.h1`
    color: var(--white);
    padding: 0 1.5rem;
    margin-left: auto;
    margin-right: 0;
    font-size: 1rem;
    ${tachyons}
  `;

  return (
    <Header>
      <HeaderAligner w_90 flex items-center >
        <div>
          <a href="/">
            <Logo src={logo} alt="bridge logo" di />
          </a>
          <H1 di self_center>{title}</H1>
        </div>
        <AdminView pathname={pathname} H4={H4} />
      </HeaderAligner>
    </Header>
  )
}

export default Header;