import * as React from "react";
// import { Link } from "react-router-dom";
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
import { useAppDispatch } from "src/hooks/redux";
import { removeCity } from "src/redux/cities/actions";
import avatar from "src/assets/images/logo.png";
// import { getItemPath } from "src/utils/getItemPath";
// import { PATHNAMES } from "src/constants/routes";
import { ICity } from "src/types/city";

interface Props {
  cities: ICity[];
}

export const ListCities: React.FC<Props> = ({ cities }) => {
  const dispath = useAppDispatch();

  const handleDeleteCity = (name: string) => {
    dispath(removeCity(name));
  };

  return cities.length !== 0 ? (
    <List>
      {cities.map(({ name, lat, lon }) => (
        <React.Fragment key={name}>
          <ListItem alignItems="flex-start">
            {/* <Link to={getItemPath(PATHNAMES.CITY_ITEM, { id })}> */}
            <ListItemAvatar>
              <Avatar alt={name} src={avatar} />
            </ListItemAvatar>
            {/* </Link> */}
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
            <Button
              className="self-center"
              onClick={() => handleDeleteCity(name)}
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
