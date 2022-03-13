import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MenuItem, { Props } from '@components/common/MenuItem/MenuItem'; // TODO setup aliases in storybook..
import { menuItems } from '@src/config'

export default {
    title: 'Atoms/MenuItem',
    component: MenuItem,
    argTypes: {
        variant: {}
    }

} as ComponentMeta<typeof MenuItem>;


const Template: Story<Props> = (args: any) => {
    return (
        <ul style={{ listStyle: 'none', padding: 0 }}>
            <MenuItem {...menuItems[0]} {...args}></MenuItem>
        </ul>

    );
};

export const Primary = Template.bind({});
Primary.storyName = 'Primary';

export const Dropdown = Template.bind({});
Dropdown.storyName = 'Dropdown';
Dropdown.args = {
    variant: 'dropdown'
}

// export const Button = Template.bind({});
// Button.storyName = 'Button';
// Primary.args = {
//     variant: 'button'
// }
