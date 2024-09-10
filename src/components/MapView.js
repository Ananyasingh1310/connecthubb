// src/components/MapView.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapView = ({ posts }) => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {posts.map((post, index) => (
        <Marker key={index} position={[51.505, -0.09]}> {/* Replace with actual coordinates */}
          <Popup>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
