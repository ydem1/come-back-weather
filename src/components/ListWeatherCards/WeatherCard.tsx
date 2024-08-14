import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useWeatherData } from "src/hooks/useWeatherData";
import { getImageUrl } from "src/utils/getImageUrl";
import { getItemPath } from "src/utils/getItemPath";
import { PATHNAMES } from "src/constants/routes";
import { ICity } from "src/types/city";
import { getPropertiesWeatherCard } from "./constants";
import { ListProperties } from "../ListProperties";

export const WeatherCard: FC<ICity> = ({ ...city }) => {
  const { lat, lon } = city;

  const cityItemPath = getItemPath(PATHNAMES.CITY_ITEM, {
    lat,
    lon,
  });

  const { isLoading, cityWithWeatherData, fetchWeatherData } = useWeatherData(
    lat,
    lon
  );

  useEffect(() => {
    fetchWeatherData();
  }, [fetchWeatherData]);

  const { name, weather } = cityWithWeatherData || {};

  if (!cityWithWeatherData && !isLoading) {
    return null;
  }

  return isLoading ? (
    <div className="flex justify-center items-center w-full h-96">
      <CircularProgress />
    </div>
  ) : (
    <Card>
      <Link to={cityItemPath}>
        <CardMedia
          className="w-full object-contain h-52 transition-all hover:scale-125"
          image={getImageUrl(weather[0].icon)}
          title={name}
        />
      </Link>

      <CardContent>
        <Link className="transition-all hover:text-blue-500" to={cityItemPath}>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </Link>

        <ListProperties
          properties={getPropertiesWeatherCard(cityWithWeatherData)}
        />
      </CardContent>

      <CardActions>
        <Button size="small" onClick={fetchWeatherData}>
          Update
        </Button>
        <Link to={cityItemPath}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
