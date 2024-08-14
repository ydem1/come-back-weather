import React, { FC } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { ListProperties } from "src/components/ListProperties";
import { WeatherWind } from "src/types/cityWithWeatherData";
import { getPropertiesWind } from "./constants";

export const Wind: FC<WeatherWind> = ({ ...wind }) => {
  return (
    <section className="container">
      <Card className="my-2">
        <CardContent>
          <Typography variant="h6" component="div">
            Wind Information
          </Typography>

          <ListProperties properties={getPropertiesWind(wind)} />
        </CardContent>
      </Card>
    </section>
  );
};
