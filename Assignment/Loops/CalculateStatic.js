function calculateStats(arr){
    let mean = 0;
    let max = arr[0];
    let min = arr[0];
    let median = 0;
    let mode = arr[0];
    let maxCount = 0;
    for(let i = 0; i < arr.length; i++){
        mean += arr[i]; //sum the all elements in the array
        if(arr[i] > max){
            max = arr[i];//compare the one element to another to find maximum
        }
        if(arr[i] < min){
            min = arr[i]; // compare the one element to another to find minimum
        }
    }
    mean = mean / arr.length; // after sum all the element divide by length of the array.
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        let alreadyChecked = false;
        for (let k = 0; k < i; k++) {
            if (arr[i] === arr[k]) {
                alreadyChecked = true;
                break;
            }
        }
        if (!alreadyChecked) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    count++;
                }
            }
            if (count > maxCount) {
                maxCount = count;
                mode = arr[i];
            }
        }
    }
    let sorted = [...arr]; //copy the array for sorting
    for(let i = 0; i < sorted.length - 1; i++){
        for(let j = 0; j < sorted.length - 1 - i; j++){ //using bubble sort to arrange the ascending order in element.
            if(sorted[j] > sorted[j+1]){
                let temp = sorted[j];
                sorted[j] = sorted[j+1];
                sorted[j+1] = temp;
            }
        }
    }
    if(sorted.length % 2 == 0){ // in case sorted array length is even the mediean is two index so add two index and divide by 2 to get mediean
        median = (sorted[sorted.length/2 - 1] + sorted[sorted.length/2]) / 2;
    } else {
        median = sorted[(sorted.length - 1) / 2];
    }
    let range = max - min; // difference bw max and min is range
    return {
        mean: mean,
        median: median,
        mode: mode,
        range: range
    };
}

console.log(calculateStats([1, 2, 2, 3, 4, 5, 5, 5, 6]));
