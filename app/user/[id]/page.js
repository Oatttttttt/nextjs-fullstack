import React from "react";
import { getData } from "./data";

export default async function Page({ params }) {
  const data = await getData(params.id);
  console.log(data);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>User Information: {params.id}</h1>
      <ul>
        {data.map((result) => (
          <React.Fragment key={result.CustomerID}>
            <h3>{result.FirstName}</h3>
            <h3>{result.LastName}</h3>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
