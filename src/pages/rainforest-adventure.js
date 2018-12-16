import React from "react";
import HeaderImage from "../components/header-image";
import TextImage from "../components/text-image";
import rainforestImage from "../img/schools/rainforest.jpeg";
import rainforestParrotImage from "../img/schools/rainforest-parrot.jpg";
import Fee from "../components/fee";

const RainforestAdventurePage = () => 
	<div>
		<h2>Rainforest Adventure</h2>
		<HeaderImage src={rainforestImage} alt="Earth" />
		<p>
			<a href="/static/pdf/rainforest.pdf">Download Printable Copy</a>
		</p>
		<p>
			<strong>RAINFOREST ADVENTURE</strong> is a in-school field trip to the
      rainforest and comes to your school. This is an amazing natural science
      show. Outstanding, clear video and sounds of the rainforest will make you
      feel like you are really there. Live, interactive demonstrations with the
      audience will introduce the exotic animals and plants of the rainforest.
      This live show is presented by Lee Ognibene, former life science teacher
      and Sayville Planetarium Director. (1998 Suffolk County Science Teacher of
      the Year)
		</p>
		<p>
      This show will help your students understand how valuable the rainforests
      are to Earth’s ecological health and how they contain hidden treasures
      such as spices, fruits, coffee, chocolate, precious wood, medicines, and
      exotic animals & plants. Your students will see the incredible diversity
      of plants and animals that live at various levels of the rainforest. They
      will see how man is destroying the rainforests by setting fires and
      clear-cutting the trees.
			<TextImage src={rainforestParrotImage} alt="Parrot" />
		</p>
		<p>
      By the end of the show, your students will realize how rainforest plants
      preserve our air and soil and provide food and shelter for animals. They
      will also learn how deforestation can harm the environment and the circle
      of life (ecology). Your students will enjoy participating in a food chain
      demonstration- a fun way to learn the food chain! They will also learn
      what each of us can do to save the rainforests.
		</p>
		<p>
      All your school needs to provide is a large room that can be darkened, a
      table for my projectors, and a large projection screen or white wall. I
      bring my own powerful video projector, professional sound system and
      wireless mic. The presentation quality is first rate. I wear a safari
      outfit to fit the <strong>RAINFOREST ADVENTURE</strong> theme. This is a
      live show so student participation and questions are welcomed during and
      after the show.
		</p>
		<p>
			<strong>Show length: one hour.</strong> There is no limit on the number of
      students who can see a show and that makes it economical, compared to
      outside field trips with high admission fees and expensive buses. (No
      worries about bad weather, permission slips, collecting money, etc)
		</p>

		<Fee />
	</div>

;

export default RainforestAdventurePage;
