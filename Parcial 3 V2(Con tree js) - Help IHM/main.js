const app = Vue.createApp({

  data() {
    return {
      productos: [
        {
          id: 1,
          nombre: "Acetaminofén",
          categoria: "Medicamento",
          descripcion: "Producto básico para dolor o fiebre.",
          precio: 5000
        },
        {
          id: 2,
          nombre: "Alcohol antiséptico",
          categoria: "Cuidado",
          descripcion: "Producto para limpieza y desinfección.",
          precio: 4500
        },
        {
          id: 3,
          nombre: "Gel antibacterial",
          categoria: "Higiene",
          descripcion: "Producto para limpieza de manos.",
          precio: 7000
        },
        {
          id: 4,
          nombre: "Tapabocas",
          categoria: "Protección",
          descripcion: "Tapabocas para protección y uso diario.",
          precio: 2500
        },
        {
          id: 5,
          nombre: "Curitas",
          categoria: "Primeros auxilios",
          descripcion: "Apósitos pequeños para heridas leves.",
          precio: 3500
        },
        {
          id: 6,
          nombre: "Vitamina C",
          categoria: "Vitaminas",
          descripcion: "Suplemento básico para apoyar las defensas.",
          precio: 12000
        },
        {
          id: 7,
          nombre: "Suero oral",
          categoria: "Hidratación",
          descripcion: "Producto para ayudar en casos de deshidratación.",
          precio: 6000
        },
        {
          id: 8,
          nombre: "Termómetro",
          categoria: "Salud",
          descripcion: "Elemento útil para revisar la temperatura.",
          precio: 18000
        },
        {
          id: 9,
          nombre: "Crema corporal",
          categoria: "Cuidado personal",
          descripcion: "Crema para hidratar y cuidar la piel.",
          precio: 9500
        }
      ],

      carrito: [],

      total: 0,

      nombre: "",
      correo: "",
      telefono: "",
      mensaje: "",

      mensajeEnviado: false
    };
  },

  methods: {

    agregarProducto(producto) {
      this.carrito.push(producto);

      this.total = this.total + producto.precio;
    },

    quitarProducto(posicion) {
      this.total = this.total - this.carrito[posicion].precio;

      this.carrito.splice(posicion, 1);
    },

    vaciarCarrito() {
      this.carrito = [];

      this.total = 0;
    },

    enviarFormulario() {
      this.mensajeEnviado = true;

      this.nombre = "";
      this.correo = "";
      this.telefono = "";
      this.mensaje = "";
    }

  }

});

app.mount("#app");