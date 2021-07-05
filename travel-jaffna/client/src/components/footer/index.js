//Imports
import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


//Styling
const useStyles = makeStyles((theme) => ({
  footer: {
    background: 'linear-gradient(45deg, #293B5F 30%, #293B5F 90%)',
  
    height: 50,
    color: 'white',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    fontSize: 15,
    fontcolor:"white",
    position: "static",
    top: 'auto',
    // bottom: 0,
    width: "100%",
    marginTop: 10
  }, text:{
    fontcolor:"white"
  }
}));

//Copyright note
function Copyright() {
  const classes = useStyles()

  return (
    <Typography variant="body2" className={classes.text} align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        Explore Jaffna Hidden Tourist Place
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

//Footer component
function Footer() {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Copyright />
    </footer>
  );
}

export default Footer;
