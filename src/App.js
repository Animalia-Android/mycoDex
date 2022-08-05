import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./App.css";
import { Icon } from "leaflet";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>MYCO-DEX</h1>
      <header className="App-header">
        <img
          src={
            "https://www.homestratosphere.com/wp-content/uploads/2020/08/types-of-mushrooms-chart-aug032020-min.jpg"
          }
          // className="App-logo"
          alt="logo"
        />
        <p>Look Up Mushroom</p>
        <h1>[ ]</h1>

        <a
          className="App-link"
          href="https://www.mushroomcouncil.com/#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about Fungi here:
        </a>
      </header>
      <div className="leaflet-container">
        <h1>Save Mushroom Location</h1>
        <h3>Map</h3>
        <MapContainer center={[45.4, -75.7]} zoom={5} scrollWheelZoom={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
