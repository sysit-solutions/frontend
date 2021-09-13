import React from 'react'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import { EmptyTemplate } from '@freenit-framework/core'
import store from 'store'

// Components
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  ListItemIcon,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core'

// Icons
import CloseIcon from '@material-ui/icons/Clear'
import DashboardIcon from '@material-ui/icons/Dashboard'
import HomeIcon from '@material-ui/icons/Home'
import LoginIcon from '@material-ui/icons/Input'
import LogoutIcon from '@material-ui/icons/PowerSettingsNew'
import MenuIcon from '@material-ui/icons/Menu'
import ProfileIcon from '@material-ui/icons/AccountCircle'
import RoleIcon from '@material-ui/icons/People'
import UserIcon from '@material-ui/icons/PeopleOutline'
import HamburgerIcon from '@material-ui/icons/Reorder'

import styles from './styles'

class Template extends React.Component {
  state = {
    showMenu: false,
  }

  constructor(props) {
    super(props)
    window.onresize = store.resolution.resize
  }

  handleLogout = async () => {
    const response = await store.auth.logout()
    if (response.ok) {
      store.history.push('/')
    }
  }

  handleMenuOpen = () => {
    this.setState({ showMenu: true })
  }

  handleMenuClose = () => {
    this.setState({ showMenu: false })
  }

  render() {
    const { auth, profile, resolution } = store
    const AnonButton = (
      <Link to="/login" style={styles.login}>
        <IconButton color="inherit">
          <LoginIcon />
        </IconButton>
      </Link>
    )
    const LoggedinButton = (
      <IconButton color="inherit" onClick={this.handleLogout}>
        <LogoutIcon />
      </IconButton>
    )
    const AuthButton = auth.authenticated() ? LoggedinButton : AnonButton
    const AdminMenu = profile.detail.admin
      ? [
          <Link to="/dashboard" key="dashboard">
            <MenuItem>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              Dashboard
            </MenuItem>
          </Link>,
          <Link to="/users" key="users">
            <MenuItem>
              <ListItemIcon>
                <UserIcon />
              </ListItemIcon>
              Users
            </MenuItem>
          </Link>,
          <Link to="/roles" key="roles">
            <MenuItem>
              <ListItemIcon>
                <RoleIcon />
              </ListItemIcon>
              Roles
            </MenuItem>
          </Link>,
        ]
      : []
    const LoggingMenu = auth.authenticated() ? (
      <MenuItem onClick={this.handleLogout}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        Logout
      </MenuItem>
    ) : (
      <Link to="/login">
        <MenuItem>
          <ListItemIcon>
            <LoginIcon />
          </ListItemIcon>
          Login
        </MenuItem>
      </Link>
    )
    const AuthMenu = auth.authenticated()
      ? [
          <Link to="/profile" key="profile">
            <MenuItem>
              <ListItemIcon>
                <ProfileIcon />
              </ListItemIcon>
              Profile
            </MenuItem>
          </Link>,
          ...AdminMenu,
        ]
      : null
    const BarLinks = resolution.width > 410 ? <div>{AuthButton}</div> : null
    const fontSize = resolution.width < 1200 ? '1.5rem' : null
    const justifyContent = resolution.width < 1200 ? 'space-around' : 'center'
    const iconStyle = resolution.width < 1200 ? { height: 50, width: 50 } : null
    const menuItems =
      resolution.width > 600
        ? [
            <Link to="/hosting" key="hosting">
              <Button style={{ color: 'white', fontSize }}>Hosting</Button>
            </Link>,
            <Link to="/security" key="security">
              <Button style={{ color: 'white', fontSize }}>Security</Button>
            </Link>,
            <Link to="/design" key="design">
              <Button style={{ color: 'white', fontSize }}>
                Instructional Design
              </Button>
            </Link>,
            <Link to="/content" key="content">
              <Button style={{ color: 'white', fontSize }}>
                Content Creation
              </Button>
            </Link>,
            <Link to="/pricing" key="pricing">
              <Button style={{ color: 'white', fontSize }}>Pricing</Button>
            </Link>,
          ]
        : null
    const hamburger =
      resolution.width < 600 ? (
        <HamburgerIcon style={iconStyle} onClick={this.handleMenuOpen} />
      ) : null
    return (
      <EmptyTemplate.Detail secure={this.props.secure}>
        <div style={this.props.style}>
          <AppBar
            position="sticky"
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              boxShadow: 'none',
            }}
          >
            <Link to="/" style={{ marginLeft: 10 }}>
              <HomeIcon style={iconStyle} />
            </Link>
            <Toolbar
              style={{
                display: 'flex',
                justifyContent,
                flex: 1,
                paddingLeft: '10%',
                paddingRight: '10%',
              }}
            >
              {menuItems}
            </Toolbar>
            {hamburger}
          </AppBar>
          {this.props.children}
          <Drawer
            open={this.state.showMenu}
            onClose={this.handleMenuClose}
            anchor="right"
          >
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h5" color="inherit" style={styles.flex}>
                  &nbsp;
                </Typography>
                <IconButton color="inherit" onClick={this.handleMenuClose}>
                  <CloseIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
            <div
              role="button"
              onClick={this.handleMenuClose}
              style={styles.menu}
              tabIndex={0}
              onKeyDown={this.handleMenuClose}
            >
              {AuthMenu}
              {LoggingMenu}
            </div>
          </Drawer>
          <div
            style={{
              padding: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              alignText: 'center',
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: '#eeeeee',
              color: 'gray',
            }}
          >
            2021 SysIT LLC
          </div>
        </div>
      </EmptyTemplate.Detail>
    )
  }
}

export default observer(Template)
