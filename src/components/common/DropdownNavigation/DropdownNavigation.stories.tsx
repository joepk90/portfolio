import { DropdownNavigation, DropdownNavigationProps } from '@components'; // TODO setup aliases in storybook..
import { menuItems } from '@config';
import type { Meta, StoryFn } from '@storybook/nextjs-vite';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/DropdownNavigation',
  component: DropdownNavigation,
  argTypes: {
    isOpen: {
      options: [true, false],
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof DropdownNavigation>;

const Template: StoryFn<DropdownNavigationProps> = (args: DropdownNavigationProps) => {
  return <DropdownNavigation {...args} menuItems={menuItems}></DropdownNavigation>;
};

export const Primary = Template.bind({});
Primary.storyName = 'DropdownNavigation';
Primary.args = {
  isOpen: true,
};
