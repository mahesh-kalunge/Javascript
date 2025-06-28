//--------largest number in an array-------

function findLargest(arr) {
    let largest = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]; 
        }
    }
    return largest;
}

console.log(findLargest([99, 5, 3, 100, 1]));


// Using sort method

var arr1 = ['20','120','111','215','54','78'];
arr1.sort(function(a,b){
    return b-a;
});

console.log(arr1[0]);
