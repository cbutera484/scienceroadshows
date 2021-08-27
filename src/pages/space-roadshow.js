import React from "react";
import HeaderImage from "../components/header-image";
import TextImage from "../components/text-image";
import spaceImage from "../img/schools/space-station.jpg";
import spaceEarthImage from "../img/schools/space-earth.jpg";
import Helmet from "react-helmet";

const SpaceRoadshowPage = () => 
	<div>
		<Helmet>
			<title>Space Roadshow by Lee Ognibene</title>
			<meta
				name="description"
				content="Virtual and Live programs presented for your School or Library by teacher Lee Ognibene."
			/>
		</Helmet>

		<h2>Space Roadshow</h2>
		<HeaderImage src={spaceImage} alt="Earth" />
		<p>
			<a href="/static/pdf/space-roadshow.pdf">Download Printable Copy</a>
		</p>
		<p>
      Looking for a great{` `}
			<strong>
				<u>virtual</u> or <u>live</u> show
			</strong>
			{` `}
      that’s fun and yet <u>covers your astronomy curriculum</u>? This is it!
      Whether it’s <strong>streamed or live</strong>, this astronomy show will
      delight your students and cover your NY State astronomy curriculum. It’s
      presented by science teacher Lee Ognibene, retired director of the
      Sayville Planetarium and 1998 Suffolk County Science Teacher of the Year.
      Length: 50 minutes. Perfect for grades K-6.
		</p>
		<p>
      Experience jaw-dropping hi-definition video space scenes with awesome
      sound effects, music, and live commentary as we tour the solar system,
      Milky Way Galaxy, the moon, the International Space Station, Meteor Crater
      in Arizona, Cape Canaveral in Florida, an observatory, and a solar eclipse
      in Hawaii. We will also travel to Italy and the moon to try Galileo’s
      gravity experiment. You’ll see me in the video reporting live from these
      places like a news reporter.
			<TextImage src={spaceEarthImage} alt="Earth" />
		</p>
		<p>
      Your students will also learn about motions of the earth and moon, what
      causes day and night, what causes the phases of the moon, orbital
      mechanics, weightlessness, eclipses, telescopes, the solar system, comets,
      meteors, the sun, our moon, how craters form, galaxies, how big space is,
      the birth and death of stars, gravity, how rockets work, and our place in
      space. There’s even a follow-up art project where your kids can make a
      beautiful chalk drawing of a total solar eclipse. They love it! Many live
      interactive demonstrations and experiments round out the experience. It’s
      edutainment at its best! There’s even lots of humor in the show and after
      each show, I always hear the kids and teachers say, “That was awesome!”
      The finale will take your breath away! Expect rave reviews!
		</p>
		<p>
      If you book a VIRTUAL SHOW, I will send you a link to my streaming service
      and a one-day password. Just click the link to my streaming service, put
      in the password and enjoy the show on your smartboard with your class. If
      you don’t have smart boards or laptop computers in every classroom,
      project the show on a screen in your classroom, cafetorium or media center
      with a video projector and stream it with a laptop computer using your
      schools’ Wi-Fi.<br />
			<strong>
        Distance-learning students can see it at home during school hours!{` `}
			</strong>
			{` `}
			<br />
			<strong>
        Price: $350 for one-day Virtual Shows for the WHOLE School!
			</strong>
			{` `}
      Every class can stream the show on that day at all different times! It’s a
      bargain!{` `}
		</p>
		<p>
			<strong>If you book a LIVE SHOW</strong>, I will come to your school and
      present a live show using my own quality equipment.{` `}
			<u>
				<strong>Same Price: $350</strong> for one live 50 minute showing
			</u>
			{` `}
      at your school.{` `}
		</p>
		<p>
			<strong>
        All my shows are accepted by all 3 Long Island BOCES Arts in Education
        programs. They are listed in the online BOCES Arts in Ed catalogs under
        “Exploratory Enrichment”. To find the <u>Space Roadshow</u>, search
        keyword “astronomy” or search “Ognibene” to find <u>all</u> 6 of my
        shows.{` `}
			</strong>
		</p>
	</div>

;

export default SpaceRoadshowPage;
