import React from 'react';
import { render,screen } from '@testing-library/react';
import Friends from '../sections/Friends';

describe('Friends component', () => {
  it('renders a card for each friend in the user prop', () => {
    const user = {
      friends: [
        { id: 1, firstName: 'Alice', gender: 'Female', birthday: '2000-01-01', phone: '123-456-7890' },
        { id: 2, firstName: 'Bob', gender: 'Male', birthday: '1999-12-31', phone: '098-765-4321' },
      ],
    };
    render(<Friends user={user} />);
////add data-testid="friend-card" to the card component. 
/*example ;
<div className="friend"   data-testid="friend-card"  key={friend.id}>  
    <p>First name : {friend.firstName}</p>
</div>
*/
    const friendCards = screen.getAllByTestId('friend-card');
    expect(friendCards).toHaveLength(2);
    expect(friendCards[0]).toHaveTextContent('Alice');
    expect(friendCards[1]).toHaveTextContent('Bob');
});
});
