$(document).ready(function () {
    // Comprobar estado de la sesión 
var session = localStorage.getItem("session"); 
if (session === "true") 
    { 
        // Permanecer en el index y cargar contenido 
        $("#cargar").click(function(){ $("#contenido").load("contenido.html"); }); 
    } else { 
        // Redirigir al login 
        window.location.href = "login.html"; 
    } 
});