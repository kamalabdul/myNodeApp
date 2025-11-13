import { render, screen, fireEvent } from '@testing-library/react';
import { vi,  describe, expect,  test } from 'vitest'
import userEvent from '@testing-library/user-event';

import Form  from './Form';

describe('Form Component', () => {

  // first test
  test('render the input form', () => {
    render(<Form onSubmit={() => {}} />);
    expect(screen.getByPlaceholderText(/Enter name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter email/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();

  } );

  // second test
  test('allows user to input text', async () => {
    render(<Form onSubmit={() => {}} />);
    const nameInput = screen.getByPlaceholderText(/enter name/i);
    const emailInput = screen.getByPlaceholderText(/enter email/i);

    await userEvent.type(nameInput, 'John Doe');
    await userEvent.type(emailInput, 'john@example.com');

    expect(nameInput).toHaveValue('John Doe');
    expect(emailInput).toHaveValue('john@example.com');
  });

  //third test
  test('calls onSubmit when form is submitted', async () => {
    const handleSubmit = vi.fn();
    render(<Form onSubmit={handleSubmit} />);
    const nameInput = screen.getByPlaceholderText(/enter name/i); //is a case-insensitive regex match for "Enter name".
    const emailInput = screen.getByPlaceholderText(/enter email/i);
    const button = screen.getByRole('button', { name: /submit/i });

    await userEvent.type(nameInput, 'Alice');
    await userEvent.type(emailInput, 'alice@example.com');
    fireEvent.click(button);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith({
      name: 'Alice',
      email: 'alice@example.com',
    });

    //Inputs should be cleared after submission
    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
  });





});//describe

