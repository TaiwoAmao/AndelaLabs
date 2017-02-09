function findMinMax(myArray){
	if(Array.isArray(myArray)) {
		if(myArray.length > 0){
			var sorted = myArray.sort(function(x,t){
				return x-t;
			});
			var finalResult = [];
			var minimum = sorted[0];
			var maximum = sorted[myArray.length-1];
			if(minimum === maximum) {
				finalResult.push(minimum);
				return finalResult;
			} else {
				finalResult.push(minimum);
				finalResult.push(maximum);
				return finalResult;
			}
		} else {
			return [];
		}
	} else {
		return "Please input an array";
	}
  
}