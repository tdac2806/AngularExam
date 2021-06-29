import { Appreciation } from "./appreciation.enum";
export class Statistique {
   constructor(
     public id: string, 
     public title: string, 
     public value: string,   
     public appreciation: Appreciation) {
       
   }    
 }