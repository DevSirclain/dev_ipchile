/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

function guardarPerfil() {
    const nombre = document.getElementById('nombre').value;
    const objetivos = document.getElementById('objetivos').value;
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('objetivos', objetivos);
    alert('Perfil guardado');
}

const consejos = [
    "Usa menos plásticos",
    "Apaga las luces cuando no las uses",
    "Recicla tus residuos orgánicos"
];
  
function mostrarConsejo() {
    const consejoAleatorio = consejos[Math.floor(Math.random() * consejos.length)];
    document.getElementById('consejo').innerText = consejoAleatorio;
}

function calcularImpacto() {
    const acciones = document.getElementById('acciones').value;
    const impacto = acciones * 10; // Ejemplo: cada acción ahorra 10kg de CO2
    document.getElementById('resultado-impacto').innerText = `Has ahorrado ${impacto}kg de CO2.`;
}  

function registrarActividad() {
    const actividad = document.getElementById('actividad').value;
    let actividades = JSON.parse(localStorage.getItem('actividades')) || [];
    actividades.push(actividad);
    localStorage.setItem('actividades', JSON.stringify(actividades));
    mostrarActividades();
}
  
function mostrarActividades() {
    const actividades = JSON.parse(localStorage.getItem('actividades')) || [];
    const lista = document.getElementById('lista-actividades');
    lista.innerHTML = '';
    actividades.forEach((actividad, index) => {
      lista.innerHTML += `<li>${actividad}</li>`;
    });
}
  
  // Mostrar las actividades al cargar la página
document.addEventListener('DOMContentLoaded', mostrarActividades);
  