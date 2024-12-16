let servicios = [];
let total = 0;

function agregarServicio(servicio, precio) {

  

    const existente = servicios.some(servicioItem => servicioItem.id === servicio.id);

       

        



    if (existente) {
        alert(`Ya añadiste "${servicio.name}".`);
        return false;

    }

        else {
            let carrito = document.getElementById("carrito")
            let servicioItem = document.createElement("p");
            servicioItem.textContent = servicio.name;
            carrito.appendChild(servicioItem);
            servicios.push({id: servicio.id, name: servicio.name, precio: precio });
            alert(`Añadiste "${servicio.name}" exitosamente.`);

            total+= precio;
            document.getElementById("btnPagar").textContent = `Pagar: $${total}`;
                }
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


