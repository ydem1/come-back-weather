import React, { FC } from "react";
import { ListCities } from "src/components/ListCities";

export const MyCities: FC = () => (
  <div className="flex-1">
    <h2>My Cities</h2>
    <ListCities />
  </div>
);

