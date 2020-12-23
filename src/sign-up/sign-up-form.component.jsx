import React, { useState } from "react";
import axios from "axios";

import useStyles from "./sign-up.style";
import CustomInput from "./custom-input.component";

const SignUpForm = (props) => {
  const classes = useStyles();

  const [state, setState] = useState({
    fields: {
      firstName: {
        placeholder: "First Name",
        value: "",
        validator: (val) => {
          if (val.length === 0) {
            return "Make sure to enter your first name !";
          }
          let patt = new RegExp("^[a-zA-Z]");
          let res = patt.test(val);
          if (res === false) {
            return "Invalid name !";
          }
          return null;
        },
        error: null,
      },
      lastName: {
        placeholder: "Last Name",
        value: "",
        validator: (val) => {
          if (val.length === 0) {
            return "Make sure to enter your last name !";
          }
          let patt = new RegExp("^[a-zA-Z]");
          let res = patt.test(val);
          if (res === false) {
            return "Invalid name !";
          }
          return null;
        },
        error: null,
      },
      age: {
        placeholder: "Age",
        value: "",
        validator: (val) => {
          if (val.length === 0) {
            return "Make sure to enter your age !";
          }
          let patt = new RegExp("^[0-9]");
          let res = patt.test(val);
          if (res === false || val > 90) {
            return "Invalid age !";
          }
          return null;
        },
        error: null,
      },
      country: {
        placeholder: "Country",
        value: "",
        validator: (val) => {
          if (val.length === 0) {
            return "Where do you live ?";
          }
          let patt = new RegExp("^[a-zA-Z]");
          let res = patt.test(val);
          if (res === false) {
            return "Invalid country !";
          }
          return null;
        },
        error: null,
      },
      currentPosition: {
        placeholder: "Current position",
        value: "",
        validator: (val) => {
          if (val.length === 0) {
            return "What's your current position ?";
          }
          return null;
        },
        error: null,
      },
      mail: {
        placeholder: "Email",
        value: "",
        validator: (val) => {
          if (val.length === 0) {
            return "Make sure to enter your email !";
          }
          let patt = new RegExp("^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[A-Za-z]");
          let res = patt.test(val);
          if (res === false) {
            return "Invalid email !";
          }
          return null;
        },
        error: null,
      },
      password: {
        placeholder: "Password",
        value: "",
        validator: (val) => {
          if (val.length === 0) {
            return "Make sure to enter a password !";
          }
          if (val.length < 7) {
            return "Should be at least 7 characters !";
          }
          return null;
        },
        error: null,
      },
    },
    firstCheck: true,
  });

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
      firstName: "",
      lastName: "",
      country: "",
      currentPosition: "",
      age: "",
      mail: "",
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
    if (checkingValidity() && state.firstCheck === false) {
      const userObject = buildObject();
      axios
        .post(
          "https://react-20805.firebaseio.com/" + props.userType + ".json",
          userObject
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    } else {
      renderingErrors();
    }
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
    let type = "text";
    if (input.config.placeholder === "Password") {
      type = "password";
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

  return (
    <div>
      <h5>Sign up as a {props.userType}</h5>
      <form onSubmit={submitForm}>
        {inputs}
        <button type="submit" className={classes.submitBtn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
