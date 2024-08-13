import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const cities = [
  {
    name: "London",
    lat: 51.5073219,
    lon: -0.1276474,
    country: "GB",
    state: "England",
  },
  {
    name: "New York",
    lat: 40.712776,
    lon: -74.005974,
    country: "US",
    state: "New York",
  },
  {
    name: "Tokyo",
    lat: 35.682839,
    lon: 139.759455,
    country: "JP",
    state: "Tokyo",
  },
  {
    name: "Paris",
    lat: 48.856613,
    lon: 2.352222,
    country: "FR",
    state: "Île-de-France",
  },
  {
    name: "Sydney",
    lat: -33.86882,
    lon: 151.20929,
    country: "AU",
    state: "New South Wales",
  },
  {
    name: "Berlin",
    lat: 52.520008,
    lon: 13.404954,
    country: "DE",
    state: "Berlin",
  },
  {
    name: "Rio de Janeiro",
    lat: -22.906847,
    lon: -43.172897,
    country: "BR",
    state: "Rio de Janeiro",
  },
  {
    name: "Beijing",
    lat: 39.904202,
    lon: 116.407394,
    country: "CN",
    state: "Beijing",
  },
  {
    name: "Cape Town",
    lat: -33.92487,
    lon: 18.424055,
    country: "ZA",
    state: "Western Cape",
  },
];

export const ListCities = () => (
  <List>
    {cities.map((city) => (
      <React.Fragment key={city.name}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={city.name} src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={city.name}
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
                {` lat: ${city.lat} lon: ${city.lon}`}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </React.Fragment>
    ))}
  </List>
);
