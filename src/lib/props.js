import React, { Component } from 'react';

class Apps extends Component {
	render() {
		let txt = this.props.txt
		let cat = this.props.cat

		return (
			<div className="App">
				<p>Props: {txt} - {cat}</p>
			</div>
		);
	}
}

App.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
	txt: "This is the default text"
	cat: {5}
}

export default App;