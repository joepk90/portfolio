import '@components/common/Section/Section.scss';

import {
  BackgroundVariant,
  backgroundVariantOptions,
  appendString,
  generateBEMModifiersClassList,
} from '@lib';
import { CSSProperties, FC, PropsWithChildren } from 'react';

export const sizeOptions = ['sm', 'md', 'lg'] as const;
type SizeOptions = (typeof sizeOptions)[number];

type SpacingOptions = {
  padding?: SizeOptions;
  paddingTop?: SizeOptions;
  paddingBottom?: SizeOptions;
  margin?: SizeOptions;
  marginTop?: SizeOptions;
  marginBottom?: SizeOptions;
};

export type SectionProps = SpacingOptions & {
  backgroundVariant?: BackgroundVariant;
  className?: string;
  styles?: CSSProperties;
};

export const Section: FC<PropsWithChildren<SectionProps>> = ({
  children,
  className,
  backgroundVariant,
  styles,
  ...spacingOptions
}) => {
  const getBackgroundStyle = () => {
    if (!backgroundVariant) {
      return {};
    }

    const backgroundColor = backgroundVariantOptions[backgroundVariant];

    if (typeof !backgroundColor === 'string') {
      return {};
    }

    return { backgroundColor };
  };

  const generateModifiers = () => {
    const classList = [];

    for (const option in spacingOptions) {
      switch (option) {
        case 'padding':
          classList.push(`padding-${spacingOptions[option]}`);
          break;
        case 'paddingTop':
          classList.push(`padding-top-${spacingOptions[option]}`);
          break;
        case 'paddingBottom':
          classList.push(`padding-bottom-${spacingOptions[option]}`);
          break;
        case 'margin':
          classList.push(`margin-${spacingOptions[option]}`);
          break;
        case 'marginTop':
          classList.push(`margin-top-${spacingOptions[option]}`);
          break;
        case 'marginBottom':
          classList.push(`margin-bottom-${spacingOptions[option]}`);
          break;
      }
    }

    return classList;
  };

  const modifiers = generateModifiers();

  let classList: string = generateBEMModifiersClassList('section', modifiers);

  classList = appendString(classList, className);

  return (
    <section className={classList} style={{ ...getBackgroundStyle(), ...styles }}>
      {children}
    </section>
  );
};
