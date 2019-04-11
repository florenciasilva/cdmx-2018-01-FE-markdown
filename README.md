# Módulo md-links

mdLinks nace de la necesidad de mantener nuestros README actualizados y sin ningún link roto.
Éste módulo recorre archivos .md, encontrando URLs y haciendo una petición HTTP/s para validar su estado. 
En éste proyecto se utiliza: [CommanderJS](https://github.com/tj/commander.js/), [Node-Fetch](https://github.com/bitinn/node-fetch) y módulos nativos de NPM. 

Para Tests, se utiliza [Jest](https://jestjs.io/)

## Comandos

#### En Linea de Comandos
``` mdLinks ``` para encontrar URLs en archivos ```.md```

```--validate``` para hacer la petición HTTP/s

```--validate --stats ``` para hacer un conteo de cuantos links están activos y cuantos están rotos.

```mdLinks``` devolverá en consola un arreglo de URLs. Al aplicarle ```--validate``` nos devolvera, por linea, la URL y su número de status. *Ejemplo*:

> https://google.com 200

> https://twitter.com 200


## Instalación

Para utilizar MdLinks, primero necesitas hacer ```git clone``` de éste repositorio. Una vez clonado, ```cd modulo-npm-markdown-links``` y luego ```npm link```.
Una vez terminado, podrás correr los comandos ```mdLinks```, ```mdLinks --validate``` y ```mdLinks --stats```

