// add whatever parameters you deem necessary
function constructNote(msg, letters) {
    let msgMap = frequencyCounter(msg);
    let lettersMap = frequencyCounter(letters);

    if (letters === "" && msg !== "") return false;
    if (msg === "") return true;

    for (let letter of msgMap.keys()) {
        // Check if the letter exists in lettersMap and if it has enough occurrences
        if (!lettersMap.has(letter) || lettersMap.get(letter) < msgMap.get(letter)) {
            return false;
        }
    }
    return true;
}

function frequencyCounter(array){
    let freq = new Map();

    for (let val of array){
        let valCount = freq.get(val) || 0;
        freq.set(val, valCount + 1);
    }   
    
    return freq;
}

module.exports = { constructNote };