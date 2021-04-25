import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import "./Review2.css";
export const Review2 = () => {
  return (
    <div style={{ marginTop: "5%", backgroundColor: "#F1EDE5", marginBottom:"2%" }}>
      <Grid container>
        <Grid item md={1} />
        <Grid item md={5} style={{marginTop:"4%", marginBottom:"2%"}}>
          <img
            className="fab"
            src="https://3841ex3t1et33uno5h3thxr7-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/decor-tan.png"
          />
        </Grid>
        <Grid item md={5} style={{ marginLeft: "6%", marginTop: "5%" }}>
          <div style={{ display: "flex" }}>
            <Typography className="inc">+110%</Typography>
            <img src="https://3841ex3t1et33uno5h3thxr7-wpengine.netdna-ssl.com/wp-content/themes/stack-child/imgs/arrow.svg" />
          </div>
          <h3 className="re">Increase in Revenue</h3>
          <Typography className="body">
            “Our volume of sales has grown substantially. The number of site
            visitors and traffic has increased fourfold. Grow With Studio
            provides reports that allow me to see Google Analytics. The graphs
            are great to look at; they look like a mountain because they shoot
            straight up. ”
          </Typography>
          <img
            className="name2"
            src="https://3841ex3t1et33uno5h3thxr7-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/decorative-fabrics.png"
          />
          <Typography className="strategies">Strategies used:</Typography>
          <Button className="seo">SEO</Button>
          <Button className="seo2">Social media</Button>
        </Grid>
        <Grid item md={1} />
      </Grid>
    </div>
  );
};
