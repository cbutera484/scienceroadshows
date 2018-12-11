import React from "react";
import HeaderImage from "../components/header-image";
import TextImage from "../components/text-image";
import sharkImage from "../img/libraries/shark.jpg";
import fishImage from "../img/schools/fish.jpg";

const UnderTheSeaPage = () => 
	<div>
		<h2>Under The Sea</h2>
		<HeaderImage src={sharkImage} alt="Earth" />

		<p>
      Looking for a great show or assembly program that’s fun and yet covers
      your oceanography curriculum? You found it! <strong>UNDER THE SEA</strong>is
      an in-school field trip to the final frontier- our oceans. This live
      program is presented by science teacher and oceanographer Lee Ognibene,
      retired director of the Sayville Planetarium and 1998 Suffolk County
      Science Teacher of the Year.
		</p>
		<p>
			<strong>UNDER THE SEA</strong> will transform your auditorium, cafeteria,
      multi-purpose room, or gym into an exciting oceanography show. This show
      covers how the oceans formed, how they got salty, the hidden geologic land
      forms of the ocean floor, continental drift, and the ocean food chain and
      ecosystems. The show will also explain what causes waves, currents, tides,
      and storms and how they affect the ocean shore. Your students will learn
      about different forms of sea life- from plankton and coral reefs to
      whales.
			<TextImage src={fishImage} alt="Parrot" />
		</p>
		<p>
      Lastly, your students will learn how man is harming the ocean life with
      pollution, over-fishing, coral reef destruction, ocean acidification,
      climate change, and species extinction. The show is only one hour long,
      but you will be amazed how much your students will remember, even months
      after seeing this show! Because the show is live, it can be customized for
      any grade level, from 1st to 9th grade
		</p>
		<p>
      Over the last 25 years, I recorded video of our oceans and sea life. I
      have edited that video together, added music and sound effects and{` `}
			<strong>UNDER THE SEA</strong> was born. This is an inspiring show with
      incredible video scenes, beautiful background music, and live commentary.
      Living on Long Island, we should know all about the ocean that surrounds
      us. After you see this show, you will understand how much our oceans are
      vital to all life on Earth, even ours!
		</p>
		<p>
      I provide my own powerful video projector and wear a quality wireless mic
      with a professional sound system All you have to provide is a large
      projection screen and a small table for my projector. If you don’t have a
      screen, I can project my show on a white or light colored wall. Expect
      rave reviews!
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

export default UnderTheSeaPage;
