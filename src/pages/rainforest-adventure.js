import React from "react";
import HeaderImage from "../components/header-image";
import rainforestImage from "../img/schools/rainforest.jpeg";
import Helmet from "react-helmet";

const RainforestAdventurePage = () => 
	<div>
		<Helmet>
			<title>Rainforest Roadshow by Lee Ognibene</title>
			<meta
				name="description"
				content="Live programs presented for your School or Library by teacher Lee Ognibene."
			/>
		</Helmet>
		<h2>Rainforest Adventure</h2>
		<HeaderImage src={rainforestImage} alt="Earth" />
		<p>
			<a href="/static/pdf/rainforest.pdf">Download Printable Copy</a>
		</p>
		<p>
      Your students will absolutely love <strong>Rainforest Adventure</strong>!
      You can book it as a <strong>virtual or live show</strong>. Length: 45
      minutes. Perfect for K to 6th grade. This show is a field trip to the
      Earth’s incredible rainforests.
		</p>
		<p>
      The presenter, Lee Ognibene, is an award-winning retired science teacher
      and videographer who has produced his own professional video to
      demonstrate the unique plants and animals of the rainforest. You will see
      Lee in the video many times as he shows the students the wonders of the
      rainforest. It features beautiful Hi-Definition video of the rainforest
      animals and plants and has a music soundtrack that includes Lee’s
      narration. You’ll feel like you were really there in the rainforest!{` `}
		</p>
		<p>
			<strong>If you book a VIRTUAL SHOW</strong>, I will send you a link to my
      streaming service and a one-day password. Just click the link to my
      streaming service, put in the password and enjoy the show on your
      smartboard with your class. If you don’t have smart boards or laptop
      computers in every classroom, project the show on a screen in your
      classroom, cafetorium or media center with a video projector and stream it
      with a laptop computer using your schools’ Wi-Fi.<br />
			<strong>
        Important: Distance-learning students can see it at home during school
        hours!{` `}
			</strong>
			<br />
			<strong>Price: $350</strong> for one-day Virtual Shows for the WHOLE
      School! Every class can stream the show on that day at all different
      times! It’s a bargain!
		</p>
		<p>
			<strong>If you book a LIVE SHOW</strong>, I will come to your school and
      present a <u>live</u> show using my own quality equipment. Same Price:
      $350 for one live 40 minute showing at your school.{` `}
		</p>
		<p>
			<strong>
        All my shows are approved by all 3 Long Island BOCES Arts in Education
        programs. They are listed in the online BOCES Arts in Ed catalogs under
        “Exploratory Enrichment”. To find the Rainforest Adventure show, search
        keyword “Rainforest” or search “Ognibene” to find all my shows.
			</strong>
		</p>
	</div>

;

export default RainforestAdventurePage;
