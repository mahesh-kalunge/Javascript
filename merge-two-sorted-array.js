//Merge Two Sorted Arrays

function mergeSortedArray(arr1,arr2){
	let result= [];
	let i=0,j=0;
	while(i<arr1.length && j<arr2.length){
		if(arr1[i]<arr2[j]){
			result.push(arr1[i])
			i++;
		}else{
			result.push(arr2[j]);
			j++
		}
	}
  return result.concat(arr1.slice(i)).concat(arr2.slice(j));
}

console.log(mergeSortedArray([2,4,6],[1,3,5]));
