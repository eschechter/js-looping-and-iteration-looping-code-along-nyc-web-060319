// Code your solutions in this file

function writeCards(nameArray){
    const toRet = [];
    for (let i = 0; i < nameArray.length; i++){
        toRet.push(`Thank you, ${nameArray[i]}, for the wonderful surprise gift!`);
    }
    return toRet;
}

function countdown(num){
    while (num >= 0){
        console.log(num--);
    }
}