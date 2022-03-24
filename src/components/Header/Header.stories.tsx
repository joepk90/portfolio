import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Header from '@components/Header/Header';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Organisms/Header',
    component: Header,
} as ComponentMeta<typeof Header>;

export const Primary = () => <Header />

Primary.storyName = 'Header';