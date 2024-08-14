import React, { FC } from "react";
import { Typography } from "@mui/material";
import { IProperty } from "src/types/property";

export const Property: FC<IProperty> = ({ label, value }) => (
  <Typography variant="body2" color="text.secondary">
    {label} {value}
  </Typography>
);
