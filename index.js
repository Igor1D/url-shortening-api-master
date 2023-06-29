const form = document.getElementById('form');
const input = document.getElementById('input');

async function shortenUrl() {
    let results = await fetch(`https://api.shrtco.de/v2/shorten?url=${input.value}`);
    let data = await results.json();
    let shortenLink = data.result.full_short_link3;
    let urlDiv = document.createElement('div');
    urlDiv.classList.add('urlDiv');
    urlDiv.innerHTML = `<p class="longUrl">${input.value}</p> <p class="shortUrl">${shortenLink}</p> <button class="copyBtn">Copy</button>`;
    document.body.appendChild(urlDiv);
    console.log(shortenLink);
}





// shortenUrl();

form.addEventListener('submit', (event) => {
    event.preventDefault()

    shortenUrl();
    console.log(input.value);

});

