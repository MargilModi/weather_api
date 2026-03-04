# Weather & Seismic Dashboard Frontend

A modern React/Next.js dashboard for displaying real-time weather and seismic data.

## Features

- 🌤️ **Weather Data Display** - Real-time temperature, humidity, wind speed, and rainfall
- 🌍 **Seismic Data Display** - Magnitude, latitude, longitude, and activity level
- 🎨 **Modern UI** - Built with Next UI and Tailwind CSS
- 🔍 **City Search** - Search for data by city name
- ⚡ **Quick Links** - Pre-configured city shortcuts (Dublin, London, Paris, Tokyo)
- 📱 **Responsive Design** - Works on desktop and mobile devices

## Tech Stack

- **Next.js 14** - React framework with app router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Next UI** - Modern React component library
- **Axios** - HTTP client for API requests

## Installation

1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Ensure your backend server is running (on `http://localhost:3000` by default)

## Running the Development Server

```bash
npm run dev
```

The dashboard will be available at `http://localhost:3000` (note: the frontend runs on a different port, typically 3000 if backend is on another port or you may see a port conflict warning).

## Building for Production

```bash
npm run build
npm start
```

## Configuration

Update `.env.local` to change the API endpoint:

```env
NEXT_PUBLIC_API_URL=http://your-api-url:port
```

## Components

### WeatherCard
Displays weather information in a blue gradient card:
- Temperature (°C)
- Humidity (%)
- Wind Speed (km/h)
- Rainfall (mm)

### SeismicCard
Displays seismic information with color-coded intensity:
- Magnitude (with color gradient based on intensity)
- Latitude
- Longitude
- Activity level indicator

## API Endpoints Used

- `GET /api/weather/:city` - Fetch weather data
- `GET /api/seismic/:city` - Fetch seismic data

## Notes

- The dashboard fetches data for "dublin" on initial load
- Both API calls are made in parallel for better performance
- Error handling with user-friendly messages is built in
