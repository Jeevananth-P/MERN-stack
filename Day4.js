let pal="adada";
for(var i=0;i<pal.length/2;i++){
    if(pal[i]!==pal[pal.length-i-1]){
        console.log("Not a palindrome");
        break;
    }
    console.log("Palindrome");
}
let palarr=pal.split("");
palarr.reverse();
palarr=palarr.join("");
if(pal==palarr) console.log("Palindrome");
else console.log("Not a palindrome");

let obj2={
    a:1,
    b:2,
    c:'go'
}
for(let key in obj2){
    console.log(key,obj2[key]);
}

let obj3=[1,2,'go'];
for(let key of obj3){//ES6 feature,for arrays values
    console.log(key);
}

//Array callback methods

let namesarray=["Vijay","Krishna","Alan"];
namesarray.forEach((ele)=>{
    console.log(ele);
})
let numarr=[2,5,7,9,11];
numarr.forEach((ele)=>{//for an arrow function,if there is only one parameter brackets are optional(also for single statement)
    console.log(ele*ele*ele);
})
numarr.forEach(ele=>console.log(ele*ele))

let maparray=namesarray.map(ele=>{//single statement return keyword and bracket optional
    return ele.repeat(2);
})
console.log(maparray);

let filterarray=numarr.filter(ele=>ele%2)
console.log(filterarray);

let names_obj=[
    {
        name:"Vijay",
        dob:1974
    },
    {
        name:"Vinay",
        dob:1982
    },
    {
        name:"Ajay",
        dob:2001
    },
    {
        name:"Vinu",
        dob:2002
    },
    {
        name:"Alan",
        dob:2004
    }
];
let dob2000arr=names_obj.filter(ele=>ele.dob>2000).map(ele=>ele.name)
console.log(dob2000arr);

//shallow copy
const array=[1,2,3,4,5];
const array1=array;
array1[3]=500;
console.log(array,array1);

const obj_cp={
    name:"sece",
    year:2023
}
const obj_cp1=obj_cp;
obj_cp.year=2024;
console.log(obj_cp,obj_cp1);

//deep copy
const array3=[1,2,3,4,5];
const array4=[...array3];
array4[3]=500;
console.log(array3,array4);

const obj_cp2={
    name:"sece",
    year:2023
}
const obj_cp3={...obj_cp2};
obj_cp2.year=2024;
console.log(obj_cp2,obj_cp3);

const obj_cp4={
    name:"sece",
    year:2023,
    name:"SECE"
}
console.log(obj_cp4);

let employee=[
    {
        name:"Anon",
        age:24,
        salary:22000,
        phone_no:1234567890
    },
    {
        name:"Bala",
        age:26,
        salary:75000,
        phone_no:1234567891
    },
    {
        name:"Carol",
        age:24,
        salary:50000,
        phone_no:1234567892
    },
    {
        name:"Denver",
        age:34,
        salary:15000,
        phone_no:1234567893
    },
    {
        name:"Talos",
        age:38,
        salary:92000,
        phone_no:1234567894
    }
]
let salaryarray=employee.filter(ele=>ele.salary>25000).map(ele=>({name:ele.name,age:ele.age}));
console.log(salaryarray);

//De-structuring

let struct=[10,20,30,40,50,60,70];
//let [n1,n2,n3,n4,...n5]=struct;//rest operator
let [n1,n2, ,n3,n4,n5]=struct;
console.log(n1,n2,n3,n4,n5);

let task=[10,20,30,40,50,60,70,80,90,100];
let [t1,t2,,t3,t4,...t5]=task;
console.log(t1,t2,t3,t4,t5)

let obj_struct={
    clg_name:"SECE",
    year:2002,
    city:"CBE",
    dept:"CSE",
    age:21
}
let {clg_name:college,year,color="green",city,...rest }=obj_struct;//:rename operator
console.log(college,year,city,color,rest);


setTimeout(()=> console.log("Hello, I am here"),3000);//JS is asynchronous

setInterval(()=> console.log("Hello, I am here"),3000);

//console.log('Hi');                          stack->webapis(for asynchronous call like setTimeout())->Event loop->task queue
//setTimeout(()=>console.log("there"),5000);
//console.log("JSConfEU");
//O/P:Hi JSConfEU there

//promise
//state=pending,resolve,reject
//API call illustration
const abc=fetch('https://jsonplaceholder.typicode.com/todos/1');
abc.then((Response)=>Response.json()).then((data)=>console.log(data)).catch((error)=>{console.log("error",error)});
console.log(abc);

const user1={
    name:"user",
    age:25
}
console.log(JSON.stringify(user1));

const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('resolved')
    },4000)
})
promise.then((value)=>console.log(value)).catch(()=>console.log("error"));

const apicall=async()=>{
    try{
    const promise_from_api=await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data=await promise_from_api.json();
    console.log(data);
    }catch(error){
        console.log("Error");
    }
}
apicall();
