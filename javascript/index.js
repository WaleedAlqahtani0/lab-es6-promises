// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));




// -------------------------------
// LAB Promise me dinner 
// Iteration 1 - using callbacks

// step 1 :
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

  // step 2 :
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;

  // step 3 :
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;

  // step 4 :
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;

  // step 5 :
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;

  // TThe massage :
  getInstruction("mashedPotatoes", 4, () => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>"Mashed potatoes are ready!."</li>`;


          }, (error) => console.log(error));
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));


// -------------------------------
// Iteration 2 - using promises
    
 // same GitHub code
  obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`

    return obtainInstruction('steak',1)
  })


  // step 1 :
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`})
  .then(() => obtainInstruction('steak', 2))

  // step 2 :
  .then( (step2) => { 
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`})
  .then(() => obtainInstruction('steak', 3))

  // step 3 :
  .then( (step3) => { 
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`})
  .then(() => obtainInstruction('steak', 4))

  // step 4 :
  .then( (step4) => { 
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`})
  .then(() => obtainInstruction('steak', 5))

  // step 5 :
  .then( (step5) => { 
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`}) 
  .then(() => obtainInstruction('steak', 6))

  // step 6 :
  .then( (step6) => { 
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`}) 
  .then(() => obtainInstruction('steak', 7))
   
  // step 7 :
  .then( (step7) => { 
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`})
  .then(() => obtainInstruction('steak', 7))

  // massage :
  .then( () => { 
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`})

    


// -------------------------------
  // Iteration 3 using async/await

  // same in the portal example
    async function makeBroccoli() {
      try{
      const step0 = await obtainInstruction("broccoli", 0);
      document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;

      const step1 = await obtainInstruction("broccoli", 1);
      document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;

      const step2 = await obtainInstruction("broccoli", 2);
      document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;

      const step3 = await obtainInstruction("broccoli", 3);
      document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;

      const step4 = await obtainInstruction("broccoli", 4);
      document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;

      const step5 = await obtainInstruction("broccoli", 5);
      document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;

      const step6 = await obtainInstruction("broccoli", 6);
      document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
      
      // the massage
      document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
      } catch(err){
        console.log(err);
      }
    } 
  

 // call method
    makeBroccoli();


// -------------------------------
// Bonus 1 : dispaly images:
document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
document.querySelector("#steakImg").removeAttribute("hidden");
document.querySelector("#broccoliImg").removeAttribute("hidden");


// -------------------------------
// Bonus 2 - Promise all

// same  Iteration2 
const step0 = obtainInstruction("brusselsSprouts", 0);
const step1 = obtainInstruction("brusselsSprouts", 1);
const step2 = obtainInstruction("brusselsSprouts", 2);
const step3 = obtainInstruction("brusselsSprouts", 3);
const step4 = obtainInstruction("brusselsSprouts", 4);
const step5 = obtainInstruction("brusselsSprouts", 5);
const step6 = obtainInstruction("brusselsSprouts", 6);
const step7 = obtainInstruction("brusselsSprouts", 7);

Promise.all([step0, step1, step2, step3, step4, step5, step6,step7])
  .then((values) => {
    values.forEach((value) => {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${value}</li>`;
    });
    // massage
    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
    // show the image for brusselsSprouts
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  })

  // finished the code LAB / Homework JavaScript  
