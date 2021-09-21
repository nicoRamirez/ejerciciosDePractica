let boton = document.getElementById("boton");

boton.addEventListener("click",function() {
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;

    if(usuario.length == 8 && contraseña === usuario){
        window.location.href = "./paginas/principal.html";
    }
    else{
        alert("usuario o contraseña incorrecta, intente de nuevo");
    }
})
