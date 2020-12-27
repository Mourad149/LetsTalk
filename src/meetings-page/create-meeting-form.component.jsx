import { React, useState } from "react";
import axios from "axios";
import { Typography, Button } from "@material-ui/core";

import CustomInput from "../sign-up/custom-input.component";
import useStyles from "../sign-up/sign-up.style";

const CreateMeetingForm = (props) => {
  const classes = useStyles();

  const [state, setState] = useState({
    fields: {
      theme: {
        placeholder: "Theme",
        value: "",
        validator: (val) => {
          if (val.length === 0) {
            return "Please specify a theme !";
          }
          let patt = new RegExp("^[a-zA-Z]");
          let res = patt.test(val);
          if (res === false) {
            return "Invalid !";
          }
          return null;
        },
        error: null,
      },
      description: {
        placeholder: "Description",
        value: "",
        validator: (val) => {
          if (val.length === 0) {
            return "It's about what ?";
          }
          let patt = new RegExp("^[a-zA-Z]");
          let res = patt.test(val);
          if (res === false) {
            return "Invalid !";
          }
          return null;
        },
        error: null,
      },
      startDate: {
        placeholder: "Start Date",
        value: "",
        validator: (val) => {
          if (val.length === 0) {
            return "Please specify a date !";
          }
          //   let patt = new RegExp("^[0-9]");
          //   let res = patt.test(val);
          //   if (res === false || val > 90) {
          //     return "Invalid age !";
          //   }
          return null;
        },
        error: null,
      },
      startTime: {
        placeholder: "Start Time",
        value: "",
        validator: (val) => {
          if (val.length === 0) {
            return "When ?";
          }
          //   let patt = new RegExp("^[a-zA-Z]");
          //   let res = patt.test(val);
          //   if (res === false) {
          //     return "Invalid country !";
          //   }
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
      theme: "",
      description: "",
      startDate: "",
      startTime: "",
      participants: 1,
      hostId: "coachId",
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
      const meetingObject = buildObject();
      console.log(meetingObject);
      axios
        .post("http://localhost:5000/meetings", meetingObject)
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
    if (input.config.placeholder === "Start Date") {
      type = "date";
    }
    if (input.config.placeholder === "Start Time") {
      type = "time";
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
    <div style={{ width: "100%" }}>
      <form onSubmit={submitForm} className={classes.form}>
        {inputs}
        <Button type="submit" className={classes.submitBtn}>
          <Typography className={classes.submitButtonText}>Submit</Typography>
        </Button>
      </form>
    </div>
  );
};

export default CreateMeetingForm;
