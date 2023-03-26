import "./WeatherDataWidget.styles.css";

export function CurrentData({ data }: { data: any }) {
  console.log(data);
  return <div className="CurrentData">Current Data</div>;
}
