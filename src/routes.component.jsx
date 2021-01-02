import React from "react";
import { Route, Switch } from "react-router-dom";
import ChatViewComponent from "./chat-view/chat-view.component";
import MeetingPage from "./meetings-page/meeting-page.component";
import SignUpPage from "./sign-up/sign-up-page.component";
import LoginPage from "./sign-up/login-page.component";
import LayoutComponent from "./layout/layout.component";
import HomePageComponent from "./home-page/home-page.component";

function RoutesComponent() {
  return (
    <Switch>
      ---------------
      <Route
        exact
        path="/meetings/:anonym/:isAdmin/:userId"
        component={MeetingPage}
      />
      <Route path="/meetings/:meetingId" exact component={ChatViewComponent} />
      <Route exact path="/signUp">
        <LayoutComponent component={<SignUpPage />} />
      </Route>
      <Route exact path="/login">
        <LayoutComponent component={<LoginPage />} />
      </Route>
      <Route path="/" exact>
        <LayoutComponent component={<HomePageComponent />} />
      </Route>
    </Switch>
  );
}
export default RoutesComponent;
