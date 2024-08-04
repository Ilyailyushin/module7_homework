const obj = {
    a : 2,
    b : 3,
    operator : `+`,
};
function calculate (a,b,operator){
    if (operator === `+`){return a+b};
    if (operator === `-`){return a-b};
    if (operator === `*`){return a*b};
    if (operator === `/`){return a/b};
    }
const result =calculate.apply(obj,[2,3,`+`]);
console.log(result);