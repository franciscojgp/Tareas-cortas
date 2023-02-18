
const regiones = [
    {
        nombre:"Arica y Parinacota",
        atractivos: "texto",
        imagen: "/01.jpg"
    },

    {
        nombre:"Tarapaca",
        atractivos: "texto2",
        imagen: "img/imagen2.jpg"
    },

    {
        nombre:"TAntofagasta",
        atractivos: "texto3",
        imagen: "img/imagen3.jpg"
    },

    {
        nombre:"Atacama",
        atractivos: "texto4",
        imagen: "img/imagen4.jpg"
    },
    
    {
        nombre:"Coquimbo",
        atractivos: "texto5",
        imagen: "img/imagen5.jpg"
    },
        
    {
        nombre:"Valparaíso",
        atractivos: "texto6",
        imagen: "img/imagen6.jpg"
    },
            
    {
        nombre:"Metropolitana",
        atractivos: "texto7",
        imagen: "img/imagen7.jpg"
    },
                
    {
        nombre:"O'Higgins",
        atractivos: "texto8",
        imagen: "img/imagen8.jpg"
    },
                    
    {
        nombre:"Maule",
        atractivos: "texto9",
        imagen: "img/imagen9.jpg"
    },
                        
    {
        nombre:"Biobio",
        atractivos: "texto10",
        imagen: "img/imagen10.jpg"
    },
                            
    {
        nombre:"Araucanía",
        atractivos: "texto11",
        imagen: "img/imagen11.jpg"
    },
                                
    {
        nombre:"Los Ríos",
        atractivos: "texto12",
        imagen: "img/imagen12.jpg"
    },
                                    
    {
        nombre:"Los Lagos",
        atractivos: "texto13",
        imagen: "img/imagen13.jpg"
    },
                                       
    {
        nombre:"Aysén",
        atractivos: "texto14",
        imagen: "img/imagen14.jpg"
    },
                                           
    {
        nombre:"Magallanes",
        atractivos: "texto15",
        imagen: "img/15.jpg",
    },
]

function mostrarDato(region){
    //Buscar objeto
    const datoRegion = regiones.find(r => r.nombre === region);
    if(!datoRegion){
        return;
    }

    //Actualizar datos del card
    document.getElementById('nombre-region').textContent = datoRegion.nombre;
    document.getElementById('atractivos-turisticos').textContent = datoRegion.atractivos;
    document.getElementById('imagen-region').src = datoRegion.imagen;
}