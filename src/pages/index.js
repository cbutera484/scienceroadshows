import React from "react";
import styled from "styled-components";
import Img from "react-image";
import HeadShotImage from "../img/lee.jpg";
import media from "../utils/style-utils";

const H3 = styled.h3`
  text-align: center;
  margin-top: 25px;
  font-weight: normal;
`;

const HeadShot = styled(Img)`
  border-radius: 30px;
  background-color: #ccc;
  max-width: 75%;
  height: auto;
  width: auto;
  margin: 0 auto;
  display: block;
  box-shadow: 3px 7px 14px #666;
  ${media.phone`max-width: 40%;`};
`;

const IndexPage = () =>
  <div>
    <HeadShot src={HeadShotImage} alt="Lee Headshot" />


    <h4>SIX VIRTUAL OR LIVE SCIENCE SHOWS
    FOR YOUR SCHOOL OR LIBRARY! </h4>

    <p> My name is Lee Ognibene and I am an award-winning retired science teacher and videographer.  Every one of my 6 shows features amazing hi-definition video and a music soundtrack with my narration.  What a wonderful way to cover your science curriculum as your kids learn about rainforests, outer space, the oceans, the world of bugs, dinosaurs, and Earth’s endangered environment.  The shows are not only educational, they are fun to watch!  (40-45 min long)</p>
    <p>I’ve been shooting video all over the world for these 6 shows for the last 18 years and your kids will love them!  To get details on each show, click on “school” or “library” above and read about them.  You can also print out show flyers to show your colleagues.</p>
    <p>With Covid 19, all of my bookings have been virtual lately.  When Covid is over, I will resume presenting live and virtual shows at schools and libraries.  My shows are the best science shows on Long Island and are approved by all 3 BOCES Arts in Education programs.</p>
    <p>Feel free to email me with any questions: <a href="mailto: spaceroadshow@yahoo.com">spaceroadshow@yahoo.com</a>.  Expect rave reviews!</p>
  </div >

  ;

export default IndexPage;
