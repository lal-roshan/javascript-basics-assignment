/* Write a Program to Flatten a given n-dimensional array */

const flatten = (multiArray) => {
	//Checks whether the input parameter is an array or not
	if(Array.isArray(multiArray)){

		//takes each value in the input array and flattens each item
		//concats each item to a result array which is then returned
		return multiArray.reduce((result, item) => 
			result.concat(Array.isArray(item)? flatten(item): item)
		,[]);
	}
	return null;
};

module.exports = flatten;
