import * as React from 'react';
import { CSSProperties, HTMLAttributes, SFC } from 'react';

export interface IFlexProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: CSSProperties['alignItems'];
  column?: boolean;
  justify?: CSSProperties['justifyContent'];
  margin?: CSSProperties['margin'];
  padding?: CSSProperties['padding'];
  style?: CSSProperties;
  width?: CSSProperties['width'];
  wrap?: boolean;
}

export const Flex: SFC<IFlexProps> = ({ column, width, wrap, justify, align, style, margin, padding, ...props }) => (
  <div
    style={{
      alignItems: align,
      boxSizing: 'border-box',
      ...wrap && {
        flexWrap: 'wrap'
      },
      display: 'flex',
      flexDirection: column ? 'column' : 'row',
      justifyContent: justify,
      margin,
      padding,
      width,
      ...style
    }}
    {...props}
  />
);
