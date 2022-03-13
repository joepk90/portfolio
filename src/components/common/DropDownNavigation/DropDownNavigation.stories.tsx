import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import DropDownNavigation, { Props } from '@components/common/DropDownNavigation/DropDownNavigation'; // TODO setup aliases in storybook..
import { menuItems } from '@src/config'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Molecules/DropDownNavigation',
    component: DropDownNavigation,
    argTypes: {
        isOpen: {
            options: [true, false],
            control: { type: 'boolean' },
        },
    },
} as ComponentMeta<typeof DropDownNavigation>;

const Template: Story<Props> = (args: any) => {
    return (
        <DropDownNavigation {...args} menuItems={menuItems} variant='dropdown'></DropDownNavigation>
    );
};

export const Primary = Template.bind({});
Primary.storyName = 'DropDownNavigation';