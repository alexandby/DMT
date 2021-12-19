//Not complete!
import {
  AppBar,
  Container,
  Typography,
  Toolbar,
  Avatar,
  IconButton,
  Box,
  Menu,
  MenuItem,
  Tooltip,
  Button,
  Grid,
  CardMedia,
} from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';

//import { Link } from 'react-router-dom';

const pages = ['Games', 'Players'];
const settings = ['Profile', 'Logout'];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: '#1d2132', padding: '1rem', mb: '4rem' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Bebas Neue',
              fontSize: '2rem',
              background: 'linear-gradient(90deg, #ff0000, #fffb00)',
              WebkitTextFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
            }}
          >
            Deathmatch Tournaments
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            ></Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              ></Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="/img/death.png"
                  sx={{ height: '3.5rem', width: '3.5rem' }}
                />
                <Grid sx={{ ml: '0.5rem', mr: '0.5rem' }}>
                  <Grid item>
                    <Typography variant="body2" sx={{ color: 'gray' }}>
                      user1
                    </Typography>
                    <CardMedia component="img" image="/img/players-img/novice.png" height="30" />
                  </Grid>
                </Grid>
                <MoreVertIcon sx={{ color: 'gray' }} fontSize="large" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '60px', width: 320, maxWidth: '100%' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
