const searchBtn = document.querySelector('.search-bar');
const searchField = document.querySelector('.textField-search-bar');

let searchOpen = false;

searchBtn.addEventListener('click', () => {

    if (searchOpen) {
        searchField.classList.remove('active');

        searchOpen = false;
    } else {
        searchField.classList.add('active');

        searchOpen = true;
    }
})