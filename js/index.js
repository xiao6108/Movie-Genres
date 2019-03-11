const genres = {
  "1": "Action",
  "2": "Adventure",
  "3": "Animation",
  "4": "Comedy",
  "5": "Crime",
  "6": "Documentary",
  "7": "Drama",
  "8": "Family",
  "9": "Fantasy",
  "10": "History",
  "11": "Horror",
  "12": "Music",
  "13": "Mystery",
  "14": "Romance",
  "15": "Science Fiction",
  "16": "TV Movie",
  "17": "Thriller",
  "18": "War",
  "19": "Western"
}
const BASE_URL = "https://movie-list.alphacamp.io"
const INDEX_URL = BASE_URL + "/api/v1/movies/"
const POSTER_URL = BASE_URL + "/posters/"

const MovieList = document.getElementById("movie-list")
const dataPanel = document.getElementById("data-panel")


// get API
function showMovie(category) {
  axios
    .get(INDEX_URL)
    .then(response => {
      const movieList = response.data.results;
      const data = []

      for (let item of movieList) {
        if (checkCategory(item, category)) {
          data.push(item);
        }
      }
      displayDataList(data);
    })
    .catch(err => console.log(err));
}
// 新增左方電影清單
function addList(list) {
  let Li = document.createElement("li");
  Li.classList.add("nav-item");
  Li.innerHTML += `
  <li class='nav-item'>
      <a class="nav-link" href="#">${list}</a>
  </li>
  `
  MovieList.appendChild(Li);
}

// genres[1]="Action"
for (let genre in genres) {
  addList(genres[genre]);
}

// DataPanel display
function displayDataList(data) {
  let htmlContent = "";
  data.forEach(function (item, index) {
    htmlContent += `
        <div class="col-md-3">
          <div class="card" id="aa">
            <img class="card-img-top" src="${POSTER_URL}${item.image}" alt="Card image cap">
            <div class="card-body movie-item-body">
            <h6 class="card-title">${item.title}</h6>
            <ul class="list-group id="group">
              <li id="category" >${convertToStr(item.genres)}</li>
            </div>
          </div>
        </div>
      `
  })
  dataPanel.innerHTML = htmlContent;
}

// 轉換陣列內數字為字串
function convertNumToStr(genreNum) {
  return genres[genreNum];
}
// 新增電影下方標籤分類
function convertToStr(NumArray) {
  let category = "";
  NumArray.forEach(function (genreNum) {
    category += `
      <p class="category">${convertNumToStr(genreNum)}</p>
    `;
  });
  return category;
}

function checkCategory(item, target) {
  let res = false;
  for (let itemGenre of item.genres) {
    if (convertNumToStr(itemGenre) === target) {
      res = true;
      break;
    }
  }
  return res;
}


// 監聽左方分類電影，引入Active
MovieList.addEventListener("click", event => {
  let listItem = document.querySelectorAll(".nav-link");
  listItem.forEach(item => {
    item.classList.remove("active");
  });
  event.target.classList.add("active");
  showMovie(event.target.innerHTML);
});