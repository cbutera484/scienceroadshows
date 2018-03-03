import React from "react";

import styled from "styled-components";

const StyledLink = styled.li`
  padding: 1rem;
  color: #fff;
  fontsize: calc(1vw + 1vh + 1vmin);
`;

class MainNavLink extends React.Component {
	render () {
		return <StyledLink>{this.props.text}</StyledLink>;
	}
}

// const MainNavLink = props =>
// 	<li
// 		style={{

// 		}}
// 	>
// 		{props.text}
// 	</li>

// ;

export default MainNavLink;
