// //CHAPTER#1-->VARIABLES:


// /*
//     Variables:
//     let(can be updated), const(can't update), var(can be re-initialize and update)
// */

// //Object Declaration, may be let or const
// const student = {
//   name: "dani",
//   cgpa: 3.8,
//   roll_no: 46,
//   isPass: true,
// };
// console.log(student);

// //to update the variables/KEY of objects
// student["cgpa"] = student["cgpa"] + 0.1;
// console.log(student["cgpa"]);

// /*
//     in case of strings:
//     "abcd"+123 = "abcd123"
//     i.e the number will get bound by the string.
// */



// //CHAPTER#2-->OPERATORS & CONDITIONAL STATEMENTS:

// //Operators
// let a = 5;
// let b = 2;

// console.log("a  = ", a, "& b = ", b);
// console.log("a + b = ", a + b);
// console.log("a + b = ", a - b);
// console.log("a + b = ", a * b);
// console.log("a + b = ", a / b);
// console.log("a + b = ", a % b);
// //for calculate exponents, i.e a to the power of b:
// console.log("a + b = ", a ** b);

// /*  equal to == ,
//     equal to and type === ,
// */
// console.log("a == 2", a == b); //false

// /* 
//     when a string contains only a number then javascript convert that string into number just like below 
// */
// a = 5;
// b = "5";
// console.log("a == b", a == b); //true

// /* if we want strict comparison then use === as it will check value as well as type of the variable */
// console.log("a === b ", a === b); //false

// //Logical Operators
// a = 6;
// b = 5;
// let cond1 = a > b; //true
// let cond2 = a < b; //false
// console.log("cond1 && cond2", cond1 && cond2); //fasle
// console.log("cond1 || cond2", cond1 || cond2); //true
// console.log("!(cond1 || cond2)", !(cond1 || cond2)); //false

// //conditional statements -> same as in other languages

// /* 
//     Alert and Prompt:
//     alert gives a pop up msg on the browser while prompt also do so but it also takes input from the user and we can save this input in a variable.
//     Also prompt always return string, even if we enter number in the prompt input, it will first convert into string and then operations are done on it. 
// */
// alert("Hello Dani!");
// let myName = prompt("Hi! Tell me your name please: ");
// console.log(myName);




// //CHAPTER#3-->LOOPS & STRINGS:

// /*
//     Loops same as in other languages except the "for-of" and "for-in" loops.
//     for-of loops is used for strings and arrays.
//     for-in loops is used for object's keys iteration and also sometimes in arrays,
// */
// //for-of loop:
// let Myname = "betaKazmi";
// for (let i of Myname) {
//   console.log(i); //print the ith
//   //member of the string
// }
// //for-in loop:
// for (const key in student) {
//   console.log(key); //print all keys of the student object, i.e cgpa, name,isPass and roll_no
// }

// //Strings--> Immutable in Javascript
// //Template Literall is a special type of string which is created by the single curved quotation mark.
// let specialstring = `this is template literal`;
// console.log(specialstring);

// //use of template literal->we can write string and variables name in a single string:
// specialstring = `The Student got ${student.cgpa} and his/her roll number is ${student.roll_no}.`;
// console.log(specialstring);

// //practice question:
// let username = prompt("Enter your name, plz: ");
// let newusername = "@" + username + username.length;
// console.log(newusername);




// //CHAPTER#4-->ARRAYS:

// //Arrays--> mutable in javascript
// //we can convert the array to string
// let myarr = ["dani", "momi", "hyder", "kazmi", "shahG"];
// console.log(myarr.toString());

// /*
//     unshift method adds an element at front of array and shift method delete the element fron the front.
//     splice method change the array(it can add, remove and replace), slice method don't.
//     splice method syntx arr.splice(startIndex, delCount(i.e howManyElements to be delete after the startIndex ), newEelement)
// */
// let arr = [1, 2, 3, 4, 5, 6, 7];
// //Add Element after 2 index
// arr.splice(2,0,101); //nothing deleted
// console.log(arr.toString());
// //Delete Element 
// arr.splice(3,1); //nothing added
// console.log(arr.toString());
// //Replace Element
// arr.splice(3,1,7); //after index 3 delete one element and replace its value by the newly added element
// console.log(arr.toString());




// //CHAPTER#5-->FUNCTIONS & METHODS:

// //FUNCTIONS:

// //simple function example:
// function sum(x, y){
//     console.log("This is normal sum Function = ", x + y);
// }
// sum(12, 14);

// //Arrow Functions:
// let Arrowsum = (a, b) =>{
//     console.log("This is Arrow sum Function = ", a + b);
// }
// Arrowsum(5, 12);
// //so when we print Arrowsum it will give the whole function.
// console.log(Arrowsum);
// /*
//     in javascript functions can be passed as parameters or arguments to another function, these types of functions are called Callback Functions.
// */


// /*
//     forEach Method in Javascript->Only for Arrays
//     syntx is arr.forEach(callBackFunction)
//     here callBackFunction is a function which is executed for each index of the array.
// */
// arr = [1, 2, 3, 4 ,5];
// //in simple function form
// arr.forEach(function printVal(val){
//     console.log("This is forEach Method in arrow funtion and at index: ", val);
// });

// //in arrow function form
// arr.forEach((val)=>{ //here val is the parameter of function and also it act as a iterator of the array
//     console.log("This is a forEach Method in simple function and index is: ", val);
// });

// /*
//     now if callBackFunction in forEach has 3 parameters, !st parameter points to array values at each index,, 2nd parameter points to the index and 3rd parameter points to the whole arr.
// */
// arr = ["Islamabad", "Karachi", "DI.Khan", "Peshawar", "Lahore"];
// arr.forEach((val,idx,arr)=>{
//     console.log("This is the updated forEach with cities: ", val.toUpperCase(), idx, arr);
// })

// /*
//     Higher Order Functions: which take functions as their paramters.
//     i.e forEach Method is a higher Order Function
// */

// /*
//     Map method is also used for arrays and it has same function and same syntx as that of the forEach method but instead map function returns a new array unlike the forEach function
// */

// /*
//     filter: same syntx as that of the forEach and map but its function is different, it creates a new array of elements     that give true for a condition/filter.
// */
// arr = [1, 2, 3, 4, 5];
// let newArr = arr.filter((val)=>{
//     return val % 2 === 0; //condition for even number
// });

// /*
//     reduce: same syntx as forEach, map and filter, but in reduce method callBackFunction can take 2 parameters, 1st is previous value and the 2nd parameter is for current value. And at last return the output as a single value, not the whole array.
// */
// let output = arr.reduce((result, current)=>{
//     return result + current;
// });
// console.log(output);
// /*
//     functioning of reduc-> at first first element is stored in result and second element is stored in current and the result is stored in result variable, then in next step result has the value of previous step calculation and the current points to the next element in the array.
// */




// //CHAPTER#6(PART-1)--> DOM:

// //Document is a document object which has all the info that is present in our HTML file.

// //get document elements by id:
// let myHeading1Info = document.getElementById("heading1"); //h1
// console.dir(myHeading1Info); //to print all info about the document of heading.

// //get document elements by class:
// let myClassInfo = document.getElementsByClassName("parahs"); //p
// console.dir(myClassInfo);

// //get document elements by tags:
// let myTagInfo = document.getElementsByTagName("p");
// console.dir(myTagInfo);

// /*
//     another method to access document elements is -> query selector, it can return any of the above three types i.e tags, class or id.
// */
// let docElement = document.querySelector("p"); //it will return 1st element i.e only first paragraph
// console.dir(docElement);
// //to get all Elements:
// docElement = document.querySelectorAll("p"); //it will return all paragraphs
// console.dir(docElement);

// //to access the innerText of any element such as div or paragraph:
// docElement = document.querySelector("div").innerText
// console.dir(docElement);

// //to access the innerHTML of any element such as div or paragraph:
// docElement = document.querySelector("div").innerHTML
// console.dir(docElement);

// /*
//     difference between innerText and innerHTML is that, in innerText only the text of the element appears but in innerHTmL the HTML tags are also appeared along with text.
// */




// //CHAPTER#6(PART-2)-->DOM:

// /*
//     Now to add some additional things in the elements such as div, paragraphs etc we first create that new thing and then look where we have to add it i.e at the end or at front or before something or next to something etc.
// */
// //lets add a new button at the last of the div
// //first create btn
// let newbtn = document.createElement("button");
// newbtn.innerText = "JS button";
// //now access the div
// let mydiv = document.querySelector("div");
// //now add at the button at the end of div
// mydiv.append(newbtn);

// /*
//     now if we want to add at the front of div we use "prepend" and if we want to add before the div then we use "before" and if we want button after the div then we use "after"
// */





// //CHAPTER#7 --> EVENTS:

// //access the button
// let btn1 = document.querySelector("#btn1");
// //now apply event on btn1
// btn1.onclick = ()=>{
//     console.log("button btn1 is pressed");
// }

// //access the div and apply some event on it
// let box1 = document.querySelector(".divclass");
// box1.onmouseover = ()=>{
//     console.log("Hi! I am div, you are in my boundaries :/");
// }

// //to check info about event object:
// let btn2 = document.querySelector("#btn2");
// btn2.ondblclick = (evtobj) =>{
//     console.log("The info about event object is given below: \n", evtobj);//to print all info about event obj
//     console.log("The type of event object is: \n", evtobj.type);//to tell which event has occured
//     console.log("The target of event is: \n", evtobj.target);//to tell the target to event

// }

// /* 
//     another and efficient way of events handling is by using eventlistner function in which we pass the event we want to execute and the callback function which is happened when event is executed, in parameters.
//         Through addEventListner we can execute same event multiple times on the same element/node.
// */
// //first event by addEventListner
// let parahs = document.querySelector(".parahs");
// parahs.addEventListener("onmouseover", ()=>{
//     console.log("You hovered on the paragraph, this message is sent from addEventListner method!");
// });
// //second event by addEventListner
// let temp_event =  ()=>{
//     console.log("You are still hovering on the paragraph, this message is sent from addEventListner method!");
// }
// parahs.addEventListener("onmouseover", temp_event);

// /*
//     To remove an event first store the callback function in a variable and then apply remove function on that variable, so now i am giving the above callback function a variable and then i will call it in addEventListner method and then i will remove it.
// */
// parahs.removeEventListener("onmousever",temp_event);



// //Practice Question-> Change mode
// let modebtn = document.querySelector("#mode");

// let changeMode = ()=>{
//     let body = document.querySelector("body");
//     let currColor = getComputedStyle(body).backgroundColor;//getcomputedstyle is used to get any style attribute of the node...Note that it will return the RGB value of the bg color so beware in using it.

//     if(currColor === "rgb(255, 255, 255)"){
//         body.style.backgroundColor = "black";
//     }else{
//         body.style.backgroundColor = "white";
//     }
// };
// modebtn.addEventListener("click", changeMode);
// //----------------------------------------------------//



//Tic Tac Toe-----------------------------------------------//

// let boxes = document.querySelectorAll(".box");
// let resetBtn = document.querySelector("#reset-btn");
// let newBtn = document.querySelector("#new-btn");
// let msgContainer = document.querySelector(".msg-container");
// let msg = document.querySelector("#msg");

// let turnO = true; //to track turn of PlayerX and PlayerY

// //store winPatterns
// const winPatterns = [
//     [0, 1, 2],
//     [0, 3, 6],
//     [0, 4, 8],
//     [1, 4, 7],
//     [2, 5, 8],
//     [2, 4, 6],
//     [3, 4, 5],
//     [6, 7, 8],
// ];

// //event listner by iterating on every box
// boxes.forEach((box)=>{
//     box.addEventListener("click", ()=>{
//         if(turnO){ //PlayerO
//             box.innerText = "O";
//             turnO = false;
//         }else{ //PlayerX
//             box.innerText = "X";
//             turnO = true;
//         }
//         //disable the button once it is marked
//         box.disabled = true;

//         checkWinner();
//     });
    
// });

// //check for the winner
// const checkWinner = ()=>{
//     for (let pattern of winPatterns) {
//         //check all 3 positions at each index
//         let pos1Val = boxes[pattern[0]].innerText;
//         let pos2Val = boxes[pattern[1]].innerText;
//         let pos3Val = boxes[pattern[2]].innerText;

//         if(pos1Val !== "" && pos2Val !== "" && pos3Val !== ""){
//             if(pos1Val === pos2Val && pos2Val === pos3Val){
//                 console.log("We have a winner" , pos1Val);
//                 showWinner(pos1Val);
//             }
//         }
//     }
// }

// //disable boxes asap the 1st winner comes
// const disableBoxes = ()=>{
//     for (let box of boxes) {
//         box.disabled = true;
//     }
// };

// //show winner
// const showWinner = (winner)=>{
//     msg.innerText = `Congratulations, you are unbeatable, The Winner is Player ${winner}`;
//     msgContainer.classList.remove("hide");
//     disableBoxes();
// };

// //enable boxes to restart
// const enableBoxes = ()=>{
//     for (let box of boxes) {
//         box.disabled = false;
//         box.innerText = ""
//     }
// };

// //reset Game
// const resetGame = ()=>{
//     turnO = true;
//     enableBoxes();
//     msgContainer.classList.add("hide")
// }

// //when to restart
// newBtn.addEventListener("click", resetGame);
// resetBtn.addEventListener("click", resetGame);

//----------------------------------------------------------//






//<!--Rock Paper Scissor------------------------------------>

// let userScore = 0;
// let compScore = 0;

// let choices = document.querySelectorAll(".choice");
// let msg = document.querySelector("#msg");
// let userScorePara = document.querySelector("#user-score");
// let compScorePara = document.querySelector("#comp-score");

// //generate computer choice
// const genCompChoice = ()=>{
//     const options = ["rock", "paper", "scissors"];
// /*
//     math.random generate number between 0-1 so if we want to generate number from 0-2 then multiply the math.random by 3 and to remove decial values use math.floor funtion.
// */
//     const randIdx = Math.floor(Math.random() * 3);
//     return options[randIdx];
// };

// //get the choice of user
// choices.forEach((choice)=>{
//     choice.addEventListener("click", ()=>{
//         const userChoice = choice.getAttribute("id");
//         playGame(userChoice);
//     });
// });

// //game function: to unite computer and user choice i.e main game
// const playGame = (userChoice)=>{
//     const compChoice = genCompChoice();
//     if(userChoice === compChoice){
//         drawGame();
//     }else{
//         let userWin = true;
        
//         if(userChoice === "rock"){
//             userWin = compChoice === "paper"? false : true;
//         }else if(userChoice === "paper"){
//             userWin = compChoice === "scissors"? false : true;
//         }else{
//             userWin = compChoice === "rock"? false : true;
//         }
//         showWinner(userWin, userChoice, compChoice);
//     }
// };

// //draw condition
// const drawGame = ()=>{
//     msg.innerText = "Game Draw";
//     msg.style.backgroundColor = "#081b31";
// };

// //who is winner
// const showWinner = (userWin, userChoice, compChoice)=>{
//     if(userWin){
//         userScore++;
//         userScorePara.innerText = userScore;
//         msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
//         msg.style.backgroundColor = "green";
//     }else{
//         compScore++;
//         compScorePara.innerText = compScore;
//         msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
//         msg.style.backgroundColor = "red";
//     }
// };


//----------------------------------------------------------//


//CHAPTER#8--> CLASSES & OBJECTS:

// //Object Declaration
// const employee = {
//     fullName : "Hyder",
//     //declare method
//     calTax : function() {
//         console.log("Tax rate is 10%");
//     },
// };

// //Every obj has a special property called "prototype", this prototype is itself a object, and it contains many functions.

// //2nd obj
// const darain = {
//     salary : 300000,
//     //second way of method declaration
//     calTax() {
//         console.log("tax rate for you is 15%");
//     },
// };

// /*
//     for using "employee" obj function in "darain" obj, we need to include employee obj as a prototype in the darain obj
// */
// darain.__proto__ = employee;

// //Classes
// class Toyota{
//     //forming constructor
//     constructor(brand){
//         console.log("Establishing a new brand");
//         this.brand = brand;
//     }
//     constructor(brand, mileage){
//         console.log("Establishing a new brand");
//         this.brand = brand;
//         this.mileage = mileage;
//     }

//     start(){
//         console.log("Getting started");
//     }

//     stop(){
//         console.log("Stopped Successfully!");
//     }
// }
// //now make obj of this class
// let LandCrusier = new Toyota(); //with default constructor
// let Fortuner = new Toyota("Fortuner"); //with parameterized constructor
// let Parado = new Toyota("Parado", 14); //constructor overloading

// //for inheritance use "extends" keyword
// class Person{
//     constructor(name){
//         this.name = name;
//     }
//     eat(){
//         console.log("Don't forget to eat");
//     }

//     sleep(){
//         console.log("Time to sleep");
//     }

//     work(){
//         console.log("Look busy do nothing!");
//     }
// }

// class Engineer extends Person{
//     constructor(name){
//         console.log("I am Good Person");
//         super(name); //invoke parent constructor
//         console.log("I am a CS Engineer");
//     }
//     work(){ //method overriding
//         super.eat(); //first calling parent function(optional)
//         console.log("solve my problem!");
//     }
// }

// let myself = new Engineer();

// /*
//     If we want to access the Parent Function or method or constructor and not the child's one then we use the keyword "super". 
//         Also "IF WE WANT TO CALL THE CHILD CLASS CONSTRUCTOR THEN ITS NECESSARY FOR US TO CALL THE PARENT CONSTRUCTOR FIRST inside the child constructor or before calling "this" in child constructor.
// */






// //CHAPTER#9-->CALLBACKS,PROMISES & ASYNC AWAIT:

// /*
//     Asynchronous Coding:
//     The concept is that don't keep the important instruction on waiting for the instruction above them.
//     So we can choose that which pat of code is executed when. To do so we use "setTimeout" function which execute the part of code (taken as a parameter) after our set timer of millisec.

//     The function taken by the stTimeout is obv CallBack Function
// */
// console.log("one"); //executed as normal
// console.log("two"); //executed as normal
// setTimeout(()=>{
//     console.log("five");
// }, 5000); //this function is execute after 5sec
// console.log("three"); //executed before setTimeout
// console.log("four"); //executed before setTimeout


// /*
//     CALLBACK HELL:
//     Suppose we make a getData function which simply print the number or data id but we want that 1st data output should be appeared in 2s then next data appear in other 2s and then the 3rd data appear in other 2s, so we can do this by callBack function.
// */


// function getdata(dataID){
//     console.log("This is normal function with data: ", dataID);
// }

// getdata(1); //this is the simple print


// /*
//     for 2s delay in 1st data and then 2 sec dealy in 2nd data,
//     pass the current data id and also the next function to be executed after 2s 
// */
// function getData(dataId, getNextData){
//     //2s
//     setTimeout(()=>{
//         console.log("data: ", dataId);

//         //don't end the timeout here, setTimeout for next fumction, if any

//         if (getNextData){
//             getNextData();
//         }
//     }, 2000);
// }

// /*
//     function calling: pass the data to be print and then also pass the next function to be executed "BUT N ARROW FUNCTION FORM"
// */
// getData(1, ()=>{
//     console.log("Getting data 2...");
//     getData(2, ()=>{
//         console.log("Getting data 3...");
//         getData(3);
//     });
// }); //this is called "CallBack HELL"!


// //SOLUTION TO CALLBACK HELL is PROMISES:
// let promise = new Promise((resolve, reject)=>{
//     console.log("U r using promises");
//     resolved("Successful Operation!");
//     //reject("Some error occured :( ");

// });

// //EXAMPLE OF PROMISE:
// function getData(Id, nextData){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data: ",Id);
//             resolve("success!");
//             if(nextData){
//                 nextData();
//             }
//         }, 5000);
//     });
// }

// //How to use Promise?
// const getPromise = ()=>{
//     return new Promise((resolve, reject)=>{
//         console.log("I am a Promise");
//         //resolve("Success! :) ");
//         reject("Request rejected");
//     });
// };

// let promise = getPromise();
// //if promise succeeded the do "then" part
// promise.then((res) =>{ //res is the msg we passed at resolve()
//     console.log("promise fulfilled...", res);
// });

// //if promise is not fulfilled
// promise.catch((err) =>{ //err is the msg we passed at reject()
//     console.log("rejected", err);
// });


// //Promises Chaining: Solution of CALLBACK HELL!

// function asynFunction1(){
//     return new promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data#1");
//             resolve("success 1!!!");
//         }, 4000);
//     });
// }

// function asynFunction2(){
//     return new promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data#2");
//             resolve("success 2!!!");
//         }, 4000);
//     });
// }

// // now calling one function then wait 2s and then other function
// console.log("fetching data 1...");
// let promise1 = asynFunction1();
// promise1.then((res)=>{
//     console.log("fetching data 2...");
//     let promise2 = asynFunction2();
//     promise2.then((res)=>{});
// });



// /*
//     ASYNC - AWAIT --> to further simplify ie overcome promises complex syntx.
//     ASYNC function returns a promise by default.
//     AWAIT function pauses the execution of surrounding async functions until the promise is settled.
//     But AWAIT is only used in the ASYNC function.
// */
// async function hello(){
//     console.log("hello!");
// } //just an example of async


// function fetchData(id){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data: ", id);
//             resolve("success!");
//         }, 4000);
//     });
// }
// //Async-await
// async function fetchAllData(){
//     console.log("fetching data 1...");
//     await fetchData(1); //fetch data after 2s
//     console.log("fetching data 2...");
//     await fetchData(2); //fetch data 2s after 1st msg recieved
//     console.log("fetching data 3...");
//     await fetchData(3); //fetch data 2s after 2nd msg recieved
// }





// //CHAPTER#10-->Fetch API:

// //first store the url of any api
// const URL = "https://cat-fact.herokuapp.com/facts";

// //getting response from any api is an asynchronus work so we are using async-await
// const getFacts = async ()=>{
//     console.log("getting data....");
//     let response = await fetch(URL); //fetch method to access data from api
//     console.log(response); //respone comes in JSON  format

//     //now convert the data from JSON to JS format
//     let data = await response.json(); //this will consvert response data from json to js format.

//     console.log(data);
// }






// //Crrency Converter-----------------------------------------//

// /*
//     we are using currency api to convert the currency, search for a site then in the read me there will be link which we wil use to convert the currency and how to use the link is informed to us in the read too, so lets have fun...
// */
// const BASE_URL =
//   "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

// const dropdowns = document.querySelectorAll(".dropdown select");
// const btn = document.querySelector("form button");
// const fromCurr = document.querySelector(".from select");
// const toCurr = document.querySelector(".to select");
// const msg = document.querySelector(".msg");

// for (let select of dropdowns) {
//   for (currCode in countryList) {
//     let newOption = document.createElement("option");
//     newOption.innerText = currCode;
//     newOption.value = currCode;
//     if (select.name === "from" && currCode === "USD") {
//       newOption.selected = "selected";
//     } else if (select.name === "to" && currCode === "INR") {
//       newOption.selected = "selected";
//     }
//     select.append(newOption);
//   }

//   select.addEventListener("change", (evt) => {
//     updateFlag(evt.target);
//   });
// }

// const updateExchangeRate = async () => {
//   let amount = document.querySelector(".amount input");
//   let amtVal = amount.value;
//   if (amtVal === "" || amtVal < 1) {
//     amtVal = 1;
//     amount.value = "1";
//   }
//   const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
//   let response = await fetch(URL);
//   let data = await response.json();
//   let rate = data[toCurr.value.toLowerCase()];

//   let finalAmount = amtVal * rate;
//   msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
// };

// const updateFlag = (element) => {
//   let currCode = element.value;
//   let countryCode = countryList[currCode];
//   let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//   let img = element.parentElement.querySelector("img");
//   img.src = newSrc;
// };

// btn.addEventListener("click", (evt) => {
//   evt.preventDefault();
//   updateExchangeRate();
// });

// window.addEventListener("load", () => {
//   updateExchangeRate();
// });



// //SOME ERRORS are occuring
// //----------------------------------------------------------//

