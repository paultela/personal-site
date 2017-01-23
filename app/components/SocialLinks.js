import React from 'react';

export default class SocialLinks extends React.Component {
	render() {
		return (
			<ul className="icons">
				<li><a href="https://twitter.com/paultela" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
				<li><a href="https://facebook.com/paul.tela" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
				<li><a href="https://github.com/paultela" className="icon fa-github"><span className="label">GitHub</span></a></li>
				<li><a href="https://www.linkedin.com/in/paultela/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
			</ul>
		);
	}
}

