import "./WeatherDataWidget.styles.css";

export function WeatherProperties({ data }: { data: any }) {
  return (
    <ul className="WeatherProperties">
      <li>Date: {data.date}</li>
      <li>Country: {data.country}</li>
      <li>Humidity: {data.humidity}</li>
      <li>Pressure: {data.pressure}</li>
      <li>Temperature: {data.temperature}</li>
    </ul>
  );
}
