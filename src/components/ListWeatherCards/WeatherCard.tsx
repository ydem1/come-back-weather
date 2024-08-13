import { FC } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { getImageUrl } from "src/utils/getImageUrl";

interface Props {
  cityName: string;
  img: string;
  temp: number;
  status: string;
  description: string;
  windSpeed: number;
}

export const WeatherCard: FC<Props> = ({
  cityName,
  img,
  temp,
  status,
  description,
  windSpeed,
}) => (
  <Card>
    <CardMedia
      className="w-full object-contain h-52"
      image={getImageUrl(img)}
      title={cityName}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {cityName}
      </Typography>
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
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
);
