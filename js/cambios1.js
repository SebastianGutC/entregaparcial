function cambiarContenido() {
    document.getElementById("mensaje").innerHTML = "ESTE CAMBIO SE ACABA DE REALIZAR";
}

function cambiarColor() {
    const text = document.getElementById('mensaje');
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F'];
    let currentColor = text.style.color;
    let newColor = colors[(colors.indexOf(currentColor) + 1) % colors.length];
    text.style.color = newColor;
}