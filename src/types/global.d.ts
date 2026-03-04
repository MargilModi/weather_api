interface WeatherData {
  temperature: number;
  humidity: number;
  wind: number;
  rain: number;
}

interface ThreeDayForecast {
  dayOne: number;
  dayTwo: number;
  dayThree: number;
}

interface SeismicData {
  id: string;
  magnitude: number;
  latitude: string;
  longitude: string;
}
