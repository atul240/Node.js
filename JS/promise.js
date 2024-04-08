// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             reject("unsuccess");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 5000);
//     });
// }


// promise chaining


function asyncFun1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success");
        }, 4000);
    });
}

function asyncFun2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success");
        }, 4000);
    });
}

// ye normal way ke through hua h 

// console.log("Fetching data1...");
// let p1 = asyncFun1();
// p1.then((res)=>{
//     console.log(res);
// })


// console.log("Fetching data2...");
// let p2 = asyncFun2();
// p1.then((res)=>{
//     console.log(res);
// })

// ye promise chaining ke through hua h

console.log("Fetching data1...");
let p1 = asyncFun1();
p1.then((res) => {
    console.log(res);
    console.log("Fetching data2...");
    let p2 = asyncFun2();
    p1.then((res) => {
        console.log(res);
    })
})