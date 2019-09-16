import React from "react";
import styled from "styled-components";
import tachyons from "styled-components-tachyons";

const Button = ({
  children,
  color = "green",
  size = "default",
  type = "button",
  eventHandler = () => {}
}) => {
  const colorMap = {
    green: "#08C39D",
    blue: "#2FA1D4",
    pink: "#EB2C97",
    white: "var(--white)"
  };

  const hoverMap = {
    green: "#EB2C97",
    blue: "#EB2C97",
    pink: "#08C39D",
    white: "#08C39D"
  };

  const colorValue = colorMap[color] || colorMap["green"];
  const hoverBGColor = hoverMap[color] || hoverMap["green"];

  const Button = styled.button`
    border: 3px solid ${color === "white" ? "#08C39D" : colorValue};
    cursor: pointer;
    border-radius: 0;
    outline: 0;
    background-color: ${colorValue};
    min-width: 220px;
    font-size: ${size === "large" || size === "feature" ? "1.15rem" : "1rem"};
    font-weight: ${size === "large" || size === "feature" ? "bold" : "500"};
    color: ${color === "white" ? "#08C39D" : "var(--white)"};
    text-transform: ${size === "large" || size === "feature"
      ? "uppercase"
      : "none"};
    padding: ${size === "large" || size === "feature"
      ? "0.9em 4rem"
      : "0.88em 1.5rem"};
    ${size === "feature"
      ? "display: block; width: 50%; margin: 2rem auto"
      : ""};
    transition: 0.3s all ease;
    ${tachyons}

    &:hover {
      border-color: ${hoverBGColor};
      background: ${hoverBGColor};
      color: var(--white);
    }
  `;

  return (
    <Button onClick={eventHandler} type={type} br3>
      {children}
    </Button>
  );
};

export default Button;
