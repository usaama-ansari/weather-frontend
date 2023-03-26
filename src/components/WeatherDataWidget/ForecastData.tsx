import "./WeatherDataWidget.styles.css";

export function ForecastData({ data }: { data: any }) {
  console.log(data);
  return <div className="ForecastData">Forecast Data</div>;
}
