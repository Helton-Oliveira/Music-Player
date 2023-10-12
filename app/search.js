const inputText = document.querySelector('[data-search]')
const btnSearch = document.querySelector('[data-btn]')


btnSearch.addEventListener('click', searchFunction)

function searchFunction() {
    musicCards.innerHTML = ''
    requestAPI(inputText.value)
}




