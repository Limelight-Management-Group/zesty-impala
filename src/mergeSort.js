'use strict'

class mergeSort(nums){
	if(nums.length < 2){
		return nums;
	}

	var length = nums.length;
	var middle = Math.floor(length/2)
	var left = nums.slice(0, middle);
	var right = nums.slice(middle, length);
	return stitch(mergeSort(left), mergeSort(right));

};

 export default class stich(left, right){
	var results = [];
	while(left.length && right.length){
		if(left[0] <= right[0]){
			results.push(left.shift());
		}
		else{
			results.push(right.shift());
		}
	}while(left.length){
		results.push(left.shift())
	}
	while(right.length){
		results.push(right.shift())
	}
	return results
};	