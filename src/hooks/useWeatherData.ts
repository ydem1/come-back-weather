import { useCallback, useState } from "react";
import { instance } from "src/services/api-client";
import { delay } from "src/helpers/delay";
import { NotificationService } from "src/helpers/notifications";
import { CityWithWeatherData } from "src/types/cityWithWeatherData";

interface UseWeatherDataResult {
  isLoading: boolean;
  cityWithWeatherData: CityWithWeatherData | null;
  fetchWeatherData: () => Promise<void>;
}

export const useWeatherData = (
  lat: number,
  lon: number
): UseWeatherDataResult => {
  const [isLoading, setIsLoading] = useState(false);
  const [cityWithWeatherData, setCityWithWeatherData] =
    useState<CityWithWeatherData | null>(null);

  const fetchWeatherData = useCallback(async () => {
    setIsLoading(true);
    await delay();
    try {
      const response = await instance.get<CityWithWeatherData>(
        "/data/2.5/weather/",
        {
          params: {
            lat,
            lon,
            units: "metric",
          },
        }
      );
      setCityWithWeatherData(response.data);
    } catch {
      NotificationService.error();
      setCityWithWeatherData(null);
    } finally {
      setIsLoading(false);
    }
  }, [lat, lon]);

  return { isLoading, cityWithWeatherData, fetchWeatherData };
};
