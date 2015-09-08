## Requerimientos
* Node.js v0.12
  * gcc
  * g++
  * make
* MongoDB v3.0
* Redis v3.0
* NPM (viene includo en la instalación de Node.js)
* Bower

## Instalación
La siguiente guía de instalación está basada en sistemas operativos Linux.

### Node.js
Lo primero es descargar el código fuente y compilarlo para tener la versión más reciente, [dando click aquí](https://nodejs.org/dist/v0.12.7/node-v0.12.7.tar.gz).

En el enlace anterior habrás descargado un archivo llamado "node-vX.tar.gz" donde X es la versión actual de Node.js (al día de hoy estamos trabajando en la versión 0.12.7). Lo siguiente es mover el archivo a otra carpeta (de preferencia /opt), extraer el contenido y borrar el archivo tar.gz. Por ejemplo:

```
sudo cp node-v0.12.7.tar.gz /opt
cd /opt
sudo tar -xvzf node-v0.12.7.tar.gz
sudo rm node-v0.12.7.tar.gz
```

Por último, nos movemos a la carpeta generada y ejecutamos las siguientes instrucciones:

```
cd node-v0.12.7/
./configure
sudo make
sudo make install
```

Es muy probable que la instrucción `sudo make` tarde varios minutos en ejecución, es normal. En caso de fallar la instalación, asegúrate de tener los compiladores gcc, g++ o la instrucción make (las instalaciones de éstos son con apt-get install o yum install).

Si la instalación terminó exitósamente, lo único que queda es ver que tengamos la versión correcta (0.12.7) con la instrucción:

```
  node -v
```



