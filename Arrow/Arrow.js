var nor = function (para){
    return `I am from Para${para}`
}

console.log(nor("  es5"));

//Arrow is a new design of the function in es6 

const es6 = (para)=>{
    return `I am from the ${para}`
}

console.log(es6("es6"));
