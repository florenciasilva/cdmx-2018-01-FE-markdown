# Módulo md-links

md-links nace de la necesidad de mantener nuestros README actualizados y sin ningún link roto.
Éste módulo recorre archivos .md, encontrando URLs y haciendo una petición HTTP/s para validar su estado. 
En éste proyecto se utiliza: [CommanderJS](https://github.com/tj/commander.js/), [Node-Fetch](https://github.com/bitinn/node-fetch) y módulos nativos de NPM. 

Para Tests, se utiliza [Jest](https://jestjs.io/)

## Comandos

#### En Linea de Comandos
``` md-links ``` para encontrar URLs en archivos ```.md```

```--validate``` para hacer la petición HTTP/s

```--validate --stats ``` para hacer un conteo de cuantos links están activos y cuantos están rotos.

```md-links``` devolverá en consola un arreglo de URLs. Al aplicarle ```--validate``` nos devolvera, por linea, la URL y su número de status. *Ejemplo*:

> https://google.com 200

> https://twitter.com 200


## Instalación

Ubicate en la carpeta del proyecto que quieres analizar y en consola escribe:  
```npm install https://github.com/florenciasilva/cdmx-2018-01-FE-markdown.git ```

Una vez que la instalación haya terminado, ya puedes utilizar los comandos ```md-links``` con sus opciones ```--validate``` y ```--stats```

