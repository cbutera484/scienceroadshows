import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const ResumeEntry = props => 
	<div>
		<div>{props.resumeItem.title}</div>
		<div>{props.resumeItem.position}</div>
		<div>{props.resumeItem.year}</div>
		<div>{props.resumeItem.description}</div>
		<div>{props.resumeItem.logo}</div>
		<div>{props.resumeItem.technology}</div>
	</div>

;

export default ResumeEntry;
