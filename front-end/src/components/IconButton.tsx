import React, { ReactNode, MouseEvent } from "react";
import styled from "@emotion/styled";
import { space, color } from "styled-system";

interface IconButtonProps {
  icon: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  color?: string;
  size?: number;
}

const IconButtonWrapper = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  ${space}
  ${color}
`;

const IconButton = ({
  icon,
  onClick,
  color,
  size,
  ...props
}: IconButtonProps) => {
  return (
    <IconButtonWrapper onClick={onClick} color={color} {...props}>
      {React.cloneElement(icon as React.ReactElement, { size: size })}
    </IconButtonWrapper>
  );
};

export default IconButton;
