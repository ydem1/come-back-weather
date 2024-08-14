import * as React from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useAppDispatch } from "src/hooks/redux";
import { removeCity } from "src/redux/cities/actions";
import { getImageUrl } from "src/utils/getImageUrl";
import { getItemPath } from "src/utils/getItemPath";
import { CityWithWeatherData } from "src/types/cityWithWeatherData";
import { PATHNAMES } from "src/constants/routes";

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
  );
};
