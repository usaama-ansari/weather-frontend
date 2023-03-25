import { Provider as IocProvider } from "inversify-react";
import { BrowserRouter as Router } from "react-router-dom";
import { iocContainer } from "@Helpers/ioc";
import RootRoutes from "./routes";

function App() {
  return (
    <IocProvider container={iocContainer}>
      <Router>
        <RootRoutes />
      </Router>
    </IocProvider>
  );
}

export default App;
