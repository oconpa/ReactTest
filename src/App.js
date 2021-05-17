import React, { useContext, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Menu,
  MenuItem
} from '@material-ui/core';
import GlobalContext from "./utils/appContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Chat from "./views/Chat";
import Dashboard from "./views/Dashboard";
import Home from "./views/Home";
// import {
//   db_getAllRecords
// } from './utils/db';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const context = useContext(GlobalContext)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // When user first logs in he must choose an identity, if the identity is Bob he should be able to see the dashboard
  // If he's a user not in the database already, he should be added
  // Otherwise assume
  // useEffect below will run on the first load of the site, you must check and save the username to the context
  useEffect(() => {
    console.log(context)
    // const data = db_getAllRecords()
  }, [context])

  return (
    // Below will have to change, implement a conditional render based on identity of Bob or others
    // Hint: Bob should be the only one who can see the dashboard
    <Router>
      <AppBar position="static">
        <Toolbar>
          <IconButton href="/" edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            Home
          </IconButton>
          <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              Choose a Page
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                  <Link to="/chat">
                    Chat
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/dash">
                    Profits Dashboard
                  </Link>
                </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
        <Switch>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="/dash">
            <Dashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  )
}
