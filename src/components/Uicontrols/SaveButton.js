import React from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';

import {
    Button
} from '@material-ui/core';

import SaveIcon from '@material-ui/icons/Save';
const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    leftIcon: {
      marginRight: theme.spacing.unit,
    },
    rightIcon: {
      marginLeft: theme.spacing.unit,
    },
    iconSmall: {
      fontSize: 20,
    },
  });

const SaveButton = ({classes, onClick})=>{
    return (
        <Button 
            variant="contained" 
            color="primary" 
            className={classes.button}
            onClick={onclick}
        >
            <SaveIcon 
                className={classNames(classes.leftIcon, classes.iconSmall)} />
            Guardar
        </Button>
    );
}

export default withStyles(styles)(SaveButton);

