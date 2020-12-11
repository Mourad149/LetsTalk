import "./App.css";
import { Route, Switch } from "react-router-dom";

import MeetingPage from "./meetings-page/meeting-page.component";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/meetings" component={MeetingPage} />
        <Route
          exact
          path="/meetings/1"
          render={() => <div>A specific meeting</div>}
        />
      </Switch>
    </div>
  );
}

export default App;
