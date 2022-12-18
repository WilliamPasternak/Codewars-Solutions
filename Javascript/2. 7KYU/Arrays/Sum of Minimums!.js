Sum of Minimums!
Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.
function sumOfMinimums(arr) {
    let mins = []
    
    // Push the minimum value from each sub array into mins
    for(let i = 0; i < arr.length; i++){
      mins.push(Math.min(...arr[i]))
    }
    // Add all values in mins array 
    return mins.reduce((acc,curr) => acc + curr)
}