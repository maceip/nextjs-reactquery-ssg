"use client";

import { getBeers } from "./page";
import { useQuery } from "@tanstack/react-query";

export function Beers() {
  const beersQuery = useQuery(["beers"], getBeers);

  return (
    <ul>
      {beersQuery.data.map((beer) => (
        <li>{beer.name}</li>
      ))}
    </ul>
  );
}
