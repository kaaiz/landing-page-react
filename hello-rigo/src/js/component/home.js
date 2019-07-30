import React, { Fragment } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { Jumbotron } from "./jumbotron";
import { Cards } from "./cards";

export function Home(props) {
	return (
		<Fragment>
			<Navbar />
			<Jumbotron />
			<Cards />
			<Footer />
		</Fragment>
	);
}
