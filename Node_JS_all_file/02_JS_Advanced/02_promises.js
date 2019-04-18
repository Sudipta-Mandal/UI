// Promises in JavaScript
let doingTask = new Promise((resolve,reject) => {
    // doing the task
    let isDone = false;
    // successful
    if(isDone){
        resolve('Task is Done');
    }
    // un-successful
    else{
        reject('Task is Not Done');
    }
});

// Execute the Promise
doingTask.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
});

// Dependent Promises
let doTask = new Promise((resolve,reject) => {
    return resolve('Task is Done');
});

let doProject = new Promise((resolve,reject) => {
    return resolve('Project is Done');
});

let getJob = new Promise((resolve,reject) => {
    return resolve('Got a JOB');
});

doTask.then(() => {
    return doProject;
}).then(()=> {
    return getJob;
}).then(() => {
    console.log('Everything is Done');
});
