import styled from 'styled-components';

type IDivProps = {
  absolute?: boolean;
  fixed?: boolean;
  relative?: boolean;
  align?: string;
  background?: string;
  borderRadius?: string;
  boxShadow?: string;
  color?: string;
  flex?: boolean;
  flexColumn?: boolean;
  flexGrow?: boolean;
  noPointerEvents?: boolean;
  overflow?: string;
  transform?: string;
  transition?: string;
  h?: string;
  minHeight?: string;
  maxHeight?: string;
  m?: string;
  minWidth?: string;
  maxWidth?: string;
  p?: string;
  w?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  zIndex?: number;
};

const Div = styled.div<IDivProps>`
  ${({
    absolute,
    fixed,
    relative,
    align,
    background,
    borderRadius,
    boxShadow,
    color,
    flex,
    flexColumn,
    flexGrow,
    noPointerEvents,
    overflow,
    transform,
    transition,
    h,
    minHeight,
    maxHeight,
    w,
    minWidth,
    maxWidth,
    m,
    p,
    top,
    bottom,
    left,
    right,
    zIndex,
  }): string => `
    background: ${background || ''};
    border-radius: ${borderRadius || ''};
    box-shadow: ${boxShadow || ''};
    color: ${color || ''};
    display: ${(flex && 'flex') || ''};
    flex-direction: ${(flexColumn && 'column') || ''};
    flex-grow: ${(flexGrow && 1) || ''};
    justify-content: ${(flex && align) || ''};
    text-align: ${(!flex && align) || ''};
    position: ${(fixed && 'fixed') || (absolute && 'absolute') || (relative && 'relative') || ''};
    pointer-events: ${(noPointerEvents && 'none') || ''};
    overflow: ${overflow || ''};
    transform: ${transform || ''};
    transition: ${transition || ''};
    height: ${h || ''};
    min-height: ${minHeight || ''};
    max-height: ${maxHeight || ''};
    width: ${w || ''};
    min-width: ${minWidth || ''};
    max-width: ${maxWidth || ''};
    margin: ${m || ''};
    padding: ${p || ''};
    top: ${top || ''};
    bottom: ${bottom || ''};
    left: ${left || ''};
    right: ${right || ''};
    z-index: ${zIndex || ''};
  `}
`;

Div.defaultProps = {
  m: '0',
  p: '0',
};

export default Div;
