/***** MOVIES  Generator*****/

/* Button Function onClick jusing await */
async function onFetchMovieClick() {
  const data = await fetchMovie();
  renderMovie(data);
}

/* async Function calling fetchMovie await using a reload to prevent Undefined */
async function fetchMovie(reload = 3) {
    /* Cont Movie titles Due to CHROME / Browser secuirty I couldnt use an external text file. */
const movieTitles = [
  "The Matrix",
  "Inception",
  "The Godfather",
  "Titanic",
  "Back to the Future",
  "The Dark Knight",
  "Pulp Fiction",
  "Forrest Gump",
  "Star Wars",
  "Gladiator",
  "The Dark Empire",
  "A Frozen Legend",
  "Crimson War",
  "Guardian",
  "Lost Quest",
  "Silent Storm",
  "The Burning Dragon",
  "Final Promise",
  "Hidden Kingdom",
  "The Last Guardian",
  "Furious Fire",
  "Shadow Legacy",
  "The Secret Code",
  "Golden Throne",
  "Invisible Vengeance",
  "The Frozen Night",
  "Deadly Journey",
  "Broken Truth",
  "The Wild War",
  "Forbidden Empire",
  "The Last Storm",
  "A Silent Quest",
  "Crimson Guardian",
  "Lost Legacy",
  "The Burning War",
  "Hidden Throne",
  "Frozen Legend",
  "The Final Dragon",
  "Secret Vengeance",
  "The Wild Empire",
  "Invisible Promise",
  "Deadly Shadow",
  "The Golden Code",
  "Broken War",
  "The Furious Night",
  "Lost Dragon",
  "Silent Empire",
  "The Hidden War",
  "Final Guardian",
  "Crimson Journey",
  "The Burning Legend",
  "Shadow Empire",
  "The Frozen War",
  "Invisible Storm",
  "The Secret War",
  "Wild Legacy",
  "The Last Promise",
  "A Broken Quest",
  "Deadly Throne",
  "The Furious Empire",
  "The Grand Budapest Hotel",
  "Django Unchained",
  "The Wolf of Wall Street",
  "Mad Max: Fury Road",
  "Black Panther",
  "Coco",
  "Frozen",
  "Deadpool",
  "Guardians of the Galaxy",
  "Logan",
  "Spider-Man: Into the Spider-Verse",
  "Joker",
  "Avengers: Endgame",
  "Parasite",
  "1917",
  "Jojo Rabbit",
  "The Irishman",
  "Blade Runner 2049",
  "Her",
  "The Social Network",
  "The Hateful Eight",
  "Inglourious Basterds",
  "The Big Lebowski",
  "No Country for Old Men",
  "Casino Royale",
  "The Curious Case of Benjamin Button",
  "Eternal Sunshine of the Spotless Mind",
  "A Beautiful Mind",
  "Catch Me If You Can",
  "The Martian",
  "Edge of Tomorrow",
  "Gone Girl",
  "The Revenant",
  "Birdman",
  "Inside Out",
  "The Lego Movie",
  "How to Train Your Dragon",
  "Zootopia",
  "The Incredibles",
  "Finding Nemo",
  "Monsters, Inc.",
  "Shrek",
  "Harry Potter and the Sorcerer's Stone",
  "Harry Potter and the Deathly Hallows: Part 2",
  "The Hunger Games",
  "Twilight",
  "The Twilight Saga: New Moon",
  "The Maze Runner",
  "Pirates of the Caribbean: The Curse of the Black Pearl",
  "Iron Man",
  "Captain America: The Winter Soldier",
  "Thor: Ragnarok",
  "Doctor Strange",
  "Deadpool 2",
  "Transformers",
  "Wonder Woman",
  "Aquaman",
  "Justice League",
  "King Kong",
  "The Jungle Book",
  "Aladdin",
  "Beauty and the Beast",
  "Maleficent",
  "Frozen II"
];
/* Created a simple loop for randomTitle( Movie Titles) in the API Syntex PArameters "t". */
  for (let i = 0; i < reload; i++) {
    const randomIndex = Math.floor(Math.random() * movieTitles.length);
    const randomTitle = encodeURIComponent(movieTitles[randomIndex]);

    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${MOVIE_API_KEY}&type=movie&t=${randomTitle}`);
      const data = await response.json();

      if (data && data.Response !== "False") {
        return data; // valid movie found
      }
    } catch (error) {
      console.warn(`Error fetching movie: ${error}`);
    }
  }

  // This prevents the reload of undefined or unlisted API JSON data. 
  return null;
}
// Renders the movies as a HTML div with the title image and details
const movieContainer = document.getElementById("movie-container");
function renderMovie(movie) {
  movieContainer.innerHTML = `
    <div>
      <img class="img-thumbnail" src="${movie.Poster}" alt="${movie.Title}" />
      <h5>${movie.Title}</h5>
      <p>${movie.Plot}</p>
    </div>
  `;
}