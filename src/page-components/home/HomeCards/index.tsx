import React, { FC } from "react";
import { ListCitiesCards } from "src/components/ListCitiesCards";

export const HomeCards: FC = () => (
  <section className="container">
    <h2>Home Cards</h2>

    <ListCitiesCards />
  </section>
);
