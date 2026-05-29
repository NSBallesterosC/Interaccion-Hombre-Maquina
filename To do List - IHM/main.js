const { createApp } = Vue;

createApp({
    data() {
        return {
            nuevaTarea: '',
            categoriaActual: 'importante',
            mensaje: '',
            // la tarea tendrá: id, texto, categoría y si está realizada o no.
            tareas: [],
            siguienteId: 1
        };
    },

    // computed sirve para obtener datos filtrados sin crear más arreglos manualmente.
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

    methods: {
        cambiarCategoria(categoria) {
            // Cambia la categoría según el botón que se presione
            this.categoriaActual = categoria;
            this.mensaje = '';
        },

        agregarTarea() {
            // trim quita espacios al inicio y al final.
            let texto = this.nuevaTarea.trim();
            if (texto === '') {
                this.mensaje = '¿Y qué tarea es...? Si sabes que está vacío, ¿no?';
                return;
            }

            // Agrega la nueva tarea con un id, texto, categoría y estado.
            this.tareas.push({
                id: this.siguienteId,
                texto: texto,
                categoria: this.categoriaActual,
                realizada: false
            });

            this.siguienteId++;
            this.nuevaTarea = '';
            this.mensaje = '';
        },

        marcarComoRealizada(id) {
            // find busca una tarea que tenga el mismo id recibido.
            let tareaEncontrada = this.tareas.find(function(tarea) {
                return tarea.id === id;
            });
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
            this.tareas = this.tareas.filter(function(tarea) {
                return tarea.id !== id;
            });
        },

        mostrarCategoria(categoria) {
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