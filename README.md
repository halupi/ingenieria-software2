## Requerimientos
* Node.js v4.0 o mayor
  * gcc
  * g++
  * make
* MongoDB v3.0
* Redis v3.0
* NPM (viene includo en la instalación de Node.js)
* Bower
* Nodemon

## Instalación
La siguiente guía de instalación está basada en sistemas operativos Linux.

### Node.js
Lo primero es descargar el código fuente y compilarlo para tener la versión más reciente, [dando click aquí](https://nodejs.org/dist/v4.0.0/node-v4.0.0.tar.gz).

En el enlace anterior habrás descargado un archivo llamado "node-vX.tar.gz" donde X es la versión actual de Node.js (al día de hoy estamos trabajando en la versión 4.0.0). Lo siguiente es mover el archivo a otra carpeta (de preferencia /opt), extraer el contenido y borrar el archivo tar.gz. Por ejemplo:

```
sudo cp node-v4.0.0.tar.gz /opt
cd /opt
sudo tar -xvzf node-v4.0.0.tar.gz
sudo rm node-v4.0.0.tar.gz
```

Por último, nos movemos a la carpeta generada y ejecutamos las siguientes instrucciones:

```
cd node-v4.0.0/
./configure
sudo make
sudo make install
```

Es muy probable que la instrucción `sudo make` tarde varios minutos en ejecución, es normal. En caso de fallar la instalación, asegúrate de tener los compiladores gcc, g++ o la instrucción make (las instalaciones de éstos son con apt-get install o yum install).

Si la instalación terminó exitósamente, lo único que queda es ver que tengamos la versión correcta (4.0.0) con la instrucción:

```
  node -v
```

## NPM y Bower
NPM es una herramienta para instalar módulos de Node.js y viene por default en la instalación de Node.js (es decir, se agrego un comando llamado *npm* disponible en terminal). Al contrario, Bower es una herramienta para instalar bibliotecas del cliente como Bootstrap, JQuery, AngularJS, KnockoutJS entre otros y se instala vía npm de la siguiente manera:

```
 sudo npm install -g bower
```

Al terminar la instalación tendremos a disposición el comando bower (se puede probar similar a node, `bower -v`).

### MongoDB
El proceso de instalación depende de cada sistema operativo por lo cual en la página oficial de MongoDB viene con detalle cómo instalarlo según el sistema operativo que tengan. Pueden consultar [el proceso de instalación en el siguiente enlace](http://docs.mongodb.org/manual/installation/)

Una vez instalado tendremos a nuestra disposición los comandos *mongo* y *mongod*.

Es posible que tengamos que iniciar MongoDB manualmente (en cada reinicio de máquina por ejemplo), por lo cuál las instrucciones para hacerlo son las siguientes:

1. Si es la primera vez que vas a ejecutar MongoDB debemos tener una carpeta llamada data en la raíz del sistema. La podemos crear con la siguiente instruccion: `sudo mkdir -p /data/db`
2. Para iniciar el proceso de MongoDB en terminal tenemos que ejecutar lo siguiente: `sudo mongod`
3. Para abrir la consola de MongoDB (donde se realizan consultas y demás cosas de administración) lo podemos hacer ejecutando lo siguiente: `mongo`

### Nodemon
Es una herramienta que recarga automáticamente el servidor si alguno de sus archivos es modificado. Se instala vía NPM y se hace de la siguiente manera: `sudo npm install -g nodemon`.

## Estructura del proyecto
En general, la estructura se divide en 2 partes; **app** y **public**.

### App
Aquí se encuentran todos los archivos relacionados con el servidor; rutas, manejadores, base de datos, ect. A continuación mencionaré para que sirve cada uno:

* **modules**: Contiene código auxiliar, funciones, objetos, etc, independientes de la lógica de los modelos o de las rutas, como por ejemplo parsear un archivo Excel, tener información global, hacer cálculos estadísticos, etc.
* **schemas**: Contiene las definiciones de las entidades que participan en la base de datos. Se definen mediante JSON y se pueden agregar validaciones o referencias hacia otros schemas. Más información en el [siguiente enlace](http://mongoosejs.com/docs/guide.html).
* **models**: Son instancias de los schemas y además se les puede agregar métodos que sean parte de la lógica del modelo. Más información en el [siguiente enlace](http://mongoosejs.com/docs/models.html).
* **routes**: Contiene las definiciones de las rutas disponibles en el sistema, por ejemplo */login*, */index*, etc. Cada archivo debe contener las deficiones necesarias de GET, POST, DELETE y PUT con el siguiente formato:
 * ``` { ruta: "carpeta.carpeta.carpeta...carpeta.archivo" } ```
* **request**: Contiene la lógica que se va a ejecutar en la ruta que especificamos. Deben ser funciones que contengan 2 parámetros; *request y response*.
 * ```module.exports = function(request, response){ /* Código */ }```
 
Para resaltar el uso de las carpetas **request** y **routes** veamos el siguiente ejemplo:

Si queremos hacer que al ingresar a la ruta */hello/world* nos imprima el texto "hello world", hariamos lo siguiente:

* Crear el archivo request con cualquier nombre, digamos *hello.js*, y lo asignaremos a la carpeta test (esto para organizarlos ya que tendremos tantos archivos como rutas definamos).
* El contenido del archivo */request/test/hello.js* debería ser el siguiente:
 * ```module.exports = function(request, response){ response.end("Hello World"); }```
* Ahora tenemos que definir la ruta y decirle que archivo de la carpeta request va a ocupar.
 * Como se va a visualizar en el navegador se trata de una petición GET, y como el archivo que queremos ocupar es *test/hello.js* por lo tanto se traduce a "test.hello", quedando de la siguiente forma:
 * ```exports.get = { "/hello/world": "test.hello" }``` 

## Ejecución del proyecto
Ubicados en la raíz del proyecto ejecutamos lo siguiente: `nodemon app/app.js`.
