import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ChatViewComponent from './chat-view/chat-view.component';
import MeetingPage from './meetings-page/meeting-page.component';
import SignUpPage from './sign-up/sign-up-page.component';
import LoginPage from './sign-up/login-page.component';
import LayoutComponent from './layout/layout.component';
import HomePageComponent from './home-page/home-page.component';
import AlertComponent from './utils/alert.component';
import { withCookies } from 'react-cookie';

function RoutesComponent(props) {
  return (
    <Switch>
      <Route
        path="/meetings/:anonym/:isAdmin/:userId/:meetingId"
        exact
        render={(props) => [
          <ChatViewComponent {...props} />,
          <AlertComponent {...props} />,
        ]}
      ></Route>
      <Route
        exact
        path="/meetings/:anonym/:isAdmin/:userId"
        render={(props) => <MeetingPage {...props} />}
      />

      <Route exact path="/signUp">
        <LayoutComponent component={<SignUpPage />} />
      </Route>
      <Route exact path="/login">
        <LayoutComponent component={<LoginPage cookies={props.cookies} />} />
      </Route>
      <Route path="/" exact>
        <LayoutComponent component={<HomePageComponent />} />
      </Route>
    </Switch>
  );
}
export default RoutesComponent;
