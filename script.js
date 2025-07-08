/*  Coding Steps:

Create a CRD application (CRUD without update) using json-server or another API
Use fetch and async/await to interact with the API
Use a form to create/post new entities
Build a way for users to delete entities
Include a way to get entities from the API and display them
You do NOT need update, but you can add it if you'd like
Use Bootstrap and/or CSS to style your project

*/

 

// Connection Test... 

console.log('Testing  1...2...3..')

// Fetch Promises...

console.log(fetch('https://api.disneyapi.dev/character'))
console.log('Promise completed')
// Connection.. NO Json 


fetch('https://api.disneyapi.dev/character')
	.then(response => console.log(response))
	

// Connection.. with () Json  (completed below.)
/*
fetch('https://api.disneyapi.dev/character')
	.then(response => response.json())
	.then(data => console.log(data))
*/

// Connetion  with Error  

fetch('https://api.disneyapi.dev/character')
	.then(res => {
		if(res.ok) {
			console.log('ITS WORKING!')
		} else {
			console.log('Bad Connection!')
			}
		})
	.catch(error => console.log('ERROR'))
	
// Connection.. with () Json 	

/*


async function fetchMovie() {
    const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${MOVIE_API_KEY}&type=movie&t=Empire+Strikes+Back`)
    const data = await response.json()
    return data
}
*/


fetch('https://api.disneyapi.dev/character')
	.then(response => response.json())
	.then(data => console.log(data))

function renderFilms(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

//MOVIES Button
/*
async function onFetchFilmsClick() {
    const data = await fetchFilms()
    renderFilms(data)
}
*/
fetch('https://api.disneyapi.dev/character') // URL is the API endpoint for your list
  .then((response) => response.json()) // Convert response to JSON
  .then((data) => {
    if (data && Array.isArray(data.data)) {  // Ensure `data.data` is an array
      let characters = data.data; // Access the characters array
      const randomCharacter = characters[Math.floor(Math.random() * characters.length)]; // Select a random character
      console.log(randomCharacter); // Do something with the random character
    } else {
      console.error('Invalid data format or no characters found');
    }
  })
  .catch((error) => {
    console.log(error); // Handle errors
  });

// Renders the movies as a div with the title and the plot
const movieContainer = document.getElementById("movie-container")
function renderFilms(films) {
    movieContainer.innerHTML = `
        <div>
            <img class="img-thumbnail" src="${films.imgURL}"/>
            <h5>${films.name}</h5>
            <p>${films._id}</p>
        </div>
    `
}

// Movies
/*
function work() {
	console.log("Time to Work")
	const report1 = writeReport1("syenergy")
	print(report1, 500)
	const report2 = writeReport2("piviot")
	console.log("Time to Get out of here!")


}

function writeReport(topic) {
	console.log("writing..." + topic + " report" )
	return topic + " report"

}

function print(toPrint, number) {
	for(let i = 0; i < number; i++) {
		console.log(toPrint)
	}
	return "Finshied Printing!" 
}
*/





































