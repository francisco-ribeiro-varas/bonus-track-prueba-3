# Análisis de React para la aplicación

| Elemento de React | ¿Dónde lo usas en este problema? | ¿Por qué es el adecuado? |
|---|---|---|
| Componente | Uso componentes como `App`, `FiltroEspecie`, `ListaMascotas` y `MascotaCard` para dividir la aplicación en partes pequeñas. 
| Es adecuado porque cada componente tiene una responsabilidad clara y facilita el mantenimiento y la reutilización. 

| JSX | Uso JSX dentro de `App.jsx` (y en los componentes hijos) para escribir la estructura visual en un formato similar a HTML. 
| Es adecuado porque React necesita JSX para poder combinar JavaScript con la descripción de la interfaz. 
| Props | Paso datos desde `App` a componentes hijos, por ejemplo enviar la información de cada mascota a `MascotaCard` o la función de filtrado a `FiltroEspecie`. 
| Es adecuado porque las props permiten que los componentes hijos reciban datos y comportamientos definidos por el padre sin duplicar lógica. 

| Estado (useState) | Uso `useState` en `App.jsx` para manejar valores dinámicos como el contador o el filtro seleccionado. 
| Es adecuado porque el estado permite que la interfaz se actualice automáticamente cuando cambia la información interna. 

| Renderizado de listas (.map + key) | Uso `.map()` para mostrar una lista de mascotas a partir de un array y asigno una `key` única a cada tarjeta. 
| Es adecuado porque React necesita una clave estable para optimizar el renderizado y actualizar solo los elementos necesarios. 

| Renderizado condicional | Uso condicional para mostrar solo las mascotas filtradas por especie y para mostrar mensajes diferentes cuando no hay resultados. 
| Es adecuado porque permite cambiar lo que se muestra según el estado de la aplicación sin recargar la página. 


## Respuestas breves

1. Ventaja de dividir el directorio en componentes en lugar de escribir todo en un solo archivo:

   Separar en componentes hace que el código sea más ordenado y sencillo de comprender. Cada elemento puede ser reutilizado y alterado de forma independiente, además de facilitar la rápida identificación de errores.

2. Diferencia entre props y estado en tu solución:

  Las props son información que un componente recibe de su componente padre; por ejemplo, `App` puede enviar el nombre y la especie de una mascota a `MascotaCard`. El estado se refiere a datos internos que un componente gestiona y que pueden variar con el tiempo, como el filtro escogido o el contador de `useState` en `App`.
