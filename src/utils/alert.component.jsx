import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { fireNotif, closeNotif } from '../reducers-actions/notification.action';
import useStyles from './alert.style';
import { connect } from 'react-redux';
function AlertComponent(props) {
  const classes = useStyles();
  React.useEffect(() => {
    if (props.notificationReducer.open) {
      toast(props.notificationReducer.component, {
        className: classes.toastNotification,
        bodyClassName: 'grow-font-size',
        progressClassName: 'fancy-progress-bar',
      });
    }
    return () =>
      props.closeNotif({
        open: false,
      });
  }, [props.notificationReducer.open, window.location.pathname]);

  return (
    <ToastContainer
      position="top-left"
      autoClose={5000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
}
const mapStateToProps = (state) => {
  return {
    notificationReducer: state.notificationReducer,
  };
};
export default connect(mapStateToProps, { fireNotif, closeNotif })(
  AlertComponent
);
