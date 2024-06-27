import dataCategorias from '../src/datos/categorias';
const { categorias } = dataCategorias
const contenedorCategotrias = document.getElementById('categorias');

categorias.forEach((categoria) => {
    const nuevaCategoria = document.createElement('a')
    const plantilla = `
    <img class="categoria__img" src="${categoria.imagenPortada}" alt="" />
    <div class="categoria__datos">
        <p class="categoria__nombre">${categoria.nombre}</p>
        <p class="categoria__numero-fotos">${categoria.numeroFotos} Fotos</p>
    </div>
`;

    nuevaCategoria.innerHTML = plantilla;
    nuevaCategoria.classList.add('categoria');
    nuevaCategoria.href = '#';
    nuevaCategoria.dataset.categoria = categoria.id;

    contenedorCategotrias.append(nuevaCategoria);
})