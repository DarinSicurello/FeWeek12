/***** LEGO *****/

const onFetchLegoClick = async () => {
    const data = await fetchLegoColors()
    renderLegoColors(data)
}

async function fetchLegoColors() {
    const response = await fetch("https://rebrickable.com/api/v3/lego/colors/?page_size=10&key=" + API_KEY)
    const data = await response.json()
    return data.results
}

// Renders the lego colors in spans with the color as the background color
const legoContainer = document.getElementById("lego-container")
function renderLegoColors(data) {
    legoContainer.innerHTML = data.map(color => `
        <span 
            class="text-white p-1 m-1 d-inline-block" 
            style="background-color: #${color.rgb}"
        >
            ${color.name}
        </span>`
    ).join("") 
}




const onFetchPokemonClick = async () => {
    try {
        const pokemon = await fetchPokemon();
        renderPokemon(pokemon);
    } catch (error) {
        console.error('Error fetching pokemon:', error);
    }
}

async function fetchPokemon() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/eevee");
    
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
}

/***** MEALS *****/

async function onFetchMealsClick() {
    try {
        const mealData = await fetchMeals();
        renderMeals(mealData);
    } catch (error) {
        console.error('Error fetching meals:', error);
    }
}

// Fetch meals from the API
async function fetchMeals() {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=American"); // Example for American meals
    if (!response.ok) {
        throw new Error('Failed to fetch meals');
    }

    const data = await response.json();
    return data;  // Returns data in the format: { meals: [{ strMeal, strArea }, ...] }
}

// Renders each meal as a div with the name and the area of the world it's from
const mealsContainer = document.getElementById("meals-container");
function renderMeals(data) {
    mealsContainer.innerHTML = data.meals.map(meal => `
        <div>
            <h5>${meal.strMeal}</h5>
            <p>${meal.strArea}</p>
        </div>
    `).join("");
}