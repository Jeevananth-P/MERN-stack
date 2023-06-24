//https://roadmap.sh/nodejs

let a=parseInt(process.argv[2]);//Else parses as a string
let b=parseInt(process.argv[3]);
const add=(a,b)=>console.log(`The sum of ${a} and ${b} is ${a+b}`);

const diff=(a,b)=>console.log(`The difference of ${a} and ${b} is ${a-b}`);

const prod=(a,b)=>console.log(`The product of ${a} and ${b} is ${a*b}`);

const div=(a,b)=>{
    switch(b){
        case 0:
            console.log("Cant divide by 0");
            break;
        default:
            console.log(`The quotient of ${a} and ${b} is ${a/b}`);
    }
}
module.exports={add,diff,prod,div};