import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { WEATHER_DASHBOARD_ROUTE } from "@Constants/routes";

const WeatherDashboard = React.lazy(() => import("@Features/WeatherDashboard"));

function RootRoutes() {
  return (
    <Suspense fallback="Loading">
      <Routes>
        <Route path={WEATHER_DASHBOARD_ROUTE} element={<WeatherDashboard />} />
      </Routes>
    </Suspense>
  );
}

export default RootRoutes;
