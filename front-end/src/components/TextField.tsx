import styled from "@emotion/styled";
import {
  space,
  color,
  layout,
  flexbox,
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  BorderRadiusProps,
  borderRadius,
  BorderProps,
  border,
  fontSize,
  FontSizeProps,
  lineHeight,
  LineHeightProps,
} from "styled-system";

interface InputProps
  extends SpaceProps,
    ColorProps,
    LayoutProps,
    FlexboxProps,
    BorderRadiusProps,
    BorderProps,
    FontSizeProps,
    LineHeightProps {}

const TextField = styled.input<InputProps>`
  padding: 8px;

  color: black;
  ${space}
  ${color}
  ${layout}
  ${flexbox}
  ${border}
  ${borderRadius}
  ${fontSize}
  ${lineHeight}
`;

export default TextField;
