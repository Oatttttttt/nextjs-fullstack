import React from "react";
import { getData } from "./data";

export default async function page() {
  const data = await getData();
  return (
    <div style={{ textAlign: "center" }}>
      <h1>User Information:</h1>
      <ul>
        {data.map((result) => (
          <React.Fragment key={result.CustomerID}>
            <li>{result.FirstName}</li>
            <li>{result.LastName}</li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
