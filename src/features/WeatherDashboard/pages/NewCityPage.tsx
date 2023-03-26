import { AddCityWidget } from "@Components/AddCityWidget";

function NewCityPage() {
  const handleAddCity = (city: string) => {
    console.log(city);
    // use context to send request
  };

  return (
    <div>
      <AddCityWidget onAdd={handleAddCity} />
    </div>
  );
}

export default NewCityPage;
