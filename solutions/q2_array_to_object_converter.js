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
        objArray.forEach((item) => result[item[field]] = item);

        return result;
    }
    return null;
};

module.exports = convert;
