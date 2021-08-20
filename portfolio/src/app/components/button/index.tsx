import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface IButtonProps {
  theme?: "filled" | "outlined";
  shape?: "square" | "circle";
  text?: string;
  icon?: any;
  circleSize?: number;
  onClick?: MouseEventHandler;
}
interface IButtonStyleProps {
  theme?: "filled" | "outlined";
  shape?: "square" | "circle";
  circleSize?: number;
}

const BaseButton = styled.button<IButtonStyleProps>`
  border-style: solid;
  border-width: 2px;
  border-color: ${({ theme }) => (theme === "filled" ? "black" : `white`)};
  background-color: ${({ theme }) =>
    theme === "filled" ? "white" : `transparent`};
  color: ${({ theme }) => (theme === "filled" ? "black" : `white`)};

  &:hover {
    border-color: ${({ theme }) => (theme === "filled" ? "white" : `black`)};
    background-color: ${({ theme }) =>
      theme === "filled" ? "transparent" : `white`};
    color: ${({ theme }) => (theme === "filled" ? "white" : `black`)};
  }

  height: ${({ shape, circleSize }) =>
    shape === "circle" && circleSize ? `${circleSize}px` : ``};
  width: ${({ shape, circleSize }) =>
    shape === "circle" && circleSize ? `${circleSize}px` : ``};

  ${tw`
    pl-5
    pr-5
    pt-3
    pb-3
    justify-center
    items-center
    text-xs
    font-thin
    rounded-full
    md:font-semibold
    focus:outline-none
    transition-all
    duration-200
    ease-in-out
    m-1
`};

  border-radius: ${({ shape }) => (shape !== "circle" ? "3.75rem" : ``)};
  padding: ${({ shape }) => (shape === "circle" ? "3px 3px" : ``)};
`;

export default function Button(props: IButtonProps) {
  const { theme, shape, circleSize, text, icon, onClick } = props;
  return (
    <span onClick={onClick}>
      <BaseButton shape={shape} theme={theme} circleSize={circleSize}>
        {text}
        {icon}
      </BaseButton>
    </span>
  );
}
