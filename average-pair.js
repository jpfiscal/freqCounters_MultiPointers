// add whatever parameters you deem necessary
function averagePair(arr, avg) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right && left >= 0 && right < arr.length){
        let calcAvg = (arr[left] + arr[right])/2;
        //console.log(`LEFT = ${left} | RIGHT = ${right} | AVG = ${calcAvg} | Target AVG = ${avg}`);
        if(calcAvg == avg){
            return true;
        }else if (calcAvg > avg){
            right = right - 1;
        }else{
            left = left + 1;
        }
        
    }
    return false;
}

module.exports = { averagePair };