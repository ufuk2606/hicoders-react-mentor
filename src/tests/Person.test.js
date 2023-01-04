import React from 'react';
import { render, cleanup,screen } from '@testing-library/react';
import Person from '../sections/Person';/// ---IF--- you've created this file somewhere else change this path


afterEach(cleanup);

test('renders person component', () => {
    const user = [{id: 1,avatar: 'https://example.com/avatar.png', first_name: 'John',    last_name: 'Doe',    address: '123 Main St',    gender: 'male',    email: 'john.doe@example.com'  }];
    render(<Person user={user} />);
    expect(screen.getByText(/first[ _]name/i)).toBeInTheDocument();
    expect(screen.getByText(/last[ _]name/i)).toBeInTheDocument();
    expect(screen.getByText(/address/i)).toBeInTheDocument();
    expect(screen.getByText(/gender/i)).toBeInTheDocument();
    expect(screen.getByText(/email/i)).toBeInTheDocument();
});
