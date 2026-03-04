import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

interface WeatherData {
  temperature: number;
  humidity: number;
  wind: number;
  rain: number;
}

interface SeismicData {
  id: string;
  magnitude: number;
  latitude: string;
  longitude: string;
}

export const fetchWeatherData = async (city: string): Promise<WeatherData> => {
  try {
    const response = await axios.get<WeatherData>(
      `${API_BASE_URL}/api/weather/${city}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

export const fetchSeismicData = async (city: string): Promise<SeismicData> => {
  try {
    const response = await axios.get<SeismicData>(
      `${API_BASE_URL}/api/seismic/${city}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching seismic data:", error);
    throw error;
  }
};
