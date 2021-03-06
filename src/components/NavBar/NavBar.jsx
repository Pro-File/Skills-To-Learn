import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import MoreIcon from '@material-ui/icons/MoreVert';
import { connect } from 'react-redux';
import {openModal} from '../../Redux/modals/modalActions';
import {signout} from '../../Redux/auth/authActions';
import SnackBar from '../SnackBar/SnackBar';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const NavBar = ({openModal, auth, signout}) => {
  const [isFirst, setisFirst] = React.useState(true);
  React.useEffect(() => {
    if (isFirst) {
      setisFirst(false);
      return;
    }
    else{
    if(auth!= null){
      console.log('hello from nav');
      setOpen(true);
    }
  }
  }, [auth])
  const classes = useStyles();
  const [ open ,setOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const logOut = ()=> {
    signout();
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={logOut}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  // Mobile Menu
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <ShoppingCartOutlinedIcon/>
          </Badge>
        </IconButton>
        <p>Courses</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 7 new notifications" color="inherit">
          <Badge badgeContent={7} color="secondary">
            <FavoriteBorderOutlinedIcon />
          </Badge>
        </IconButton>
        <p>Favourites</p>
      </MenuItem>

      <MenuItem>
        <IconButton aria-label="show 7 new notifications" color="inherit">
        <AccountCircle />
        </IconButton>
        <p>Account</p>
      </MenuItem>

      <MenuItem>
        <IconButton aria-label="show 7 new notifications" color="inherit">
        <PowerSettingsNewIcon />
        </IconButton>
        <p>Logout</p>
      </MenuItem>
      
      {/* <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem> */}
    </Menu>
  );
// Mobile Menu


  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
      
              <Logo/>
          <Typography className={classes.title} variant="h6" noWrap>
            Skills-To-Learn
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search???"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
            {/* Start CR */}
            {
               auth && auth.Name?
              <>
              <div className={classes.sectionDesktop}>
                
              <SnackBar open={open} setOpen = {setOpen}/>

              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <ShoppingCartOutlinedIcon/>
                </Badge>
              </IconButton>
  
              <IconButton aria-label="show 7 new notifications" color="inherit">
                <Badge badgeContent={7} color="secondary">
                  <FavoriteBorderOutlinedIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
            </>
            :
               <>
                <IconButton color="inherit" onClick= {()=> openModal({modalType : "OpenSignIn"})}>
                <PowerSettingsNewIcon />
                </IconButton>

                </>
            }
          
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
const Logo = styled.div`
  margin: 10px 20px;
  width: 60px;
  height: 60px;
  /* background: url("./../../images/Logo.png");
  background-size: 140% 140%, contain;
  background-repeat: no-repeat;
  background-position-x: center; */
  background: black;
  border-radius: 50%;
  z-index: 200;

`;


var mapState = (state) => ({
  auth: state.auth,
})
var actions = ({
  openModal,
  signout,
})

export default connect(mapState, actions)(NavBar);