/*const {add,diff,prod,div}=require('./app')

switch(process.argv[4]){
    case '+':
        add(parseInt(process.argv[2]),parseInt(process.argv[3]));
        break;
    case '-':
        diff(parseInt(process.argv[2]),parseInt(process.argv[3]));
        break;
    case '*':
        prod(parseInt(process.argv[2]),parseInt(process.argv[3]));
        break;
    case '/':
        div(parseInt(process.argv[2]),parseInt(process.argv[3]));
        break;
    default:
        console.log("Invalid operator");
}
*/
const fs=require('fs');
// fs.readFile(`${__dirname}/state.txt`, (err, data) => {
//     if (err) console.log("File not found");
//     else console.log(data.toString());
// });

const inputData='Initial data';
// fs.writeFile(`${__dirname}/file1.txt`, inputData, (err, data) => {
//     if (err) console.log("Error");
//     else console.log("Write function done");
// });
// fs.readFile(`${__dirname}/file1.txt`, (err, data) => {
//     if (err) console.log("Error");
//     else console.log(data.toString());
// }); 
// const updateData=' Updated data';
// fs.appendFile(`${__dirname}/file1.txt`, updateData, (err, data) => {
//     if (err) console.log("Error");
//     else console.log("Append function done");
// });
// fs.readFile(`${__dirname}/file1.txt`, (err, data) => {
//     if (err) console.log("Error");
//     else console.log(data.toString());
// }); //blocking function-synchronous

// const promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         re('resolved')
//     },4000)
// })
// promise.then((value)=>console.log(value)).catch(()=>console.log("error"));

const input='Write data ';
const update='Append data ';
function read(filePath){
    return new Promise((resolve,reject)=>{
        fs.readFile(filePath,(err,data)=>{
            if(err) reject("Failed during read");
            else {
                resolve("Read Completed");
                console.log(data.toString());
            }
        })
    })
}
function write(filePath,updateData){
    return new Promise((resolve,reject)=>{
        fs.writeFile(filePath,updateData,(err,data)=>{
            if(err) reject("Failed during write");
            else {
                resolve(data);
                console.log("Write Completed");
            }
        })
    })
}

// read('file1.txt').then((data) => {
//     console.log(data.toString());
//     return write('file1.txt',input).then((data)=>{
//         console.log("Check file");
//     }).catch((err)=>{
//         console.log("Error");
//     })
// }).catch((err)=> console.log("Error"));


const fileOperation=async()=>{
    try{
        const states=await read('state.txt');
        const result=await write('file1.txt',states);
        console.log(result);
    }catch (error) {
        console.log(error);
    }
}
fileOperation();
