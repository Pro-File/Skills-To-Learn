import {useState, React} from 'react'
import {TextField, Grid, Button, Typography, Divider, Link } from '@material-ui/core';
import UseStyles from './styles';
import { connect } from 'react-redux';
import SnackBar from '../../components/SnackBar/SnackBar';
import {googleSignin, signin} from '../../Redux/auth/authActions';
import {closeModal, openModal} from '../../Redux/modals/modalActions';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'

const SignIn = ({googleSignin, closeModal, openModal, signin}) => {
    var [Email,setEmail] = useState("");
    var [Pass, setPass] = useState("");
    const [ open ,setOpen] = useState(false);

    var HandleGoogle = (e) => {
      e.preventDefault();
      closeModal();
      googleSignin();
      setOpen(true);
    }
    
    var HandleSubmit = async(e) =>{
        e.preventDefault();

        var user = {
            Email,
            Pass,
        }
        
        const SignInStatus = await signin(user)
        if(SignInStatus === true) {
          // setOpen(true)
          // console.log(SignInStatus)
          closeModal()
        }
        // console.log(user)
    }
    const Classes = UseStyles();
    return (
        <Grid container spacing={2}>
            <SnackBar open={open} setOpen = {setOpen}/>
            <Grid item xs={12} className = {Classes.head}>
            <Typography align="center" variant="h3">  WELCOME TO
            </Typography>
            <Typography variant = "h5" align="center"  gutterBottom>
               Skills-To-Learn
            </Typography>
            </Grid>
            <Divider />
            <Grid item xs={12} >
            <TextField className={Classes.styled} label="Enter Email" required value={Email} 
            onChange={(e) => setEmail(e.target.value)} fullWidth/>
            </Grid>

            <Grid item xs={12}>
            <TextField className={Classes.styled} label=" Enter Password" required value={Pass} 
            onChange={(e) => setPass(e.target.value)} fullWidth/>
            </Grid>

            <Button fullWidth className={Classes.button} variant="contained" type="submit" 
             onClick={(e) => HandleSubmit(e)} color="primary">
                Sign In
            </Button>
            
            <Grid item xs = {12} className={Classes.social}>
            <Typography align = "center" variant = "subtitle2" className={Classes.continue}>or continue with</Typography>
        <Grid container spacing={0}>
        <Grid item xs={3}></Grid>
          <Grid item xs={2} className={Classes.radioGroup}>
          <Button variant="contained">
            {/* <VisuallyHidden>Login with Facebook</VisuallyHidden> */}
            <FaFacebook />
          </Button>
          </Grid>
          <Grid item xs={2} className={Classes.radioGroup}>
          <Button variant="contained" onClick={(e)=> {HandleGoogle(e)}}>
            {/* <VisuallyHidden>Login with Google</VisuallyHidden> */}
            <FaGoogle />
          </Button>
          </Grid>
          <Grid item xs={2} className={Classes.radioGroup}>
          <Button variant="contained">
            {/* <VisuallyHidden>Login with Github</VisuallyHidden> */}
            <FaGithub />
          </Button>
          </Grid>
          <Grid item xs={3}></Grid>

        </Grid>
            </Grid>

            <Grid item xs={12}>
            <Typography className={Classes.last} align="center" variant="subtitle2">
                Don't have an account?
                <Link className={Classes.SignInBtn} onClick= {()=> openModal({modalType : "OpenSignUp"})}>
                 Sign Up
                </Link>
            </Typography>
            </Grid>

        </Grid>
    )
}


var actions = ({
  googleSignin,
  openModal,  
  closeModal,
  signin,
})
export default connect(null, actions)(SignIn);
