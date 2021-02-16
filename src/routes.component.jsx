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
import withAuth from './utils/withAuth';

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUserReducer,
  };
};
function RoutesComponent(props) {
  return (
    <Switch>
      <Route
        path="/meetings/:anonym/:isAdmin/:userId/:meetingId"
        exact
        render={(injectedProps) => [
          <ChatViewComponent {...injectedProps} cookies={props.cookies} />,
          <AlertComponent {...injectedProps} />,
        ]}
      ></Route>
      <Route
        exact
        path="/meetings/:anonym/:isAdmin/:userId"
        render={(injectedProps) => {
          const Authenticated = withAuth(
            () => <MeetingPage {...injectedProps} cookies={props.cookies} />,
            props.cookies.get('token')
          );
          return <Authenticated {...props} />;
        }}

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
