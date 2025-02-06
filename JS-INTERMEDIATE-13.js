function mergeSort(arr){
    //we need to divide it till it breaks to size of 1 
    if(arr.length < 2){
        return arr;
    }

    //find mid to break array from mid point 
    const mid = Math.floor(arr.length/2);
    const leftArray = mergeSort(arr.slice(0, mid));
    const rightArray = mergeSort(arr.slice(mid));

    //break both array till they contain only 1 element 
    return merge(leftArray, rightArray);
}


function merge(leftArray , rightArray){
    const sortedArray = []; //empty array to hold result array 

    // till both arrays have elements
    while(leftArray.length && rightArray.length){
        if(leftArray[0] <= rightArray[0]){
            sortedArray.push(leftArray.shift()); //shift because we want to remove that elememnt from leftArray
        }else{
            sortedArray.push(rightArray.shift());
        }
    }

    //spread sorted array, left array, right array
    return [...sortedArray, ...leftArray, ...rightArray];
}

const arr = [8,20,-2,4,-6];
console.log(mergeSort(arr));