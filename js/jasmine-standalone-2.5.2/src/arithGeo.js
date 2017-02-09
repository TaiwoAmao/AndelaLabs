function aritGeo(arr) {
   validateArray(arr);
   if(checkIfAnArrayOfNumberIsAnArithmeticProgression(arr)){
    return "Arithmetic";
   }else if(checkForGeometricProgressionInArray(arr)){
    return "Geometric";
   }else if(checkIfAnArrayOfNumberIsAnArithmeticProgression(arr) || checkForGeometricProgressionInArray(arr) ){
    return -1
   }else if(checkIfArrayIsEmpty(arr)){
    return 0;
   }


    return;
}


function checkIfObjectIsArray(myArray){
    if(isArray(myArray)){
    return true;
    }
    else {
        return false;
    }
}

function isArray(x){
    return x.constructor.toString().indexOf("Array") > -1;
}

function checkIfArrayIsEmpty(vArray){
    if(checkIfObjectIsArray(vArray)){
        if(vArray.length == 0){
            return false;
        }
    }
}

function checkIfAnArrayOfNumberIsAnArithmeticProgression(numArray){
  validateArray(numArray)
for(i = 0; i < numArray.length; i++) {
      if(numArray[i+1]-numArray[i]===numArray[i+2]-numArray[i+1]){
        return true;
      }
      else{
        return false;
      }
  }
}

function checkForGeometricProgressionInArray(arr){
    for(i = 0; i < arr.length; i++) {
      if(arr[i+1]/arr[i] ===arr[i+2]/arr[i+1]){
        return true;
      }
      else{
        return false;
      }
  }
}
function checkIfContentOfArrayIsANumber(numAArray){
    checkIfObjectIsAnArray(numAArray);
    checkLengthOfArray(numAArray);
    for(var i=0; i < numAArray.length; i++){
        if(notANumber(numAArray[i])){
            console.log("Your Array contains a value that is not a number");
        }
    }
}

function notANumber(obj){ 
    return obj != obj 
}

function validateArray(fArray){
  checkIfObjectIsArray(numArray);
  checkIfArrayIsEmpty(numArray);
  checkIfContentOfArrayI0);
}
}

}