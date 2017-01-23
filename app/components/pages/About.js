import React from 'react';
import Page from '../Page';
import SocialLinks from '../SocialLinks';

export default class About extends React.Component {
	render() {
		return (
			<Page nav={false}>
				<article>
					<h2 className="major">About</h2>
					<p>I am a 2015 graduate of The Ohio State University with a degree in Computer Science and Engineering. Before graduating, I interned with Buckeye Interactive each summer since 2010 and at Facebook in 2014. I have been programming and developing web applications since I was 14 years old. Working primarily with smaller companies and startups, I enjoy leveraging open source tools to build high quality systems that allow these companies to gain a competitive edge.</p>
					<SocialLinks/>
				</article>
			</Page>
		);
	}
}
