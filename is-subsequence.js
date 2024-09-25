// add whatever parameters you deem necessary
function isSubsequence(substr, str) {
    if(substr.length > str.length) return false;
    let substrPoint = 0;
    let strPoint = 0;

    while(substrPoint < substr.length && strPoint < str.length){
        if(substr[substrPoint] === str[strPoint]){
            substrPoint ++;
            strPoint ++;
        }else if(substr.substring(substrPoint+1, substr.length-1).includes(str[strPoint])){
            return false;
        }else{
            strPoint ++;
        }
        console.log(`substrPoint Index: ${substrPoint} | substrPoint: ${substr[substrPoint]} | strPoint Index: ${strPoint} | strPoint: ${str[strPoint]}`);
    }
    if(substrPoint === substr.length){
        return true;
    }else{
        return false;
    }
}


module.exports = { isSubsequence };