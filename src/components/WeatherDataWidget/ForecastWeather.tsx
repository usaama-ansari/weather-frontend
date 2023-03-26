import "./WeatherDataWidget.styles.css";

export function ForecastWeather({ data }: { data: any }) {
  console.log(data);
  return <div className="ForecastWeather">Forecast Data</div>;
}
