import React from "react"
import ReactDOM from "react-dom"
import Grid from "./grid.jsx"
import Fini from "./fini.jsx"
import {gridState, initGridState, resolved} from "./gridState.jsx"


class Main extends React.Component{
	constructor(props){
		super(props);
		initGridState();
		this.handleCheckClick = this.handleCheckClick.bind(this);
		this.reset = this.reset.bind(this);
		this.state = {
			isFini: false
		};
	}
	reset(){
		this.setState({isFini: false});
	}
	handleCheckClick(e){
		if( resolved() ){
			this.setState({isFini: true});
		}else{
			alert("hmm not yet");
		}
	}
	render(){
		let finiBanner = this.state.isFini ? 
						 <div className="finiBanner">
							<Fini reset={this.reset}/>
						 </div> : '';
		let finiClassName = this.state.isFini ?
							'disableddiv' : '';
		return (
			<div id="main">
				{finiBanner}
				<div id="game" className={finiClassName}>
					<Grid grid={gridState} />
					<button onClick={this.handleCheckClick}>Check Answer</button>
				</div>
			</div>
		);
	}
}

ReactDOM.render(
	<Main />,
	document.getElementById("root")
)
