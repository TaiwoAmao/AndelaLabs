function findMinMax(myArray){
	if(Array.isArray(myArray)) {
		if(myArray.length > 0){
			var sorted = myArray.sort(function(x,t){
				return x-t;
			});
			var result = [];
			var minimum = sorted[0];
			var maximum = sorted[arr.length-1];
			if(minimum === maximum) {
				result.push(minimum);
				return result;
			} else {
				result.push(minimum);
				result.push(maximum);
				return result;
			}
		} else {
			return [];
		}
	} else {
		return "Please input an array";
	}
  
}
// findMinMax([1,1,1,9,1,1])