const form = document.getElementById('form');
const input = document.getElementById('input');
// let mobileMenuBtn = document.getElementById('menu-toggle');
// let nav = document.getElementById('nav');

// mobileMenuBtn.addEventListener('click', ()=>{
//     nav.style.display = 'none';
    
// })


async function shortenUrl() {
    let results = await fetch(`https://api.shrtco.de/v2/shorten?url=${input.value}`);
    let data = await results.json();
    let shortenLink = data.result.full_short_link3;
    let urlDiv = document.createElement('div');
    let shortenLinks = document.getElementById('shortenLinks');
    let copyBtn = document.getElementById('copyBtn');
    let shortUrl = document.getElementById('shortUrl');
    
    urlDiv.classList.add('urlDiv');
    urlDiv.innerHTML = `<p class="longUrl">${input.value}</p> <div class="shortUrlBtn"><p id="shortUrl">${shortenLink}</p> <button id="copyBtn" class="mainBtn" onclick="copyFunction()">Copy</button></div>`;
    shortenLinks.appendChild(urlDiv);
    

    // copyBtn.addEventListener('click', ()=> {
    //     let storage = document.createElement('textarea');
    //     storage.value = shortUrl.innerText;
    //     shortUrl.appendChild(storage);
    //     storage.select();
    //     document.execCommand('copy');
    //     document.body.removeChild(storage);
    //     copyBtn.innerHTML = 'Copied!';
    //     setTimeout(() => {
    //         copyBtn.innerText = 'Copy';
    //       }, 2000);
    // })

    // function copyFunction(){
    //     let storage = document.createElement('textarea');
    //     storage.value = shortUrl.innerText;
    //     shortUrl.appendChild(storage);
    //     storage.select();
    //     document.execCommand('copy');
    //     document.body.removeChild(storage);
    //     copyBtn.innerHTML = 'Copied!';
    //     setTimeout(() => {
    //         copyBtn.innerText = 'Copy';
    //       }, 2000);
    // }

}



form.addEventListener('submit', (event) => {
    event.preventDefault()

    shortenUrl();
    
    
});

// copyBtn.addEventListener('click', ()=> {

//     copyFunction();

// })



