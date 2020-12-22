import logo from './logo.svg';
import MessageBoxComponent from './chat-view/messaging-component/message-box.component';
import MessageComponent from './chat-view/messaging-component/message.component';
import MessagingComponent from './chat-view/messaging-component/messaging.component';
import ChatViewComponent from './chat-view/chat-view.component';
import { BrowserRouter as Router } from 'react-router-dom';

import RoutesComponent from './routes.component';
function App() {
  return (
    <div style={{ height: '100vh' }}>
      <Router>
        <RoutesComponent />
      </Router>
    </div>
  );
}

export default App;
