
const generateMemeBtn = document.querySelector(" .generate-meme-btn");
const memeImage = document.querySelector(".meme-img");
const memeTitle = document.querySelector(".meme-title"); // Fixed the selector

const updateDetails = (url, title) => {
  memeImage.setAttribute("src", url);
  memeTitle.innerHTML = title;
};

const generateMeme = () => {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data) => {
      updateDetails(data.url, data.title);
    });
};

generateMemeBtn.addEventListener("click", generateMeme);

