// Menú de la cafetería
const menu = [
    { nombre: "Café Americano", precio: 2.50, imagen: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=300&q=80" },
    { nombre: "Cappuccino", precio: 3.00, imagen: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=300&q=80" },
    { nombre: "Latte", precio: 3.25, imagen: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=300&q=80" },
    { nombre: "Muffin de Arándanos", precio: 2.75, imagen: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=300&q=80" },
    { nombre: "Croissant", precio: 2.50, imagen: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=300&q=80" },
    { nombre: "Sandwich de Jamón y Queso", precio: 4.50, imagen: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=300&q=80" }
];

// Función para mostrar el menú
function mostrarMenu() {
    const listaMenu = document.getElementById('lista-menu');
    menu.forEach(item => {
        const menuItem = document.createElement('a');
        menuItem.className = 'menu-item';
        menuItem.href = `galeria.html?item=${encodeURIComponent(item.nombre)}`;
        menuItem.innerHTML = `
            <img src="${item.imagen}" alt="${item.nombre}">
            <div class="menu-item-info">
                <div class="menu-item-name">${item.nombre}</div>
                <div class="menu-item-price">$${item.precio.toFixed(2)}</div>
            </div>
        `;
        listaMenu.appendChild(menuItem);
    });
}

// Inicializar la página
document.addEventListener('DOMContentLoaded', function() {
    mostrarMenu();
});
