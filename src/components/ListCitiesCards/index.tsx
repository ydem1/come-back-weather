import React, { FC } from "react";
import { CityCard } from "./CityCard";

export const ListCitiesCards: FC = () => (
  <div className="flex gap-5 py-5">
    <CityCard />
    <CityCard />
    <CityCard />
    <CityCard />
  </div>
);
