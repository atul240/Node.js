let num = [83,94,99,33,67,73,90];

const ans = num.reduce((prev, curr) => {
    return (prev > 90 || curr > 90);
})

console.log(ans);