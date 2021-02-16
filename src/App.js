import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';
import RoutesComponent from './routes.component';
import { useHistory } from 'react-router';
import { withCookies } from 'react-cookie';

import { ToastContainer } from 'react-toastify';
function App(props) {
  const history = useHistory();

  return (
    <div style={{ height: '100vh' }}>
      <Router>
        <RoutesComponent history={history} cookies={props.cookies} />
      </Router>
    </div>
  );
}

export default withCookies(App);
