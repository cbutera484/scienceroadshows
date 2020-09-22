import React from "react";
import HeaderImage from "../components/header-image";
import TextImage from "../components/text-image";
import earthImage from "../img/libraries/earth.jpg";
import factoryImage from "../img/schools/factory.jpg";
import Helmet from "react-helmet";

const EndangeredEarthPage = () => 
	<div>
		<Helmet>
			<title>Endangered Earth Roadshow by Lee Ognibene</title>
			<meta
				name="description"
				content="Live programs presented for your School or Library by teacher Lee Ognibene."
			/>
		</Helmet>
		<h2>Our Endangered Earth</h2>
		<HeaderImage src={earthImage} alt="Earth" />
		<p>
			<a href="/static/pdf/earth.pdf">Download Printable Copy</a>
		</p>

		<p>
			<strong>Our Endangered Earth</strong> will take your students on instant
      field trips across the world to learn about Earth’s environmental cycles
      that keep our planet in a healthy balance for all of life. The show will
      also let your students observe how man is ruining Earth’s environmental
      balance. Outstanding high definition video clips will help your students
      understand that Earth’s health is in our hands.
		</p>
		<p>
			<strong>Our Endangered Earth</strong> will take your students on instant
      field trips across the world to observe how man is ruining Earth’s
      environmental balance. My powerful video projector will show outstanding
      video clips to help your students understand that Earth’s health is in our
      hands.
			<TextImage src={factoryImage} alt="Praying Mantis" />
		</p>
		<p>
      Topics covered: air pollution from burning fossil fuels, acid rain,
      rainforest deforestation, species extinction, climate change, and the many
      ways man is destroying the ecology of our oceans. Your students will learn
      the science behind these problems and many easy solutions they can
      practice every day to help keep the Earth in balance.
		</p>
		<p>
      My name is Lee Ognibene and I am a retired science teacher and
      videographer. (also former Director of Sayville Planetarium and 1998
      Science Teacher of the Year in Suffolk County) After each of my shows,
      students and teachers comment that my show was awesome and was the best
      show they ever had at their school!
		</p>
		<p>
			<strong>Our Endangered Earth</strong> includes activities your students
      can do at home and at school to become better citizens of Earth. Your
      students will realize how their everyday actions affect the environment
      and Earth’s circle of life (ecology).{` `}
		</p>

		<p>
			<strong>If you book a VIRTUAL SHOW</strong>, I will send you a link to my
      streaming service and a one-day password. Just click the link, put in the
      password and enjoy the show on a laptop, tablet, or your smartboard with
      your class. If you don’t have the latter devices, project the show on a
      screen in your classroom, cafetorium or media center with a video
      projector and stream it with a laptop computer using your schools’ Wi-Fi.{` `}
			<strong>
        Best of all, distance-learning students can see the show at home during
        school hours!
			</strong>
			<br />
			<strong>
        Price: $350 for one-day Virtual Show for the WHOLE School!
			</strong>
			{` `}
      Every class can stream the show on that day at all different times! It’s a
      bargain!{` `}
		</p>
		<p>
			<strong>If you book a LIVE SHOW</strong>, I will come to your school and
      present a live show using my own quality equipment.{` `}
			<u>
				<strong>Same Price: $350</strong> for one live 45 minute showing
			</u>
			{` `}
      at your school.{` `}
		</p>
		<p>
			<strong>
        All my shows are approved by all 3 Long Island BOCES Arts in Education
        programs. They are listed in the online BOCES Arts in Ed catalogs under
        “<u>Exploratory Enrichment</u>”. To find <u>Our Endangered Earth</u> in
        the online catalog, search keywords “Our Endangered Earth”,
        “environment” or just search “Ognibene” to find <u>all</u> of my shows.
			</strong>
		</p>
	</div>

;

export default EndangeredEarthPage;
