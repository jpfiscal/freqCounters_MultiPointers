// add whatever parameters you deem necessary
function countPairs(arr, num) {
    let pairCount = 0;
    let left = 0;
    while (left < arr.length){
        right = left+1;
        while (right < arr.length){
            console.log(`left: ${arr[left]} | right: ${arr[right]} | pair count: ${pairCount}`);
            if (arr[left] + arr[right] === num){
                pairCount ++;
            }
            right ++;
        }
        left ++;
    }
    return pairCount;
}

module.exports = { countPairs };