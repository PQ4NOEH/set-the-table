import React from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import red from '@material-ui/core/colors/red';

import {
    Button
} from '@material-ui/core';

import CancelIcon from '@material-ui/icons/Cancel';
const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        color: theme.palette.getContrastText(red[700]),
        backgroundColor: red[700],
        '&:hover': {
            backgroundColor: red[900],
        }
    },
    leftIcon: {
      marginRight: theme.spacing.unit,
    },
    rightIcon: {
      marginLeft: theme.spacing.unit,
    },
    iconSmall: {
      fontSize: 20,
    }
  });

const CancelButton = ({classes, onClick})=>{
    return (
        <Button 
            variant="contained"
            className={classes.button}
            onClick={onclick}
        >
            <CancelIcon 
                className={classNames(classes.leftIcon, classes.iconSmall)} 
            />
            Cancelar
        </Button>
    );
}

export default withStyles(styles)(CancelButton);

