import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Optional: Custom marker icon
const plantIcon = new L.Icon({
  iconUrl: "/icons/plant-pin.png", // Replace with your icon path
  iconSize: [30, 30],
});

export default function MapLocationViewer({ location }) {
  const { lat, lng, name } = location;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-4 mb-5"
    >
      <h2 className="text-lg font-semibold text-green-700 mb-4 text-center">
        📍 Plant Location
      </h2>

      <MapContainer
        center={[lat, lng]}
        zoom={13}
        scrollWheelZoom={false}
        className="h-[300px] w-full rounded-lg"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]} icon={plantIcon}>
          <Popup>
            🌱 {name} Nursery<br />Your plant was planted here!
          </Popup>
        </Marker>
      </MapContainer>
    </motion.div>
  );
}