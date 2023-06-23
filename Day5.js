export const user_Data=[
    {
        id:1,
        name:"Admin",
        email:'admin@sece.com',
        age:22
    }
];

//CRUD
export const addUser=(new_user)=>{
    user_Data.push(new_user);
    console.log(user_Data);
}

export const editUser=(id,key,value)=>{
    const objIndex = user_Data.findIndex((obj => obj.id === id));
    if(objIndex != -1)
    user_Data[objIndex][key] = value;
    console.log(user_Data[objIndex]);
}

export const deleteUser=(id)=>{
    const objIndex = user_Data.findIndex((obj => obj.id === id));
    user_Data.splice(objIndex,1);
    console.log(user_Data);
}

export const editMultipleParameter=(id,updateValue)=>{
    const objIndex = user_Data.findIndex((obj => obj.id === id));
    if(objIndex != -1)
    user_Data[objIndex] = {
        ...user_Data[objIndex],
        ...updateValue
    };
    console.log(user_Data[objIndex]);
}




import { user_Data,addUser as add,editUser,editMultipleParameter,deleteUser } from "./userModules.js";
console.log(user_Data);

add({
    id:2,
    name:'user',
    email:'user@sece.com',
    age:20
})

editUser(2,'name',"Jeeva");

editMultipleParameter(2,{name:'user',age:19})

deleteUser(1);

//DOM-Document Object Model

document.body.style.backgroundColor="cyan";
const allChild=document.body.children;

setTimeout(() => {
    allChild[1].innerHTML="<h1>Red</h1>";
    allChild[1].style.color="red"
}, 3000);

setTimeout(() => {
    allChild[2].innerHTML="<h1>Blue</h1>";
    allChild[2].style.color="blue"
}, 6000);

setTimeout(() => {
    allChild[3].innerHTML="<h1>Green</h1>";
    allChild[3].style.color="green"
}, 9000);

let refresh_value=true;
setInterval(()=>{
    allChild[4].style.color=(refresh_value?"green":"orange");
    refresh_value!=refresh_value;
},2000);

var i = 0;
function change() {
  var color = ["black", "blue", "brown", "green"];
  allChild[5].style.color = color[i];
  i = (i + 1) % color.length;
}setInterval(change,2000);

//selector

const tag=document.getElementsByClassName('cse');
tag[0].innerText='Class Selector text changed';
console.log(tag);

const id=document.getElementById('a');
id.innerText='Id Selector text changed';

const button = document.getElementById('login-button');
const username = document.getElementById('user');
const password = document.getElementById('pass');
const form = document.getElementById('form')
button.addEventListener('click',(event)=> {
    console.log('click');
})
form.addEventListener('submit',(event)=> {
    event.preventDefault();
    console.log('submit',username.value,password.value);
})
