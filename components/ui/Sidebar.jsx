import { useContext } from "react";
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { UIContext } from "../../context/ui";

const menuItems = ['Inbox', 'Starred', 'Send email', 'Drafts'];

export const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useContext(UIContext);
  return (
    <Drawer
      anchor="left"
      open={isSidebarOpen}
      onClose={closeSidebar}
    >
      <Box sx={{ width: 250, }}>
        <Box sx={{ padding: '5px 10px', }}>
          <Typography variant='h4'>Menu</Typography>
        </Box>
        <List>
          {
            menuItems.map((item, index) => (
              <ListItem key={index} button>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />}
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))
          }
        </List>
        <Divider />
        <List>
          {
            menuItems.map((item, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />}
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))
          }
        </List>
      </Box>
    </Drawer>
  );
};
