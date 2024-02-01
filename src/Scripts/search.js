const searchInput = document.getElementById('search-input');
const resultArtists = document.getElementById('result-artist');
const resultPlaylists = document.getElementById('result-playlists');

function requestAPI(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result));

    // console.log(url)

}

function displayResults(result) {
    resultPlaylists.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    // console.log(result)

    result.forEach(elements => {
        artistName.innerText = elements.name;
        artistImage.src = elements.urlImg;
    });

    resultArtists.classList.remove('hidden');
}

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === "") {
        resultPlaylists.classList.add('hidden');
        resultArtists.classList.remove('hidden');
        return;
    }
    requestAPI(searchTerm);

    // console.log(searchTerm)
});