// Array de usuarios predefinidos
const users = [
    { username: "user1", password: "user1" },
    { username: "user2", password: "user2" },
    { username: "user3", password: "user3" }
];

// Función para manejar el inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');

    // Autenticar al usuario
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Guardar el usuario en localStorage
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        localStorage.setItem("session", true);
        alert('Inicio de sesión exitoso');
        // Redirigir o realizar otra acción
        window.location.href = "index.html"; // Puedes redirigir a otra página
    } else {
        errorMsg.textContent = 'Usuario o contraseña incorrectos';
    }
});

// Función para verificar si hay un usuario logueado
function checkLoggedInUser() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        alert('Bienvenido de nuevo, ' + loggedInUser.username);
        // Redirigir a otra página si es necesario
        // window.location.href = "home.html"; // Puedes redirigir a otra página
    }
}

// Verificar si hay un usuario logueado al cargar la página
checkLoggedInUser();
