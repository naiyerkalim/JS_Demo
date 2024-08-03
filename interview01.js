////Interview:01
//hoisting
// function x(){
//     console.log(a,c)
//     var a=10;
//     // const b=10
//      //let c=10
// }

// x();

//get another object data using bind method
// let obj1={
//     uName: "Naiyer",
//     lName: "Kalim",
//     getName(){
// console.log(this.uName+" "+ this.lName)
//     }
// }

// let obj2={
//     uName: "Nazir",
//     lName: "Kalim",
//     age:36
// }
// const res= obj1.getName.bind( obj2);
// res();


///var, let and const
/// shadowing..
// let a = "hello"
// function fn(){
//     if(true){
//        let a= "Hi"
//       console.log(a)
//     }
//     console.log(a)
// }
// fn()

////Live Interview Question answer
//Cannot access 'obj1' before initialization at interview01.js:17:5

// const obj1={a:10}
// const obj2= obj1;
// obj2.a=20;
// console.log(obj1)
// console.log(obj2)

// //console.log(mul(2)(3)(4))
// // let mul= a=> b=> b?mul(a*b):a
// // console.log(mul(2)(3)(4)());

// ///currying 
// function mul(a){
//  return function(b){
// if(b){
//     return mul(a*b)
// }return a
//  }
// }
// console.log(mul(2)(3)(4)(0)());


///filter
// var arr=[1,0,0,2,0,1,0,3,1,0]

// var zero= arr.filter(val=>{
//     return val===1
// })
// console.log(zero.length)





