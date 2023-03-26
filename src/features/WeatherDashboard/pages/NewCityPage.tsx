import { useInjection } from "inversify-react";
import { AddCityWidget } from "@Components/AddCityWidget";
import { ICityService } from "@Services";
import { TYPES_IOC } from "@Helpers/ioc/constants";
import { useNavigate } from "react-router-dom";
import { CITY_LIST_ROUTE } from "@Constants/routes";

function NewCityPage() {
  const cityService = useInjection<ICityService>(TYPES_IOC.CityService);
  const navigate = useNavigate();

  const handleAddCity = async (city: string) => {
    const result = await cityService.addCity(city);
    if (result.isSuccess) {
      console.log("Successfully added City");
      navigate(CITY_LIST_ROUTE);
    }
  };

  return (
    <div>
      <AddCityWidget onAdd={handleAddCity} />
    </div>
  );
}

export default NewCityPage;
