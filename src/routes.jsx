import { BrowserRouter, Switch, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
