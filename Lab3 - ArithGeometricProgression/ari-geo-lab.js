function aritGeo(arr) {
	if (Array.isArray(arr)) {
		var indexDiff = arr[1] - arr[0];
		var indexRatio = arr[1] / arr[0];

		var arithmetic = true;
		var geometric = true;

		if(arr.length <1){
			return 0;
		}else if (arr.length > 0) {
			for(var i = 0; i < arr.length - 1; i++) {
				if (arr[i + 1] - arr[i] !== indexDiff) {
					arithmetic = false; 
				} else if (arr[i + 1] / indexRatio !== arr[i]) {
					geometric = false; 
				}
			}
		}

		if (arithmetic === true) return "Arithmetic";
		else if (geometric === true) return "Geometric";
		else return -1;
	} else {
		return "Please input an array"
	}
}