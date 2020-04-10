// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.



//SENDING A .GET REQUEST FOR THE RESPONSE DATA
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response.data.articles)
        
        const data = response.data.articles
        const keys = Object.values(data);

        console.log(keys)

        let javascript = keys[0]
        javascript.forEach(element => {cardMaker(element) 
            console.log(element)
            parentDiv3.appendChild(cardMaker(element))
            
        });

        let bootstrap = keys[1]
        bootstrap.forEach(element => { cardMaker(element)
            console.log(element)
            parentDiv3.appendChild(cardMaker(element))
        })

        let technology = keys[2]
        technology.forEach(element => { cardMaker(element)
            console.log(element)
            parentDiv3.appendChild(cardMaker(element))
        })

        let jquery = keys[3]
        jquery.forEach(element => { cardMaker(element)
            console.log(element)
            parentDiv3.appendChild(cardMaker(element))
        })

        let node = keys[4]
        node.forEach(element => { cardMaker(element)
            console.log(element)
            parentDiv3.appendChild(cardMaker(element))
        })

        
    })
    .catch(error => {
        console.log(error)
    })

//DECLARING THE PARENT DIV
const parentDiv3 = document.querySelector("div.cards-container")

//CREATING A FUNCTION
function cardMaker(object){

// CREATING ELEMENTS
const card = document.createElement('div')
const headLine = document.createElement('div')
const author = document.createElement('div')
const imgContainer = document.createElement('div')
const image = document.createElement('img')
const signature = document.createElement('span')

//APENDING CHILDREN
card.appendChild(headLine)
card.appendChild(author)
author.appendChild(imgContainer)
imgContainer.appendChild(image)
author.appendChild(signature)

//ADDING CLASSES
card.classList.add('card')
headLine.classList.add('headLine')
author.classList.add('author')
imgContainer.classList.add('img-container')

//TEXT CONTENT
headLine.textContent = object.headline
signature.textContent = "By " + object.authorName

//IMAGE SOURCES(IF APPLICABLE)
image.src = object.authorPhoto

return card
}