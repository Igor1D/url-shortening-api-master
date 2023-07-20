const form = document.getElementById('form');
const input = document.getElementById('input');
let mobileMenuBtn = document.getElementById('menu-icon');
let nav = document.getElementById('nav');
let shortenLinks = document.getElementById('shortenLinks');
let counter = 0;
let modalWindowDiv = document.getElementById('modalWindow');

mobileMenuBtn.addEventListener('click', ()=>{
    nav.classList.toggle('navShown');
    
});


async function shortenUrl() {
    let results = await fetch(`https://api.shrtco.de/v2/shorten?url=${input.value}`);
    let data = await results.json();
    let shortenLink = data.result.full_short_link3;
    let urlDiv = document.createElement('div');
    
    
    let shortUrl = document.getElementById('shortUrl');
    
    urlDiv.classList.add('urlDiv');
    let charCount = input.value.length;
    let finalInputValue;
    if (charCount >= 50) {
       finalInputValue = input.value.slice(0,50) + '...';
    } else {
        finalInputValue = input.value;
    }
    console.log(charCount);
    urlDiv.innerHTML = `<p class="longUrl">${finalInputValue}</p> <div class="shortUrlBtn"><p id="shortUrl">${shortenLink}</p> <button class="copyBtn">Copy</button></div>`;
    shortenLinks.appendChild(urlDiv);
    input.value = '';
    let copyBtn = urlDiv.querySelector('.copyBtn');
    
    
    copyBtn.addEventListener('click', ()=> {
        navigator.clipboard.writeText(shortenLink);
        copyBtn.innerHTML = 'Copied!';
        copyBtn.style.backgroundColor = 'hsl(255, 11%, 22%)';
    })
}



form.addEventListener('submit', (event) => {
    event.preventDefault()
    
    counter = counter + 1

    if (counter <= 5) {
        shortenUrl();
    } else {
        modalWindowDiv.style.transform = 'translate(-50%,-250%) scale(1)';
        modalWindowDiv.style.opacity = 1;
        setTimeout(() => {
            modalWindowDiv.style.display = 'flex';
        }, 100); 
        // setTimeout(() => {
        //     modalWindowDiv.style.display = 'none';
        // },3000);
  
    }
    


    

    
});




