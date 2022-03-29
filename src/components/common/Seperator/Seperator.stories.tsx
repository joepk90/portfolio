import { ComponentMeta, Story } from '@storybook/react';
import Seperator, { Props } from '@components/common/Seperator/Seperator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Atoms/Seperator',
    component: Seperator,
} as ComponentMeta<typeof Seperator>;

export const Primary: Story<Props> = () => <Seperator />

Primary.storyName = 'Seperator';