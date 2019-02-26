import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import { 
    Paper
} from '@material-ui/core';

const styles = theme =>({
    title:{
        display: "inline-block",
        width: "25%",
        background: "linear-gradient(45deg, #f7993b 0%, #f7bb3b 100%)",
        padding: "0.5em 4em 0.5em 1em",
        marginTop: "0.5em"
    }
})

const PaperSection = ({classes, children, sectionName, root})=>{

    return <Paper style={root}>
        <h4 className={classes.title}>{sectionName}</h4>
        {children}
    </Paper>
}

export default withStyles(styles)(PaperSection);