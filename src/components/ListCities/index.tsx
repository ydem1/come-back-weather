import * as React from "react";
import { Alert, List } from "@mui/material";
import { ICity } from "src/types/city";
import { CityItem } from "./CityItem";

interface Props {
  cities: ICity[];
}

export const ListCities: React.FC<Props> = ({ cities }) =>
  cities.length !== 0 ? (
    <List>
      {cities.map((city) => (
        <CityItem key={city.name} {...city} />
      ))}
    </List>
  ) : (
    <Alert className="mt-5" severity="info">
      List is empty.
    </Alert>
  );
