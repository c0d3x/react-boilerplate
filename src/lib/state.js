import React, { Component } from 'react';

class App extends Component {

	constructor(){
		super();
		this.state = {
			txtState: 'this is the state txt',
			catState: 0
		}
	}

	update( e ){
		this.setState({txtState: e.target.value})
	}

	render() {
		return (
			<div className="App">
				<input type="text" onChange={this.update.bind(this)}/>

				<p>State: {txt} - {cat}</p>
			</div>
		);
	}
}

const Widget = (props) =>
	<input type="text" onChange={this.update}/>

export default App;