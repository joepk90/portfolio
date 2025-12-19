import { appendString } from '@src/lib';

export const headingLevels = [1, 2, 3, 4, 5, 6] as const;
export type HeadingLevels = (typeof headingLevels)[number];

export type HeadingProps = {
  children: string;
  level?: HeadingLevels;
  style?: React.CSSProperties;
  className?: string;
};

export const Heading = ({ children, style, className, level = 1 }: HeadingProps) => {
  const Component: React.ElementType = `h${level}` || 'h1';

  const classList = appendString('heading', className);

  return (
    <Component className={classList} style={style}>
      {children}
    </Component>
  );
};
