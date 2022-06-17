import Dexie, { Table } from "dexie";

class FriendsDB extends Dexie {
  constructor() {
    super("friendsDB");
    this.version(2).stores({
      friends: `
        ++id`
    });
  }
}

export const db = new FriendsDB();
