import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";
import Navigation from "./shared/components/Navigation";
import Auth from "./user/pages/Auth";
import Users from "./user/pages/Users";
import UserPlaces from "./places/pages/UserPlaces";

function App() {
  const { token, login, logout, userId } = useAuth();

  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/places">
          <UserPlaces />
        </Route>
        <Route path="/places/new">{/* <NewPlace /> */}</Route>
        <Route path="/places/:placeId">{/* <UpdatePlace /> */}</Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/places">
          <UserPlaces />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token,
        userId,
        login,
        logout,
      }}
    >
      <BrowserRouter>
        <Navigation />
        <main>
          <Switch>{routes}</Switch>
        </main>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
