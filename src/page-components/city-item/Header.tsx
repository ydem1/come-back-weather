import React, { FC } from "react";
import { Typography } from "@mui/material";
import { getImageUrl } from "src/utils/getImageUrl";

interface Props {
  cityName: string;
  main: string;
  description: string;
  icon: string;
}

export const Header: FC<Props> = ({ cityName, main, description, icon }) => {
  return (
    <section className="container">
      <div className="flex items-center justify-between">
        <h2>{cityName}</h2>
        <div className="flex items-center">
          <div>
            <Typography variant="h5" component="div">
              {main}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </div>
          <div className="w-24">
            <img
              className="w-full object-contain"
              src={getImageUrl(icon)}
              alt={cityName}
              title={cityName}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
