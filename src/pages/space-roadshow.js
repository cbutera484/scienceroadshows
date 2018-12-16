import React from "react";
import HeaderImage from "../components/header-image";
import TextImage from "../components/text-image";
import spaceImage from "../img/schools/space-station.jpg";
import spaceEarthImage from "../img/schools/space-earth.jpg";
import Fee from "../components/fee";

const SpaceRoadshowPage = () => 
	<div>
		<h2>Space Roadshow</h2>
		<HeaderImage src={spaceImage} alt="Earth" />
		<p>
			<a href="static/pdf/space-roadshow.pdf">Download Printable Copy</a>
		</p>
		<p>
      Looking for a great show or assembly program that’s fun and yet covers
      your astronomy curriculum? This is it! <strong>The Space Roadshow</strong>
			{` `}
      is an in-school field trip to the universe! This live program is presented
      by science teacher Lee Ognibene, retired director of the Sayville
      Planetarium and 1998 Suffolk County Science Teacher of the Year. .
		</p>
		<p>
			<strong>The Space Roadshow</strong> will transform your auditorium,
      cafeteria, multi-purpose room, or gym into an exciting astronomy show.
      Teachers are always amazed how much the students remember even months
      after seeing this show. Many teachers comment it’s like a cross between
      Bill Nye, a live Disney show, an IMAX movie, a planetarium show.
			<TextImage src={spaceEarthImage} alt="Parrot" />
		</p>
		<p>
      My powerful video projector will light up your screen or white wall with
      jaw-dropping video space scenes with awesome sound effects and music from
      my quality sound system. I provide live commentary as we tour the solar
      system and Milky Way Galaxy, and take field trips to the moon, the
      International Space Station, Meteor Crater in Arizona, Cape Canaveral in
      Florida, an observatory, and a solar eclipse in Hawaii. We also travel to
      Italy to follow Galileo’s discoveries. There’s even a follow-up art
      project where your kids can make wonderful chalk drawings of a total solar
      eclipse. Many live interactive demonstrations and experiments round out
      the experience.
		</p>
		<p>
			<strong>The Space Roadshow</strong> is very economical because there is no
      limit on the number of students who can see the show at the same time.
      Unlike outside field trips, the Space Roadshow comes to your school so you
      will have the benefit of saving money on expensive bus transportation and
      admission fees. Outside field trips can take a whole day but the Space
      Roadshow is only 1 hour long and provides more learning!. Because the show
      is live, it can be customized for any grade level, from Kindergarten to
      9th grade.
		</p>
		<p>
      During the show, I wear a NASA flight suit, just like the astronauts use.
      There’s lots of humor in the show and after each show, I always hear the
      kids and teachers say, “That was awesome!” The finale will take your
      breath away! Expect rave reviews!
		</p>

		<Fee />
	</div>

;

export default SpaceRoadshowPage;
