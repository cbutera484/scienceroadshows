import React from "react";
import HeaderImage from "../components/header-image";
import TextImage from "../components/text-image";
import dinosaursCometImage from "../img/schools/dinosaurs-comet.jpg";
import dinosaurImage from "../img/schools/dinosaur.jpg";
import Helmet from "react-helmet";

const Dinosaurs = () => 
	<div>
		<Helmet>
			<title>Dinosaurs Roadshow by Lee Ognibene</title>
			<meta
				name="description"
				content="Live and Virtual programs presented for your School or Library by teacher Lee Ognibene."
			/>
		</Helmet>

		<h2>Dinosaurs</h2>
		<HeaderImage src={dinosaurImage} alt="Earth" />
		<p>
			<a href="/static/pdf/dinosaur.pdf">Download Printable Copy</a>
		</p>
		<p>
			<strong>&ldquo;Dinosaurs&rdquo;</strong> is an exciting 40 minute video
      presentation that can be presented <u>live</u> or <u>virtual</u>.&nbsp;
      This K-6 program is very engaging and can be a springboard to many follow
      up activities. &nbsp;It&rsquo;s not only educational, it&rsquo;s very
      entertaining!
		</p>
		<p>
      This high definition video will show your students how fossils form and
      how paleontologists find dinosaur fossils to make dino skeletons.&nbsp;
      The show reveals the secrets of how dinosaurs lived and how they suddenly
      became extinct 66 million years ago. &nbsp;This STEM program teaches many
      important scientific principles of biology, earth science, and
      environmental science.
		</p>
		<p>
			<strong>Dinosaurs</strong> was produced by Lee Ognibene, former Director
      of the Sayville Planetarium, and award-winning retired science teacher and
      videographer.&nbsp; The show features amazing computer animation of
      dinosaurs and a music soundtrack that includes Lee&rsquo;s narration.
      &nbsp;
			<TextImage src={dinosaursCometImage} alt="Earth" />
		</p>
		<p>
      It will take your students back in time to a prehistoric Earth ruled by
      dinosaurs.&nbsp; It&rsquo;s not scary and many parts are actually
      funny!&nbsp; Your students will <u>love</u> this show!
		</p>
		<p>
			<u>
        If you book a <strong>VIRTUAL SHOW</strong>
			</u>, I will send you a link to my streaming service and a one-day
      password.&nbsp; Just click the link to my streaming service, put in the
      password and enjoy the show on your smartboard with your class.&nbsp;{` `}
			<strong>Distance learning students can see it at home too!</strong>
		</p>
		<p>
			<strong>
				<u>Price: $350 for one-day Virtual Shows for the WHOLE School!</u>
			</strong>&nbsp; Every class can stream the show on that day at all
      different times!&nbsp; What a bargain!&nbsp; If you don&rsquo;t have smart
      boards or computers in every classroom, project the show on a screen in
      your classroom, cafetorium or media center with a video projector and
      laptop computer using your schools&rsquo; Wi-Fi.
		</p>
		<p>
			<u>
        If you book a <strong>LIVE SHOW</strong>
			</u>, I will come to your school and present a <u>live</u> show using my
      own laptop, my bright video projector, wireless mic, and quality sound
      system.&nbsp;
		</p>
		<p>
			<strong>
				<u>Price: $350</u>
			</strong>
			<u> for one live 40 minute showing</u> at your school.&nbsp;
		</p>

		<p>
			<strong>
        All my shows are <u>accepted</u> by all 3 Long Island BOCES Arts in
        Education programs.&nbsp;{` `}
			</strong>
		</p>
		<p>
			<strong>
        They are listed in the online BOCES Arts in Ed catalogs under &ldquo;<u>
          Exploratory Enrichment
				</u>&rdquo;.&nbsp;{` `}
			</strong>
		</p>
		<p>
			<strong>
        To find the <u>Dinosaurs</u> show, search keyword
        &ldquo;Dinosaurs&rdquo; or &ldquo;Ognibene&rdquo; to find <u>all</u> my
        shows.&nbsp;{` `}
			</strong>
		</p>
	</div>

;

export default Dinosaurs;
