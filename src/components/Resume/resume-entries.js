import React from "react";
import ResumeEntry from "./resume-entry";
import Data from "../../data/resume.json";

const ResumeEntries = () => 
	<div>
		{Data.resumeItems.map( item => 
			<ResumeEntry key={item.title} resumeItem={item} />
		)}
	</div>

;

export default ResumeEntries;
