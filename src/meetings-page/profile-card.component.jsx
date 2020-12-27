import React from 'react';
import { Avatar, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';

import useStyles from './profile-card.style';

const ProfileCard = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.profileCard}>
      <Avatar className={classes.avatar} />
      <Typography className={classes.name} align="center">
        Zakaria Azziz
      </Typography>
      <Typography className={classes.pseudo} align="center">
        TheRedHacker
      </Typography>
      <Typography className={classes.description}>
        Actuellement étudiant en 3ème année à l’Ecole Nationale Supérieur
        d’Informatique et d’Analyse des Systèmes
      </Typography>
      <div className={classes.editBox}>
        <Typography>Edit Profile</Typography>
        <EditIcon className={classes.icon} fontSize="small" />
      </div>
      <div className={classes.meetingsNetwork}>
        <PeopleOutlineIcon className={classes.icon} fontSize="small" />
        <Typography>14 meetings</Typography>
      </div>
    </div>
  );
};
export default ProfileCard;
