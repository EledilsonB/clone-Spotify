let input = document.getElementById('search-input');
let search = document.getElementById('search');

search.addEventListener('click', (e) => {
    e.preventDefault();
    input.style.display = 'none' ? input.style.display = 'block' : input.style.display = 'none'
});