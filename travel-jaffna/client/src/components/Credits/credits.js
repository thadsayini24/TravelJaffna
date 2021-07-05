import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';

//Styling
const useStyles = makeStyles((theme) => ({
  sections: {
    background:"#EEC217",
    color: "#03355F",
    fontSize: 16,
    textDecoration: "none",
    textAlign: "center",
    "&:hover": {
      color: "#03355F",
    },
  },
  top:{
    background:"#EEC217",
    color: "#03355F",
    fontSize: 13,
    marginBottom:5
  },
  column:{
    textAlign:"right"
    
  },
  space:{
    marginBottom:3
  },
  test:{
    height:100,
    marginBottom:10
  }
}));

//Credit component
const Credits = () => {
  const classes = useStyles();
  return (
    <>

       
    </>
  )
}

export default Credits;
