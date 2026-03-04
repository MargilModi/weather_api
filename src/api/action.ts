import axios from "axios";

interface WeatherResponse {
  wind: number;
  rain: number;
  temperature: number;
  humidity: number;
}

interface WeatherData {
  wind: number;
  rain: number;
  temperature: number;
  humidity: number;
}

const API_URL = "https://redesigned-broccoli-jj495w74vg4jhj59w-3000.app.github.dev/";

export const getWeatherData = async (city: string): Promise<WeatherData> => {
  return new Promise<WeatherData>((resolve, reject) => {
    axios
      .get<WeatherResponse>(`${API_URL}/weather/${city}`)
      .then((res) => {
        resolve({
          wind: res.data.wind,
          rain: res.data.rain,
          temperature: res.data.temperature,
          humidity: res.data.humidity,
        });
      })
      .catch((error: unknown) => {
        const axiosError = error as any;
        if (axiosError?.response?.status === 404) {
          reject("City not found");
        } else if (axiosError?.message) {
          reject(axiosError.message);
        } else {
          // Handle non-Axios errors
          reject("An unknown error occurred");
        }
      });
  });
};
