import React,{useState} from 'react'
import {TextField, Grid, Button, Typography, Divider, Link } from '@material-ui/core';
import UseStyles from './styles';
import { v4 as uuid } from 'uuid';
import { connect } from 'react-redux';
import SnackBar from '../../components/SnackBar/SnackBar';
import {googleSignin, signup} from '../../Redux/auth/authActions';
import {closeModal, openModal} from '../../Redux/modals/modalActions';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
const SignUp = ({googleSignin, closeModal, openModal}) => {
    var [photo,setImg] = useState("");
    var [Name,setName] = useState("");
    var [Email,setEmail] = useState("");
    var [Pass, setPass] = useState("");
    const [ open ,setOpen] = useState(false);

    var HandleGoogle = (e) => {
      e.preventDefault();
      closeModal();
      setOpen(true);
      googleSignin();
    }
    
    var HandleSubmit = async(e) =>{
        e.preventDefault();

        var user = {
            uid : uuid(),
            Name,
            Email,
            Pass,
            photo,
        }
        
        const SignUpStatus = await signup(user)
        closeModal()
        if(SignUpStatus === true) {
          setOpen(true)
        }
        // console.log(user)
    }
    const Classes = UseStyles();
    return (
        <Grid container spacing={2}>
            <SnackBar open={open} setOpen = {setOpen}/>
            <Grid item xs={12} className = {Classes.head}>
            <Typography align="center" variant="h3">  WELCOME
            </Typography>
            <Typography variant = "h5" align="center"  gutterBottom>
                to S-To-L
            </Typography>
            </Grid>
            <Divider />
            <Grid item xs={6} >
            <TextField className={Classes.styled} label="Enter Name" required value={Name}
            onChange={(e) => setName(e.target.value)} fullWidth/>
            </Grid>

            <Grid item xs={6} >
            <TextField className={Classes.styled} label="Enter Email" required value={Email} 
            onChange={(e) => setEmail(e.target.value)} fullWidth/>
            </Grid>

            <Grid item xs={6}>
            <TextField className={Classes.styled} label=" Enter Password" required value={Pass} 
            onChange={(e) => setPass(e.target.value)} fullWidth/>
            </Grid>

            <Grid item xs={6} >
            <TextField type="file" className={Classes.styled} label="Select Image"  value={photo} 
            onChange={(e) => setImg(e.target.value)} fullWidth/>
            </Grid>

            <Button fullWidth className={Classes.button} variant="outlined" type="submit" 
             onClick={(e) => HandleSubmit(e)} color="primary">
                Sign Up
            </Button>
            
            <Grid item xs = {12} className={Classes.social}>
            <Typography align = "center" variant = "subtitle2">or continue with</Typography>
        <Grid item xs={3} spacing="3">
          <Button variant="outlined">
            {/* <VisuallyHidden>Login with Facebook</VisuallyHidden> */}
            <FaFacebook />
          </Button>
          <Button variant="outlined" onClick={HandleGoogle}>
            {/* <VisuallyHidden>Login with Google</VisuallyHidden> */}
            <FaGoogle />
          </Button>
          <Button variant="outlined">
            {/* <VisuallyHidden>Login with Github</VisuallyHidden> */}
            <FaGithub />
          </Button>
        </Grid>
            </Grid>

            <Grid item xs={12}>
            <Typography className={Classes.last} align="center" variant="subtitle2">
                Already have an account?
                <Link className={Classes.SignInBtn} onClick= {()=> openModal({modalType : "OpenSignIn"})}>
                 Login
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
  signup,
})
export default connect(null, actions)(SignUp);
