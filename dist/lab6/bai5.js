"use strict";
// function Autobind(_:any, _2:string, descriptor:PropertyDecorator){
//     const originalMethod = descriptor.value;
//     const adjDescript:PropertyDescriptor={
//         configurable:true,
//         emumerable:false,
//         get(){
//             const boundFn = originalMethod.bind(this);
//             return boundFn;
//         }
//     };
//     return adjDescript;
// }
// class Printer{
//     message='this works';
//     @Autobind
//     showMessage(){
//         console.log(this.message);
//     }
// }
// const p =new Printer();
// p.showMessage();
// const button = document.querySelector('button')?.addEventListener('click', p.showMessage);
