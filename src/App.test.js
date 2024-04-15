import { render, screen } from '@testing-library/react';
import App from './App';

// TODO: Write functionality test cases (e.g can add & maybe delete task).
test('renders "Add Task *" texts', () => {
  render(<App />);
  const addTaskFormText = screen.getByText(/Add Task Form/i);
  expect(addTaskFormText).toBeInTheDocument();

  const addTaskListText = screen.getByText(/Add Task List/i);
  expect(addTaskListText).toBeInTheDocument();
});
