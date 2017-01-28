import React from 'react';

class Base extends React.Component {
	render() {
		return <div>{this.props.children}</div>;
	}
}

Base.propTypes = {
	children: React.PropTypes.element,
};

export default Base;
