import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import "./Review.css";
export const Review = () => {
  return (
    <div style={{ marginTop: "6%", backgroundColor:"#F1EDE5" }}>
      <Grid container>
        <Grid item md={1} />
        <Grid item md={5} style={{marginTop:"4%"}}>
          <div style={{ display: "flex" }}>
            <Typography className="increments">+2,705%</Typography>
            <img src="https://3841ex3t1et33uno5h3thxr7-wpengine.netdna-ssl.com/wp-content/themes/stack-child/imgs/arrow.svg" />
          </div>
          <h3 className="subhead">
            Increase in Revenue Since Working with Studio
          </h3>
          <Typography className="rev">
            “Everything has improved. The redesign we did is making us more
            money, and the social media work has gained us followers. The SEO
            work continues to bring people to our site with content that shows
            improvement with each monthly report.”
          </Typography>
          <img
            className="compname"
            src="https://3841ex3t1et33uno5h3thxr7-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/swan-hose.png"
          />
          <div >
            <h4 className="strat">Strategies used:</h4>
            <Button className="btn" variant="contained">
                SEO
            </Button>
            <Button className="btn2" variant="contained">
                DESIGNS
            </Button>
            <Button className="btn" variant="contained">
                PPC
            </Button>
            <Button className="btn3" variant="contained">
                SOCIAL MEDIA
            </Button>
          </div>
        </Grid>
        <Grid item md={5} style={{marginTop:"2%", marginBottom:"2%"}}>
          <img className="comppg" src="https://3841ex3t1et33uno5h3thxr7-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/swan-tan.png"/>
        </Grid>
        <Grid item md={1} />
      </Grid>
    </div>
  );
};
