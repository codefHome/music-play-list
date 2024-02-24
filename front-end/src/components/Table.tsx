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
  variant,
} from "styled-system";

interface StyledTableProps
  extends SpaceProps,
    ColorProps,
    LayoutProps,
    FlexboxProps {}

const Table = styled.table<StyledTableProps>`
  width: 100%;
  border-collapse: collapse;
  ${space}
  ${color}
  ${layout}
  ${flexbox}
`;

interface StyledRowProps
  extends SpaceProps,
    ColorProps,
    LayoutProps,
    FlexboxProps {}

const Row = styled.tr<StyledRowProps>`
  &:nth-child(even) {
    background-color: #d2f2f2;
  }
  &:nth-child(odd) {
    background-color: #g2f2f2;
  }
  &:hover {
    background-color: #f0e0e0;
  }
  width: 100% ${space} ${color} ${layout} ${flexbox};
`;

interface StyledCellProps
  extends SpaceProps,
    ColorProps,
    LayoutProps,
    FlexboxProps {
  variant?: "primary" | "secondary";
}

const Cell = styled.td<StyledCellProps>`
  width: 20%;
  word-break: break-all;
  white-space: wrap;
  color: black;
  ${space} ${color} ${layout} ${flexbox}
    ${variant({
    variants: {
      primary: {
        fontSize: ["16px", "20px"],
        fontWeight: "bold",
        color: "orange",
        textAlign: "center",
        borderBottom: "1px solid gray",
      },
      secondary: {
        fontSize: "14px",
        fontWeight: "normal",
        color: "black",
        textAlign: "center",
      },
    },
  })};
`;

export { Table, Row, Cell };
