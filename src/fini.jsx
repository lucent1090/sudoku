import React from "react"
import {initGridState} from "./gridState.jsx"

class Fini extends React.Component{
	constructor(props){
		super(props);
		this.handlePlayAgain = this.handlePlayAgain.bind(this);
	}
	handlePlayAgain(e){
		initGridState();
		this.props.reset();
	}
	render(){
		return (
			<div className="congrats">
				<h1>Congrats</h1>
				<button onClick={this.handlePlayAgain}>Play Again</button>
			</div>
		);
	}
}

export default Fini