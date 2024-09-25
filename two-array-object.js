// add whatever parameters you deem necessary
function twoArrayObject(keyArr, valArr) {
    let i = 0;
    let resObj = {};
    while (i < keyArr.length){
        if(valArr[i]){
            resObj[keyArr[i]] = valArr[i];
        }else{
            resObj[keyArr[i]] = null;
        }
        i++;
    }
    return resObj;
}

module.exports = {twoArrayObject};