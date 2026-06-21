console.log("Hello world")

setTimeout(() => {
    console.log("Hii Ram")
}, 10000)




function add(a,b) {
    return a+b
}

function subtract(a,b) {
    return a-b
}

console.log(add(5,6))

module.exports = {
    addfnc: add,
    subfnc: subtract,
};

exports.mul= (a,b)=>{
    return a*b
};

exports.div = (a,b) => a/b;