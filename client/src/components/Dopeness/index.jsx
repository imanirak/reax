import React, { Component } from "react";

class Dopeness extends Component {
	state = {
		dopenessCount: 0,
	};

	increaseDopeness = () => {
		let moreDope = this.state.dopenessCount + 1;
		this.setState({
			dopenessCount: moreDope,
		});
	};

	// decreaseDopeness button gifted to myflexspace by robyn "cats everywhere" goodner
	decreaseDopeness = () => {
		let lessDope = this.state.dopenessCount - 1;
		this.setState({
			dopenessCount: lessDope,
		});
	};
	render() {
		return (
			<div>
				<button onClick={this.increaseDopeness}>
					Dopeness: {this.state.dopenessCount}
				</button>
				<button onClick={this.decreaseDopeness}>
					Less Dopeness: {this.state.decreaseDopeness}
				</button>
			</div>
		);
	}
}

export default Dopeness;
