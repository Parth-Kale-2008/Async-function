
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