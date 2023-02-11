//FUNÇÃO PARA ABRIR E FECHAR A "POKEDEX"//
const mostrar = document.querySelector(".show")

function abrirFechar(x){
    var pokeVisor = document.querySelector(".visor")
    pokeVisor.classList.toggle("aberto");
}
//FUNÇÃO PARA ABRIR E FECHAR A "POKEDEX"//

//FUNÇÃO PARA CAPTAR AS INFORMAÇÕES DOS POKEMONS DA pokeAPI E FAZE-LAS APARECER NA TELA//

const pokeNOME = document.querySelector(`.nome`)
const pokeGIF = document.querySelector(`.gif`)
const pokeFORM = document.querySelector(`.form`)
const pokeSEARCH = document.querySelector(`.pesquisar`)

const fetchPokemon = async (pokemon) => {
const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
const data = await APIresponse.json();
return data;
}

const renderPokemon = async (pokemon) => {

const data = await fetchPokemon(pokemon)

pokeNOME.innerHTML = data.id+"-"+data.name;
pokeGIF.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
}

pokeFORM.addEventListener('submit', (event) => {

event.preventDefault();
renderPokemon(pokeSEARCH.value.toLowerCase())
pokeSEARCH.value = ""
})

renderPokemon('1')
//FUNÇÃO PARA CAPTAR AS INFORMAÇÕES DOS POKEMONS DA pokeAPI E FAZE-LAS APARECER NA TELA//