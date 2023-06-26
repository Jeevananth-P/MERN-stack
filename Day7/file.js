const info=require('./personInfo.json');

const printJSON = (info) =>{
    const keys = Object.keys(info);
    for(i of keys)
    {
        if(typeof(info[i])=='object') printJSON(info[i])
        else console.log(info[i])
    }
}
printJSON(info)

