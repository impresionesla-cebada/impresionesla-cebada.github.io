const grid = new Muuri('.grid', {
    layout: {
        rounding: false,
    }
});

window.addEventListener('load', () => {
	grid.refreshItems();
	grid.refreshItems().layout();

	document.getElementById('grid').classList.add('imagenes-cargadas');


	// Agregamos los listener de los enlaces para filtrar por categoria.
	const enlaces = document.querySelectorAll('#categorias a');
	enlaces.forEach((elemento) => {
		elemento.addEventListener('click', (evento) => {
            // primero remover la clase "activo" de todos los enlaces
			evento.preventDefault();
			enlaces.forEach((enlace) => enlace.classList.remove('activo'));
            // Luego agregar la clase "activo", cuando se haga click
			evento.target.classList.add('activo');

            // obterer la categoria clickeada para el filtrado
			const categoria = evento.target.innerHTML.toLowerCase();
            // utilizar el metodo de mmauui: grid.filter
            // https://github.com/haltu/muuri#grid-method-filter

            // si categoria == todos: muestra todos (porque todos tienen el atributo data-categoria)
            // si categoria != todos: filtra la categoria clickeada
			categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
		});
	});

    // document.querySelector('#etiquetas_furry a').addEventListener('click', (evento) => {
	// 	const busqueda = evento.target.value;
    //     // filtrar por elemento escrito (input)
	// 	grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda) );
	// });

    // Agregamos los listener de los enlaces para filtrar por etiqueta.
	const enlaces_e = document.querySelectorAll('#etiquetas_lista a span');
	enlaces_e.forEach((elemento) => {
		elemento.addEventListener('click', (evento) => {
            // obterer la categoria clickeada para el filtrado
			const etiqueta = evento.target.innerHTML.toLowerCase();
            // console.log(etiqueta)
            // utilizar el metodo de mmauui: grid.filter
            // https://github.com/haltu/muuri#grid-method-filter

            grid.filter( (item) => item.getElement().dataset.etiquetas.includes(etiqueta) );
		});
	});

	// Agregamos el listener para la barra de busqueda
	document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
        // obtener el input y ponerlo en una variable
		const busqueda = evento.target.value.toLowerCase();
        // filtrar por elemento escrito (input)
		grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda) );
	});

	// Agregamos listener para las imagenes
	const overlay = document.getElementById('overlay');
	document.querySelectorAll('.grid .item img').forEach((elemento) => {
		elemento.addEventListener('click', () => {
			const ruta = elemento.getAttribute('src');
			const descripcion = elemento.parentNode.parentNode.dataset.descripcion;

			overlay.classList.add('activo');
			document.querySelector('#overlay img').src = ruta;
			document.querySelector('#overlay .descripcion').innerHTML = descripcion;
		});
	});

	// Eventlistener del boton de cerrar
	document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
		overlay.classList.remove('activo');
	});

	// Eventlistener del overlay
	overlay.addEventListener('click', (evento) => {
		evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
	});
});





$(function(){
    // redes sociales: aside

    // whats app
    var popover = new bootstrap.Popover(document.querySelector('.redes_sociales--enlace'), {
        container: 'body'
    });
    // correo
    var popover = new bootstrap.Popover(document.querySelector('.show'), {
        container: 'body'
    });
});