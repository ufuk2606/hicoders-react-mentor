import React from "react";  // Import the React library
import Title from "../components/Title";  // Import the Title component from the "../components/Title" directory

// The Friends function takes in a "user" prop and returns a JSX element
function Friends({ user }) {

  return (
    <div>
      <Title title="FRIENDS" number={user.friends.length} />
      <div className="d-flex justify-content-around">
        {user.friends.map((friend) => {
          return (
            <div data-testid="friend-card">
              <img src={friend.avatar} alt="avatar" />
              <p>first name : {friend.firstName}</p>
              <p>gender : {friend.gender}</p>
              <p>Birthday : {friend.birthday}</p>
              <p>Phone : {friend.phone}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Friends;  // Export the Friends component
