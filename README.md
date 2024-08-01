# Proyecto de Automatización con Cypress de saucedemo e2e y demoblaze api

Este proyecto es una suite de pruebas automatizadas utilizando Cypress. Las pruebas están configuradas para ejecutarse en el navegador Microsoft Edge.

Nota= Normalmente, se eliminan las carpetas node_modules y el archivo package-lock.json antes de subir el código, sin embargo, en esta actividad se especificó subir todos los archivos generados, por lo que también se incluyeron estos. Para poder ejecutar el proyecto de manera local, es recomendable eliminar node_modules y package-lock.json antes de reinstalar las dependencias. los reportes y videos se actualizan con la ejecución en modo run, no es necesario borrarlos.

## Requisitos

- **Node.js**: v18.13.0

## Instalación

Para instalar las dependencias necesarias para ejecutar el proyecto, utiliza el siguiente comando:

npm i

## Dependencias utilizadas 

Cypress: ^13.13.1

Cypress Mochawesome Reporter: ^3.8.2

cypress-plugin-api ^2.11.2

## Comandos de ejecución y generación de reporte, el primero para e2e, el segundo para api y el tercero para ejecutar todo el proyecto

npm run testEdgeSauce     

npm run testEdgeDemoApi

npx cypress run

## Comando para Ejecutar Pruebas en Modo Interactivo

npx cypress open

Este comando abre la interfaz gráfica de Cypress, permitiéndote seleccionar y ejecutar pruebas manualmente. Es especialmente útil para depurar y observar cómo se comporta la aplicación durante la ejecución de las pruebas, ya que puedes ver las interacciones en el navegador como si estuvieras en un entorno real.

## Consideraciones

Para revisar el reporte solo basta con seleccionar el archivo index generado en la carpeta reporte(solo se genera despues de ejecutar las pruebas)

En caso de que no funcione el comando npx, puede deberse a que el node instalado no lo haya incluido por alguna razon, por lo tanto, primero verifica que tiene node actualizado, pero si lo tienes actualizado, instala npx de forma independendiente con el siguiente comando:

npm install -g npx

