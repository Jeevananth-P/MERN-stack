let b=100n;
console.log(b,typeof b);
let num1=5;
let num2=20;
console.log(`Addition of two numbers ${num1} and ${num2} is 
${num1+num2}`);
let xtr;
console.log(xtr);
let obj=null;
console.log(obj);
console.log(sece);
var sece='college';
const user=Object.freeze({
    name:'admin',
    age:19,
    school:'VVM',
    college:'SECE'
})
user.id=761;
console.log(user);
user.age=21;
console.log(user.age);
delete user.school;
console.log(user);
const u=Object.keys({
    name:'admin',
    age:19,
    school:'VVM',
    college:'SECE'
})
console.log(u);
const u1=Object.values({
    name:'admin',
    age:19,
    school:'VVM',
    college:'SECE'
})
console.log(u1);
console.log(Object.keys(user)) //works same
//Mutation
const userx={name:'x',age:33}
const usery=userx;
usery.age=10;
console.log(userx,usery);

const usera={name:'x',age:33}
const userb={...usera,age:20};
console.log(usera,userb);

const details={
    address:{
        street:'second street',
        city:'Kovai'
    }
}
console.log(details.address.city)

const d={
    city:'Kovai'
}
console.log(d.address?.city)//(Optional Chaining)undefined

for(const key in details){
    console.log(key,details[key]);
}

function sum(num1,num2){
    if(isNaN(num1) || isNaN(num2)){
        return "invalid number";
    }else{
    return num1+num2;
    }
}
console.log(sum(num1,num2));

const sum1=(num1,num2) =>{
     return num1+num2;
}

const diff=(num1,num2) =>{
    return num1-num2;
}
const prod=(num1,num2) =>{
    return num1*num2;
}
const div=(num1,num2) =>{
    return num1/num2;
}
//Immediately invoking function expression:
(function imsum(num1,num2){
    if(isNaN(num1) || isNaN(num2)){
        return "invalid number";
    }
    console.log(num1+num2);
})(10,20);

const calculator =(num1,num2,operation)=>{
    return operation(num1,num2)
}

console.log(calculator(10,20,sum));
console.log(calculator(100,20,diff));
console.log(calculator(10,20,prod));
console.log(calculator(100,20,div));

let str="    Hello from SECE    ";
let str2=str.trim();
console.log(str.replace('E','O'));//Non-destructive-does not change the original string
console.log(str.replaceAll('E','O'));//Non-destructive-does not change the original string
console.log(str2);

let arr=[1,2,3,'123'];
arr.push(10);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(0);
console.log(arr);
arr.shift();
console.log(arr);
console.log(arr[1]);
arr.push((num1)=>num1*5);
arr.push({a:1,b:2,c:3,say_hello:()=>"hello"});
console.log(arr);
console.log(arr[4](10));
console.log(arr[5].say_hello());

for(key in arr[5]){
    console.log(key,arr[5][key]);
}

let arr1=[1,2,3,4,5];
arr1.push(6,7);
arr1.splice(arr1.length,0,8,9,10)//destructive method
console.log(arr1); 
console.log(arr1.slice(1,8));//non-destructive

let b1="Harris";
console.log(b1.slice(1,b1.length));

let s="Sri Eshwar College";
console.log(s.split(" "));
console.log(s.split(""));
let s1=s.split(" ");
console.log(s1.join(" "));
console.log(s.toUpperCase());
console.log(s.toLowerCase());

let names="madhu akshaya priya ishwarya saranya";
const name=names.split(" ")
for(var i=0;i<name.length;i++){
    name[i]=name[i].charAt(0).toUpperCase()+name[i].slice(1);
}
console.log(name.join(" "));
