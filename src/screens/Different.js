import { Container, Typography } from "@material-ui/core";
import React from "react";
import "./Different.css";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
export const Different = () => {
  return (
    <div>
      <div>
        <h1 className="diff">We Do Things A Little Differently Here</h1>
      </div>
      <Container>
<div style={{display:"flex", marginTop:"6%"}}>
      <div>
        <img
          className="icondet"
          src="http://www.myiconfinder.com/uploads/iconsets/256-256-8ea7e3c886bed7751b66a341e452c8bb.png"
        />
        <Typography className="title"> Transparent Reporting</Typography>
        <Typography className="about0">
          We want to earn your business, not trap it! Our flexible,
          month-to-month options reflect our belief in our ability to deliver
          results. It’s our job to make sure an ongoing partnership with us is
          an easy “Yes.”
        </Typography>
      </div>
      <div style={{marginLeft:20}}>
        <img
          className="icondet"
          src="http://www.myiconfinder.com/uploads/iconsets/256-256-9f53e972159a00b6f18459310fed2bec.png"
        />
        <Typography className="title1">No Long-Term Contracts</Typography>
        <Typography className="about">
          We give it to you straight — no murky reports, no creative
          number-crunching, and no hiding behind jargon. We love sharing the
          “What” and “Why” behind every strategy.
        </Typography>
      </div>
      <div style={{marginLeft:20}}>
        <img
          className="icondet"
          src="http://www.myiconfinder.com/uploads/iconsets/256-256-042663fcf25e4dfa31c246813829b3d5.png"
        />
        <Typography className="title2">Customized Strategies</Typography>
        <Typography className="about2">
          One-size-fits-all marketing? Not on our watch. Your digital strategy
          will be shaped by your industry, made for your audience, and
          prioritized according to your unique needs.
        </Typography>
      </div>
      <div style={{marginLeft:20}}>
        <img
          className="icondet"
          src="http://www.myiconfinder.com/uploads/iconsets/256-256-5eea0c1930aab7916cc960e027d032db.png"
        />
        <Typography className="title3">Ecommerce Experts</Typography>
        <Typography className="about3">
          12 years of ecommerce experience is baked into everything we do. We
          approach every strategy with a keen eye for conversions and sales, and
          have hundreds of happy merchants to show for it.
        </Typography>
      </div>
      </div>
      </Container>
      <h1 className="help">We Can Help If You Are...</h1>
      <Container>
        <div style={{ display: "flex" }}>
          <div>
            <ul style={{ display: "flex" }}>
              <CheckCircleOutlineRoundedIcon className="ic" />
              <li className="checktext">Frustrated with low online sales</li>
            </ul>
            <ul style={{ display: "flex" }}>
              <CheckCircleOutlineRoundedIcon className="ic" />
              <li className="checktext"> Not getting enough website traffic</li>
            </ul>
            <ul className="checktext" style={{ display: "flex" }}>
              <CheckCircleOutlineRoundedIcon className="ic" />
              <li>Paying for traffic that doesn't result in sales</li>
            </ul>
          </div>
          <div style={{ marginLeft: "20%" }}>
            <ul style={{ display: "flex" }}>
              <CheckCircleOutlineRoundedIcon className="ic" />
              <li className="checktext">Not sure how to grow your businesss</li>
            </ul>
            <ul style={{ display: "flex" }}>
              <CheckCircleOutlineRoundedIcon className="ic" />
              <li className="checktext">
                {" "}
                Suffering from low conversion rates
              </li>
            </ul>
            <ul className="checktext" style={{ display: "flex" }}>
              <CheckCircleOutlineRoundedIcon className="ic" />
              <li>Ready to take your business to the next level</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};
