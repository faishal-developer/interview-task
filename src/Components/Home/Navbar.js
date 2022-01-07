import React from 'react';
import logo from '../../images/logo.png'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import SlideDrawer from './Drawer';

const pages = ['Programs', 'Live Projects', 'Community', 'Jobs'];

const Navbar = () => {


    return (
        <AppBar sx={{ bgcolor: '#E3FCF9', color: '#8B9ED4', boxShadow: 'none' }} position="static">
            <Container maxWidth="xl">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }} disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2 }}
                    >
                        <img style={{ width: '100px' }} src={logo} alt='logo' />
                    </Typography>
                    <Box>
                        <SlideDrawer />
                        <Box sx={{ flexGrow: 1, float: 'right', display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    sx={{ my: 2, mx: 1, color: '#8B9ED4', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;