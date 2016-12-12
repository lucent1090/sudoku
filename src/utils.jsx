//------------------
// 00 | 01 | 02
// 10 | 11 | 12
// 20 | 21 | 22
//------------------
export const getBox = (col, row) => {
	let rowGroup = Math.floor(row / 3);
	let colGroup = Math.floor(col / 3);

	return rowGroup.toString()+colGroup.toString();
}

export const getBoxColor = (col, row, colorPallet) => {
	let boxStr = getBox(col, row);

	return colorPallet[ boxStr ];
}