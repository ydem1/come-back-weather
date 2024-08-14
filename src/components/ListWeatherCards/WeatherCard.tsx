import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { instance } from "src/services/api-client";
import { getImageUrl } from "src/utils/getImageUrl";
import { getItemPath } from "src/utils/getItemPath";
import { PATHNAMES } from "src/constants/routes";
import { ICity } from "src/types/city";
import { CityWithWeatherData } from "src/types/cityWithWeatherData";

export const WeatherCard: FC<ICity> = ({ ...city }) => {
  const cityItemPath = getItemPath(PATHNAMES.CITY_ITEM, { id: city.lat });

  const [isLoad, setIsLoad] = useState(false);

  const [cityWithWeatherData, setCityWithWeatherData] =
    useState<CityWithWeatherData>(null);

  useEffect(() => {
    setIsLoad(true);
    instance
      .get<CityWithWeatherData>("/data/2.5/weather/", {
        params: {
          lat: city.lat,
          lon: city.lon,
          units: "metric",
        },
      })
      .then((response) => {
        setCityWithWeatherData(response.data);
        setIsLoad(false);
      })
      .catch(() => {
        setCityWithWeatherData(null);
        setIsLoad(false);
      });
  }, [city.lat, city.lon]);

  const { name, main, weather, wind } = cityWithWeatherData || {};

  if (isLoad) {
    return <p>LOADING ....</p>;
  }

  if (!cityWithWeatherData && !isLoad) {
    return null;
  }

  return (
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

        <Typography variant="body2" color="text.secondary">
          {`${main.temp} \u00B0C`}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {status}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {weather[0].description}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {`Speed of wind: ${wind.speed}`}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small">Updata</Button>
        <Link to={cityItemPath}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
