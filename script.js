// Inicializamos el mapa en el div con id 'mapa', centrado en las coordenadas de la barbería
var map = L.map('mapa').setView([31.6894, -106.4194], 12);

// Añadimos la capa de mapa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Añadimos un marcador en la ubicación exacta de la barbería
L.marker([31.6894, -106.4194]).addTo(map)
    .bindPopup('Barber shop "Los Brothers" <br> C. Rivera de Ixtapa 351, <br> Parcelas Ejido Jesús Carranza, <br> 32594 Juárez, Chih.')
    .openPopup();
