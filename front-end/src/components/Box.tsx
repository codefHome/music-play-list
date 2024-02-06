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
  boxShadow,
  BoxShadowProps,
} from "styled-system";

interface StyledDivProps
  extends SpaceProps,
    ColorProps,
    LayoutProps,
    FlexboxProps,BoxShadowProps {
  variant?:
    | "primary"
    | "secondary"
    | "default"
    | "gap"
    | "charts"
    | "summary"
    | "tableStyle"
    | "loading"
}

const Box = styled.div<StyledDivProps>`
  ${space}
  ${color}
  ${layout}
  ${flexbox}
  ${boxShadow}
  ${variant({
    variants: {
      primary: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        color: "white",
        backgroundColor: "#FFF",
      },
      secondary: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "white",
        // width: "200vh",
        backgroundColor: "#FFF",
        borderRadius: "15px",
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        padding: "15px 15px",
      },
      default: {
        display: "flex",
        flexDirection: "row",
        color: "white",
        backgroundColor: "#FFF",
        justifyContent: "start",
        alignItems: "center",
        gap: "15px",
      },
      gap: {
        gap: "15px",
      },
      charts: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "white",
        backgroundColor: "#FFF",
        borderRadius: "15px",
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        padding: "15px 15px",
        marginLeft: "50px",
      },
      summary: {
        display: "flex",
        flexDirection: "row",
        width: "900px",
        height: "400px",
        justifyContent: "space-evenly",
        color: "white",
        backgroundColor: "#FFF",
        borderRadius: "15px",
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        padding: "15px 15px",
        gap: "50px",
        margingTop: "20px",
      },

      tableStyle: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "white",
        height: "350px",
        backgroundColor: "#FFF",
        borderRadius: "15px",
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        padding: "15px 15px",
      },
      loading: {
        position: 'absolute',
        top:' 50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      },
    },
  })}
`;

export default Box;
