const form = document.getElementById('form');
const input = document.getElementById('input');

async function shortenUrl() {
    let results = await fetch('https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html');
    let data = await results.json();
    let shortenLink = data.result.full_short_link3;
    console.log(shortenLink);
}



// shortenUrl();

form.addEventListener('submit', (event) => {
    event.preventDefault()

    


    shortenUrl();
    // console.log(input.value);

});

