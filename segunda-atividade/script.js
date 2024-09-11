let memes = [];
let facts = [];
let index = 0;

index = Math.floor(Math.random() * 99);

async function getApiOne() {
  const response = await fetch("https://api.imgflip.com/get_memes");
  const data = await response.json();

  return data.data.memes;
}

async function createContentOne() {
  memes = await getApiOne();
  showMemes(index);
}

async function showMemes(index) {
  const meme = memes[index];
  const memeContainer = document.getElementById("section-one-content");
  memeContainer.innerHTML = `
        <h2 class="meme-title">${meme.name}</h2>
        <img src="${meme.url}" alt="${meme.name}" class="meme-img">
        <span class="meme-buttons">
        <button onclick="showMemes(${index - 1})" class="meme-button">Anterior</button>
        <button onclick="showMemes(${index + 1})" class="meme-button">Próximo</button>
        </span>
    `;
}

createContentOne();

async function getApiTwo() {
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
    const data = await response.json();
    console.log(data);
    return data;
    }

async function createContentTwo() {
    facts = await getApiTwo();
    showFacts();
}

async function showFacts() {
    const fact = facts.text;
    const factContainer = document.getElementById("section-two-content");
    factContainer.innerHTML = `
        <h2 class="fact-title">Curiosidade</h2>
        <p class="fact-text">${fact}</p>
        <span class="fact-buttons">
        <button onclick="createContentTwo()" class="fact-button">Nova curiosidade</button>
        </span>
    `;
}

createContentTwo();