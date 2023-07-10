const form = document.getElementById('form');
const input = document.getElementById('input');

async function shortenUrl() {
    let results = await fetch(`https://api.shrtco.de/v2/shorten?url=${input.value}`);
    let data = await results.json();
    let shortenLink = data.result.full_short_link3;
    let urlDiv = document.createElement('div');
    let shortenLinks = document.getElementById('shortenLinks');
    
    urlDiv.classList.add('urlDiv');
    urlDiv.innerHTML = `<p class="longUrl">${input.value}</p> <div class="shortUrlBtn"><p id="shortUrl">${shortenLink}</p> <button id="copyBtn" class="mainBtn" onclick="copyFunction()">Copy</button></div>` + `<div id="mobileLineDivider"></div>`;
    shortenLinks.appendChild(urlDiv);
    let copyBtn = document.getElementById('copyBtn');
    
//     function copyFunction() {
//         let shortUrl = document.getElementById('shortUrl');
//         // Create a fake `textarea` and set the contents to the text
//   //    you want to copy
//         let storage = document.createElement('textarea');
//         storage.value = shortUrl.innerHTML;
//         shortUrl.appendChild(storage);
//         // Copy the text in the fake `textarea` and remove the `textarea`
//         storage.select();
//         storage.setSelectionRange(0, 99999);
//         document.execCommand('copy');
//         element.removeChild(storage);




//     }
    
    console.log(copyBtn)

}



form.addEventListener('submit', (event) => {
    event.preventDefault()

    shortenUrl();
    
});



