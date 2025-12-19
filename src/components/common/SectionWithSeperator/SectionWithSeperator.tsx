import '@components/common/SectionWithSeperator/SectionWithSeperator.scss';

import { DiagonalSeperator, Section, SectionProps } from '@components/common';
import styles from '@components/common/SectionWithSeperator/SectionWithSeperator.module.scss';
import { BackgroundVariant, ThemeVariant } from '@src/lib/utilities';
import { FC, PropsWithChildren } from 'react';

const { sectionWithSeperator } = styles;
const componentClassName = sectionWithSeperator;

export type SectionWithSeperatorProps = Omit<SectionProps, 'backgroundVariant'> & {
  variant: ThemeVariant;
  disableDivider?: boolean;
};

export const backgroundVariantMap = {
  [ThemeVariant.Light]: BackgroundVariant.SubtleWhite,
  [ThemeVariant.Dark]: BackgroundVariant.DarkGrey,
};

export const SeperatorVariantMap = {
  [ThemeVariant.Light]: BackgroundVariant.DarkGrey,
  [ThemeVariant.Dark]: BackgroundVariant.SubtleWhite,
};

export const SectionWithSeperator: FC<PropsWithChildren<SectionWithSeperatorProps>> = ({
  children,
  variant,
  padding,
  disableDivider = false,
}) => {
  return (
    <Section
      className={componentClassName}
      padding={padding}
      backgroundVariant={backgroundVariantMap[variant]}
    >
      {children}
      {disableDivider === false && (
        <DiagonalSeperator
          backgroundVariant={SeperatorVariantMap[variant]}
          reverse={variant === ThemeVariant.Light}
          className={`${componentClassName}__seperator`}
        />
      )}
    </Section>
  );
};
