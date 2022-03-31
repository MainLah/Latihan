const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const main = document.querySelector(".main");
const searchInput = document.querySelector(".search-input");

async function search(keyword) {
  try {
    const res = await fetch(SEARCH_API + keyword);
    const movies = await res.json();
    main.innerHTML = "";
    movies.results.forEach((movie) => (main.innerHTML += makeCard(movie)));
  } catch (error) {
    console.error(error);
    document.body.write("Movie tidak ditemukan");
  }
}

(async function () {
  try {
    const res = await fetch(API_URL);
    const movies = await res.json();
    movies.results.forEach((movie) => (main.innerHTML += makeCard(movie)));
  } catch (error) {
    console.error(error);
  }
})();

function makeCard(movie) {
  return `
    <div class="movie">
      <img
        src="https://image.tmdb.org/t/p/w1280/${movie.poster_path}"
        alt="${movie.title}"
      />
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <span class="${rating(movie.vote_average)}">${movie.vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${movie.overview}
      </div>
    </div>
  `;
}

searchInput.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = e.target.firstElementChild

  if (input.value)
    search(input.value);

  input.value = "";
});

function rating(rating) {
  if (rating > 8) {
    return "green";
  } else if (rating > 6) {
    return "yellow";
  } else {
    return "red";
  }
}
