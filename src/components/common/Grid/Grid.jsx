import '@components/common/Grid/Grid.scss'; // custom overrides

import {
  largeHandsetLandscapeSize,
  largeTabletSize,
  mediumHandsetLandscapeSize,
  mediumHandsetSize,
} from '@styles/base/_variables-breakpoints.module.scss';
import React from 'react';
import { Col as ReactCol, Container as ReactContainer, Row as ReactRow } from 'react-grid';

// TODO Setup or research alternative grid components

const styles = {
  breakpoints: {
    xs: 0,
    sm: mediumHandsetSize,
    md: mediumHandsetLandscapeSize,
    lg: largeHandsetLandscapeSize,
    xl: largeTabletSize,
  },
  containerMaxWidths: { sm: 1024, md: 1024, lg: 1024, xl: 1024 },
  columns: 12,
  gutterWidth: 30,
};

export const GridContainer = (props) => (
  <ReactContainer {...props} styles={styles} className="grid-container" />
);
export const Row = (props) => <ReactRow {...props} styles={styles} className="row" />;
export const Col = (props) => <ReactCol {...props} styles={styles} className="column" />;
