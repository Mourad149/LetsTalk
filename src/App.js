import logo from './logo.svg';
import './App.css';
import MessageBoxComponent from './chat-view/messaging-component/message-box.component';
import MessageComponent from './chat-view/messaging-component/message.component';
import MessagingComponent from './chat-view/messaging-component/messaging.component';
import ChatViewComponent from './chat-view/chat-view.component';
function App() {
  return (
    <div className="App">
      <ChatViewComponent />
    </div>
  );
}

export default App;
