import React from 'react';
import Page from '../Page';

export default class Resume extends React.Component {
	render() {
		return (
			<Page nav={false}>
				<article>
					<h2 className="major">Resume</h2>
					<p>I enjoy helping small businesses and startups gain a competitive edge through software engineering.  Building high quality systems in an efficient manner is a must for these companies.  By combining open source technologies and sound engineering practices I am able to do this effectively.  I am always looking to learn new technologies and master new skills.</p>
					<h3 className="major">Experience</h3>
					<h4>Software Engineer @ Buckeye Interactive</h4>
					<p>June 2015 - Present | Columbus, OH</p>
					<p>I lead a small team of engineers dedicated to building a variety of web and mobile applications.  We take great pride in our ability to solve complex business and technical problems in the most efficient manner possible.</p>
					<h4>Software Engineer, Intern @ Facebook</h4>
					<p>May 2014 - August 2014 | Seattle, WA</p>
					<p>I spent the summer interning on the Scuba Infrastructure Team.  Scuba is a distributed, in-memory stats store used by engineers and data scientists at Facebook.  My project involved optimizing part of the query engine that Scuba uses.  I also made several enhancements to the Scuba front end, which allows for interactive querying and visualization of data stored in Scuba.  More information on Scuba is available here: <a href="https://www.facebook.com/notes/facebook-engineering/under-the-hood-data-diving-with-scuba/10150599692628920">Data Diving With Scuba</a></p>
					<h4>Web Developer @ Buckeye Interactive</h4>
					<p>June 2010 - April 2014 | Columbus, OH</p>
					<h4>Technical Consultant @ The Ohio State University Medical Center</h4>
					<p>February 2012 - April 2012 | Columbus, OH</p>
					<p>I developed and maintain Write-Start-Handwriting.org, a website to showcase "Write Start: Development of an Integrated Occupational Therapy Writing Intervention", A research grant project lead by Dr. Jane Case-smith of The Ohio State University.</p>
					<h3 className="major">Education</h3>
					<h4>The Ohio State University</h4>
					<p>BS CSE, Computer Science and Engineering<br/>With Honors in Engineering, 2011-2015</p>
				</article>
			</Page>
		);
	}
}
