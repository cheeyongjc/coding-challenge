module.exports.run = function (str) {
	/*
	A lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right.
	Return true if all the g's in the given string are happy, otherwise return false.

		Example:
			function("xxggxx") => true
			function("xxgxx") => false

			Write your code below the comment.
	*/
	if (str === '') return false;
	if (str.length <= 2 && str !== 'gg') return false;
	for (let i = 1; i < str.length; i++) {
		if (str[i] === 'g' && !(str[i - 1] === 'g' || str[i + 1] === 'g')) return false;
	}
	return true;
	//attempted regex but didn't work for each test
	// const regex = '[^g]g[^g]';
	// return str.match(regex) === null;

};
