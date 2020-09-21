import React from "react";
import HeaderImage from "../components/header-image";
import TextImage from "../components/text-image";
import sharkImage from "../img/libraries/shark.jpg";
import fishImage from "../img/schools/fish.jpg";
import Helmet from "react-helmet";

const UnderTheSeaPage = () =>
   <div>
      <Helmet>
         <title>Under the Sea Roadshow by Lee Ognibene</title>
         <meta
            name="description"
            content="Live programs presented for your School or Library by teacher Lee Ognibene."
         />
      </Helmet>
      <h2>Under The Sea</h2>
      <HeaderImage src={sharkImage} alt="Earth" />
      <p>
         <a href="/static/pdf/sea.pdf">Download Printable Copy</a>
      </p>
      <p>
         Looking for a great <strong>virtual</strong> or <strong>live</strong> show that’s fun and yet <u>covers your oceanography curriculum</u>?  This is it!  Whether it’s streamed or live, this show will delight your students and cover your NY State oceanography curriculum.  For grades 2 - 6.  It’s 45 min long.
         <strong>Best of all, distance-learning students can see the show at home during school hours!</strong>

      </p>
      <p>
         It’s presented by retired science teacher Lee Ognibene, former director of the Sayville Planetarium, videographer, and 1998 Suffolk County Science Teacher of the Year.  Lee shot
         most of the video.  You’ll see him in the video and hear his narration throughout the show.

			<TextImage src={fishImage} alt="Parrot" />
      </p>
      <p><strong>UNDER THE SEA</strong>  will transform your classroom, cafetorium, library, or multi-purpose room into an exciting oceanography show.  It covers how the oceans formed, how they got salty, the hidden geologic land forms of the ocean floor, continental drift, and the ocean food chain and ecosystems. The show will also explain what causes waves, currents, tides, and storms and how they affect the ocean shore.  Your students will learn about different forms of sea life- from plankton and coral reefs to whales. </p>
      <p>Lastly, your students will learn how man is harming the ocean life with pollution, over-fishing, coral reef destruction, ocean acidification, climate change, and species extinction.
      The show is only 45 minutes long, but you will be amazed how much your students will remember, even months after seeing this show!
   </p>
      <p><strong>UNDER THE SEA</strong> is an inspiring show with incredible high definition video scenes, beautiful background music, and live commentary.  Living on Long Island, we should know all about the ocean that surrounds us.  After you see this show, you will understand how much our oceans are vital to all life on Earth, even ours!  It’s edutainment at its best!</p>
      <p><strong>If you book a VIRTUAL SHOW</strong>, I will send you a link to my streaming service and a one-day password.  Just click the link, put in the password and enjoy the show on your smartboard with your class.  If you don’t have smart boards or laptop computers in every classroom, project the show on a screen in your classroom, cafetorium or media center with a video projector and stream it with a laptop computer using your schools’ Wi-Fi.<br />
         <strong>Price: $350 for one-day Virtual Shows for the WHOLE School! </strong> Every class can stream the show on that day at all different times!  It’s a bargain!    </p>
      <p><strong>If you book a LIVE SHOW</strong>, I will come to your school and present a live show using my own quality equipment. <u><strong>Same Price: $350</strong> for one live 45 minute showing</u> at your school.  </p>
      <p><strong>All my shows are approved by all 3 Long Island BOCES Arts in Education programs.
      They are listed in the online BOCES Arts in Ed catalogs under “Exploratory Enrichment”.
To find <u>Under the Sea</u>, search keyword the title or “oceanography” or search “Ognibene” to find all my shows.  </strong>
      </p>
   </div>

   ;

export default UnderTheSeaPage;
