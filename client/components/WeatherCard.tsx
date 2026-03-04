'use client';

import React from 'react';
import { Card, CardBody, CardHeader } from '@nextui-org/react';

interface WeatherData {
  temperature: number;
  humidity: number;
  wind: number;
  rain: number;
}

interface WeatherCardProps {
  data: WeatherData;
  city: string;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ data, city }) => {
  return (
    <Card className="max-w-md bg-gradient-to-br from-blue-400 to-blue-600 text-white">
      <CardHeader className="flex gap-3 flex-col">
        <h2 className="text-2xl font-bold">{city}</h2>
        <p className="text-sm text-blue-100">Weather Data</p>
      </CardHeader>
      <CardBody className="gap-4">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">Temperature</span>
          <span className="text-2xl font-bold">{data.temperature}°C</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">Humidity</span>
          <span className="text-2xl font-bold">{data.humidity}%</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">Wind Speed</span>
          <span className="text-2xl font-bold">{data.wind} km/h</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">Rainfall</span>
          <span className="text-2xl font-bold">{data.rain} mm</span>
        </div>
      </CardBody>
    </Card>
  );
};
