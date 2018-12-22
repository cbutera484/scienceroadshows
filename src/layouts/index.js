import "../../node_modules/skeleton-css/css/normalize.css";
import "../../node_modules/skeleton-css/css/skeleton.css";
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Header from "../components/Header";
import "./index.css";

const Container = styled.div`
  padding: 20px 0px;
`;

const TemplateWrapper = ({ children }) => 
	<div>
		<Helmet
			title="Science Roadshows by Lee Ognibene"
			meta={[
				{
					name: `description`,
					content: `Live programs presented for your School or Library by teacher Lee Ognibene. `
				},
				{
					name: `keywords`,
					content: `science, roadshow, space, forest, rain, teacher, earth, school, library, sea, rainforest, bugs, bee, shark`
				},
				{
					name: `google-site-verification`,
					content: `98cR6cME9P5bbJUo6MtqyDPx-jM-MDtsU61CfKyiG4o`
				}
			]}
		/>
		<Header />
		<div
			style={{
				margin: `0 auto`,
				maxWidth: 1366,
				padding: `0px 1.0875rem 1.45rem`,
				paddingTop: 0
			}}
		>
			<Container className="container">{children()}</Container>
		</div>
	</div>

;

TemplateWrapper.propTypes = {
	children: PropTypes.func
};

export default TemplateWrapper;
