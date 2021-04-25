import { Card, CardContent, Container, Grid } from "@material-ui/core";
import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "./Marketing.css";

const data = [
  {
    img:
      "https://3841ex3t1et33uno5h3thxr7-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/tula-screenshot.jpg",
    perc: "+593%",
    incr: "increase in revenue",
    comp:
      "https://3841ex3t1et33uno5h3thxr7-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/swan-hose.png",
  },
  {
    img:
      "https://3841ex3t1et33uno5h3thxr7-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/lili-alessandra.jpg",
    perc: "+593%",
    incr: "increase in revenue",
    comp:
      "https://3841ex3t1et33uno5h3thxr7-wpengine.netdna-ssl.com/wp-content/uploads/2020/10/vapor-lounge-logo.png",
  },
  {
    img:
      "https://3841ex3t1et33uno5h3thxr7-wpengine.netdna-ssl.com/wp-content/uploads/2020/10/vapor-screen.jpg",
    perc: "+593%",
    incr: "increase in revenue",
    comp:
      "https://3841ex3t1et33uno5h3thxr7-wpengine.netdna-ssl.com/wp-content/themes/stack-child/imgs/tula-dark.png",
  },
  {
    img:
      "https://3841ex3t1et33uno5h3thxr7-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/bariatric.jpg",
    perc: "+593%",
    incr: "increase in revenue",
    comp:
      "https://3841ex3t1et33uno5h3thxr7-wpengine.netdna-ssl.com/wp-content/themes/stack-child/imgs/lili-dark.png",
  },
  {
    img:
      "https://3841ex3t1et33uno5h3thxr7-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/rc-superstore.jpg",
    perc: "+593%",
    incr: "increase in revenue",
    comp:
      "https://3841ex3t1et33uno5h3thxr7-wpengine.netdna-ssl.com/wp-content/themes/stack-child/imgs/bariatric-dark.png",
  },
  {
    img:
      "https://3841ex3t1et33uno5h3thxr7-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/poplollies.jpg",
    perc: "+593%",
    incr: "increase in revenue",
    comp:
      "https://3841ex3t1et33uno5h3thxr7-wpengine.netdna-ssl.com/wp-content/themes/stack-child/imgs/rc-superstore-dark.png",
  },
];

const Marketing = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 0;
  return (
    <div style={{marginTop:"5%"}}>
      <Container>
        <h1 className="marketing">
          Results-Driven, Delightful Design & Marketing
        </h1>
        <h3 className="desc">
          Grow With Studio is a digital marketing agency that helps ecommerce
          businesses of every size see big results. Our personalized,
          people-first strategies will put your businesses on the map and propel
          you to the next stage in your journey.
        </h3>
      </Container>
      <Container>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        gutter={2}
        leftChevron={<button>{<ArrowBackIcon />}</button>}
        rightChevron={<button>{<ArrowForwardIcon />}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
        disableSwipe={true}
      >
        {data.map((item) => (
         
            <div style={{ marginInline: "15%", marginTop: "15%",  }}>
              <img className="compimg" src={item.img} />
              <div style={{display:"flex"}}>
              <h2 className="perc">{item.perc}</h2>
              <img className="arr" src="https://3841ex3t1et33uno5h3thxr7-wpengine.netdna-ssl.com/wp-content/themes/stack-child/imgs/arrow.svg"/>
              </div>
              <h4 className="incr">{item.incr}</h4>
              <img className="compname" src={item.comp} />
            </div>
         
        ))}
      </ItemsCarousel>
      </Container>
    </div>
  );
};

export default Marketing;
