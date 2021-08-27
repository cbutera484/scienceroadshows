import React from "react";
import HeaderImage from "../components/header-image";
import TextImage from "../components/text-image";
import prayingMantisImage from "../img/libraries/butterfly.jpg";
import beeImage from "../img/schools/bee.jpg";
import Helmet from "react-helmet";

const BugPage = () => 
	<div>
		<Helmet>
			<title>Bug Roadshow by Lee Ognibene</title>
			<meta
				name="description"
				content="Live and Virtual programs presented for your School or Library by teacher Lee Ognibene."
			/>
		</Helmet>
		<h2>The Bug Roadshow</h2>
		<HeaderImage src={beeImage} alt="Bee" />
		<p>
			{` `}
			<a href="/static/pdf/bug.pdf">Download Printable Copy</a>
		</p>

		<p>
      Your students will absolutely love <strong>The BUG Roadshow!</strong>
			{` `}
			<u>This show can be both a virtual show or a live show at your school.</u>
			{` `}
      It’s a field trip to the incredible world of insects! (Don’t worry, there
      are no live insects- only large models and video close ups of real
      insects.) It’s crawling with fun and more than{` `}
			<u>covers the NY curriculum on insects.</u> This show is perfect from K to
      5th grade and is 45 minutes long.
		</p>
		<p>
			<strong>The BUG Roadshow</strong> will also show how{` `}
			<u>insects are the great recyclers and pollinators of the world.</u> You
      will be amazed how much your students will learn in 45 minutes! By the end
      of the show, your students will realize how amazing and important insects
      really are to the <u>circle of life</u> (<u>ecology</u>). This STEM show
      teaches many important scientific principles of biology and environmental
      science.
			<TextImage src={prayingMantisImage} alt="Praying Mantis" />
		</p>
		<p>
			<strong>The BUG Roadshow</strong> will also show how insects are the great
      recyclers and pollinators of the world. You will be amazed how much your
      students will learn in one hour! By the end of the show, your students
      will realize how amazing and important insects really are to the circle of
      life (ecology).
		</p>
		<p>
			<strong>The BUG Roadshow</strong> was produced by Lee Ognibene, former
      Director of the Sayville Planetarium, and award-winning retired science
      teacher and videographer. The show features amazing close-up video of
      insects and a music soundtrack that includes Lee’s narration. You and your
      students will love this show! Expect laughter, learning, and rave reviews!
		</p>
		<p>
			<strong>If you book a VIRTUAL SHOW</strong>, I will send you a link to my
      streaming service and a one-day password. Just click the link to my
      streaming service, put in the password and enjoy the show on your
      smartboard with your class. If you don’t have smart boards or computers in
      every classroom, project the show on a screen in your classroom,
      cafetorium or media center with a video projector and laptop computer
      using your schools’ Wi-Fi.{` `}
			<strong>
        Best of all, distance-learning students can see it at home during school
        hours!
			</strong>
		</p>
		<p>
      If you book a LIVE SHOW, I will come to your school and present a live
      show using my own quality equipment.{` `}
			<u>
				<strong>Price: $350</strong> for one live 45 minute showing
			</u>
			{` `}
      at your school.{` `}
		</p>
		<p>
			<strong>
        All my shows are <u>accepted</u> by all 3 Long Island BOCES Arts in
        Education programs. They are listed in the online BOCES Arts in Ed
        catalogs under <u>“Exploratory Enrichment”</u>. To find the Bug show,
        search keywords “insect” or “Bug” or “Ognibene” to find all my shows.
			</strong>
		</p>
	</div>

;

export default BugPage;
