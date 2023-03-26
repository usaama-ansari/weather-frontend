import "./WeatherDataWidget.styles.css";

export function CurrentWeather({ data }: { data: any }) {
  console.log(data);
  return (
    <div className="CurrentWeather">
      <ul className="CurrentWeather__list">
        <li>City: {data.cityName}</li>
        <li>Country: {data.country}</li>
        <li>Humidity: {data.humidity}</li>
        <li>Pressure: {data.pressure}</li>
        <li>Temperature: {data.temperature}</li>
      </ul>
    </div>
  );
}
