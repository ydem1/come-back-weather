import React, { FC } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { ListProperties } from "src/components/ListProperties";
import { WeatherMain } from "src/types/cityWithWeatherData";
import { getPropertiesTemperature } from "./constants";

export const Temperature: FC<WeatherMain> = ({ ...weatherMain }) => (
  <section className="container">
    <Card className="my-2">
      <CardContent>
        <Typography variant="h6" component="div">
          Temperature Information
        </Typography>

        <ListProperties properties={getPropertiesTemperature(weatherMain)} />
      </CardContent>
    </Card>
  </section>
);
