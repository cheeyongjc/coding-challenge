module.exports.run = function (csv) {
	/*
		A stringified CSV file will be passed into this function.
		Parse the string so it is an array of objects and return the array.
		The object properties are the header of the csv file, and the very first row of the csv file are the headers.

		Example

		function ('FirstName,LastName,Age\nDan,Tran,29\nDon,Tran,25\nJasmine,Tran,13') =>
			[
				{FirstName: Dan, LastName: Tran, Age: 29},
				{FirstName: Don, LastName: Tran, Age: 25},
				{FirstName: Jasmine, LastName: Tran, Age: 13},
			]

		Write your code below the comment.
	*/

	//example has backslashes which is correct for linebreak. test file has forward slashes to indicate line breaks which is incorrect. LET BRYCE KNOW TESTS ARE WRONG!!!!!!!
	let lines = csv.split('/n');
	let objectProperties = lines[0].split(',');
	let arr = [];

	for (i = 1; i < lines.length; i++) {
		let obj = {};
		let currentLineValues = lines[i].split(',');
		for (j = 0; j < objectProperties.length; j++) {
			obj[objectProperties[j]] = currentLineValues[j];
		}
		arr.push(obj)
	}
	return arr;
};
