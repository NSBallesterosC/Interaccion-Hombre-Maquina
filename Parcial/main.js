const { createApp } = Vue;

createApp({
  data() {
    return {
      verBarra: true,
      carrito: 2,
      correo: '',
      mensajeCorreo: '',

      categoria: 'todos',
      precio: 'todos',
      orden: 'normal',

      productos: [
        {
          id: 1,
          nombre: 'Coca',
          precio: 100000.99,
          precioAnterior: 100.10,
          categoria: 'medicinal',
          nuevo: true,
          descuento: 30,
          imagen: 'https://odysseedubienetre.be/img/organic-products/790/10-surprising-benefits-coca-plant.jpg',
          descripcion: 'Sirve para lo qe ya sabes que sirve.'
        },
        {
          id: 2,
          nombre: 'maca',
          precio: 100000.99,
          precioAnterior: null,
          categoria: 'Hierbita Maliciosa',
          nuevo: true,
          descuento: null,
          imagen: 'https://ervanarium.com.br/wp-content/uploads/2019/09/Maca-peruana.jpg',
          descripcion: 'Hierba medicinal de origen andino, conocida por sus propiedades energizantes y mejoras en el rendimiento físico.'
        },
        {
          id: 3,
          nombre: 'yerba mate',
          precio: 100000.99,
          precioAnterior: null,
          categoria: 'Para curar',
          nuevo: false,
          descuento: null,
          imagen: 'https://th.bing.com/th/id/R.9970bf005d3c5b53acab3e3ef25739ac?rik=UriWgk8fu%2b%2boZA&pid=ImgRaw&r=0',
          descripcion: 'Hierba medicinal de origen indigena, conocida por sus propiedades energizantes y mejoras en el rendimiento físico.'
        },
        {
          id: 4,
          nombre: 'epazote',
          precio: 100000.99,
          precioAnterior: null,
          categoria: 'El sueño',
          nuevo: true,
          descuento: null,
          imagen: 'https://tse3.mm.bing.net/th/id/OIP.0-I5_NXJJ6LaCfa6Ex63TwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
          descripcion: 'Hierbita maliciosa de origen andino, conocida por sus propiedades energizantes y mejoras en el rendimiento físico.'
        },
        {
          id: 5,
          nombre: 'albaca',
          precio: 100000.99,
          precioAnterior: null,
          categoria: 'Para curar',
          nuevo: false,
          descuento: null,
          imagen: 'img/game.png',
          descripcion: 'image/1080/3C079DAE13EF4B14AC17E45B9FF1366C.jpeg'
        },
        {
          id: 6,
          nombre: 'De otra coquita',
          precio: 10000000000.99,
          precioAnterior: null,
          categoria: 'medicinal',
          nuevo: false,
          descuento: null,
          imagen: 'https://odysseedubienetre.be/img/organic-products/790/10-surprising-benefits-coca-plant.jpg',
          descripcion: 'Te mandara al cielo, literalmente, es la coca mas potente del mundo, no se recomienda su consumo a menores de 100 años.'
        }
      ]
    };
  },

  computed: {
    productosFiltrados() {
      let lista = this.productos;

      if (this.categoria !== 'todos') {
        lista = lista.filter(producto => producto.categoria === this.categoria);
      }

      if (this.precio === 'bajo') {
        lista = lista.filter(producto => producto.precio <= 100);
      }

      if (this.precio === 'medio') {
        lista = lista.filter(producto => producto.precio > 100 && producto.precio <= 400);
      }

      if (this.precio === 'alto') {
        lista = lista.filter(producto => producto.precio > 400);
      }

      if (this.orden === 'menor') {
        lista = lista.slice().sort((a, b) => a.precio - b.precio);
      }

      if (this.orden === 'mayor') {
        lista = lista.slice().sort((a, b) => b.precio - a.precio);
      }

      return lista;
    }
  },

  methods: {
    cerrarBarra() {
      this.verBarra = false;
    },

    agregarCarrito() {
      this.carrito++;
    },

    registrarCorreo() {
      if (this.correo === '') {
        this.mensajeCorreo = 'Escribe un correo primero chistoso.';
      } else {
        this.mensajeCorreo = 'Registro realizado correctamente :D.';
        this.correo = '';
      }
    }
  }
}).mount('#app');