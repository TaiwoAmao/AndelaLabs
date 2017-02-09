function aritGeo(arrValue) {
	if (Array.isArray(arrValue)){
		var commonDifference = arrValue[1] - arrValue[0];
		var commonRatio = arrValue[1] / arrValue[0];

		var arithmetic = true;
		var geometric = true;

		if (arrValue.length > 0) {
			for(var i = 0; i < arrValue.length - 1; i++) {
				if (arrValue[i + 1] - arrValue[i] !== commonDifference)
					arithmetic = false; 
				if (arrValue[i + 1] / commonRatio !== arrValue[i])
					geometric = false;
			}
			if (arithmetic === true) return "Arithmetic";
			else if (geometric === true) return "Geometric";
			else return -1;
		} else {
			return 0;
		}

		
	} else {
		return "Please input an array";
	}
}