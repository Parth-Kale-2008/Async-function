
function saveToDb(data){
    return new Promise((resolve,reject)=>{
        console.log("Greetings:", data);
        reject();
        resolve();
    })
}
saveToDb("heyy")
.then(()=>{
    console.log("promise1 resolved");
    return saveToDb("hello");
})

.then(()=>{
    console.log("promise 2 resolved");
})

.catch(()=>{
    console.log("error occured");
});

function Even(data){
    return new Promise((resolve,reject)=>{
        console.log("the age is "+age);
        if(age%2 == 0){
            resolve("the age is even ");
        }else{
            reject("the age is odd ");
        }
    })  
}

let age = Number(prompt("enter the age"));
Even(age)
.then(msg=>console.log(msg))
.catch(()=>{
    console.log(err);
});