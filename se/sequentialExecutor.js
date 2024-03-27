
async function sequentialExecutor(functionsArray) {
    try {
      for (const func of functionsArray) {
        await func();
         
      }
    } catch (error) {
      return Promise.reject(error);
    }
    return Promise.resolve();
  }
  const functionsArray = [asyncFunc1, asyncFunc2, asyncFunc3];//[//input1,input2,input3]
 
 
  sequentialExecutor(functionsArray)
    .then(() => {
      console.log("All functions executed successfully");//if 3 inputs resolve it  will print  "All functions executed successfully"
    })
    .catch((error) => {
      console.error("Error:", error);// if one error occure it comeout from try block and excute catch block 
    });
  
 //input =1
  function asyncFunc1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Function 1 executed");
        resolve();
      }, 1000);
    });
  }
  //input =2
  function asyncFunc2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Function 2 executed");
        resolve();
      }, 1500);
    });
  }
  //input =3
  function asyncFunc3() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(1===1){
        console.log("Function 3 executed");
        resolve()
        }else{
        reject("Function 3 failed");} 
      }, 2000);
    });
  }
  
  