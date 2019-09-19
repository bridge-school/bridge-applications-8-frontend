import React from "react";
import styled from "styled-components";
import tachyons from "styled-components-tachyons";

const LinkButton = ({ children, link, color = "green", size = "default" }) => {
  const colorMap = {
    green: "#08C39D",
    blue: "#2FA1D4",
    pink: "#EB2C97"
  };

  const colorValue = colorMap[color] || colorMap["green"];

  const Button = styled.a`
    border: 0;
    cursor: pointer;
    border-radius: 0;
    outline: 0;
    background-color: ${colorValue};
    min-width: 220px;
    text-align: center;
    text-decoration: none;
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
  `;

  return (
    <Button dim br3 white href={link}>
      {children}
    </Button>
  );
};

export default LinkButton;
