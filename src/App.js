import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.scss';

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
		let txt = this.props.txt
		let cat = this.props.cat
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Welcome to React</h2>
				</div>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>

				<input type="text" onChange={this.update.bind(this)}/>
				<p>State: {txtState} - {catState}</p>


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

const Widget = (props) =>
	<input type="text" onChange={this.update}/>

export default App;