let servicios = [];
let total = 0;

function agregarServicio(servicio, precio) {
    let carrito = document.getElementById("carrito");
    let servicioItem = document.createElement("p");
    servicioItem.textContent = servicio;
    carrito.appendChild(servicioItem);

    servicios.push({ nombre: servicio, precio: precio });

    total+= precio;
    document.getElementById("btnPagar").textContent = `Pagar: $${total}`;
}

function pagar() {
 
    localStorage.setItem('servicios', JSON.stringify(servicios));
    localStorage.setItem('total', total);

    alert("Total a pagar: $ " + total);
    window.location.href = "confirmacion.html"; 
}

function limpiarCarrito() {
    if (confirm("Vaciar carrito?")) {
        servicios = [];
        total = 0;
        document.getElementById("carrito").innerHTML = ""; 
        document.getElementById("btnPagar").textContent = "Pagar";

       
        localStorage.removeItem('servicios');
        localStorage.removeItem('total');
    }
}


