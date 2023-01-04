import { render, screen } from '@testing-library/react';
import Title from "../components/Title"/// ---IF--- you've created this file somewhere else change this path 
test('renders props properly', () => {
    render(<Title title="CHILDREN" number={3} />);
    expect(screen.getByText(/3/i)).toBeInTheDocument()
});

test('renders title properly', () => {
    render(<Title title="PERSON"/>);
    expect(screen.getByText(/PERSON/i)).toBeInTheDocument()
});