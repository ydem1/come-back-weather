import * as React from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import {
  Avatar,
  Button,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { useAppDispatch } from "src/hooks/redux";
import { removeCity } from "src/redux/cities/actions";
import { getItemPath } from "src/utils/getItemPath";
import { PATHNAMES } from "src/constants/routes";
import avatar from "src/assets/images/logo.png";

interface Props {
  name: string;
  lat: number;
  lon: number;
}

export const CityItem: React.FC<Props> = ({ name, lat, lon }) => {
  const dispath = useAppDispatch();

  const handleDeleteCity = (name: string) => {
    dispath(removeCity(name));
  };

  return (
    <>
      <ListItem alignItems="flex-start">
        <Link
          to={getItemPath(PATHNAMES.CITY_ITEM, {
            lat,
            lon,
          })}
        >
          <ListItemAvatar>
            <Avatar alt={name} src={avatar} />
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
              {` lat: ${lat} lon: ${lon}`}
            </React.Fragment>
          }
        />
        <Button className="self-center" onClick={() => handleDeleteCity(name)}>
          <CloseIcon />
        </Button>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};
