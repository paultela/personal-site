import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<div className="content">
					<div className="inner">
						<h1><Link to="/">Paul Tela</Link></h1>
						<p>Software Engineer @ <a href="https://buckeyeinteractive.com/">Buckeye Interactive</a></p>
					</div>
				</div>
				{this.props.nav && <nav>
					<ul>
						<li><Link to="/resume">Resume</Link></li>
						<li><Link to="/about">About</Link></li>
						<li><Link to="/contact">Contact</Link></li>
					</ul>
				</nav>
				}
			</header>
		);
	}
}

Header.propTypes = {
	nav: React.PropTypes.bool,
};

Header.defaultProps = {
	nav: true,
};

export default Header;
