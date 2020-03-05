import styled from 'styled-components';

type IDivProps = {
  align?: string;
  background?: string;
  color?: string;
  flex?: boolean;
  flexColumn?: boolean;
  flexGrow?: boolean;
  h?: string;
  m?: string;
  p?: string;
  w?: string;
};

const Div = styled.div<IDivProps>`
  ${({ background }): string => (background ? `background: ${background};` : '')}
  ${({ color }): string => (color ? `color: ${color};` : '')}
  ${({ flex }): string => (flex ? 'display: flex;' : '')}
  ${({ flexColumn }): string => (flexColumn ? 'flex-direction: column;' : '')}
  ${({ flexGrow }): string => (flexGrow ? 'flex-grow: 1;' : '')}
  ${({ flex, align }): string => (align ? `${flex ? 'justify-content' : 'align'}: ${align};` : '')}
  ${({ h }): string => (h ? `height: ${h};` : '')}
  ${({ m }): string => (m ? `margin: ${m};` : '')}
  ${({ p }): string => (p ? `padding: ${p};` : '')}
  ${({ w }): string => (w ? `width: ${w};` : '')}
`;

Div.defaultProps = {
  m: '0',
  p: '0',
};

export default Div;
