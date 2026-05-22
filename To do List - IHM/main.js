// Se toma createApp desde Vue.
// Esta es la forma sencilla de crear una app con Vue 3.
const { createApp } = Vue;

createApp({
    // data guarda toda la información que se usa en la página.
    data() {
        return {
            // Aquí se guarda lo que el usuario escribe en el input.
            nuevaTarea: '',

            // Esta es la categoría seleccionada al iniciar.
            categoriaActual: 'importante',

            // Mensaje para mostrar avisos, por ejemplo si el input está vacío.
            mensaje: '',

            // Arreglo principal donde se guardan todas las tareas.
            // Cada tarea tendrá: id, texto, categoría y si está realizada o no.
            tareas: [],

            // Este número sirve para darle un id diferente a cada tarea nueva.
            siguienteId: 1
        };
    },

    // computed sirve para obtener datos filtrados sin crear más arreglos manualmente.
    // Vue actualiza estas listas automáticamente cuando cambia tareas.
    computed: {
        tareasImportantes() {
            return this.tareas.filter(function(tarea) {
                return tarea.categoria === 'importante' && tarea.realizada === false;
            });
        },

        tareasUrgentes() {
            return this.tareas.filter(function(tarea) {
                return tarea.categoria === 'urgente' && tarea.realizada === false;
            });
        },

        tareasNormales() {
            return this.tareas.filter(function(tarea) {
                return tarea.categoria === 'normal' && tarea.realizada === false;
            });
        },

        tareasRealizadas() {
            return this.tareas.filter(function(tarea) {
                return tarea.realizada === true;
            });
        }
    },

    // methods contiene las funciones que se ejecutan con los botones.
    methods: {
        cambiarCategoria(categoria) {
            // Cambia la categoría según el botón que presione el usuario.
            this.categoriaActual = categoria;

            // Limpia el mensaje para que no quede un aviso viejo.
            this.mensaje = '';
        },

        agregarTarea() {
            // trim quita espacios al inicio y al final.
            let texto = this.nuevaTarea.trim();

            // Si no se escribió nada, se muestra un mensaje y se detiene la función.
            if (texto === '') {
                this.mensaje = 'Debes escribir una tarea antes de agregarla.';
                return;
            }

            // Se agrega la nueva tarea al arreglo tareas.
            this.tareas.push({
                id: this.siguienteId,
                texto: texto,
                categoria: this.categoriaActual,
                realizada: false
            });

            // Se aumenta el id para que la siguiente tarea tenga otro número.
            this.siguienteId++;

            // Se limpia el input después de agregar.
            this.nuevaTarea = '';

            // Se limpia el mensaje.
            this.mensaje = '';
        },

        marcarComoRealizada(id) {
            // find busca una tarea que tenga el mismo id recibido.
            let tareaEncontrada = this.tareas.find(function(tarea) {
                return tarea.id === id;
            });

            // Si se encontró la tarea, se cambia realizada a true.
            // Vue la quita de pendientes y la muestra en realizadas.
            if (tareaEncontrada) {
                tareaEncontrada.realizada = true;
            }
        },

        devolverAPendientes(id) {
            // Busca la tarea por id.
            let tareaEncontrada = this.tareas.find(function(tarea) {
                return tarea.id === id;
            });

            // Si existe, se marca como pendiente otra vez.
            if (tareaEncontrada) {
                tareaEncontrada.realizada = false;
            }
        },

        eliminarTarea(id) {
            // filter crea un nuevo arreglo sin la tarea que tenga ese id.
            this.tareas = this.tareas.filter(function(tarea) {
                return tarea.id !== id;
            });
        },

        mostrarCategoria(categoria) {
            // Esta función convierte el nombre interno en un texto más claro.
            if (categoria === 'importante') {
                return 'Importante';
            }

            if (categoria === 'urgente') {
                return 'Urgente';
            }

            return 'Ni urgente ni importante';
        }
    }
}).mount('#app');