import React from 'react';
import Page from '../Page';
import SocialLinks from '../SocialLinks';

export default class Contact extends React.Component {
	render() {
		return (
			<Page nav={false}>
				<article>
					<h2 className="major">Contact</h2>
					<p>The best way to reach me is via email: <a href="mailto:contact@paultela.com">contact@paultela.com</a></p>
					<SocialLinks/>
				</article>
			</Page>
		);
	}
}
