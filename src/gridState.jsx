import {getBox} from "./utils.jsx"

export const init = [
	[5,3,0,0,7,0,0,0,0],
	[6,0,0,1,9,5,0,0,0],
	[0,9,8,0,0,0,0,6,0],
	[8,0,0,0,6,0,0,0,3],
	[4,0,0,8,0,3,0,0,1],
	[7,0,0,0,2,0,0,0,6],
	[0,6,0,0,0,0,2,8,0],
	[0,0,0,4,1,9,0,0,5],
	[0,0,0,0,8,0,0,7,9]
];

export var gridState = [
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0]
];

export function initGridState(){
	const initRow = (vals, row) => {
		vals.map( (val, col) => {
			gridState[row][col] = val;
		} );
	}
	init.map( initRow );
}

export function setGridState(val, col, row){
	gridState[row][col] = val;
}

Array.prototype.validSudokuArr = function(){
	let sortArr = this.slice().sort();
	for(let i=0; i<sortArr.length; i++){
		if( sortArr[i] != (i+1) ){ return false; }
	}
	return true;
}

Array.prototype.getCol = function(colNum){
	let arrCol = [];
	gridState.map((values)=>{
		arrCol.push( values[colNum] );
	});
	return arrCol;
}

const smallGrids = () => {
	let arrSGrid = {
		'00': [], '01': [], '02': [],
		'10': [], '11': [], '12': [],
		'20': [], '21': [], '22': []
	};
	gridState.map((vals, row)=>{
		vals.map((val, col)=>{
			arrSGrid[ getBox(col, row) ].push(val);
		});
	});
	for(let key in arrSGrid){
		if( !arrSGrid[key].validSudokuArr() ){
			return false;
		}
	}
	return true;
}

const rows = () => {
	for(let i=0; i<gridState.length; i++){
		if( !gridState[i].validSudokuArr() ){
			return false;
		}
	}
	return true;
}

const columns = () => {
	for(let i=0; i<gridState.length; i++){
		if( !gridState.getCol(i).validSudokuArr() ){
			return false;
		}
	}
	return true;
}

export function resolved(){
	if( smallGrids() 
	 && rows()
	 && columns()
	){
		return true;
	}
	return false;
}