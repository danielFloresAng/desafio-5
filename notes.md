Desarrollar un sistema de storage para Mongo en Atlas y realizar pruebas siguientes:

- Coloca el ttl = 15. Analiza el comportamiento de la sesión si hago peticiones constantes al endpoint de login. Revisa el tiempo de expiración.

- Retira el ttl de la configuración y genera una nueva sesión. Analiza el tiempo de expiración que se genera por default

* Se deberá contar con una estructura de router para sessions en /api/sessions/ el cual contará con métodos para registrar a un usuario y para su respectivo login

* Se deberá contar además con un router de vistas en la ruta base / para llevar al formulario de login, de registro y de perfil.

* El formulario de registro insertará en la base de datos el usuario. El cual deberá contar con:

- first_name
- last_name
- email
- age
- password

* Se debe contar con el formulario de login el cual corroborará que el usuario exista en la base, y además genere un objeto user en req.session, indicando que puede utilizar la página.

* Agregar validaciones a las rutas de vistas para que, si aún no estoy logueado, no pueda entrar a ver mi perfil, y si ya estoy logueado, no pueda volver a loguearme o registrarme.

* En la vista de perfil, se deben arrojar los datos no sensibles del usuario que se haya logueado.

Con base en el proyecto realizado en el Hands on lab:

- Cambiar la validación de rutas por middlewares de rutas públicas o privadas.

* Las rutas públicas deben regresar siempre a la pantalla de login en caso de que no se reconozca una session activa.
* Las rutas privadas deben regresar siempre a la pantalla de profile en caso de que haya una sesión activa en session.

- Realizar un botón “logout” en la vista de perfil, que permita destruir la sesión y redireccionar a la vista de login.

<!-- ------------------------------------------------------------------ -->

///// Implementación de login /////

- Deberá contar con todas las vistas realizadas en el hands on lab, así también como las rutas de router para procesar el registro y el login.

- Una vez completado el login, realizar la redirección directamente a la vista de productos.

- Agregar a la vista de productos un mensaje de bienvenida con los datos del usuario

- Agregar un sistema de roles, de manera que si colocamos en el login como correo adminCoder@coder.com, y la contraseña adminCod3r123, el usuario de la sesión además tenga un campo

- Todos los usuarios que no sean admin deberán contar con un rol “usuario”.

- Implementar botón de “logout” para destruir la sesión y redirigir a la vista de login
