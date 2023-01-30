// let url = "https://pokeapi.co/api/v2/type"

// pokemonCall(url);

// function pokemonCall(url){
//     fetch(url)
//     .then((res) => res.json())
//     .then((res) => {
//         for(let i = 0; i < res.results.length; i++){
//             document.querySelector("#type").innerHTML += `
//             <option value = "${res.results[i].url}">${res.results[i].name}</option>
//             `
//             console.log(res.results[i].name)
            
//         }
//     if (res.next != null){
//         pokemonCall(res.next);
//     }
//     })
// }

// document.querySelector("#type").addEventListener("change", function(){
//     listaPokemon(document.querySelector("select").value)
// })

// function listaPokemon(url){
//     fetch(url)
//     .then((res) => res.json())
//     .then((res) =>{

//         document.querySelector("#pokemon").innerHTML = ""
//         for(let j = 0; j < 100; j++){

//             let listaPokemon = res.pokemon[j]
            
//             document.querySelector("#pokemon").innerHTML += `
//             <option>${listaPokemon.pokemon.name}</option>
//             `
//             console.log(res.listaPokemon); 
//         }
//     })   
// }

// // let infoPokemon = res.results[j].url

// // function infoCallPokemon (infoPokemon){
// //     fetch(infoPokemon)
// //     .then((res) => res.json())
// //     .then((res) => {

// //         document.querySelector("div").innerHTML = `
// //         <p>${res.pokemon.name}</p>
// //         `
// //     })
// //     }

// //     function datosPokemonCall(url){
// //         fetch(url)
// //         .then((res)=> res.json)
// //         .then((res) =>{
// //             infoCallPokemon(infoPokemon)
// //         })
// //     }

// //     document.querySelector("select").addEventListener("change",function(){
// //         datosPokemonCall(document.querySelector("select").value)
// //     })

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
