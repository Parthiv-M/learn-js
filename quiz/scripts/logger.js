// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 
const logMsg = (obj) => {
    console.log(obj?.errMsg);
}

obj1 = {
    errMsg: "Error 404"
}

obj2 = {
    err: "Does not work"
}

// works
logMsg(obj1)

// does not work
logMsg(obj2)