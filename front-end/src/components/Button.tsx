import styled from "@emotion/styled";
import {
  ButtonStyleProps,
  color,
  flexbox,
  fontSize,
  layout,
  space,
  variant,
} from "styled-system";

const Button = styled.button<ButtonStyleProps>`
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  ${space}
  ${color}
  ${layout}
  ${flexbox}
  ${fontSize}
  ${variant({
    variants: {
      primary: {
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        backgroundColor: "gray",
        borderRadius: "10px",
        width: "fit-content",
        boxShadow:
          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
      },
      secondary: {
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        backgroundColor: "white",
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
  })}
`;
export default Button;
