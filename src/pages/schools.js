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

const SchoolsPage = () => 
	<div>
		<h2>Schools</h2>
		<div className="row">
			<div className="six columns">
				<H5>The Bug Roadshow</H5>
				<FlyerImage src={beeImage} alt="Bee" />
			</div>
			<div className="six columns">
				<H5>Our Endangered Earth</H5>
				<FlyerImage src={earthImage} alt="Earth" />
			</div>
		</div>
		<div className="row">
			<div className="six columns">
				<H5>Rainforest Adventure</H5>
				<FlyerImage src={rainforestImage} alt="Bee" />
			</div>
			<div className="six columns">
				<H5>Space Roadshow</H5>
				<FlyerImage src={spaceImage} alt="Earth" />
			</div>
		</div>
		<div className="row">
			<div className="twelve columns">
				<H5>Under The Sea</H5>
				<FlyerImage src={seaImage} alt="Bee" />
			</div>
		</div>
	</div>

;

export default SchoolsPage;
