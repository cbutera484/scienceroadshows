import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Img from "react-image";
import HeadShotImage from "../img/headshot.jpg";

const H3 = styled.h3`
  text-align: center;
  margin-top: 25px;
`;

const HeadShot = styled( Img )`
  border-radius: 500px;
  background-color: #ccc;
  max-width: 35%;
  height: auto;
  width: auto;
  margin: 0 auto;
  display: block;
  box-shadow: 3px 7px 14px #666;
`;

const IndexPage = () => 
	<div>
		<HeadShot src={HeadShotImage} alt="Chris Butera Headshot" />
		<H3>Front End Engineer</H3>
		<p>
      Hi, I{`'`}m Chris. A Front End Engineer based in New York with over 10
      years professional experience building highly scalable, award winnings
      websites.
		</p>
		<p>
      My current toolset includes{` `}
			<strong>
        Javascript (ES6), React, Vue, Jest, MVC, HTML5/CSS3, Webpack, Gulp, and
        VS Code
			</strong>
			{` `}but I also have experience with PHP (Laravel) and various CMSs
      including Joomla, Wordpress, and Drupal.
		</p>
		<p>
      Check out my <Link to="/resume">Resume</Link> to view my experience or my{` `}
			<Link to="/portfolio">Portfolio</Link> to view some of my work!
		</p>
		<p>
      This site built with React and Gatsby. See the source code on{` `}
			<a
				rel="noopener noreferrer"
				target="_blank"
				href="https://github.com/cbutera484/resume-gatsby"
			>
        Git
			</a>
		</p>
	</div>

;

export default IndexPage;
