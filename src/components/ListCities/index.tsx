import * as React from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import {
  Alert,
  Avatar,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { PATHNAMES } from "src/constants/routes";
import { useAppDispatch } from "src/hooks/redux";
import { removeCity } from "src/redux/cities/actions";
import { CityWithWeatherData } from "src/types/cityWithWeatherData";
import { getImageUrl } from "src/utils/getImageUrl";
import { getItemPath } from "src/utils/getItemPath";

interface Props {
  cities: CityWithWeatherData[];
}

export const ListCities: React.FC<Props> = ({ cities }) => {
  const dispath = useAppDispatch();

  const handleDeleteCity = (id: number) => {
    dispath(removeCity(id));
  };

  return cities.length !== 0 ? (
    <List>
      {cities.map(({ id, weather, name, coord }) => (
        <React.Fragment key={id}>
          <ListItem alignItems="flex-start">
            <Link to={getItemPath(PATHNAMES.CITY_ITEM, { id })}>
              <ListItemAvatar>
                <Avatar alt={name} src={getImageUrl(weather[0].icon)} />
              </ListItemAvatar>
            </Link>
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
  ) : (
    <Alert className="mt-5" severity="info">
      List is empty.
    </Alert>
  );
};
