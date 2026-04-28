// What is async?
//  async is used before a function
// It makes the function always return a Promise
// await is used inside async function only
// It waits for a Promise to finish

function boilwater() {
  return Promise.resolve("boiling water");
}

function addteapowder() {
  return Promise.resolve("adding tea powder");
}

function servethetea() {
  return Promise.resolve("serve the tea");
}

async function executestep() {
    try{
        let step1= await boilwater();
        console.log(step1);
         let step2= await addteapowder();
        console.log(step2);
         let step3= await servethetea();
        console.log(step3);
    }
    catch(error){
        console.log(error)
    }
}
executestep();

// await example 
function getData() {
  return new Promise((resolve) => {
    resolve("Data received");
  });
}

async function showData() {
  let result = await getData(); // wait here
  console.log(result);
}

showData();