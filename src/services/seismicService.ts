import axios from "axios";

const SEISMIC_API_BASE_URL = "https://65ca483b3b05d29307e01640.mockapi.io/api/seismic";

interface ExternalSeismicResponse {
  id: string;
  magnitute?: number; // Note: API has typo, spelled as "magnitute"
  magnitude?: number;
  latitude: string;
  longitude: string;
}

/**
 * Fetches seismic data from the external API for a given city
 * @param city the city to fetch seismic data for
 * @returns SeismicData object
 */
export const getSeismicDataFromAPI = async (
  city: string
): Promise<SeismicData> => {
  try {
    const response = await axios.get<ExternalSeismicResponse>(
      `${SEISMIC_API_BASE_URL}/${city}`
    );

    // Handle the typo in the API response (magnitute vs magnitude)
    const magnitude = response.data.magnitude ?? response.data.magnitute ?? 0;

    // Ensure the response has the required fields
    const seismicData: SeismicData = {
      id: response.data.id,
      magnitude: magnitude,
      latitude: response.data.latitude,
      longitude: response.data.longitude,
    };

    return seismicData;
  } catch (error) {
    // Re-throw the error to be handled by the controller
    throw error;
  }
};
