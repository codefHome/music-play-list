
import styled from '@emotion/styled';
import { space, color, layout, flexbox, SpaceProps, ColorProps, LayoutProps, FlexboxProps, BorderRadiusProps, borderRadius } from 'styled-system';

interface InputProps extends SpaceProps, ColorProps, LayoutProps, FlexboxProps,BorderRadiusProps {
 
}

const TextField = styled.input<InputProps>`
  padding: 8px;
  margin: 4px;
  width:100%;
  ${space}
  ${color}
  ${layout}
  ${flexbox}
  ${borderRadius}
`;

export default TextField;
