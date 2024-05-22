//https://api.themoviedb.org/3/movie/157336?api_key=b722f8213ca1555f7d903ef9a177636c&append_to_response=videos,images

document.addEventListener("DOMContentLoaded", function() {
    loadMovies();
});

async function loadMovies() {
    const apiKey = 'b722f8213ca1555f7d903ef9a177636c'; // Reemplaza 'tu_api_key' con tu propia API key de TMDb
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es`);
    const data = await response.json();
    const movies = data.results.slice(0, 10); // Obtener solo las 10 primeras películas

    const carousel = document.getElementById('carousel');
    movies.forEach(movie => {
        const card = document.createElement('div');
        card.classList.add('card');

        const poster = document.createElement('img');
        poster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`; // URL del póster de la película
        poster.alt = movie.title;

        const info = document.createElement('div');
        info.classList.add('card-info');

        const title = document.createElement('h2');
        title.textContent = movie.title;

        const description = document.createElement('p');
        description.textContent = movie.overview;

        info.appendChild(title);
        info.appendChild(description);

        card.appendChild(poster);
        card.appendChild(info);

        carousel.appendChild(card);
    });

    // Agregar "Ver Más" al final
    const viewMore = document.createElement('div');
    viewMore.classList.add('card');
    viewMore.innerHTML = '<h2>Ver Más</h2>';
    carousel.appendChild(viewMore);
}
