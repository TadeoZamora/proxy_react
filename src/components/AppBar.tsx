import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

interface IAppBarProps{
    titulo : string
}

const AppBarComponent = (props : IAppBarProps) => {
    return (
        <Box sx={{
            flexGrow: 1
        }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                        flexGrow: 1
                    }}>
                        {props.titulo}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default AppBarComponent