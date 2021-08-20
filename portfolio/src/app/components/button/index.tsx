import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface IButtonProps {
  theme?: "filled" | "outlined";
  text: string;
  className?: string;
}

const BaseButton = styled.button`
  ${tw`
    pl-5
    pr-5
    pt-3
    pb-3
    outline-none
    rounded-md
    text-white
    text-xs
    font-thin
    md:font-semibold
    border-transparent
    border-2
    border-solid
    focus:outline-none
    transition-all
    duration-200
    ease-in-out
    m-1
`}
`;

const OutlinedButton = styled(BaseButton)`
  ${tw`
    bg-white
    hover:bg-transparent
    hover:text-black
    hover:border-white
`}
`;
const FilledButton = styled(BaseButton)`
  ${tw`
    border-white
    text-white
    bg-transparent
    hover:bg-white
    hover:text-black
    hover:border-transparent
`}
`;

export default function Button(props: IButtonProps) {
  const { theme, text, className } = props;

  if (theme === "filled")
    return <FilledButton className={className}>{text}</FilledButton>;
  else return <OutlinedButton className={className}>{text}</OutlinedButton>;
}
