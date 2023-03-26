import { CityListWidget } from "@Components/CityListWidget";

function CityListPage() {
  const handleCitySelect = (city: string) => {
    console.log(city);
  };

  return (
    <div>
      <CityListWidget
        cities={["Aligarh", "Delhi", "Agra"]}
        onCitySelect={handleCitySelect}
      />
    </div>
  );
}

export default CityListPage;
