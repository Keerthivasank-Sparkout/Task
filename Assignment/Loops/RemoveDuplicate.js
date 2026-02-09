function removeDuplicate(arr){
    const rm = new Set();
    for(let i=0;i<arr.length;i++){
        rm.add(arr[i]);
    }
    return rm;
}
let rm=removeDuplicate([1,2,2,2,4,35]);
console.log(rm);