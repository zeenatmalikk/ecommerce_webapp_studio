import { Card, CardContent, Container } from "@material-ui/core";
import React from "react";
import "./Growithus.css";

const data = [
  {
    img:
      "https://3841ex3t1et33uno5h3thxr7-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/seo.jpg",
    name: "SEO",
    desc:
      "Lots of agencies do SEO. We do ecommerce SEO. Our strategies don't just bring more traffic to your website; they bring more traffic that converts.",
  },
  {
    img:
      "https://3841ex3t1et33uno5h3thxr7-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/design2.jpg",
    name: "Design",
    desc:
      "Whether you need a head-turning logo or a total website overhaul, our conversion-minded designers will work with you to transform your vision into a crowd-pleasing reality.",
  },
  {
    img:
      "https://3841ex3t1et33uno5h3thxr7-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/advert.jpg",
    name: "Advertising",
    desc:
      "Our talented Google Ads, remarketing, and social media experts treat your budget like it’s their own, striving for perfectly-executed campaigns with a high return on ad spend.",
  }
]

const data2=[
  {
    img:
      "https://3841ex3t1et33uno5h3thxr7-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/social-media.jpg",
    name: "Social Media",
    desc:
      "What do you get when you blend social media expertise with years of ecommerce experience? Engaging, thoughtful social media strategies that prioritize conversions and reach.",
  },
  {
    img:
      "https://3841ex3t1et33uno5h3thxr7-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/email-marketing.jpg",
    name: "Email Marketing",
    desc:
      "From building your base of subscribers to increasing sales, our team will craft targeted, data-driven campaigns paired with creative content your audience will love.",
  },
  {
    img:
      "https://3841ex3t1et33uno5h3thxr7-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/home-sales.jpg",
    name: "Not sure what will have the greatest impact on your sales?",
    desc:
      "We'll show you exactly what we'd do if your business was our own.",
  }
];

export const Growithus = () => {
  return (
    <div style={{marginTop:"6%", }}>
      <img
        className="grow"
        src="https://3841ex3t1et33uno5h3thxr7-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/grow-badge2.png"
      />
      <h1 className="maintxt">Your E-commerce partners for:</h1>
      <Container>
        <div style={{ display: "flex", marginTop:"5%" }}>
          {data.map((item) => (
            <Card className="cardstyle">
              <CardContent>
                <img className="field" src={item.img} />
                <h2 className="name">{item.name}</h2>
                <h5 className="desc">{item.desc}</h5>
                <h5 className="learnmore">Learn More</h5>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
      <Container>
        <div style={{display:"flex", marginTop:"5%"}}>
         {data2.map((item)=>(
            <Card className="cardstyle">
            <CardContent>
              <img className="field" src={item.img} />
              <h2 className="name">{item.name}</h2>
              <h5 className="desc">{item.desc}</h5>
              <h5 className="learnmore">Learn More</h5>
            </CardContent>
          </Card>
         ))}
        </div>
      </Container>
    </div>
  );
};
