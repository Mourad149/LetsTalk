import React from "react";
import { Avatar } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";

import useStyles from "./profile-card.style";

const ProfileCard = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.profileCard}>
      <h5>Your profile</h5>
      <Avatar className={classes.avatar} />
      <p className={classes.name}>Zakaria Azziz</p>
      <p className={classes.pseudo}>TheRedHacker</p>
      <p className={classes.description}>
        Actuellement étudiant en 3ème année à l’Ecole Nationale Supérieur
        d’Informatique et d’Analyse des Systèmes
      </p>
      <div className={classes.editBox}>
        <span>Edit Profile</span>
        <EditIcon className={classes.icon} fontSize="small" />
      </div>
      <div className={classes.meetingsNetwork}>
        <PeopleOutlineIcon className={classes.icon} fontSize="small" />
        <span>14 meetings</span>
      </div>
    </div>
  );
};
export default ProfileCard;
