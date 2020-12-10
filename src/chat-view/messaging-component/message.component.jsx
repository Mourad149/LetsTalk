import react from 'react';
import MessageAvatarComponent from './message-avatar.component';
import MessageBoxComponent from './message-box.component';
import useStyles from './messaging.style';
function MessageComponent(props) {
  const classes = useStyles();
  return (
    <div className={classes.message}>
      <MessageBoxComponent currentUser={props.currentUser} />
    </div>
  );
}
export default MessageComponent;
