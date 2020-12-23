import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./routes.component";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Router>
        <RoutesComponent />
      </Router>
    </div>
  );
}

export default App;
