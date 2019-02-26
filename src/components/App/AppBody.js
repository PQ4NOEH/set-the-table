import React from 'react';

import withStyles from "@material-ui/core/styles/withStyles";

import AppRoutes from "../../routes/AppRoutes";



const styles = {
    root:{
        marginTop: "5em"
    }
}

const AppBody = ({classes})=>{
    return <div className={classes.root}>
        <AppRoutes />
    </div>
}


export default withStyles(styles)(AppBody);