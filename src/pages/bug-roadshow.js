import React from "react";
import HeaderImage from "../components/header-image";
import TextImage from "../components/text-image";
import prayingMantisImage from "../img/libraries/butterfly.jpg";
import beeImage from "../img/schools/bee.jpg";

const BugPage = () => 
	<div>
		<h2>The Bug Roadshow</h2>
		<HeaderImage src={beeImage} alt="Bee" />
		<p>
			{` `}
			<a href="static/pdf/bug.pdf">Download Printable Copy</a>
		</p>

		<p>
      Your students will absolutely love <strong>The BUG Roadshow!</strong> This
      show comes to your school and is an in-house field trip to the incredible
      world of insects! (Don’t worry, there are no live insects- only large
      models and video close ups of real insects.) It’s crawling with fun and
      yet covers the NY curriculum on insects. Because the show is live, I can
      adjust my commentary for every grade level so it is always perfect for any
      elementary grade- from K to 6th grade.
		</p>
		<p>
			<strong>The BUG Roadshow</strong> is a very entertaining and interactive
      show that reveals the secret world of insects as you’ve never seen them
      before! I use a powerful video projector to show your students high
      resolution video close-ups of insects. I also project close-ups of real
      and model insects to show your students the amazing physical features,
      adaptations, and life cycles of many common insects, including
      butterflies, moths, bees, ants, house flies, centipedes, mosquitoes,
      ladybugs, aphids, preying mantis, dragon flies, meal worms, termites,
      spiders, and many others.
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
      All you need to provide is a large room that can be darkened, a small
      table, and a large projection screen or large white or light-colored wall.
      I bring my own quality PA system and wireless microphone. This show is
      very economical because an entire grade level (or 2 grades) can see the
      show at the same time. It just depends on the size of your presentation
      room.
		</p>
		<p>
			<strong>The BUG Roadshow</strong> is presented by Lee Ognibene, retired
      Life Science teacher, Sayville Planetarium Director, and 1998 Science
      Teacher of the Year.
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

export default BugPage;
