'use client';

import React, { useState, useEffect } from 'react';
import { Input, Button, Spinner } from '@nextui-org/react';
import { WeatherCard } from '@/components/WeatherCard';
import { SeismicCard } from '@/components/SeismicCard';
import { fetchWeatherData, fetchSeismicData } from '@/lib/api';

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

export default function Dashboard() {
  const [city, setCity] = useState('dublin');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [seismicData, setSeismicData] = useState<SeismicData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    if (!city.trim()) {
      setError('Please enter a city name');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const [weather, seismic] = await Promise.all([
        fetchWeatherData(city),
        fetchSeismicData(city),
      ]);
      
      setWeatherData(weather);
      setSeismicData(seismic);
    } catch (err) {
      setError('Failed to fetch data. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-2">
            Weather & Seismic Dashboard
          </h1>
          <p className="text-xl text-gray-300">
            Real-time weather and seismic activity monitoring
          </p>
        </div>

        {/* Search Section */}
        <div className="flex gap-4 justify-center mb-12">
          <Input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && fetchData()}
            placeholder="Enter city name (e.g., dublin, london)"
            className="max-w-md"
            aria-label="Search city"
          />
          <Button
            onPress={fetchData}
            disabled={loading}
            color="primary"
            size="lg"
          >
            {loading ? <Spinner size="sm" color="current" /> : 'Search'}
          </Button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-500 text-white p-4 rounded-lg mb-8 text-center">
            {error}
          </div>
        )}

        {/* Cards Section */}
        {weatherData && seismicData && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            <div>
              <WeatherCard data={weatherData} city={city} />
            </div>
            <div>
              <SeismicCard data={seismicData} city={city} />
            </div>
          </div>
        )}

        {loading && (
          <div className="flex justify-center">
            <Spinner size="lg" />
          </div>
        )}

        {!loading && !weatherData && !seismicData && !error && (
          <div className="text-center text-gray-400">
            <p>Loading data...</p>
          </div>
        )}

        {/* Quick Links */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">Quick Search:</p>
          <div className="flex gap-3 justify-center flex-wrap">
            {['dublin', 'london', 'paris', 'tokyo'].map((quickCity) => (
              <Button
                key={quickCity}
                variant="bordered"
                onPress={() => {
                  setCity(quickCity);
                  // Trigger fetch after state update
                  setTimeout(() => fetchData(), 0);
                }}
                className="text-white border-white"
              >
                {quickCity.charAt(0).toUpperCase() + quickCity.slice(1)}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
