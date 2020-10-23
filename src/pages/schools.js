import React from "react";
import Img from "react-image";
import beeImage from "../img/schools/bee.jpg";
import earthImage from "../img/libraries/earth.jpg";
import spaceImage from "../img/schools/space-station.jpg";
import rainforestImage from "../img/schools/rainforest.jpeg";
import seaImage from "../img/libraries/shark.jpg";
import dinosaurImage from "../img/schools/dinosaur.jpg";
import styled from "styled-components";
import Helmet from "react-helmet";

const FlyerImage = styled( Img )`
  border-radius: 30px;
  background-color: #ccc;
  max-width: 100%;
  height: 250px;
  width: auto;
  margin: 0px auto 20px;
  display: block;
  box-shadow: 3px 7px 14px #666;
`;

const H5 = styled.h5`
  text-align: center;
  line-height: 0em;
  font-size: 30px;
  margin-top: 40px;
`;

const FlyerLink = styled.a`
  text-decoration: none;
`;

const SchoolsPage = () => 
	<div>
		<Helmet>
			<title>Virtual and Live Science Roadshows for schools by Lee Ognibene</title>
			<meta
				name="description"
				content="Live programs presented for your School or Library by teacher Lee Ognibene."
			/>
		</Helmet>
		<h2>Shows for Schools</h2>
		<p>
      Click below to read more about each show and print out a description to
      share with your colleagues:
		</p>
		<div className="row">
			<div className="six columns">
				<FlyerLink href="/bug-roadshow">
					<H5>The Bug Roadshow</H5>
					<FlyerImage src={beeImage} alt="Bee" />
				</FlyerLink>
			</div>
			<div className="six columns">
				<FlyerLink href="/space-roadshow">
					<H5>Space Roadshow</H5>
					<FlyerImage src={spaceImage} alt="Earth" />
				</FlyerLink>
			</div>
		</div>
		<div className="row">
			<div className="six columns">
				<FlyerLink href="/dinosaurs">
					<H5>Dinosaurs</H5>
					<FlyerImage src={dinosaurImage} alt="Dinosaur" />
				</FlyerLink>
			</div>

			<div className="six columns">
				<FlyerLink href="/endangered-earth">
					<H5>Our Endangered Earth</H5>
					<FlyerImage src={earthImage} alt="Earth" />
				</FlyerLink>
			</div>
		</div>
		<div className="row">
			<div className="six columns">
				<FlyerLink href="/rainforest-adventure">
					<H5>Rainforest Adventure</H5>
					<FlyerImage src={rainforestImage} alt="Bee" />
				</FlyerLink>
			</div>
			<div className="six columns">
				<FlyerLink href="/under-the-sea">
					<H5>Under The Sea</H5>
					<FlyerImage src={seaImage} alt="Bee" />
				</FlyerLink>
			</div>
		</div>
	</div>

;

export default SchoolsPage;
