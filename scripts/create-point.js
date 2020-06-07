
function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then ( states => {
        for (const state of states) {
        ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>` //Pega você mais você mesmo
        
        }
    } )
}

populateUFs()


function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    citySelect.innerHTML = "<Option value> Selecione a cidade</option>"
    citySelect.disabled = true
    fetch(url)
    .then( res => res.json() )
    .then( cities => {

        
        for( const city of cities ) {
        
        citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

    })



        citySelect.disabled = false
    } 



document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities) // ouvidor de eventos - toda vez que acontece o evento chama a função getCities


    // ITENS DE COLETA
//pegar todos os lis

const itemsToCollect = document.querySelectorAll(".items-grid li")
for (const item of itemsToCollect) {
item.addEventListener("click", handleSelectedItem)    // Toda vez que acontece a mudança chama a função handleSelectedItem
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = [] //array id de itens para selecionar  LET PODE MUDAR DE VALOR DEPOIS POR ISSO NÃO É CONST

function handleSelectedItem(event) {

const itemLi = event.target

//Adicionar ou remover uma classe com javascript
itemLi.classList.toggle("selected")   // toglle adiciona ou remove

    const itemId = event.target.dataset.id

    //verificar se existem itens selecionados, se sim 
    //pegar os itens selecionados

    const alreadySelected = selectedItems.findIndex( function (item) {  
        const itemFound = item == itemId     // caso a comparação seja verdadeira retona true caso contrário retonra false                                       //=> Maneira completa da função!
        return itemFound
    })  

  // const alreadySelected = selectedItems.findIndex( item = item == itemId )    => Maneira enxuta da função
    

    //se já estiver selecionado , tirar da seleção

    if(alreadySelected >= 0) {    //alreadySelected posição do array
        //tirar da seleção
        const filterdItems = selectedItems.filter( item => {    //filterdItems itens filtrados arrey
            const itemIsDifferent = item != itemId  //
            return itemIsDifferent

        })

        selectedItems = filterdItems
      
    } 
    //se não estiver selecionado , adicionar à seleção
    else{
        selectedItems.push(itemId)

    }
    



    //atualizar o campo escondido com os itens selecionados
   
    collectedItems.value = selectedItems
}