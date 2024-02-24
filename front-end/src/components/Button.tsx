import styled from "@emotion/styled";
import {
  BackgroundProps,
  BorderProps,
  ButtonStyleProps,
  background,
  border,
  color,
  flexbox,
  fontSize,
  layout,
  space,
  variant,
} from "styled-system";

interface ButtonProps extends ButtonStyleProps, BorderProps, BackgroundProps {
  variant?: "primary" | "secondary" | "delete" | "auth";
}

const Button = styled.button<ButtonProps>`
  padding: 8px 16px;
  font-size: 16px;
  color: black;
  cursor: pointer;
  background-color: ${({ disabled }) => (disabled ? "gray" : "white")} ${space}
    ${color} ${layout} ${flexbox} ${fontSize} ${border} ${background}
    ${variant({
      variants: {
        primary: {
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          // backgroundColor: "gray",
          borderRadius: "10px",
          width: "fit-content",
          boxShadow:
            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
        },
        secondary: {
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          color: "black",
          // backgroundColor: "white",
          borderRadius: "25%",
          width: "fit-content",
          height: "fit-content",
          fontSize: "12px",
          boxShadow:
            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
        },
        delete: {
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          backgroundColor: "red",
          borderRadius: "25%",
          width: "fit-content",
          height: "fit-content",
          fontSize: "12px",
          boxShadow:
            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
        },
        auth: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#10bf9f",
          borderRadius: "40px",
          width: "fit-content",
          height: "fit-content",
          fontSize: "12px",
          padding: "10px 20px",
          boxShadow:
            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
        },
      },
    })};
`;

export default Button;
