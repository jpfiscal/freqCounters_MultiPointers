const { frequencyCounter } = require('./freq-counter');
// add whatever parameters you deem necessary
function sameFrequency(int1, int2) {
    int1 = int1.toString();
    int2 = int2.toString();
    let int1Map = frequencyCounter(int1);
    let int2Map = frequencyCounter(int2);
    for (let num of int1Map.keys()){
        if(!int2Map.has(num) || int2Map.get(num) != int1Map.get(num)){
            return false;
        }
    }
    return true;
}

module.exports = { sameFrequency };
