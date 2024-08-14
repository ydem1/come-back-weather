import React, { FC } from "react";
import { Card, CardContent, Typography } from "@mui/material";

interface Props {
  speed: number;
  deg: number;
  gust?: number;
}

export const Wind: FC<Props> = ({ speed, deg, gust }) => {
  return (
    <section className="container">
      <Card className="my-2">
        <CardContent>
          <Typography variant="h6" component="div">
            Wind Information
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Speed: {speed} m/s
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Direction: {deg}°
          </Typography>
          {gust && (
            <Typography variant="body2" color="text.secondary">
              {`Gust: ${gust} m/s`}
            </Typography>
          )}
        </CardContent>
      </Card>
    </section>
  );
};
