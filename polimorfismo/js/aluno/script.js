import aluno from "./aluno.js";
import professor from "./professor.js";

let Aluno = new aluno('jorginho',13,190)
let Professor = new professor('jorjão',50,'bate em criança')

console.log(Aluno.apresentar())
console.log(Professor.apresentar())