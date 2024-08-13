import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { ICity } from "src/types/city";

interface Props {
  cities: ICity[];
}

export const ListCities: React.FC<Props> = ({ cities }) => (
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
