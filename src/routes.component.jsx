import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ChatViewComponent from './chat-view/chat-view.component';
function RoutesComponent() {
  return (
    <Switch>
      <Route path="/meetings/:id" exact component={ChatViewComponent} />
    </Switch>
  );
}
export default RoutesComponent;
