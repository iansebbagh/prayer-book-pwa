import React from "react";
import { db } from "../db";

export function ClearDatabaseButton() {
  return (
    <button
      className="large-button btn btn-primary"
      onClick={() => {
        db.transaction("rw", db.tables, async () => {
          await Promise.all(db.tables.map((table) => table.clear()));
        });
      }}
    >
      Clear All
    </button>
  );
}
