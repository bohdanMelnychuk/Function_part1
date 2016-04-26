function  getClosestToZero(){
    var minToZero = Number.POSITIVE_INFINITY;
  for(i = 1; i <= arguments.length; i++){
    if(Math.abs(arguments[i]) < minToZero){
      minToZero = Math.abs(arguments[i]);
    }
  }
   return  document.write('Min to zero is: ' + minToZero);
}
  getClosestToZero(9,-12,7,11,-5,6,-2,-10,14);
