import React from "react";
import butterlyImage from "../img/libraries/butterfly.jpg";
import earthImage from "../img/libraries/earth.jpg";
import galaxyImage from "../img/libraries/galaxy.jpg";
import sharkImage from "../img/libraries/shark.jpg";
import styled from "styled-components";
import HeaderImage from "../components/header-image";
import Img from "react-image";
import media from "../utils/style-utils";
import HeadShotImage from "../img/lee.jpg";

const HeadShot = styled( Img )`
  border-radius: 30px;
  background-color: #ccc;
  max-width: 75%;
  height: auto;
  width: auto;
  margin: 0 auto;
  display: block;
  box-shadow: 3px 7px 14px #666;
  ${media.phone`max-width: 40%; margin-bottom: 20px;`};
`;

const LibrariesPage = () => 
	<div>
		<h2>4 Great Shows for your Library</h2>
		<HeadShot src={HeadShotImage} alt="Lee Headshot" />
		<p>
			<a href="static/pdf/flyer-library.pdf">Download Printable Copy</a>
		</p>
		<p>
			<strong>Dear Children’s and Adult Program Directors:</strong>
		</p>

		<p>
			{` `}
      I have 4 exciting science shows that would be perfect for your library.
      Each show can be used as a children’s program or a family program for
      children and their parents to enjoy together. My shows consistently get
      rave reviews and have that “wow” factor. After each show, parents and kids
      tell me that my show was the best library program they ever saw! So many
      librarians have written thank you notes that praised my shows. My two most
      popular shows are the The Space Roadshow and The BUG Show, The latter two
      make the best family shows. The other two are Our Endangered Earth and
      Under the Sea.{` `}
		</p>
		<p>
      All 4 shows are live programs presented by teacher Lee Ognibene. (Retired
      Sayville Planetarium Director and 1998 Suffolk County Science Teacher of
      the Year). I wear a theme outfit that fits each show and use a wireless
      mic with a professional sound system for crystal clear sound. My video
      projector will light up your screen with amazing, jaw-dropping video
      scenes that will create the excitement of a live, professional show. Many
      have said my shows are like a mix of Disney, Bill Nye, and an IMAX movie.
      My shows are also very humorous and it’s wonderful to hear both children
      and their parents laughing as they share the wonders of science. I have
      won many awards for my ability to teach and motivate audiences of all
      ages. It would be my pleasure to perform my shows at your library. Each
      show is one hour long and is only <strong>$250</strong>.
		</p>
		<p>
      See the Long Island libraries that booked my shows just before I moved:
		</p>
		<table>
			<tr>
				<td>Bryant Library, Feb 4, ’04</td>
				<td>Center Moriches Library, 2/8/04</td>
				<td>Longwood Lib, Feb 17, ’04</td>
				<td>Levittown Library, Feb 18,04</td>
			</tr>
			<tr>
				<td>Massapequa Lib, Feb 19,04</td>
				<td>Northport Lib, Feb 29, ‘04</td>
				<td>Wantagh Lib, May 4,04</td>
				<td>W. Hempstead Lib, May20,04</td>
			</tr>
			<tr>
				<td>Mineola Lib, May22,04</td>
				<td>Farmingdale Lib,July9,04</td>
				<td>Emma Clark Lib, July16,04</td>
				<td>Middle Country Lib, July 26,04</td>
			</tr>
			<tr>
				<td>Mattituck Lib, July 28, 04</td>
				<td>Plainedge Lib, July 28, 04</td>
				<td>E. Hampton Lib, Aug 3, 04</td>
				<td>Connetquot Lib, Aug 4, 04</td>
			</tr>
			<tr>
				<td>Levittown Lib, Aug 5, 04</td>
				<td>Floyd Mem .Lib, Aug 11, 04</td>
				<td>Syosset Lib, Aug 14, ‘04</td>
				<td>Hewlett Woodmere Lib,10/17/04</td>
			</tr>
			<tr>
				<td>W. Hempstead Lib,11/4/04</td>
				<td>Northport Lib, 2/13/05</td>
				<td>Bay Shore Lib, 3/19/05</td>
				<td>Central Islip Lib, 3/24/05</td>
			</tr>
			<tr>
				<td>Sachem Lib, April 20 & 8/9/05</td>
				<td>Elmont Pub Lib, 7/18/05</td>
				<td>West Hempstead Lib, 7/21/05</td>
				<td>North Shore Pub Lib 12/27/05</td>
			</tr>
			<tr>
				<td>Half Hollow Hills Lib 12/28/05</td>
				<td>Comsewogue Pub Lib 1/7/06</td>
				<td>Garden City Lib 2/21/06</td>
				<td>Ridgewood Library 3/9/06</td>
			</tr>
			<tr>
				<td>South Country Lib 3/15/06</td>
				<td>Copiague Lib 3/19/06</td>

				<td>Islip Pub Library 4/10/06</td>
				<td>North Shore Pub Lib 4/11/06</td>
			</tr>
			<tr>
				<td>Malverne Pub Lib 4/18/06</td>
				<td>East Hampton Lib 4/22/06</td>
				<td>E. Hampton Lib, July 27,04</td>
			</tr>
		</table>
		<h3>Descriptions of each show:</h3>
		<h4>Space Roadshow</h4>
		<HeaderImage src={galaxyImage} alt="Galaxy" />

		<p>
      The Space Roadshow is an exciting, interactive astronomy show and a
      perfect show to book for this year’s library space theme for a “Universe
      of Books!” This show will take your library patrons on an amazing journey
      into space. Using a model of the moon and a video camera, they will see a
      live demonstration that shows why the moon has phases.
		</p>
		{` `}
		{` `}
		<p>
      They’ll learn how to make a beautiful picture of a total solar eclipse
      with black paper and chalk. I provide live commentary throughout the show
      as we take video field trips to Venice, Italy, where Galileo first used
      his telescope and did a famous gravity experiment at the Leaning Tower at
      Pisa. We’ll also visit Meteor Crater in Arizona to see how craters form.
      We’ll visit the Kennedy Space Center to watch a space shuttle launch, and
      learn how rockets work.
		</p>
		{` `}
		<p>
      We’ll see what it’s like to be weightless in the shuttle and the space
      station. We’ll also go to Hawaii to observe a total eclipse. We’ll travel
      to the moon and explore the planets in our solar system. We’ll travel to
      distant stars, and zoom out of our Milky Way galaxy to the end of the
      universe! We’ll learn about earth’s motions, the moon’s orbit and origin,
      what causes gravity, what causes day and night, seasons, comets, meteors,
      the sun, the birth and death of stars, how the dinosaurs became extinct,
      and our place in space.
		</p>
		{` `}
		<p>
      I even play guitar & sing Twinkle Twinkle Little Star for the little kids.
      They love it! The finale will take your breath away as we zoom back to
      Earth at super warp speed! Don’t miss the Space Roadshow! (Kindergarten to
      Adult){` `}
		</p>
		<h4>The Bug Show</h4>
		<HeaderImage src={butterlyImage} alt="Butterly" />

		<p>
      A very entertaining show that reveals the secret microscopic world of
      insects like you’ve never seen them before. We will learn about insect
      body parts, and how insects go through life cycles- from egg, larva, pupa,
      to adult. You will see incredible video closeups of many common bugs
      including ants, houseflies, butterflies, dragonflies, spiders, centipedes,
      bees, lady bugs, aphids, preying mantis, and termites. You’ll learn how
      each bug plays an important role to keep nature in balance.
		</p>
		<p>
			{` `}
      For example, bee pollination insures that plants produce flowers that will
      grow into fruits and vegetables that will provide food and seeds for next
      years. Creeping with fun, The BUG Show is also very humorous and a great
      way to learn all about a bug’s life. (There are no live insects to worry
      about.) After seeing this show, bugs will never be the same! Who knew bugs
      could be so interesting and fun to learn about. (Good for Pre-K to Adult)
		</p>
		<h4>Under the Sea</h4>
		<HeaderImage src={sharkImage} alt="Shark" />

		<p>
      will take your library patrons on an amazing field trip to the last
      frontier- our oceans. We live on Long Island so we all should know about
      the ocean that surrounds us. This show tells the story of how our oceans
      formed, how they got salty, the hidden geologic land forms of the ocean
      floor, continental drift, the ocean food chain and and how man is
      upsetting the balance of many ecosystems in our oceans. The show will also
      explain what causes waves, currents, tides, and storms and how they affect
      the ocean shore. You will learn about different forms of sea life from
      plankton and coral reefs to whales. After you see Under the Sea, you will
      understand that oceans are vital to all life on Earth, even ours! (Good
      for 2nd Grade - Adult)
		</p>
		<h4>Our Endangered Earth</h4>
		<HeaderImage src={earthImage} alt="Earth" />

		<p>
      An inspiring environmental show that will take your library patrons on
      video field trips all over the world to demonstrate the many ways man is
      harming our planet. Earth’s future is in our hands and this show is the
      first step to understand the issues that endanger life on Earth. The show
      ends with a hopeful feeling as we explore many ways we can save our
      beautiful planet. Topics covered: air pollution, acid rain, deforestation,
      climate change, species extinction, and how man is destroying life in our
      oceans and in our rain forests. The audience will learn the science behind
      these problems and many easy solutions all of us can put into practice
      every day to help keep the Earth’s ecosystems in balance. This show is
      great any time of the year but is also a perfect way to celebrate Earth
      Day! (April 22nd )
		</p>
	</div>

;

export default LibrariesPage;
