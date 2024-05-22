document.addEventListener("DOMContentLoaded", function() {
    // Cargamos  contenido de la página actual en la sección de contenido
    var currentUrl = window.location.href;
    loadPage(currentUrl);
});

function loadPage(url) {
    var content = document.querySelector('.content');
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true); // Cargamos el archivo HTML correspondiente a la página
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var responseHTML = xhr.responseText;
            var parser = new DOMParser();
            var newDocument = parser.parseFromString(responseHTML, 'text/html');
            var newContent = newDocument.querySelector('.content').innerHTML;
            content.innerHTML = newContent; // Insertamos el contenido en la sección de contenido
        }
    };
    xhr.send();
}
