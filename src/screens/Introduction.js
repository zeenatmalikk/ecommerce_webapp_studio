import { Button, makeStyles, } from "@material-ui/core";
import React from "react";
import "./Introduction.css";

const useStyles=makeStyles((a)=>({
  btn:{
    '&:hover': {
      backgroundColor: '#112549',
      borderColor: '#0062cc',
      color:"white"
      
    },
  }
}))

export const Introduction = () => {
  const classes = useStyles();
  return (
    <div
      // style={{
      //   backgroundColor:"#288477"
      // }}
    >
       
    <div>
        <h2 className="main">We Grow E-Commerce</h2>
        <h3 className="sub">
          Our team is focused onone thing helping you grow your sales and
          profits.
        </h3>
        <h3  className="sub2">
          On average we helped buiseness increase revenue by 90%
        </h3>
        {/* <h2 className="platforms">
            We grow E-commerce on every major platform
        </h2> */}
        <div style={{marginLeft:"43%"}}>
        <Button  className={classes.btn} variant="outlined" style={{fontSize:18, marginLeft:"5%", marginTop:"2%", fontWeight:"bold", borderStyle:"double", borderWidth:"3px",}}> Lets Chat</Button>
        </div>
    </div>
<img className="growth" src="https://cdn.dribbble.com/users/19849/screenshots/13934663/media/f55bf923be38e4fc1b77b53b51a51e07.png?compress=1&resize=1000x750"/>

    <hr className="new"></hr>
    </div>
  );
};
