import React, { useState } from 'react';
import axios from 'axios';

import useStyles from './sign-up.style';
import CustomInput from './custom-input.component';
import { Typography, Button } from '@material-ui/core';
import { useTransition, animated } from 'react-spring';
import { loadCurrentUser } from '../reducers-actions/current-user.action';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';


const SignUpForm = (props) => {
  const classes = useStyles();
  const [show, set] = useState(false);
  const history = useHistory();


  const [state, setState] = useState({
    fields: {
      mail: {
        placeholder: 'Email',
        value: '',
        validator: (val) => {
          if (val.length === 0) {
            return 'Make sure to enter your email !';

          }
          return null;
        },
        error: null,
      },
      password: {
        placeholder: 'Password',
        value: '',
        validator: (val) => {
          if (val.length === 0) {
            return 'Make sure to enter your password !';

          }
        },
        error: null,
      },
    },
    firstCheck: true,
  });
  const redirect = (path) => {
    return history.push(path);
  };

  const onChangeHandler = (event, fieldId) => {
    const copiedState = { ...state.fields };
    const updatedFormElement = { ...copiedState[fieldId] };
    updatedFormElement.value = event.target.value;
    const customError = updatedFormElement.validator(updatedFormElement.value);
    updatedFormElement.error = customError;
    copiedState[fieldId] = updatedFormElement;
    setState({ ...state, fields: copiedState, firstCheck: false });
  };

  const buildObject = () => {
    const obj = {
      mail: '',
      password: '',

    };
    for (const key in state.fields) {
      obj[key] = state.fields[key].value;
    }
    return obj;
  };

  const checkingValidity = () => {
    // Testing if there is any error in order to save the form
    let formValidity = true;
    for (const key in state.fields) {
      if (state.fields[key].error !== null) {
        formValidity = false;
      }
    }

    return formValidity;
  };

  const submitForm = (event) => {
    event.preventDefault();
    // if (checkingValidity() && state.firstCheck === false) {
    const loginObject = buildObject();

    axios
      .post(`https://${process.env.REACT_APP_BASE_URL}:5000/login`, loginObject)
      .then((res) => {
        props.loadCurrentUser(res.data.currentUser);
        props.cookies.set('token', res.data.token, { path: '/' });
        redirect(
          res.data.currentUser.userType === 'participant'
            ? `/meetings/${false}/${false}/${res.data.currentUser._id}`
            : `/meetings/${false}/${true}/${res.data.currentUser._id}`
        );
      })
      .catch((err) => console.log(err));
    console.log(loginObject);
    // } else {
    //   renderingErrors();
    // }

  };

  const renderingErrors = () => {
    // Updating the errors in state
    const copiedState = { ...state.fields };
    for (const key in copiedState) {
      const updatedFormElement = { ...copiedState[key] };
      const customError = updatedFormElement.validator(
        updatedFormElement.value
      );
      updatedFormElement.error = customError;
      copiedState[key] = updatedFormElement;
    }
    setState({ ...state, fields: copiedState });
  };

  const formFieldsArray = [];
  for (const key in state.fields) {
    formFieldsArray.push({ id: key, config: state.fields[key] });
  }
  const inputs = formFieldsArray.map((input) => {
    let type = 'text';
    if (input.config.placeholder === 'Password') {
      type = 'password';

    }
    return (
      <CustomInput
        key={input.id}
        type={type}
        value={input.config.value}
        placeholder={input.config.placeholder}
        onChange={(event) => {
          onChangeHandler(event, input.id);
        }}
        error={input.config.error}
      />
    );
  });
  const transitions = useTransition(show, null, {
    from: { transform: `translate3d(400px,0,0)`, opacity: '0' },
    enter: {
      transform: `translate3d(0px,0,0)`,
      opacity: '1',
      transition: 'opacity 0.3s',
    },
    leave: { transform: `translate3d(-400px,0,0)`, opacity: '0' },

    config: {
      duration: 500,
    },
  });
  return transitions.map(({ item, key, props: style }) => (
    <animated.div style={{ width: '80%', ...style }}>
      <Typography className={classes.formBanner} align="center" paragraph>
        Login
      </Typography>
      <form className={classes.form}>
        {inputs}
        <Button onClick={submitForm} className={classes.submitBtn}>

          <Typography className={classes.submitButtonText}>Login</Typography>
        </Button>
      </form>
    </animated.div>
  ));
};

export default connect(null, { loadCurrentUser })(SignUpForm);

