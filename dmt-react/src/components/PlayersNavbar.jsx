import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';

const PlayersNavbar = () => {
  return (
    <List sx={{ display: 'flex' }}>
      <ListItem>
        <ListItemIcon>
          <ListItemText>Novice</ListItemText>
          <img src="/img/players-img/novice.png" alt="novice" />
        </ListItemIcon>
      </ListItem>
      <ListItem>
        <img src="/img/players-img/amateur.png" alt="amateur" />
      </ListItem>
      <ListItem>
        <img src="/img/players-img/expert.png" alt="amateur" />
      </ListItem>
    </List>
  );
};

export default PlayersNavbar;
