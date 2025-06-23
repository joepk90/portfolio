// import { useEffect } from 'react';
import { appendString } from '@src/lib/utilities/utilities';

// https://betterprogramming.pub/make-a-flexbox-react-component-e96a038da7ec

type Display = 'flex' | 'inline-flex';
type FlexDirection = 'row' | 'column';

type justifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'initial'
  | 'inherit';

type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';

type AlignItems =
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'initial'
  | 'inherit';

type StyleOptions = {
  display?: Display;
  flexDirection?: FlexDirection;
  justifyContent?: justifyContent;
  flexWrap?: FlexWrap;
  alignItems?: AlignItems;
  flexGrow?: number;
  flexShrink?: number;
  maxWidth?: number | string;
  height?: string;
};

type FlexWrapperProps = StyleOptions & {
  children: any;
  className?: string;
  // styles: Style
  // smallStyles: Style
  // mediumStyles: Style
  // largeStyles: Style
};

export const FlexWrapper = (props: FlexWrapperProps) => {
  // TODO: setup breakpoint options
  // const [style: , setStyle] = useState(style);
  // useEffect(() => {
  //   // Switch Statement:
  //   //  if wi window is large then the small breakpoint, set the smallStyles
  //   setStyle(smallStyles)
  // }[style, smallStyles, mediumStyles, largeStyles])

  const { className, display, ...rest } = props;

  const classList = appendString('flex-wrapper', className);

  return (
    <div
      className={classList}
      style={{
        display: display || 'flex',
        ...rest,
      }}
    >
      {props.children}
    </div>
  );
};

export default FlexWrapper;
