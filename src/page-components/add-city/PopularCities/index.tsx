import React, { FC } from "react";
import { ListCitiesCards } from "src/components/ListCitiesCards";

export const PopularCities: FC = () => (
  <section className="container">
    <h2>Popular Cities</h2>

    <ListCitiesCards />
  </section>
);
