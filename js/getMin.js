//getMinValue
function getMinValue(){
  var min = Number.POSITIVE_INFINITY;
   for(var i = 1; i <= arguments.length; i++){
     if(arguments[i] < min){
       min = arguments[i];
     }
   }
   return document.write('the min arguments function is : ' + min);
}
getMinValue(23,11,-11,45,78,3);
