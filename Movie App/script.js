const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

async function search(keyword) {
  try {
    const res = await fetch(SEARCH_API + keyword);
    const movies = await res.json();
    console.log(movies);
  } catch (error) {
    console.error(error);
  }
}

async function onLoad() {
  try {
    const res = await fetch(API_URL);
    const movies = await res.json();
    console.log(movies);
  } catch (error) {
    console.error(error);
  }
}

search("avengers");
