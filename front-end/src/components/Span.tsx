
import styled from '@emotion/styled';
import { space, color, layout, flexbox, SpaceProps, ColorProps, LayoutProps, FlexboxProps } from 'styled-system';

interface SpanProps extends SpaceProps, ColorProps, LayoutProps, FlexboxProps {

}

const Span = styled.span<SpanProps>`
cursor:pointer
  ${space}
  ${color}
  ${layout}
  ${flexbox}
`;

export default Span;
