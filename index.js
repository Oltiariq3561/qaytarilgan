// 1-masala
// const massiv = [1, 2, 2, 3, 3, 3, 4];
// const res = new Map();
// massiv.forEach(value => {
//     if (res.has(value)) {
//         res.set(value,value + 0);
//     } else {
//         res.set(value, 1);
//     }
// });
// res.forEach((soni, value) => {
//     console.log(value,soni);
// });

// 2-masala
// let a = 'salom qalaysan yaxshimisan';
// function test(arg) {
//     let arr = arg.split(' ');
//     let res = arg[0];
//     for (const i of arr) {
//         if (i.length >= res.length) {
//             res=i
//         }
//     }
//     return res
// }
// let res = test(a);
// console.log(res);

// 3-masala
// let a = '1laoj3ihb5ihb212jhb4k'
// function test(arg) {
//     let arr = arg.split('');
//     let raqam = [];
//     let string = []
//     for (const i of arr) {
//         if (i>0) {
//             raqam.push(Number(i))
//         }else{
//         string.push(i)
//         }
//     }
//     return {raqam,string}
// }
// let res = test(a);
// console.log(res);

// 4-masala
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11];
// let sum = 2;
// function test(arg,arg2) {
//     let res = [];
//     for (let i = 0; i < arg.length; i += arg2) {
//         const chunk = arg.slice(i, i + arg2);
//         res.push(chunk);
//     }
    
//     return res;
// }
// let res = test(arr, sum);
// console.log(res);

// 9-masala
// let arr = [1,2,3,4,5,1]
// function test(arg) {
//     let res = arg.sort(function (a,b) {
//         return a-b;
//     })
//     return res
// }
// let res = test(arr);
// console.log(res);

// 10-masala
// let a = 'salom qalesan nimagaplar iyy';
// function test(arg) {
//     let arr = arg.split(' ')
//     let res = arr.sort(function(a,b) {
//         return a.length - b.length
//     })
//     return res
// }
// let res = test(a);
// console.log(res);