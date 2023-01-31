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
        document.querySelector("#pokeCard").innerHTML = `
        <img id="fotoPokemon" src="${res.sprites.front_default}"/>
        <h2 id="pokeName">${res.name}</h2> 
        <button id="favoritos">Añadir a favoritos</button> 
        `;
        /* AÑADIR BUTTON PARA QUE AGREGUEMOS EL CONTENIDO QUE QUEREMOS AL LOCALSTORAGE */

        document.querySelector("button").addEventListener("click", function(){
            let localArray = []
            if(localStorage.getItem("localArray")){
                localArray = localStorage.getItem("localArray");
                localArray = JSON.parse(localArray);
            }

            localArray.push({name: res.name});
            localArray = JSON.stringify(localArray);

            localStorage.setItem("localArray", localArray);
        })

        console.log(res);
    })

}

localArray = localStorage.getItem("localArray")
localArray = JSON.parse(localArray);
for(let i = 0; i < localArray.length; i++){
    document.getElementById("prueba").innerHTML += `
    ${localArray[i].name}
    `
}



