import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import { Divider } from '@material-ui/core';

const styles = theme =>({
    root:{
        paddingTop: "1em",
        textAlign: "right"
    },
    divider:{
        height: "2px"
    }
});
const FormOptions = ({classes, children})=>{

    return (
        <div className={classes.root}>
            <Divider variant="middle" className={classes.divider}/> 
            {children}
        </div>
    );
}


export default withStyles(styles)(FormOptions);