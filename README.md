# Proyecto de Aplicación de Sostenibilidad con Cordova

Este proyecto es una aplicación móvil desarrollada con Apache Cordova que permite a los usuarios crear perfiles personales, hacer seguimiento de sus prácticas sostenibles, y acceder a recursos educativos sobre sostenibilidad.

## Funcionalidades Clave
- **Perfil y Seguimiento**: Permite a los usuarios crear perfiles personales y hacer un seguimiento de sus prácticas sostenibles, estableciendo metas y objetivos.
- **Consejos y Sugerencias**: Proporciona consejos basados en el estilo de vida del usuario.
- **Calculadora de Impacto**: Muestra el impacto positivo generado por adoptar prácticas sostenibles.
- **Recursos Educativos**: Proporciona acceso a contenido educativo sobre sostenibilidad.
- **Registro de Actividades**: Permite registrar actividades sostenibles y otorga reconocimientos.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados:
- **Node.js**: [Descargar Node.js](https://nodejs.org/).
- **Apache Cordova**: Puedes instalarlo ejecutando el siguiente comando en tu terminal:
  ```bash
  npm install -g cordova
  ```
- **JDK (Java Development Kit)**: Asegúrate de tener configuradas las variables de entorno para Java.
- **Android SDK**: Descarga el SDK desde [Android Studio](https://developer.android.com/studio) y asegúrate de que las variables de entorno `ANDROID_HOME` y `PATH` estén configuradas correctamente.

## Instalación

Sigue estos pasos para configurar y ejecutar la aplicación:

### 1. Clonar el Repositorio
Clona este repositorio en tu máquina local:
```bash
git clone https://github.com/tu-usuario/tu-proyecto.git
cd tu-proyecto
```

### 2. Instalar Dependencias de Cordova
Dentro del directorio del proyecto, ejecuta:
```bash
npm install
```

### 3. Añadir la Plataforma Android
Para compilar la aplicación en Android, agrega la plataforma:
```bash
cordova platform add android
```

### 4. Construir la Aplicación
Construye el proyecto para verificar que no hay errores en la configuración:
```bash
cordova build
```

### 5. Ejecutar la Aplicación en un Dispositivo o Emulador
Para ejecutar la aplicación en un emulador o dispositivo Android:
```bash
cordova run android
```

## Configuración del Perfil y Seguimiento

1. **Formulario de Perfil**: Permite al usuario crear su perfil con su nombre y objetivos sostenibles.
2. **Registro de Actividades**: Los usuarios pueden registrar y hacer seguimiento de sus actividades sostenibles diarias.

Esta funcionalidad se encuentra en el archivo `www/index.html` y su lógica en `www/js/app.js`.

## Estructura del Proyecto

- **`www/index.html`**: Archivo principal de la aplicación con el formulario de perfil y el registro de actividades.
- **`www/js/app.js`**: Contiene la lógica de perfil y seguimiento de actividades.
- **`www/css/style.css`**: Archivo de estilos para la interfaz de la aplicación.

## Tecnologías Usadas

- **Apache Cordova** para el desarrollo multiplataforma.
- **JavaScript** para la lógica de la aplicación.
- **HTML5 y CSS3** para la interfaz de usuario.

## Solución de Problemas

Si encuentras problemas durante la compilación, verifica que:
- Las variables de entorno `JAVA_HOME` y `ANDROID_HOME` estén configuradas correctamente.
- Gradle esté instalado y accesible en tu sistema.

### Comandos Útiles de Cordova
- **Agregar una plataforma**:
  ```bash
  cordova platform add <nombre-plataforma>
  ```
- **Eliminar una plataforma**:
  ```bash
  cordova platform rm <nombre-plataforma>
  ```
- **Ejecutar en un dispositivo o emulador**:
  ```bash
  cordova run <nombre-plataforma>
  ```