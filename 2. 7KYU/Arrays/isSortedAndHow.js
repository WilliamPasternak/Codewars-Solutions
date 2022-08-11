function isSortedAndHow(arr){

	if(arr[0] > arr[arr.length -1]){
		// If first element is greater than last, confirm decending
		for(let i = 0; i < arr.length; i++) {
    		if(arr[i] < arr[i + 1]) {
			return "no"
			}
			else{
				return "yes, descending"
			}
		}
	}
	else if(arr[0] < arr[arr.length -1]) {
		// If first element is less than last, confirm ascending
  		for(let i = 0; i < arr.length; i++) {
  			if(arr[i] > arr[i+1]) {
			return "no"
			}
		else {
		return "yes, ascending"
		}
	}
}
}