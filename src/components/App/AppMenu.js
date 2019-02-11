import React from 'react';
import { IconButton, Toolbar } from "@material-ui/core";
import FastFood from "@material-ui/icons/Fastfood";
import DateRange from "@material-ui/icons/DateRange";

const AppMenu = ()=>{
    return <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
          >
            <FastFood />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
          >
            <DateRange />
          </IconButton>
    </Toolbar>
}


export default AppMenu;