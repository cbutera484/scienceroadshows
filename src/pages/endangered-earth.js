import React from "react";
import HeaderImage from "../components/header-image";
import TextImage from "../components/text-image";
import earthImage from "../img/libraries/earth.jpg";
import factoryImage from "../img/schools/factory.jpg";

const EndangeredEarthPage = () => 
	<div>
		<h2>Our Endangered Earth</h2>
		<HeaderImage src={earthImage} alt="Earth" />
		<p>
			<a href="static/pdf/earth.pdf">Download Printable Copy</a>
		</p>

		<p>
			<strong>Our Endangered Earth</strong> is an outstanding environmental show
      that comes to your school. This show is very entertaining, yet it covers
      the NY environmental academic standards and goes way beyond. Because the
      show is live, I can adjust the content on the fly for any grade level from
			<strong> 2nd grade up to 9th.</strong>
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
      Topics covered: air pollution from burning fossil fuels,, acid rain,
      rainforest deforestation, species extinction, climate change, and the many
      ways man is destroying the ecology of our oceans. Your students will learn
      the science behind these problems and many easy solutions they can
      practice every day to help keep the Earth in balance.
		</p>
		<p>
      The show also includes many activities your students can do at home and at
      school to become better citizens of Earth. By the end of the show, your
      students will realize how their everyday actions affect the environment
      and Earth’s circle of life (ecology). This show is a perfect way to
      celebrate Earth Day in April but can be shown any time of the year. room.
		</p>
		<p>
			<strong>
        Fee: $350. (Book 2 back to back shows- Only $290 each. They can be
        different shows for different grades. Team up with other grades and save
        money!) I participate in the BOCES arts and education program for
        Eastern Suffolk, Western Suffolk, and Nassau County.
			</strong>
		</p>
	</div>

;

export default EndangeredEarthPage;
