import React, {  useState } from "react";
import { db } from "../db";

export function AddFriend() {
  const [friend, setFriend] = useState({
    name: "",
    age: '20'
  });

  function onSubmit(event) {
    db.friends.add(friend);
    event.preventDefault();
    setFriend({
      name: "",
      age: '20'
    });
  }

  return (
    <div>
      <h3>Add new friend</h3>
      <form onSubmit={onSubmit}>
        <label>
          Name:
          <input
            type="text"
            autoFocus
            placeholder="Enter name..."
            value={friend.name}
            onChange={(ev) =>
              setFriend((friend) => ({
                ...friend,
                name: ev.target.value
              }))
            }
          />
        </label>

        <label>
          Age:
          <input
            type="text"
            value={friend.age}
            onChange={(ev) =>
              setFriend((friend) => ({
                ...friend,
                age: ev.target.value
              }))
            }
          />
        </label>
        <button type="submit">Add Friend</button>
      </form>
    </div>
  );
}
