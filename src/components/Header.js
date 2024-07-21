import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Alberto Bort
                </Typography>
                <Typography variant="subtitle1" component="div">
                    Business Analyst Técnico
                </Typography>
                <Link href="https://www.linkedin.com/in/albertobort/" color="inherit" sx={{ ml: 2 }}>
                    LinkedIn
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default Header;