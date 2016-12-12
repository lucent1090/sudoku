import React from "react"
import Cell from "./cell.jsx"

class Grid extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		let {grid} = this.props;
		let renderCell = (row, val, col) => {
			return (
				<td key={col}>
					<Cell 
						col={col} 
						row={row}
						val={val} 
						fixed={ (val!=0)?true:false } 
					/>
				</td>
			);
		};
		let renderRow = (vals, row) => {
			return (
				<tr key={row}>
					{vals.map(renderCell.bind(this, row))}
				</tr>
			);
		};
		return (
			<table>
			<tbody>
				{grid.map( renderRow )}
			</tbody>
			</table>
		);
	}
}

export default Grid