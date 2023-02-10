import { Metadata } from "next";

import { TestPage } from "./TestPage";
import { dehydrate, Hydrate } from "@tanstack/react-query";

import getQueryClient from "./getQueryClient";

// works if this is removed
export const metadata: Metadata = {
  title: "My Site",
};

export async function getBeers() {
  const res = await fetch("https://api.punkapi.com/v2/beers", {
    cache: "no-store",
  });

  const beers = await res.json();

  return beers;
}

export default async function Page() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["beers"], getBeers);

  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <TestPage />
    </Hydrate>
  );
}
