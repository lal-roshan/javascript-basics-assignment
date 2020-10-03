/* Write a Program to convert an array of objects to an object
	based on a given key */


const convert = (objArray, field) => {
	//performs the object creation only if the objArray parameter is array
	//and if field is a valid string
	if(Array.isArray(objArray) && field){

		//return null if the mentioned field is not in the object
		if(!objArray[0][field]){
			return null;
		}

		let result = {};

		//create a result object with provided field as key and the object as value	
		for(let i=0; i < objArray.length; i++){
			result[objArray[i][field]] = objArray[i];
		}

		return result;
	}
	return null;
};

module.exports = convert;
