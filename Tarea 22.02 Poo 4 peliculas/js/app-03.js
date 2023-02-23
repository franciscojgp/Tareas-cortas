//Crear clase

class Pelicula {//clase
    constructor(titulo, director, genero, duracion, fechaEstreno, img){//contructo
        this.titulo = titulo;//atributo
        this.director = director;
        this.genero = genero;
        this.duracion = duracion;
        this.fechaEstreno = fechaEstreno;
        this.img = img;
    }

    creaTrajeta(){//Metodo
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('pelicula', 'card', 'row-cols', 'mt-3', 'mb-3');

        const titulo = document.createElement('h1', 'card-title');
        titulo.textContent = this.titulo;
        tarjeta.appendChild(titulo);

        const imagen = document.createElement('img', 'img-fluid', 'card-img-top');
        imagen.src = this.img ;
        imagen.alt = this.titulo;
        tarjeta.appendChild(imagen);

        const director = document.createElement('p', 'card-text');
        director.textContent = this.director;
        tarjeta.appendChild(director);

        const genero = document.createElement('p','card-text');
        genero.textContent = this.genero;
        tarjeta.appendChild(genero);

        const duracion = document.createElement('p', 'card-text');
        duracion.textContent = this.duracion;
        tarjeta.appendChild(duracion);

        const fechaEstreno = document.createElement('p', 'card-text');
        fechaEstreno.textContent = this.fechaEstreno;
        tarjeta.appendChild(fechaEstreno);

        return tarjeta;

    }
}

//PELICULA 1
const pelicula1 = new Pelicula(
    'Pelicula: Titanic',
    'Director: James Cameron',
    'Género: Drama',
    'Duración: 3:16 min',
    'Fecha Estreno: 3 de febrero de 1998',
    'https://i.blogs.es/4a9cb1/titanic/1366_2000.jpeg'
);
// cramos la tarjeta en el HTML
const tarjetaPelicula = pelicula1.creaTrajeta();
//Agregamos el elemento(tarjeta) al div
const contenedorPeliculas = document.querySelector('#pelicula');
contenedorPeliculas.appendChild(tarjetaPelicula);


//PELICULA 2
const pelicula2 = new Pelicula(
    'Pelicula: Terminator',
    'Director: James Cameron',
    'Género: Acción',
    '2:00 hrs.',
    '3 de febrero de 1998',
    'https://i.blogs.es/eebb0e/terminator/1366_2000.jpeg'
);
// cramos la tarjeta en el HTML
const tarjetaPelicula2 = pelicula2.creaTrajeta();
//Agregamos el elemento(tarjeta) al div
const contenedorPeliculas2 = document.querySelector('#pelicula');
contenedorPeliculas2.appendChild(tarjetaPelicula2);

//PELICULA 3
const pelicula3 = new Pelicula(
    'Avatar',
    'James Cameron',
    'Drama, acción',
    '3:00 hrs.',
    '3 de febrero de 2010',
    'https://i.blogs.es/ff2fb0/scale/1366_2000.jpeg'
);
// cramos la tarjeta en el HTML
const tarjetaPelicula3 = pelicula3.creaTrajeta();
//Agregamos el elemento(tarjeta) al div
const contenedorPeliculas3 = document.querySelector('#pelicula');
contenedorPeliculas3.appendChild(tarjetaPelicula3);

//PELICULA 4
const pelicula4 = new Pelicula(
    'Aliens: el regreso',
    'James Cameron',
    'Acción',
    '3:16 hrs',
    '3 de febrero de 1998',
    'https://i.blogs.es/7f9fa3/aliens-newt-ripley/1366_2000.jpeg'
);
// cramos la tarjeta en el HTML
const tarjetaPelicula4 = pelicula4.creaTrajeta();
//Agregamos el elemento(tarjeta) al div
const contenedorPeliculas4 = document.querySelector('#pelicula');
contenedorPeliculas4.appendChild(tarjetaPelicula4);


const enlaceArriba = document.querySelector('#ir-arriba');

enlaceArriba.addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo(0, 0);
});

