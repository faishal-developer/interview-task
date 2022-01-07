import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { IconButton } from '@mui/material';

export default function SlideDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: '100vw', bgcolor:'#E3FCF9',textAlign:'center',height:'90vh'}}
            role="presentation"
            
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem style={{textAlign:'center'}} button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
                    <IconButton
                        onClick={toggleDrawer('bottom', true)}
                        sx={{ display: { md: 'none' } }}
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        {
                            state.bottom ? (
                                <CloseIcon/>
                            ) : (
                                <MenuIcon />
                            )
                        }

                    </IconButton>
                    <Drawer
                        style={{top:'50px'}}
                        anchor={'bottom'}
                        open={state['bottom']}
                        onClose={toggleDrawer('bottom', false)}
                    >
                        {list('bottom')}
                    </Drawer>
        </div>
    );
}
