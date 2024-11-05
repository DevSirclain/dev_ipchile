$(document).ready(function () {
var session = localStorage.getItem("session"); 
if (session === "true") 
    { 
        $("#cargar").click(function(){ $("#contenido").load("contenido.html"); }); 
    } else { 
        window.location.href = "login.html"; 
    } 
});

// Función para cargar el formulario o la tabla según el menú seleccionado
function loadform(option) {
    const mainContent = document.getElementById('main-content'); // Elemento donde se cargará el contenido
    mainContent.innerHTML = ''; // Limpiar el contenido actual

    switch (option) {
        case 1:
            // Cargar perfil y seguimiento
            mainContent.innerHTML = `
                <div class="col-xl-4 col-lg-5">
                    <div class="card shadow mb-4">
                    <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between"><h6 class="m-0 font-weight-bold text-primary">Perfil y Seguimiento</h6></div>
                    <div class="card-body">
                        <form id="profileForm">
                            <div class="input-group">
                                <input type="text" id="name" placeholder="Nombre" class="form-control bg-light border-0 small" required>
                                <input type="text" id="goal" placeholder="Meta de sostenibilidad" class="form-control bg-light border-0 small" required>
                            </div>
                            <button type="submit" class="btn btn-primary">Guardar</button>
                        </form>                    
                    </div>
                    </div>
                </div>

                <div id="profileData"></div>
            `;
            document.getElementById('profileForm').addEventListener('submit', saveProfile);
            loadProfile(); // Cargar datos del perfil
            break;
        case 2:
            // Cargar consejos y sugerencias
            mainContent.innerHTML = `
                <h2>Consejos y Sugerencias</h2>
                <div>
                    <p>Aquí tienes algunos consejos para adoptar hábitos sostenibles.</p>
                    <ul>
                        <li>Usa menos plástico.</li>
                        <li>Recicla siempre que sea posible.</li>
                        <li>Conserva energía apagando las luces.</li>
                    </ul>
                </div>
            `;
            break;
        case 3:
            // Cargar calculadora de impacto
            mainContent.innerHTML = `
                <h2>Calculadora de Impacto</h2>
                <form id="impactCalculator">
                    <input type="number" id="recycledWaste" placeholder="Kilogramos reciclados" required>
                    <button type="submit">Calcular Impacto</button>
                </form>
                <div id="impactResult"></div>
            `;
            document.getElementById('impactCalculator').addEventListener('submit', calculateImpact);
            break;
        case 4:
            // Cargar recursos educativos
            mainContent.innerHTML = `
                <h2>Recursos Educativos</h2>
                <ul>
                    <li><a href="https://www.wwf.org/" target="_blank">WWF</a></li>
                    <li><a href="https://www.greenpeace.org/" target="_blank">Greenpeace</a></li>
                    <li><a href="https://www.nationalgeographic.com/" target="_blank">National Geographic</a></li>
                </ul>
            `;
            break;
        case 5:
            // Cargar registro de actividad
            mainContent.innerHTML = `
                <h2>Registro de Actividad</h2>
                <form id="activityForm">
                    <input type="text" id="activity" placeholder="Actividad realizada" required>
                    <input type="date" id="date" required>
                    <button type="submit">Registrar Actividad</button>
                </form>
                <table id="activityTable">
                    <thead>
                        <tr>
                            <th>Actividad</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            `;
            document.getElementById('activityForm').addEventListener('submit', saveActivity);
            loadActivities(); // Cargar actividades registradas
            break;
    }
}

// Función para guardar el perfil en localStorage
function saveProfile(event) {
    event.preventDefault(); // Evitar el envío del formulario

    const name = document.getElementById('name').value;
    const goal = document.getElementById('goal').value;

    const profileData = { name, goal };
    localStorage.setItem('profileData', JSON.stringify(profileData));
    loadProfile(); // Cargar el perfil actualizado
}

// Función para cargar el perfil desde localStorage
function loadProfile() {
    const profileData = JSON.parse(localStorage.getItem('profileData'));
    const profileDiv = document.getElementById('profileData');
    if (profileData) {
        profileDiv.innerHTML = `
            <h3>Perfil</h3>
            <p>Nombre: ${profileData.name}</p>
            <p>Meta de sostenibilidad: ${profileData.goal}</p>
        `;
    } else {
        profileDiv.innerHTML = '<p>No hay datos de perfil guardados.</p>';
    }
}

// Función para calcular el impacto basado en la cantidad de residuos reciclados
function calculateImpact(event) {
    event.preventDefault(); // Evitar el envío del formulario

    const recycledWaste = document.getElementById('recycledWaste').value;
    const impact = recycledWaste * 0.5; // Ejemplo de cálculo de impacto (ajusta según tu lógica)
    const impactDiv = document.getElementById('impactResult');
    impactDiv.innerHTML = `<p>Impacto positivo: ${impact} kg de CO2 evitados.</p>`;
}

// Función para guardar la actividad en localStorage
function saveActivity(event) {
    event.preventDefault(); // Evitar el envío del formulario

    const activity = document.getElementById('activity').value;
    const date = document.getElementById('date').value;

    const activityData = { activity, date };
    const activities = JSON.parse(localStorage.getItem('activities')) || [];
    activities.push(activityData);
    localStorage.setItem('activities', JSON.stringify(activities));
    loadActivities(); // Cargar actividades actualizadas
}

// Función para cargar actividades desde localStorage y mostrarlas en la tabla
function loadActivities() {
    const activities = JSON.parse(localStorage.getItem('activities')) || [];
    const tbody = document.querySelector('#activityTable tbody');
    tbody.innerHTML = ''; // Limpiar la tabla actual

    activities.forEach(act => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${act.activity}</td><td>${act.date}</td>`;
        tbody.appendChild(row);
    });
}
