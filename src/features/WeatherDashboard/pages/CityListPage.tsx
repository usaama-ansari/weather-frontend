import { CityListWidget } from "@Components/CityListWidget";
import { WeatherDataWidget } from "@Components/WeatherDataWidget";

function CityListPage() {
  const handleCitySelect = (city: string) => {
    console.log(city);
  };

  return (
    <div>
      <CityListWidget
        cities={[
          "Aligarh",
          "Delhi",
          "Agra",
          "Bangalore",
          "New York",
          "Canada",
          "Lucknow",
        ]}
        onCitySelect={handleCitySelect}
      />
      <div style={{ marginTop: "50px" }}>
        <WeatherDataWidget data={{ name: "hello" }} />
      </div>
    </div>
  );
}

export default CityListPage;
