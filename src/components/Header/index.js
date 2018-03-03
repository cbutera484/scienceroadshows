import React from "react";
import MainNav from "./nav";
import Link from "gatsby-link";

const Header = () => 
	<div
		style={{
			background: `hsl(216, 60%, 52%)`
		}}
	>
		<div
			className="container"
			style={{
				margin: `0 auto`,
				maxWidth: 1366,
				padding: `1.45rem 1.0875rem`
			}}
		>
			<div className="row">
				<div className="four columns">
					<h1
						style={{
							margin: 0,
							fontSize: ` calc(1.5vw + 1.5vh + 0.3vmin)`
						}}
					>
						<Link
							to="/"
							style={{
								color: `white`,
								textDecoration: `none`
							}}
						>
              Chris Butera
						</Link>
					</h1>
				</div>
				<div className="eight columns">
					<MainNav />
				</div>
			</div>
		</div>
	</div>

;

export default Header;
