import { render, screen } from '@testing-library/react';
import { describe,expect, it, vi } from 'vitest';
import Button from './Button';
import { fireEvent} from "@testing-library/react";




describe('Button', () => {
  it('should render the button', () => {
    render(<Button />);
    const button= screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it('should render the disable button', () => {
    render(<Button disabled={true}/>);
    const button= screen.getByRole("button");
    expect(button).toBeDisabled();
  });
  it('should be clicked', () => {
    render(<Button />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    // Add your assertions here to check if the button was clicked
  });
  it('should render text', () => {
    render(<Button text="Click me" />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Click me");
  });

  
});