// selecting and storing all requied field to a variable
const userName = document.querySelector(".userName");
const userspouce = document.querySelector(".spouce-name");
const userAge = document.querySelector(".age");
const spouceAge = document.querySelector(".spouce-age");
const continueBtn = document.querySelector(".cnt");
const userform = document.querySelector(".user-form")
const currentUser = document.querySelector(".current-user");

// checking to see  if required fields have being selected successfully
console.log(userName);
console.log(userAge);
console.log(continueBtn);



// adding a click event to the continue  button to run all checks if clicked
continueBtn.addEventListener("click", () => {
  // doing all checks at the current level

  // eaquating userAage.value to age
  let age = userAge.value;

  if (userName.value == "") {
    // checking if user name has being filled
    alert("please fill in ur name");
  } else if (userAge.value == "") {
    // checking if user age has being filled
    alert("please input in ur age");
  } else if (age <= "18" || age >= "60") {
    alert("please your not of standard Age ");
  }
  // checking if the current age is not equal to 18 or is greater than 60

  else if (userName.value.length <= 3) {
    alert("please name does meet minimum length ");
  }
  // checking if the current Name meet minimum length

  else {
    alert("your good to go");
    // giving feeback if all is good


    //we calling or invoking running the function
    message();


  }





});

//insialinsing variables to global scope

let overlay = document.querySelector(".overlay")
let massage = document.querySelector(".massage");
let landing = document.querySelector(".landing");

console.log(landing)

//declaring a function using the function keyword method
function message() {

  landing.classList.add("hiden")

  //using js to add the class of show to the overlay

  // overlay.classList.add("show");
  //using js to add the class of active to the message to make it visible

  //taking the current name from username input and setting it as the current value of the current user-span
  currentUser.innerText = userName.value;
  massage.classList.add("active");
  //



  console.log(overlay);
  console.log(massage);

}



//asinging the accept to the variable accept
const accept = document.querySelector(".acept")

//making sure the items selected reflect the desired results 

console.log(accept);
console.log(userform);

//adding a click event to the accept button

accept.addEventListener("click", () => {

  massage.classList.remove("active");
  overlay.classList.remove("show");
  userform.classList.add("grid");

});


//preventing the form from constantly refreshing
userform.addEventListener("submit", (e) => {
  e.preventDefault();

});








//selecting and storing all genes in a given variable
const groomGens = document.querySelectorAll(".groom-gen");
console.log(groomGens)


const spouceGens = document.querySelectorAll(".spouce-gene");
console.log(spouceGens)

//pick a single gene from the series 
groomGens.forEach((groomGen) => {

  //after selecting the gene it add an event of click to it
  groomGen.addEventListener("click", () => {



    //taking selected gen and equating it to the global currentGgen variables
    currentGgen = `groom is ${groomGen.value}`;

    //it displays the value of the clicked gene to the console
    // console.log(`groom is ${groomGen.value}`);
  });
});
//pick a single genfrom spouce series of genes
spouceGens.forEach((spouceGen) => {

  //after selecting the gen it add an event of click to it
  spouceGen.addEventListener("click", () => {

    //taking selected spouce gen and equating it to the global currentSP_Gen variables
    currentSp_Gen = `spouce is ${spouceGen.value}`;

    // console.log(`spouce is ${spouceGen.value}`);
  });
});


// const spouceName = document.querySelector(".spouce-name");
// console.log(spouceName);


// const spouceAge = document.querySelector(".spouce-age");
// console.log(spouceAge);


const matcher = document.querySelector(".check-compact");

matcher.addEventListener("click", () => {
  let spouceage = spouceAge.value;

  if (userspouce.value == "") {
    // checking if user name has being filled
    alert("please fill in ur name");
  }
  else if (spouceage.value == "") {
    // checking if user age has being filled
    alert("please input in ur spouce  age");
  }
  else if (spouceage <= "18" || spouceage >= "60" || spouceage.length <= 1) {
    alert("please your spouce not of standard Age ");
    // checking if the current age is not equal to 18 or is greater than 60
  }

  else if (userspouce.value.length <= 3) {
    alert("please name does meet minimum length ");
    // checking if the current Name meet minimum length
  }

  else {
    alert("your good to go");
    // giving feeback if all is good
    console.log(currentGgen);
    console.log(currentSp_Gen);
    products();

  }

});






function products() {
  if (
    (currentGgen == AA && currentSp_Gen == AS) ||
    (currentGgen == AA && currentSp_Gen == SS) ||
    (currentGgen == AA && currentSp_Gen == AC) ||
    (currentGgen == AA && currentSp_Gen == AA)
  ) {
    alert("wow congrats opt1");
  }
  else if (
    (currentsp_gen == AA && currentGgen == AS) ||
    (currentsp_gen == AA && currentGgen == SS) ||
    (currentsp_gen == AA && currentGgen == AC) ||
    (currentsp_gen == AA && currentGgen == AA)

  ) {
    alert("wow congrats opt3");

  }

  else if (currentGgen == SS && currentSp_Gen == AC) {
    alert("wow congrats opt4");

  }

  else if (currentGgen == AC && currentSp_Gen == AA) {
    alert("wow congrats pot4");
  }

  else {
    alert("aww sorry the results were not positive your are adviced to restraine last opt")
  }

}


let currentGroom;
let currentGAge;
let currentGgen;


let currentSpouce;
let currentSp_Age;
let currentSp_Gen;

















const spouce = document.querySelector(".spouce-Type");













// //the backticks method of string conversion allows for inclusion of variables
// console.log(`the result of 1+2 is = ${1+2}`)

// //this quotes method converts everthing to string
// console.log("the result of 1+2 is = ${1+2}")
