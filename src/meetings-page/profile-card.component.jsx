import React from "react";

import useStyles from "./profile-card.style";

const ProfileCard = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.profileCard}>
      <h5>Your profile</h5>
    </div>
  );
};
export default ProfileCard;
