import styled from "@emotion/styled";
import {
  space,
  typography,
  color,
  SpaceProps,
  TypographyProps,
  ColorProps,
  fontSize,
  variant,
  layout,
  LayoutProps,
  textStyle,
  TextStyleProps,
} from "styled-system";

interface StyledTextProps
  extends SpaceProps,
    TypographyProps,
    ColorProps,
    LayoutProps,
    TextStyleProps {
  variant?: "normal" | "bold" | "italic" | "heading1" | "heading2" | "heading3";
}

const Typography = styled.p<StyledTextProps>`
  ${space}
  ${typography}
  ${color}
  ${fontSize}
  ${textStyle}
  ${layout}
  ${variant({
    variants: {
      normal: {
        fontSize: "14px",
        color: "black",
        fontWeight: "normal",
        textAlign: "left",
      },
      bold: { fontWeight: "bold", fontSize: "14px", color: "black" },
      italic: {
        fontStyle: "italic",
        fontSize: "12px",
        color: "#000000",
        whiteSpace: "wrap",
      },
      heading1: {
        fontWeight: "bold",
        fontSize: "20px",
        color: "blue",
        textAlign: "center",
      },
      heading2: {
        fontWeight: 500,
        fontSize: "14px",
        color: "black",
        marginTop: "2px",
      },
      heading3: {
        fontStyle: "italic",
        fontSize: "12px",
        color: "#000000",
        whiteSpace: "wrap",
        cursor: "pointer",
        textDecoration: "underline",
      },
    },
  })}
`;

export default Typography;
