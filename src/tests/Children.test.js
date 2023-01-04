import React from 'react';
import { render, screen } from '@testing-library/react';
import Children from '../sections/Children';/// ---IF--- you've created the CHILDREN component somewhere else CHANGE THIS PATH
describe('Children component', () => {
  it('should display the correct information for each child', () => {
    const user = {
      children: [
        {
          id: 1,
          avatar: 'avatar1.jpg',
          firstName: 'John',
          gender: 'male',
          birthday: '2019-06-07'
        },
        {
          id: 2,
          avatar: 'avatar2.jpg',
          firstName: 'Jane',
          gender: 'female',
          birthday: '2014-06-07'
        }
      ]
    };
    render(<Children user={user} />);

    ///// IMPORTANT : these tests are case sensitive so first name : john will not pass the test but 
    ////First name : John will pass the test
    // Check that the avatar image src is correct for each child
    //for this you need to  add  ----------data-testid="child-avatar"-------- to your img component like this;
   // <CardImg  alt="..." src={.....}   data-testid="child-avatar"/>

    expect(screen.getAllByTestId('child-avatar')[0]).toHaveAttribute('src', 'avatar1.jpg');
    expect(screen.getAllByTestId('child-avatar')[1]).toHaveAttribute('src', 'avatar2.jpg');

    // Check that the first name is displayed correctly for each child
    expect(screen.getAllByText(/first[ _]name/i)[0]).toHaveTextContent('First name : John'); ///it should be First name NOT first name 
    expect(screen.getAllByText(/first[ _]name/i)[1]).toHaveTextContent('First name : Jane');

    // Check that the gender is displayed correctly for each child
    expect(screen.getAllByText(/gender/i)[0]).toHaveTextContent('Gender : male');
    expect(screen.getAllByText(/gender/i)[1]).toHaveTextContent('Gender : female');

    // Check that the birthday is displayed correctly for each child
    expect(screen.getAllByText(/birthday/i)[0]).toHaveTextContent('Birthday : 2019-06-07');
    expect(screen.getAllByText(/birthday/i)[1]).toHaveTextContent('Birthday : 2014-06-07');
    });
});
