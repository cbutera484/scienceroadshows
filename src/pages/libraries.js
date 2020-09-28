import React from "react";
import butterlyImage from "../img/libraries/butterfly.jpg";
import earthImage from "../img/libraries/earth.jpg";
import galaxyImage from "../img/libraries/galaxy.jpg";
import sharkImage from "../img/libraries/shark.jpg";
import dinosaurImage from "../img/schools/dinosaur.jpg";
import styled from "styled-components";
import HeaderImage from "../components/header-image";
import Img from "react-image";
import media from "../utils/style-utils";
import HeadShotImage from "../img/lee.jpg";
import Helmet from "react-helmet";

const HeadShot = styled(Img)`
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
		<Helmet>
			<title>Science Roadshows for your library by Lee Ognibene</title>
			<meta
				name="description"
				content="Live programs presented for your School or Library by teacher Lee Ognibene."
			/>
		</Helmet>
		<h2>6 Great Shows for your Library</h2>
		<HeadShot src={HeadShotImage} alt="Lee Headshot" />
		<p>
			<a href="/static/pdf/flyer-library.pdf">Download Printable Copy</a>
		</p>
		<p>
			<strong>Dear Children’s Program Directors:</strong>
		</p>

		<p>
			{` `}
      I have 6 exciting science shows that can be virtual or live. Each show can
      be used as a <strong>children’s program</strong> or a{` `}
			<strong>family program</strong> for children and their parents to enjoy
      together. My shows consistently get rave reviews and have that “wow”
      factor.
		</p>
		<p>
			After each show, parents and kids tell me that my show was the best
      library program they ever saw! <strong>&nbsp;</strong>So many librarians
      have written thank you notes that praised my shows.&nbsp; My 3 most
      popular shows are the{` `}
			<strong>
				<u>The Space Roadshow</u>,
			</strong>
			{` `}
			<strong>
				<u>The BUG Show</u>
			</strong>, and a new show called{` `}
			<strong>
				<u>Dinosaurs</u>
			</strong>.&nbsp; The other 3 shows are also wonderful:&nbsp;{` `}
			<strong>
				<u>Rainforest Adventure</u>
			</strong>,{` `}
			<strong>
				<u>Under the Sea </u>
			</strong>and<strong>
				<u> Our Endangered Earth</u>.
			</strong>
		</p>
		<p>
			All 6 shows can be streamed or presented{` `}
			<u>live in your presentation room</u>.&nbsp; These shows were produced by
      Lee Ognibene, retired science teacher and videographer. (Former Sayville
      Planetarium Director and 1998 Suffolk County Science Teacher of the
      Year).&nbsp; Many have said my shows are like a mix of Disney, Bill Nye,
      and an IMAX movie.&nbsp; My shows are also very humorous and it&rsquo;s
      wonderful to hear both children and their parents laughing as they share
      the wonders of science.&nbsp; I have won many awards for my ability to
      teach and motivate audiences of all ages.&nbsp; It would be my pleasure to
      perform my shows at your library. &nbsp;<strong>
				<u>Each show is 40 to 45 minutes long and is only </u>
			</strong>
			<strong>
				<u>$250</u>
			</strong>
			<strong>.&nbsp; (Discounts for small libraries)</strong>
		</p>

		<h3>Descriptions of each show:</h3>
		<h4>Space Roadshow</h4>
		<HeaderImage src={galaxyImage} alt="Galaxy" />

		<p>
			<strong>
				<u>The Space Roadshow</u>
			</strong>
			{` `}
      is an exciting, interactive astronomy show that can be{` `}
			<strong>virtual or live</strong>. This show will take your library patrons
      on an amazing journey into space and around the world to discover the
      wonders of astronomy. We&rsquo;ll go to Hawaii to observe a total solar
      eclipse and learn how to draw a beautiful picture of a total solar eclipse
      with black paper and chalk.&nbsp; This makes a great follow-up
      activity.&nbsp; Parents love it too!
		</p>
		<p>
			I provide live narration throughout the show as we take video field trips
			to Venice, Italy, where Galileo first used his telescope and did a famous
			gravity experiment at the Leaning Tower of Pisa.&nbsp; We&rsquo;ll also
			visit Meteor Crater in Arizona where I will report how that crater
			formed.&nbsp; We&rsquo;ll visit the Kennedy Space Center to watch a rocket
			launch and do a demonstration to learn how rockets work.&nbsp;
		</p>
		<p>
			{` `}
      We&rsquo;ll see what it&rsquo;s like to be weightless in the space
      station.&nbsp; We&rsquo;ll travel to the moon and learn about the
      moon&rsquo;s orbit and origin.&nbsp; We&rsquo;ll explore the planets in
      our solar system.&nbsp; We&rsquo;ll travel to distant stars, and learn how
      big our universe is as we zoom out of our Milky Way galaxy to the end of
      the known universe!&nbsp; We&rsquo;ll learn about earth&rsquo;s motions,
      what causes gravity, what causes day and night, comets, meteors, the sun,
      the birth and death of stars, how the dinosaurs became extinct, and our
      place in space.&nbsp; I even play guitar &amp; sing Twinkle Twinkle Little
      Star for the little kids. They love it!&nbsp; The finale will take your
      breath away as we zoom back to Earth at super warp speed!&nbsp;
      Don&rsquo;t miss the Space Roadshow!&nbsp; (Kindergarten to Adult)&nbsp;
		</p>

		<h4>The Bug Show</h4>
		<HeaderImage src={butterlyImage} alt="Butterly" />

		<p>
			<strong>
				<u>The BUG Show</u>
			</strong>
			{` `}
      is a <u>very</u> entertaining show that reveals the secret microscopic
      world of insects like you&rsquo;ve never seen them before.&nbsp; This{` `}
			<strong>virtual or live show</strong> will show the audience the basic
      parts of insects, and how they go through life cycles- from egg, larva,
      pupa, to adult. &nbsp;You will see incredible video closeups of many
      common bugs including ants, houseflies, butterflies, dragonflies, spiders,
      centipedes, bees, lady bugs, aphids, praying mantis, and termites.&nbsp;
      You&rsquo;ll learn how each bug plays an important role to keep nature in
      balance.&nbsp; For example, bee pollination insures that plants produce
      flowers that will grow into fruits and vegetables that will provide food
      and seeds for next year.&nbsp; Crawling with fun, <strong>The</strong>
			{` `}
			<strong>BUG Show</strong> is also very humorous and a great way to learn
      all about a bug&rsquo;s life. &nbsp;After seeing this show, bugs will
      never be the same!&nbsp; (Perfect for Pre-K to Adult)
		</p>

		<h4>Dinosaurs</h4>
		<HeaderImage src={dinosaurImage} alt="Dinosaur" />

		<p>
			<strong>
				<u>Dinosaurs</u>
			</strong>
			{` `}
      is a new show that is sure to be a hit!{` `}
			<strong>&nbsp;&ldquo;Dinosaurs&rdquo;</strong> is an exciting 40 minute
      video presentation that can be presented <u>live</u> or <u>virtual</u>.&nbsp;
      This K-6 program is very engaging and can be a springboard to many follow
      up activities.&nbsp; It&rsquo;s not only educational, it&rsquo;s very
      entertaining!&nbsp; This high definition video will show your library
      patrons how fossils form and how paleontologists find dinosaur fossils to
      make dino skeletons.&nbsp; The show reveals the secrets of how dinosaurs
      lived and how they suddenly became extinct 66 million years ago.&nbsp; The
      show features amazing computer animation of dinosaurs and a music
      soundtrack that includes Lee&rsquo;s narration.&nbsp; It will take you
      back in time to a prehistoric Earth ruled by dinosaurs.&nbsp; It&rsquo;s
      not scary and many parts are actually funny!&nbsp; Your patrons will{` `}
			<u>love</u> this show!
		</p>

		<h4>Rainforest Adventure</h4>
		<HeaderImage src={sharkImage} alt="Shark" />

		<p>
			<strong>
				<u>Rainforest Adventure</u>
			</strong>
			{` `}
      can be booked as a{` `}
			<strong>
				<u>virtual or live show</u>
			</strong>
			<u>.</u> Length: 45 minutes and is perfect for K to 6<sup>th</sup> grade.
      This show is a field trip to the Earth&rsquo;s incredible rainforests.
		</p>
		<p>
			The presenter, Lee Ognibene, is an award-winning retired science teacher
			and videographer who has produced his own professional video to
			demonstrate the unique plants and animals of the rainforest.&nbsp; You
			will see Lee in the video many times as he shows the students the wonders
			of the rainforest.&nbsp; It features beautiful Hi-Definition video of the
			rainforest animals and plants and has a music soundtrack that includes
			Lee&rsquo;s narration.&nbsp; You&rsquo;ll feel like you were really there
			in the rainforest!&nbsp;
		</p>
		<p>
			Your patrons will learn how climate change, loggers and hunters are
			harming the rainforest&rsquo;s exotic plants and animals (deforestation
			and species extinction).&nbsp; The show also explains the many life cycles
			and energy cycles that make the rainforest a unique environment that act
			like the &ldquo;lungs of the Earth.&rdquo;&nbsp; The show includes an
			interactive activity where students will be challenged to decide which
			rainforest animals depend on each other for food- (the food chain).
			&nbsp;Expect rave reviews!&nbsp;
		</p>

		<h4>Under the Sea</h4>
		<HeaderImage src={sharkImage} alt="Shark" />

		<p>
			Whether <strong>virtual or live</strong>, this show will take your library
      patrons on an amazing field trip to the last frontier- our oceans.&nbsp;
      We live on Long Island so we should all know about the ocean that
      surrounds us.&nbsp; This <strong>virtual or live show</strong> tells the
      story of how our oceans formed, how they got salty, the hidden geologic
      land forms of the ocean floor, continental drift, the ocean food chain and
      how man is upsetting the balance of many ecosystems in our oceans.&nbsp;
      The show will also explain what causes waves, currents, tides, and storms
      and how they affect the ocean shore.&nbsp; You will learn about different
      forms of sea life from plankton and coral reefs to whales.&nbsp; After you
      see<strong>
				<u> Under the Sea</u>
			</strong>, you will understand that oceans are vital to{` `}
			<strong>all</strong> life on Earth, even ours!&nbsp; (Good for 2<sup>
				nd
			</sup>
			{` `}
      Grade - Adult)
		</p>

		<h4>Our Endangered Earth</h4>
		<HeaderImage src={earthImage} alt="Earth" />

		<p>
			<strong>
				<u>Our Endangered Earth</u>
			</strong>
			{` `}
      is an inspiring environmental show that can be{` `}
			<strong>virtual or live</strong>.&nbsp; It will take your library patrons
      on video field trips all over the world to demonstrate the many ways man
      is harming our planet.&nbsp; Earth&rsquo;s future is in our hands and this
      show is the first step to understand the issues that endanger life on
      Earth.&nbsp;
		</p>
		<p>
			<u>Topics covered</u>
			<strong>:</strong> air pollution, acid rain, deforestation, climate
      change, species extinction, and how man is destroying life in our oceans
      and in our rain forests.&nbsp; The audience will learn the science behind
      these problems and many easy solutions all of us can put into practice
      every day to help keep the Earth&rsquo;s ecosystems in balance.
		</p>
		<p>
			The show ends with a hopeful feeling as we explore many ways we can save
      our beautiful planet.{` `}
			<u>
				This show is great any time of the year but is also a perfect way to
				celebrate
			</u>
			{` `}
			<strong>
				<u>Earth Day!</u>
			</strong>
			{` `}
      (April 22<sup>nd</sup> )&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (Good
      for 2<sup>nd</sup> grade to adult)
		</p>
		<p>
			<strong>
				My fee is only $250 for an hour presentation. (2 back to back shows for
				only $400. They can be different shows) There is no limit on audience
				size. Be prepared for a full house and a rush on science books after the
				show!
			</strong>
		</p>
	</div>

	;

export default LibrariesPage;
