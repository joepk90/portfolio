import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import Navigation, { Props } from '@components/common/Navigation/Navigation'; // TODO setup aliases in storybook..
import { menuItems } from '@src/config'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Molecules/Navigation',
    component: Navigation,
} as ComponentMeta<typeof Navigation>;

const Template: Story<Props> = (args: any) => {
    return (
        <Navigation {...args} menuItems={menuItems}></Navigation>
    );
};

export const Primary = Template.bind({});
Primary.storyName = 'Navigation';