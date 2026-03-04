import { faker } from "@faker-js/faker";

export const generateLondonWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData = {
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  // Return weather data
  return generatedWeatherData;
};

export const generateDublinWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData: WeatherData = {
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  // Return weather data
  return generatedWeatherData;
};

export const generateParisWeatherData = (): WeatherData => {
  const generatedWeatherData: WeatherData = {
    temperature: faker.number.int({ min: -10, max: 32 }),
    humidity: faker.number.int({ min: 65, max: 90 }),
    wind: faker.number.int({ min: 1, max: 60 }),
    rain: faker.number.int({ min: 50, max: 80 }),
  };

  return generatedWeatherData;
};

export const generateTokyoWeatherData = (): WeatherData => {
  const generatedWeatherData: WeatherData = {
    temperature: faker.number.int({ min: -5, max: 35 }),
    humidity: faker.number.int({ min: 55, max: 88 }),
    wind: faker.number.int({ min: 1, max: 70 }),
    rain: faker.number.int({ min: 45, max: 85 }),
  };

  return generatedWeatherData;
};

export const generateLondonThreeDayForecast = (): ThreeDayForecast => {
  const generatedForecast: ThreeDayForecast = {
    dayOne: faker.number.int({ min: -5, max: 30 }),
    dayTwo: faker.number.int({ min: -5, max: 30 }),
    dayThree: faker.number.int({ min: -5, max: 30 }),
  };

  return generatedForecast;
};
