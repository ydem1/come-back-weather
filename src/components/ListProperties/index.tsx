import React, { FC } from "react";
import { IProperty } from "src/types/property";
import { Property } from "./Property";

interface Props {
  properties: IProperty[];
}

export const ListProperties: FC<Props> = ({ properties }) => (
  <>
    {properties.map((property) => (
      <Property key={`${property.label}-${property.value}`} {...property} />
    ))}
  </>
);
