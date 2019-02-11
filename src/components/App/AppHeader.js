import React from 'react';

import { AppBar } from '@material-ui/core';

import AppMenu from './AppMenu';

const AppHeader = ()=>{
    return  <AppBar>
            <AppMenu />
        </AppBar>
};


export default AppHeader;