function choice(arr){
var randInx= Math.floor(Math.random() *arr.length);
    return arr[randInx];
}

export {choice};