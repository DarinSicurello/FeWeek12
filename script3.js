const movieContainer = document.getElementById("movie-container");

function renderCharacter(character) {
  if (!character || !character.imgURL || !character.name) {
    movieContainer.innerHTML = "<p>No valid character data available.</p>";
    return;
  }

  const attractionsList = character.parkAttractions.length
    ? `<p><strong>Park Attractions:</strong> ${character.parkAttractions.join(', ')}</p>`
    : `<p><strong>Park Attractions:</strong> None listed</p>`;

  const videoGamesList = character.videoGames.length
    ? `<p><strong>Video Games:</strong> ${character.videoGames.join(', ')}</p>`
    : `<p><strong>Video Games:</strong> None listed</p>`;

  movieContainer.innerHTML = `
    <div>
       <img 
      class="img-thumbnail"
      src="${character.imgURL}" 
      alt="${character.name}" 
      style="max-width: 250px; width: 100%; height: auto;"
      onerror="this.onerror=null;this.src='https://via.placeholder.com/500x300?text=Image+Not+Found';"
    />
      <h5>${character.name}</h5>
      ${attractionsList}
      ${videoGamesList}
    </div>
  `;
}

async function fetchRandomCharacter() {
  try {
    const response = await fetch('https://api.disneyapi.dev/character');
    const json = await response.json();

    if (!json || !Array.isArray(json.data)) {
      console.error('Invalid API data format.');
      return null;
    }

    const characters = json.data;
    const randomCharacter = characters[Math.floor(Math.random() * characters.length)];

    return {
      imgURL: randomCharacter.imageUrl || `https://loremflickr.com/320/240/${encodeURIComponent(randomCharacter.name)}`,
      name: randomCharacter.name,
      parkAttractions: randomCharacter.parkAttractions || [],
      videoGames: randomCharacter.videoGames || []
    };

  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
}

async function onFetchFilmsClick() {
  const character = await fetchRandomCharacter();
  renderCharacter(character);
}