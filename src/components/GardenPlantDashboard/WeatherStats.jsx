export default function WeatherStats({ temperature, humidity, wind }) {
  return (
    <div className="grid grid-cols-3 gap-4 text-center bg-white rounded-xl shadow-md p-4">
      <div>
        <p className="text-sm text-gray-600">🌡️ Temp</p>
        <p className="text-lg font-bold text-blue-600">{temperature}°C</p>
      </div>
      <div>
        <p className="text-sm text-gray-600">💧 Humidity</p>
        <p className="text-lg font-bold text-blue-600">{humidity}%</p>
      </div>
      <div>
        <p className="text-sm text-gray-600">🌬️ Wind</p>
        <p className="text-lg font-bold text-blue-600">{wind} km/h</p>
      </div>
    </div>
  );
}