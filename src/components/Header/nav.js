import React from "react";
import styled from "styled-components";
import MainNavLink from "./nav-link";
import media from "../../utils/style-utils";

const MainNavUL = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin: 0;
  ${media.phone`justify-content: space-between;`};
`;

class MainNav extends React.Component {
	render () {
		return (
			<nav>
				<MainNavUL>
					<MainNavLink text="Libraries" href="/libraries" />
					<MainNavLink text="Schools" href="/schools" />
					<MainNavLink text="Contact" href="/contact">
            Contact
					</MainNavLink>
				</MainNavUL>
			</nav>
		);
	}
}

export default MainNav;
