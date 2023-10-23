import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

const authenticated = false;

export function Routes() {
  return (
    <BrowserRouter>
      {authenticated ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  )
}
