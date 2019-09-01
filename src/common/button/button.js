import React from "react";
import styled from 'styled-components';
import tachyons from 'styled-components-tachyons';


const Button = ({ children, color = 'green', size = 'default' }) => {
  const colorMap = {
    green: '#08C39D',
    blue: '#2FA1D4',
    pink: '#EB2C97'
  }

  const colorValue = colorMap[color] || colorMap['green']

  const Button = styled.button`
    border: 0;
    cursor: pointer;
    order-radius: 0;
    outline: 0;
    background-color: ${colorValue};
    font-size: ${size === 'large' ? '1.15rem' : '1rem'};
    font-weight: ${size === 'large' ? 'bold' : '500'};
    padding: ${size === 'large' ? '0.9em 4rem' : '0.88em 1.5rem'};
    ${tachyons}
  `;

  return (
    <Button dim br3 white>
      {children}
    </Button>
  );
}

export default Button;