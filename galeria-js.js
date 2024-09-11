// Función para obtener el parámetro de la URL
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Función para cargar la galería
function cargarGaleria() {
    const item = getParameterByName('item');
    const galeriaTitle = document.getElementById('galeria-titulo');
    const galeriaGrid = document.getElementById('galeria-grid');

    if (item) {
        galeriaTitle.textContent = `Galería de ${item}`;

        // Simulamos tener varias imágenes para cada ítem
        const imagenes = [
            "https://source.unsplash.com/300x300/?coffee",
            "https://source.unsplash.com/300x300/?cappuccino",
            "https://source.unsplash.com/300x300/?latte",
            "https://source.unsplash.com/300x300/?espresso",
            "https://source.unsplash.com/300x300/?cafe",
            "https://source.unsplash.com/300x300/?coffeeshop"
        ];

        imagenes.forEach(src => {
            const galeriaItem = document.createElement('div');
            galeriaItem.className = 'galeria-item';
            galeriaItem.innerHTML = `<img src="${src}" alt="${item}">`;
            galeriaGrid.appendChild(galeriaItem);
        });
    } else {
        galeriaTitle.textContent = "Ítem no encontrado";
    }
}

// Inicializar la página
document.addEventListener('DOMContentLoaded', cargarGaleria);
