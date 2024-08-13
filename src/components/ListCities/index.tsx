import * as React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Button,
  Avatar,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useAppDispatch } from "src/hooks/redux";
import { removeCity } from "src/redux/cities/actions";
import { CityWithWeatherData } from "src/types/cityWithWeatherData";

interface Props {
  cities: CityWithWeatherData[];
}

export const ListCities: React.FC<Props> = ({ cities }) => {
  const dispath = useAppDispatch();

  const handleDeleteCity = (id: number) => {
    dispath(removeCity(id));
  };

  return (
    <List>
      {cities.map(({ id, name, coord }) => (
        <React.Fragment key={id}>
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
            <Button
              className="self-center"
              onClick={() => handleDeleteCity(id)}
            >
              <CloseIcon />
            </Button>
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      ))}
    </List>
  );
};
