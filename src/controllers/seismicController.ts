import { Request, Response } from "express";
import { getSeismicDataFromAPI } from "../services/seismicService.js";
import { validationResult } from "express-validator";

/**
 * Gets the seismic data for a city
 * @param req the request object
 * @param res the response object
 */
export const getSeismicData = async (req: Request, res: Response) => {
  // We will use the validationResult function to check if there are any validation errors
  const errors = validationResult(req);

  // If there are validation errors, we will log them and send a 400 status code
  if (!errors.isEmpty()) {
    console.error("Validation error", errors.mapped());
    res.status(400).json({ errors: errors.array() });
    return;
  }

  // We will use a try catch block to catch any errors
  try {
    // Get the city param from the request
    const { city } = req.params;
    console.log(`Fetching seismic data for city: ${city}`);

    // Fetch seismic data from the API
    const seismicData = await getSeismicDataFromAPI(city);

    // Return the seismic data as JSON
    res.status(200).json(seismicData);
  } catch (error: unknown) {
    // Handle axios errors
    const axiosError = error as any;
    if (axiosError?.response?.status === 404) {
      // If city not found in seismic API
      res.status(404).json({ error: "Seismic data not found for this city" });
    } else {
      // If there is an error, we will log it and send a 500 status code
      console.error("Error fetching seismic data:", error);
      res
        .status(500)
        .json({ error: "Error in fetching seismic data" });
    }
  }
};
