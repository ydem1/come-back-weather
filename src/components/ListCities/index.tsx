import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { WeatherData } from "src/types/weatherData";

interface Props {
  cities: WeatherData[];
}

export const ListCities: React.FC<Props> = ({ cities }) => (
  <List>
    {cities.map(({ name, coord }) => (
      <React.Fragment key={name}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={name} src="./images/logo.png" />
          </ListItemAvatar>
          <ListItemText
            primary={name}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Coordinates -
                </Typography>
                {` lat: ${coord.lat} lon: ${coord.lon}`}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </React.Fragment>
    ))}
  </List>
);
