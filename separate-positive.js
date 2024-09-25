// add whatever parameters you deem necessary
function separatePositive(arr) {
    let left = 0;
    let right = arr.length - 1;
    let arrIdx;
    while (left <= Math.ceil(arr.length/2) && right >= Math.floor(arr.length/2)){
        if(arr[left] > 0){
            left = left + 1;
        }else{
            arrIdx = arr[left];
            arr.splice(left, 1);
            arr.push(arrIdx);
        }

        if (arr[right] < 0){
            right = right - 1;
        }else{
            arrIdx = arr[right];
            arr.splice(right,1);
            arr.unshift(arrIdx);
        }
        console.log(`LEFT: ${left} ARR_LEFT:${arr[left]} RIGHT: ${right} ARR_RIGHT:${arr[right]} ARR:${arr}`);
    }
    return arr;
}

module.exports = { separatePositive };