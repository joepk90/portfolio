import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import Heading, { Props, headingLevels } from '@components/common/Heading/Heading';

export default {
    title: 'Atoms/Heading',
    component: Heading,
    argTypes: {
        level: {
            control: {
                type: 'select',
                options: headingLevels
            },
        },
        children: {
            control: {
                type: 'text',
            }
        }
    }

} as ComponentMeta<typeof Heading>;


const Template: Story<Props> = (args: Props) => {
    return (
        <Heading {...args}></Heading>
    );
};

export const Primary = Template.bind({});
Primary.storyName = 'Heading';
Primary.args = {
    level: 1,
    children: 'Heading Text'
}