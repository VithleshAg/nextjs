// => for server side post request
// async function fetchCity() {
//   const response = await fetch(`${process.env.NEXT_URL}/api/city`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ cityName: "Pune" }),
//   });

//   const { message } = await response.json();
//   return message;
// }

// export default async function City() {
//   const city = await fetchCity();

//   return (
//     <div>
//       <p>Added city: {city}</p>
//     </div>
//   );
// };

"use client";

import React, { useState } from "react";

const City = () => {
  const [city, setCity] = useState("");
  const addCity = async () => {
    const data = await fetch("/api/city", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cityName: "Pune" }),
    });

    const {message} = await data.json();

    setCity(message);
  };

  return (
    <div>
      <button onClick={addCity}>Add City</button>
      {city ? <p>{city}</p> : ""}
    </div>
  );
};

export default City;