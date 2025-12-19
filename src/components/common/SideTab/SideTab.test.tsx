import { SideTab } from '@src/components/common'; // TODO setup aliases in storybook..
import { fireEvent, render, screen } from '@testing-library/react';

const sideTabLabel = `Tab Label`;
const sideTabContent = `Tab Content`;

const renderMockedElement = () => {
  return render(<SideTab label={sideTabLabel}>{sideTabContent}</SideTab>);
};

describe('SideTab component', () => {
  it('should render the wrapper complimentary element', () => {
    renderMockedElement();
    expect(screen.getByRole('complementary')).toBeInTheDocument();
  });

  describe('After no interaction', () => {
    it('should render the component label', () => {
      renderMockedElement();
      expect(screen.getByText(sideTabLabel)).toBeInTheDocument();
    });

    it('should render the component children', () => {
      renderMockedElement();
      expect(screen.getByText(sideTabContent)).toBeInTheDocument();
    });

    it('should render the components open/close button', () => {
      renderMockedElement();
      expect(screen.getByRole('button', { expanded: false })).toBeInTheDocument();
    });

    it('should have a hidden inner component', () => {
      renderMockedElement();
      expect(screen.getByRole('dialoge', { hidden: true })).toBeInTheDocument();
    });
  });

  describe('After clicking the button element once (opened)', () => {
    it('should open the tab when the components button is clicked', () => {
      renderMockedElement();
      const button = screen.getByRole('button', { expanded: false });
      fireEvent.click(button);
      expect(screen.getByRole('button', { expanded: true })).toBeInTheDocument();
    });

    it('should have a visible inner component when the component is clicked', () => {
      renderMockedElement();
      const button = screen.getByRole('button', { expanded: false });
      fireEvent.click(button);
      expect(screen.getByRole('dialoge', { hidden: false })).toBeInTheDocument();
    });
  });

  describe('After clicking the button element twice (closed)', () => {
    it('should close the tab when the components button is clicked', () => {
      renderMockedElement();
      const button = screen.getByRole('button', { expanded: false });
      fireEvent.click(button);
      fireEvent.click(button);
      expect(screen.getByRole('button', { expanded: false })).toBeInTheDocument();
    });

    it('should have a visible inner component when the component is clicked', () => {
      renderMockedElement();
      const button = screen.getByRole('button', { expanded: false });
      fireEvent.click(button);
      fireEvent.click(button);
      expect(screen.getByRole('dialoge', { hidden: true })).toBeInTheDocument();
    });
  });
});
