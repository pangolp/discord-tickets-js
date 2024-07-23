# Sistema de tickets

Este sencillo bot, lo que hace, es que mediante un menú con opciones, le permite a las personas, acceder a la posibilidad de crear un ticket. También prevee que si alguien tiene un ticket abierto, pueda crear otro. No transcribe por el momento los mensajes del ticket, por lo que una vez que el ticket se cierra, no queda ningún registro del mismo.

## ¿Como se usa el bot?

Puede descargar la ultima versión disponible del bot, mediante este [enlace](https://github.com/pangolp/discord-tickets-js/releases/download/1.0/discord-tickets-js.zip). Descomprima la carpeta, abra una consola, posicione dentro de ella, e instale todas las dependencias necesarias con el comando `npm install`. Luego, debe renombrar el archivo `.env.dist` a `.env` y dentro del mismo, configurar todas las credenciales necesarias.

- TOKEN: Es el token que va a utilizar el bot, y se obtiene de la web de desarrolladores de discord.
- CHANNEL_ID: Es el ID del canal, donde se crea el menú, con el cual, las personas van a interactuar.
- TICKET_CATEGORY_ID: Es el id de la categoría, donde se crean los canales (o tickets).
- MODERATION_ROLE: Rol que tiene acceso, ademas del dueño, para interactuar y dar soporte a los tickets.

Si usted descarga el bot, el mismo, debería de contener, estos archivos y estas carpetas.

```
discord-tickets-js/
|-- commands
|   `-- menu.js
|-- index.js
|-- interactions
|   |-- ticket-close.js
|   `-- ticket-create.js
|-- package-lock.json
`-- package.json

2 directories, 6 files
```

- directories = carpetas.
- files = archivos.

Para crear el menú, una vez que tenga el fichero `.env` configurado con todo lo menciona anteriormente. Enciende el bot, con el comando `node index.js` o `node .` y escribe en algún canal, el comando `!menu`. Ese comando, se cargada de crear el menú, con el que las personas van a interactuar. En la medida, en que las personas vayan interactuando con el menu, se crearan nuevos tickets, dentro de la categoría que usted configuro. Revise que todos los datos sean correctos.

## Si usted es programador

Puede clonar el repositorio, crear una rama local, realizar los cambios, subir dicha rama, y luego, crear un pull request, para que podamos analizar esos cambios, y fusionarlos con la rama principal. Una vez creada la rama, y mientras la misma, se mantenga abierta, puede seguir subiendo commits a ella, con las diferentes modificaciones que considere o con los cambios que se les pida.

## Si tiene fallos o quiere reportar algún error

Puede crear un [issue](https://github.com/pangolp/discord-tickets-js/issues/new/choose), donde deberá de completar un pequeño formulario, indicando el fallo, como reproducirlo, y lo esperaría que no ocurra. Junto con los datos del sistema operativo, la versión de node utilizada.
