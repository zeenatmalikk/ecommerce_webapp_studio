import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import "./Webcheckup.css";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
export const Webcheckup = () => {
  return (
    <div style={{ marginTop: "9%", backgroundColor:"#EE6064", }}>
      <Grid container>
        <Grid item md={1} />
        <Grid item md={5}>
          <img
            className="chck"
            src="https://3841ex3t1et33uno5h3thxr7-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/site-checkup.jpg"
          />
        </Grid>
        <Grid item md={5} style={{marginTop:"6%",  marginBottom:50}}>
          <Typography className="hd">
            Get Your Personalized Website Checkup & Let Us Prove Ourselves to
            You
          </Typography>
          <Typography className="hd2">
            Receive a custom report and discover exactly how to increase your
            sales, get more traffic and improve your website.
          </Typography>
          <Button variant="contained" className="free">
              Free Website checkup <ArrowRightAltIcon/>
          </Button>
        </Grid>
        <Grid item md={1}/>
      </Grid>
    </div>
  );
};
