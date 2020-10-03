/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = () => {
     // Write your code here

     function pyramid(height){
          let result = "";
          for(let i=1;i <= height; i++){
               for(let k=0;k<height - i;k++){
                    result += " ";
               }
               for(let j=1;j < i; j++){
                    result += "* ";
               }
               result += "*\n";
          }
          return result;
     }
};

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

// module.exports = buildPyramid;
