// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

axios.get("https://lambda-times-backend.herokuapp.com/topics")

.then((response) => {
    console.log(response)
    parentDiv1.append(tabMaker(response))
  
      .catch((error) => {
        console.log(error);
      });
  });

// //CREATING AN ARRAY FROM THE OBJECT.DATA.TOPICS
// const topicsArray = object.data.topics;

// //DOING A FOR EACH TO MAKE TOPIC TABS INDIVUALS
// topicsArray.forEach((topic) => {
//     axios
//       .get(`https://lambda-times-backend.herokuapp.com/${topic}`)
//       .then((response) => {
//         parentDiv1.appendChild(tabMaker(response));
//       })
  
  
//       .catch((error) => {
//         console.log(error);
//       });
//   });

//DECLARING THE PARENT DIV IN THE HTML
const parentDiv1 = document.querySelector("div.topics")
console.log(parentDiv1)

//FUNCTION FOR MAKING THE TAB
function tabMaker(object){

//CREATING THE ELEMENTS
const tab = document.createElement("div")

//CREATING CLASSES
tab.classList.add("tab")

//ADDING TEXT CONTENT(IF APPLICABLE)
tab.textContent = object.data.topics

return tab;
}