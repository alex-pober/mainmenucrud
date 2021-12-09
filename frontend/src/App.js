import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import RestaurantFormPage from "./components/RestaurantFormPage";
import MenuPage from "./components/MenuPage"
import SplashPage from "./components/SplashPage";
import CreateItem from "./components/CreateItem"
import EditItem from "./components/EditItem"
import Restaurant from "./components/Restaurant";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <SplashPage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/restaurantform">
            <RestaurantFormPage />
          </Route>
          <Route path="/restaurant/:id">
            <Restaurant />
          </Route>
          <Route path="/menu/:menuId">
            <MenuPage />
          </Route>
          <Route path="/newItem">
            <CreateItem />
          </Route>
          <Route path="/editItem/:id">
            <EditItem />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
