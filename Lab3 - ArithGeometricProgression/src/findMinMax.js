function findMinMax(numArray){
	
	ValidateArray(numArray);
	if(checkIfContentOfArrayIsEqual(numArray)){
		myArray = [numArray[0]];
	}
	else{
		var maximumNumber = Math.max.apply(null, numArray);
	    var minimumNumber = Math.min.apply(null, numArray);
	    var ArrayOfMinimumAndMaximumValue = createAnArray(ArrayOfMinimumAndMaximumNumbers, minimumNumber, maximumNumber);
	    console.log(ArrayOfMinimumAndMaximumValue);
	}
	
}

function isArray(x){
	return x.constructor.toString().indexOf("Array") > -1;
}

function checkLengthOfArray(y){
     checkIfObjectIsAnArray(y);
     if(y.length < 2){
     	console.log("Array content must be more than 1");
     }
}

function checkIfObjectIsAnArray(b){
	if(isArray(b)){
	return true;
	}
	else {
		console.log("Please provide an array");
	}
}

function checkIfContentOfArrayIsANumber(c){
	checkIfObjectIsAnArray(c);
	checkLengthOfArray(c);
	for(var i=0; i < c.length; i++){
		if(notANumber(c[i])){
			console.log("Your Array contains a value that is not a number");
		}
	}
}

function createAnArray(nameOfArray, firstVal, secondValue){  
	this.nameOfArray = [firstVal, secondValue];
	return nameOfArray;
}

function ValidateArray(v){
	checkIfObjectIsAnArray(v);
	checkLengthOfArray(v);
	checkIfContentOfArrayIsANumber(v);
}

function checkIfContentOfArrayIsEqual(s){
	ValidateArray(s);
	var i;
	var loopsize = s.length - 1;
	for(i = 0; i <= loopsize; i++){
		 if(s[i] !== s[0]){
		 	return false;
		 }
	}

	return s[0];
}

function notANumber(obj){ 
	return obj != obj 
}



