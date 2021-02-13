import react from 'react';
import MessageAvatarComponent from './message-avatar.component';
import MessageBoxComponent from './message-box.component';
import useStyles from './messaging.style';
function MessageComponent(props) {
  const classes = useStyles();
  return (
    <div className={classes.message}>
      <MessageBoxComponent
        admin={props.admin}
        hasRaisedHandComponent={props.hasRaisedHandComponent}
        currentUser={props.currentUser}
        message={props.message}
        userRole={props.userRole}
        userPdp={props.userPdp}
      />
    </div>
  );
}
export default MessageComponent;
