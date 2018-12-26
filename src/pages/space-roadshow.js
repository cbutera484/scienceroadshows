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
			<a href="/static/pdf/space-roadshow.pdf">Download Printable Copy</a>
		</p>
		<p>
      Looking for a great show or assembly program that’s fun and yet covers
      your astronomy curriculum? This is it! The Space Roadshow is an in-school
      field trip to the universe! This live program is presented by science
      teacher Lee Ognibene, retired director of the Sayville Planetarium and
      1998 Suffolk County Science Teacher of the Year.
		</p>
		<p>
      The Space Roadshow will transform your auditorium, cafeteria,
      multi-purpose room, or gym into an exciting astronomy show. Teachers are
      always amazed how much the students remember even months after seeing this
      show. Many teachers comment my shows are like a cross between Bill Nye, a
      live Disney show, an IMAX movie, and a planetarium show. They have that
      “wow” factor.
			<TextImage src={spaceEarthImage} alt="Earth" />
		</p>
		<p>
      My powerful video projector will light up your screen or white wall with
      jaw-dropping video space scenes with awesome sound effects and music from
      my quality sound system. I provide live commentary as we tour the solar
      system and Milky Way Galaxy, and take field trips to the moon, the
      International Space Station, Meteor Crater in Arizona, Cape Canaveral in
      Florida, an observatory, and a solar eclipse in Hawaii. We also travel to
      Italy and the moon to try Galileo’s gravity experiment.
		</p>
		<p>
      Your students will also learn about motions of the earth and moon, what
      causes day and night, what causes the phases of the moon, orbital
      mechanics, weightlessness, eclipses, telescopes, the solar system, comets,
      meteors, the sun, our moon, how craters form, galaxies, how big space is,
      the birth and death of stars, gravity, how rockets work, and our place in
      space. There’s even a follow-up art project where your kids can make a
      beautiful chalk drawing of a total solar eclipse. They love it! Many live
      interactive demonstrations and experiments round out the experience.
		</p>
		<p>
      Because the show is live, I can customized it for any grade level, from
      Kindergarten to 9th grade. During the show, I wear a NASA flight suit,
      just like the astronauts. There’s lots of humor in the show and after each
      show, I always hear the kids and teachers say, “That was awesome!” The
      finale will take your breath away! Expect rave reviews!
		</p>

		<Fee />
	</div>

;

export default SpaceRoadshowPage;
