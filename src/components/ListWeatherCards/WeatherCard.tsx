import { FC } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { WeatherData } from "src/types/weatherData";
import { getImageUrl } from "src/utils/getImageUrl";

export const WeatherCard: FC<WeatherData> = ({
  name,
  weather,
  wind,
  main,
}) => (
  <Card>
    <CardMedia
      className="w-full object-contain h-52"
      image={getImageUrl(weather[0].icon)}
      title={name}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {`Speed of wind: ${main.temp}`}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {weather[0].main}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {weather[0].description}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {`Speed of wind: ${wind.speed}`}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
);
