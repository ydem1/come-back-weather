import React, { FC } from "react";
import { ListCities } from "src/components/ListCities";

export const MyCities: FC = () => (
  <section className="container">
    <h2>My Cities</h2>
    <ListCities />
  </section>
);

