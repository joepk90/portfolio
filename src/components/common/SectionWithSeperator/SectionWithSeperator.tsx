import { FC, PropsWithChildren } from 'react';

import { Section, SectionProps, DiagonalSeperator } from '@components/common';
import { BackgroundVariant } from '@src/lib/utilities';
import styles from '@components/common/SectionWithSeperator/SectionWithSeperator.module.scss';
import '@components/common/SectionWithSeperator/SectionWithSeperator.scss';

const { sectionWithSeperator } = styles;
const componentClassName = sectionWithSeperator;

export enum SectionWithSeperatorVariant {
  Dark = 'dark',
  Light = 'light',
}

export type SectionWithSeperatorProps = Omit<SectionProps, 'backgroundVariant'> & {
  variant: SectionWithSeperatorVariant;
  disableDivider?: boolean;
};

export const backgroundVariantMap = {
  [SectionWithSeperatorVariant.Light]: BackgroundVariant.LightGrey,
  [SectionWithSeperatorVariant.Dark]: BackgroundVariant.DarkGrey,
};

export const SeperatorVariantMap = {
  [SectionWithSeperatorVariant.Light]: BackgroundVariant.DarkGrey,
  [SectionWithSeperatorVariant.Dark]: BackgroundVariant.LightGrey,
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
          reverse={variant === SectionWithSeperatorVariant.Light}
          className={`${componentClassName}__seperator`}
        />
      )}
    </Section>
  );
};
