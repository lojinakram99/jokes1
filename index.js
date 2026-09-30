const btn = document.querySelector(".btn");
const input = document.querySelector("input");
const content = document.querySelector(".content");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const number = Number(input.value);

  if (input.value === "" || number > 99 || number < 0) {
    content.innerHTML = "Invalid";
    return;
  }

  fetch("https://api.imgflip.com/get_memes")
    .then((res) => res.json())
    .then((data) => {
      const meme = data.data.memes[number];

      content.innerHTML = `
  <h2>${meme.name}</h2>
  <img src="${meme.url}" class="img-fluid" alt="${meme.name}">
`;
    });
});
