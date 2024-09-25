function frequencyCounter(array){
    let freq = new Map();

    for (let val of array){
        let valCount = freq.get(val) || 0;
        freq.set(val, valCount + 1);
    }   
    
    return freq;
}

module.exports = { frequencyCounter };