//https://api.themoviedb.org/3/movie/157336?api_key=b722f8213ca1555f7d903ef9a177636c&append_to_response=videos,images

document.addEventListener("DOMContentLoaded", function() {
    loadMovies();
});

async function loadMovies() {
    const apiKey = 'b722f8213ca1555f7d903ef9a177636c'; // Aqui ponemos la key de la API de TMDb
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es`);
    const data = await response.json();
    const movies = data.results.slice(0, 10); // Cuantas pelis queremos poner

    const carousel = document.getElementById('carousel');
    movies.forEach(movie => {
        const card = document.createElement('div');
        card.classList.add('card');

        const poster = document.createElement('img');
        poster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`; // dir del poster de la peli
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
}

    
