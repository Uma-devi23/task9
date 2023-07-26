function zeroesToEnd(arr) {
    let leftPointer = 0;
    let rightPointer = arr.length - 1; 
    while (leftPointer < rightPointer) {
      if (arr[leftPointer] === 0 && arr[rightPointer] !== 0) {      
        [arr[leftPointer], arr[rightPointer]] = [arr[rightPointer], arr[leftPointer]];
      } 
      if (arr[leftPointer] !== 0) {      
        leftPointer++;
      } 
      if (arr[rightPointer] === 0) {
        rightPointer--;
      }
    }  
    return arr;
  }  
  console.log(zeroesToEnd([1, 2, 0, 0, 0, 5]));
  console.log(zeroesToEnd([0, 0, 2, 0, 5])); 
  console.log(zeroesToEnd([4, 4, 5])); 
  console.log(zeroesToEnd([0, 0]));
  