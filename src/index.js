import "./styles.css";

const searchBtn = document.querySelector(".button");

searchBtn.addEventListener("click", () => {
  const GIF_CONTAINER = document.querySelector(".gif-container");
  GIF_CONTAINER.innerHTML = "";
  const API_KEY = "vU9lemtGvZI0mMDSaMEhTr10csQJCvQc";
  let searchTerm = document.querySelector("#search__input").value;
  const FETCH_TERM = `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${searchTerm}`;

  fetch(FETCH_TERM, {mode: "cors"})
  .then((response) => response.json())
  .then((response) => {
    GIF_CONTAINER.style.backgroundImage = `url(${response.data.images.original.url})`;
    GIF_CONTAINER.style.backgroundSize = "cover";
    GIF_CONTAINER.style.backgroundPosition = "center";
  })
  .catch((response) => {
    searchTerm = "404";
    GIF_CONTAINER.style.backgroundImage = `url(${response.data.images.original.url})`;
    GIF_CONTAINER.style.backgroundSize = "contain";
    GIF_CONTAINER.style.backgroundPosition = "center";
  });
});

const searchInput = document.querySelector("#search__input");

searchInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    searchBtn.click()
  }
});