import React from "react";
import Img from "react-image";
import beeImage from "../img/schools/bee.jpg";
import earthImage from "../img/libraries/earth.jpg";
import spaceImage from "../img/schools/space-roadshow.jpg";
import rainforestImage from "../img/schools/rainforest.jpeg";
import seaImage from "../img/libraries/shark.jpg";
import styled from "styled-components";

const FlyerImage = styled( Img )`
  border-radius: 30px;
  background-color: #ccc;
  max-width: 100%;
  height: 250px;
  width: auto;
  margin: 20px auto 20px;
  display: block;
  box-shadow: 3px 7px 14px #666;
`;

const H5 = styled.h5`
  text-align: center;
`;

const FlyerLink = styled.a`
  text-decoration: none;
`;

const SchoolsPage = () => 
	<div>
		<h2>Schools</h2>
		<div className="row">
			<div className="six columns">
				<FlyerLink href="/bug-roadshow">
					<H5>The Bug Roadshow</H5>
					<FlyerImage src={beeImage} alt="Bee" />
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
				<FlyerLink href="/space-roadhow">
					<H5>Space Roadshow</H5>
					<FlyerImage src={spaceImage} alt="Earth" />
				</FlyerLink>
			</div>
		</div>
		<div className="row">
			<div className="twelve columns">
				<FlyerLink href="/under-the-sea">
					<H5>Under The Sea</H5>
					<FlyerImage src={seaImage} alt="Bee" />
				</FlyerLink>
			</div>
		</div>
	</div>

;

export default SchoolsPage;
