const fun1 = () => {
    return new Promise((resolve) => {
        resolve("Function 1 is called");
    })
}
const fun2 = () => {
    return new Promise((resolve) => {
        resolve("Function 2 is called");
    })
}
const fun3 = () => {
    return new Promise((resolve) => {
        resolve("Function 3 is called");
    })
}

const promRecurse = (allFunctions) => {
    if(allFunctions.length === 0)return;
    const currPromise = allFunctions.shift();
    currPromise.then((res) => {console.log(res)}).catch((error) => {console.log(error)});
    promRecurse(allFunctions);
}
promRecurse([fun1(),fun2(),fun3()]);

/*
Output:
Function 1 is called
Function 2 is called
Function 3 is called
*/