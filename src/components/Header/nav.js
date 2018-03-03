import React from "react";
import styled from "styled-components";
import MainNavLink from "./nav-link";
import media from "../../utils/style-utils";

const StyledMainNavUL = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin: 0;
  ${media.phone`justify-content: space-between;`};
`;

class MainNav extends React.Component {
	render () {
		return (
			<nav>
				<StyledMainNavUL>
					<MainNavLink text="About" />
					<MainNavLink text="Portfolio" />
					<MainNavLink text="Contact" />
				</StyledMainNavUL>
			</nav>
		);
	}
}

export default MainNav;
