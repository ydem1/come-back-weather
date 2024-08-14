import React, { FC } from "react";
import { Card, CardContent, Typography } from "@mui/material";

interface Props {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export const Temperature: FC<Props> = ({
  temp,
  feels_like,
  temp_min,
  temp_max,
  pressure,
  humidity,
}) => {
  return (
    <section className="container">
      <Card className="my-2">
        <CardContent>
          <Typography variant="h5" component="div">
            {`Temperature: ${temp} \u00B0C`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Feels like: ${feels_like} \u00B0C`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Min Temperature: ${temp_min} \u00B0C`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Max Temperature: ${temp_max} \u00B0C`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Pressure: ${pressure} hPa`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Humidity: ${humidity} %`}
          </Typography>
        </CardContent>
      </Card>
    </section>
  );
};
