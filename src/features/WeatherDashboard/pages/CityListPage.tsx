import { CityListWidget } from "@Components/CityListWidget";

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
    </div>
  );
}

export default CityListPage;
