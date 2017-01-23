import React from 'react';
import Footer from './Footer';
import Header from './Header';

class Page extends React.Component {
	render() {
		return (
			<div className="wrapper">
				<div className="main">
					<Header nav={this.props.nav}/>
					{this.props.children}
				</div>
				<Footer/>
			</div>
		);
	}
}

Page.propTypes = {
	children: React.PropTypes.element,
	nav: React.PropTypes.bool,
};

Page.defaultProps = {
	nav: true,
};

export default Page;
