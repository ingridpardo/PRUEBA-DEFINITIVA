let url="https://pokeapi.co/api/v2/type";

apiCall(url);

function apiCall(url){

    fetch(url)
    .then((res) => res.json())
    .then((res) => {
        for(let i = 0; i < res.results.length; i++){
            document.querySelector("#type").innerHTML += `
            <option value = "${res.results[i].url}">${res.results[i].name}</option> `
            console.log(res.results[i].name)
        }
        if(res.next != null){
            apiCall(res.next) // LO PUEDES OMITIR PORQUE EN EL API NO TIENE NI ARRIBA NI ABAJO 
        }
         
    })
}

document.querySelector("#type").addEventListener("change" , function(){
    pokemonApiCall(document.querySelector("select").value)})


    function pokemonApiCall(url){
        fetch(url)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            document.querySelector("#pokemon").innerHTML = ""

            for (let j = 0; j < res.pokemon.length; j++){
                let listaPokemon = res.pokemon[j];
                document.querySelector("#pokemon").innerHTML += `
                <option value="${listaPokemon.pokemon.url}">${listaPokemon.pokemon.name}</option>`
            }
           
            }) 
        }
    

document.querySelector("#pokemon").addEventListener("change" , function(){
    showPokemonData(this.value)
})

function showPokemonData(url){
    fetch(url)
    .then(res => res.json())
    .then(res => {
        document.querySelector("div").innerHTML = `
        <h2>${res.name}</h2> 
        <img src="${res.sprites.front_default}"/>
    
        `
        console.log(res);
    })
   

}





// let div = document.querySelector("div");

// let divPokemon = document.createElement("div");
// let h2 = document.createElement("h2");
// let img = document.createElement("img");


// divPokemon.className = `pokemon${res.name}`;
// h2.textContent = res.name; 
// img.src = res.sprites.front_default;

// divPokemon.appendChild(h2);
// divPokemon.appendChild(img);
// div.appendChild(divPokemon);





// let infoPokemon = res.results[j].url;

// function infoCall(infoPokemon){
//     fetch(infoPokemon)
//     .then((res) => res.json())
//     .then((res) => {
//         console.log(res);

//     })

// }

// infoCall(infoPokemon);

