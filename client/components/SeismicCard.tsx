'use client';

import React from 'react';
import { Card, CardBody, CardHeader } from '@nextui-org/react';

interface SeismicData {
  id: string;
  magnitude: number;
  latitude: string;
  longitude: string;
}

interface SeismicCardProps {
  data: SeismicData;
  city: string;
}

export const SeismicCard: React.FC<SeismicCardProps> = ({ data, city }) => {
  const getMagnitudeColor = (magnitude: number) => {
    if (magnitude < 2) return 'from-green-400 to-green-600';
    if (magnitude < 4) return 'from-yellow-400 to-yellow-600';
    if (magnitude < 6) return 'from-orange-400 to-orange-600';
    return 'from-red-400 to-red-600';
  };

  return (
    <Card className={`max-w-md bg-gradient-to-br ${getMagnitudeColor(data.magnitude)} text-white`}>
      <CardHeader className="flex gap-3 flex-col">
        <h2 className="text-2xl font-bold">{city}</h2>
        <p className="text-sm opacity-90">Seismic Data</p>
      </CardHeader>
      <CardBody className="gap-4">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">Magnitude</span>
          <span className="text-3xl font-bold">{data.magnitude}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">Latitude</span>
          <span className="text-xl font-mono">{data.latitude}°</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">Longitude</span>
          <span className="text-xl font-mono">{data.longitude}°</span>
        </div>

        <div className="mt-4 p-3 bg-white bg-opacity-20 rounded-lg">
          <p className="text-xs text-center">
            {data.magnitude < 2 && '🟢 Minor Activity'}
            {data.magnitude >= 2 && data.magnitude < 4 && '🟡 Low Activity'}
            {data.magnitude >= 4 && data.magnitude < 6 && '🟠 Moderate Activity'}
            {data.magnitude >= 6 && '🔴 High Activity'}
          </p>
        </div>
      </CardBody>
    </Card>
  );
};
