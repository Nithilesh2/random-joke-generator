let btn = document.querySelector(".button");
let jokesgenerator;
let display = document.querySelector(".text");


btn.addEventListener("click",getjoke);
const url = 'https://api.api-ninjas.com/v1/jokes?limit=1';

async function getjoke(){
    const response = await fetch(url, options);
    const result = await response.json();
    jokesgenerator = result[0].joke;
    display.innerHTML = jokesgenerator;
}

setInterval(getjoke,10000);

window.addEventListener("load",async ()=>{
    const response = await fetch(url, options);
    const result = await response.json();
    jokesgenerator = result[0].joke;
    display.innerHTML = jokesgenerator;
})

const options = {
	method: 'GET',
	headers: {
		'X-API-Key': 'ukr+70vHaw2fRkXiaKeTgg==GL11DsLtiNdCUh0I',
	},
};
