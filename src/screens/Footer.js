import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import "./Footer1.css";
export const Footer = () => {
  return (
    <div style={{marginTop:"6%", backgroundColor:"#031043", color:"white"}}>
      <Grid container>
        <Grid item md={1} />
        <Grid item md={2}>
          <div style={{ display: "flex", marginTop:"38%" }}>
            <Typography className="logo1">Studio</Typography>
            <PlayCircleFilledIcon className="icf" />
          </div>
          <Typography className="subtag">We Grow Ecommerce</Typography>
        </Grid>
        <Grid item md={6} style={{ display: "flex", marginTop: "6%" }}>
          <div>
            <Typography className="finfo">What we do?</Typography>
            <Typography className="finfosub">design</Typography>
            <Typography className="finfosub">Seo</Typography>
            <Typography className="finfosub">Social Media</Typography>
            <Typography className="finfosub">Food Ecommerce</Typography>
            <Typography className="finfosub">Digital advertising</Typography>
          </div>
          <div style={{ marginLeft: "15%",  }}>
            <Typography className="finfo">Results & Resources</Typography>
            <Typography className="finfosub">Case studied</Typography>
            <Typography className="finfosub">Design gallery</Typography>
            <Typography className="finfosub">Blog</Typography>
            <Typography className="finfosub">Books and guides</Typography>
            <Typography className="finfosub">Apps & Partners</Typography>
          </div>
          <div style={{ marginLeft: "14%" }}>
            <Typography className="finfo">Who we Are?</Typography>
            <Typography className="finfosub">About us</Typography>
            <Typography className="finfosub">Contact</Typography>
            <Typography className="finfosub">
              howdy@growwithstudio.com
            </Typography>
            <Typography className="finfosub">1-866-711-GROW (4769)</Typography>
            <Typography className="finfosub">Brand</Typography>
          </div>
        </Grid>
        <Grid item md={3} style={{marginBottom:"6%"}}>
          <h1 className="mail">
            Get Actionable Ecommerce Tips and Advice in Your Inbox
          </h1>
          <TextField
            label="Email Address"
            variant="outlined"
            style={{ marginLeft: "5%", marginTop: "5%", backgroundColor:"white", borderRadius:"10%" }}
          /><br></br>
          <Button variant="contained" className="signup">
              Sign Up
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
