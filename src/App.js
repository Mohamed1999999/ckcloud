import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Container, Paper, Typography } from "@mui/material";
import "./App.css";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 48.8566,
  lng: 2.3522,
};

function App() {
  return (
    <Container className="app-container" maxWidth="md">
      <Paper elevation={3} className="map-paper">
        <Typography variant="h5" align="center" gutterBottom>
          Google Maps Integration
        </Typography>
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={10}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </Paper>
    </Container>
  );
}

export default App;
