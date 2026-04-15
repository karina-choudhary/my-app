

// Get all locations
export async function getLocations(req, res) {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Create a new location
export async function createLocation(req, res) {
  const { name, latitude, longitude } = req.body;

  try {
    const location = new Location({ name, latitude, longitude });
    await location.save();
    res.status(201).json(location);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
