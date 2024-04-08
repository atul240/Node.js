let num = [83,94,99,33,67,73,90];

const marks = num.filter((val)=>{
    return val>=90;
}) 

const total = marks.reduce((prev, curr)=>{
    return prev + curr;
})

console.log(total);