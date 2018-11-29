import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Img from "react-image";
import HeadShotImage from "../img/lee.jpg";
import media from "../utils/style-utils";

const H3 = styled.h3`
  text-align: center;
  margin-top: 25px;
  font-weight: normal;
`;

const HeadShot = styled( Img )`
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

		<H3>Science Roadshows</H3>
		<p>
      Live programs presented by teacher Lee Ognibene. (Retired Sayville
      Planetarium Director and 1998 Suffolk County Science Teacher of the Year).
      I wear a theme outfit that fits each show and use a wireless mic with a
      professional sound system for crystal clear sound. My video projector will
      light up your screen with amazing, jaw-dropping video scenes that will
      create the excitement of a live, professional show. Many have said my
      shows are like a mix of Disney, Bill Nye, and an IMAX movie. My shows are
      also very humorous and it’s wonderful to hear both children and their
      parents laughing as they share the wonders of science. I have won many
      awards for my ability to teach and motivate audiences of all ages.
		</p>
	</div>

;

export default IndexPage;
