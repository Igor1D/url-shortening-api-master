const form = document.getElementById('form');
const input = document.getElementById('input');
let mobileMenuBtn = document.getElementById('menu-icon');
let nav = document.getElementById('nav');

mobileMenuBtn.addEventListener('click', ()=>{
    nav.classList.toggle('navShown');
    
});


async function shortenUrl() {
    let results = await fetch(`https://api.shrtco.de/v2/shorten?url=${input.value}`);
    let data = await results.json();
    let shortenLink = data.result.full_short_link3;
    let urlDiv = document.createElement('div');
    let shortenLinks = document.getElementById('shortenLinks');
    
    let shortUrl = document.getElementById('shortUrl');
    
    urlDiv.classList.add('urlDiv');
    urlDiv.innerHTML = `<p class="longUrl">${input.value}</p> <div class="shortUrlBtn"><p id="shortUrl">${shortenLink}</p> <button id="copyBtn" class="mainBtn">Copy</button></div>`;
    shortenLinks.appendChild(urlDiv);
    input.value = '';
    let copyBtn = document.getElementById('copyBtn');
    
    copyBtn.addEventListener('click', ()=> {
        navigator.clipboard.writeText(shortenLink);
        copyBtn.innerHTML = 'Copied!';
        copyBtn.style.backgroundColor = 'hsl(255, 11%, 22%)';
    })

    


}



form.addEventListener('submit', (event) => {
    event.preventDefault()

    shortenUrl();
    
    
});




