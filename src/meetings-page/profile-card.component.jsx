import { React, useState } from "react";
import { Avatar } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";

import useStyles from "./profile-card.style";
import CreateMeetingModal from "./create-meeting-modal.component";

const ProfileCard = (props) => {
  const classes = useStyles();

  const [state, setState] = useState({ showModal: false });

  const showModal = () => {
    setState({ showModal: true });
  };

  const hideModal = () => {
    setState({ showModal: false });
  };

  const modalClassName = state.showModal
    ? classes.displayBlock
    : classes.displayNone;

  return (
    <div className={classes.profileCard}>
      <h5 style={{ textAlign: "center" }}>Your profile</h5>
      <Avatar className={classes.avatar} />
      <p className={classes.name} style={{ textAlign: "center" }}>
        Zakaria Azziz
      </p>
      <p className={classes.pseudo} style={{ textAlign: "center" }}>
        TheRedHacker
      </p>
      <p className={classes.description}>
        Actuellement étudiant en 3ème année à l’Ecole Nationale Supérieur
        d’Informatique et d’Analyse des Systèmes
      </p>
      <div className={classes.editBox}>
        <span>Edit Profile</span>
        <EditIcon className={classes.icon} fontSize="small" />
      </div>
      <div className={classes.addBox} onClick={showModal}>
        <AddIcon className={classes.icon} fontSize="small" />
        <span>Create meeting</span>
      </div>
      <div className={classes.meetingsNetwork}>
        <PeopleOutlineIcon className={classes.icon} fontSize="small" />
        <span>14 meetings</span>
      </div>
      <CreateMeetingModal cssClass={modalClassName} hideModal={hideModal} />
    </div>
  );
};
export default ProfileCard;
