"use strict";
// // import {IsNotEmpty, IsNumber, IsPositive} from 'class-validator';
// // export class Product{
// //     @IsNotEmpty()
// //     title:string;
// //     @IsNumber()
// //     @IsPositive()
// //     price:number;
// //     constructor(t:string,p:number){
// //         this.title=t;this.price=p;
// //     }
// //     getInformation(){
// //         return [this.title, `$${this.price}`];
// //     }
// // }
// import 'reflect-metadata';
// import {plainToclass} from 'class-transformers';
// import {calidate} from 'class-validator';
// import {Product} from './product.model';
// const products ={
//     {title: 'A carper', price:22.33},
//     {title: 'A book', price:22.33},
// };
// const newPord = new Product('', 4.5);
// validator(newPord).then(err=>{
//     if(err.length>0){
//         console.log('VALIDATION ERROR');
//         console.log(err);
//     else{
//         console.log(newPord.getInformation());
//     }}
// });
