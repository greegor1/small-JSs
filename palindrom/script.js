const tab1 = ['kot','pies','kajak','123','121','22', 121 ,null];    

const palindrom = (param) => {
    let paramStr;
    if (typeof param !== 'string') paramStr = String(param);

    else paramStr = param
    const elem2 = paramStr.split('').reverse().join('');
    if (paramStr == elem2) return true;
    else return false;
}

let mapped = tab1.map((x) => {
    return palindrom(x);  
});

console.log(mapped);
