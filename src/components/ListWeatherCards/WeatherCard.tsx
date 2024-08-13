import { FC } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { getImageUrl } from "src/utils/getImageUrl";
import { getItemPath } from "src/utils/getItemPath";
import { PATHNAMES } from "src/constants/routes";

interface Props {
  id: number;
  cityName: string;
  img: string;
  temp: number;
  status: string;
  description: string;
  windSpeed: number;
}

export const WeatherCard: FC<Props> = ({
  id,
  cityName,
  img,
  temp,
  status,
  description,
  windSpeed,
}) => {
  const cityItemPath = getItemPath(PATHNAMES.CITY_ITEM, { id });

  return (
    <Card>
      <Link to={cityItemPath}>
        <CardMedia
          className="w-full object-contain h-52 transition-all hover:scale-125"
          image={getImageUrl(img)}
          title={cityName}
        />
      </Link>

      <CardContent>
        <Link className="transition-all hover:text-blue-500" to={cityItemPath}>
          <Typography gutterBottom variant="h5" component="div">
            {cityName}
          </Typography>
        </Link>

        <Typography variant="body2" color="text.secondary">
          {`${temp} \u00B0C`}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {status}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {`Speed of wind: ${windSpeed}`}
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
