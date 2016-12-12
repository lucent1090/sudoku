import React from "react"
import {getBoxColor} from "./utils.jsx"
import {setGridState} from "./gridState.jsx"

const pallet = {
	'00': '#FFB0B0', 
	'01': '#FCD4B8', 
	'02': '#EDEDBE',
	'10': '#BEEDC5', 
	'11': '#BED5ED', 
	'12': '#FCFFB3',
	'20': '#E9ADFF', 
	'21': '#FFB69E', 
	'22': '#B7ABFF'
};

const inRange = (num, min, max) => {
	if( (num >= min) && (num <= max) ){
		return true;
	}
	return false;
};

class Cell extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			val: this.props.val
		};
	}
	componentWillReceiveProps(nextProps){
		this.setState({val: nextProps.val});
	}
	handleChange(e){
		let input = parseInt(e.target.value);
		let {col, row} = this.props;
		if( (Number.isInteger(input) && inRange(input, 1, 9))
		 || isNaN(input) )
		{
			this.setState({val: isNaN(input)?'':input});
			setGridState(input, col, row);
		}
	}
	render(){
		let {col, row, fixed} = this.props;
		let valShow = (this.state.val==0) ? "" : this.state.val;
		return(
			<input 
				type="text" 
				style={{backgroundColor: getBoxColor(col, row, pallet)}} 
				value={valShow} 
				disabled={fixed} 
				onChange={this.handleChange.bind(this)}
			/>
		);
	}
}

export default Cell