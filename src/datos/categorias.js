import data from './fotos';
const { fotos } = data;

export default {
	categorias: [
		{ id: 'BlackWhite', nombre: 'Black and White', numeroFotos: fotos['BlackWhite'].length, imagenPortada: './img/america.jpg' },
		{ id: 'IsabellaNoir', nombre: 'Isabella Noir', numeroFotos: fotos['IsabellaNoir'].length, imagenPortada: './img/europa.jpg' },
		{ id: 'estudio', nombre: 'Estudio', numeroFotos: fotos['estudio'].length, imagenPortada: './img/africa.jpg' },
		{ id: 'red', nombre: 'RED', numeroFotos: fotos['red'].length, imagenPortada: './img/asia.jpg' },
		{ id: 'green', nombre: 'GREEN', numeroFotos: fotos['green'].length, imagenPortada: './img/oceania.jpg' },
		{
			id: 'blue',
			nombre: 'BLUE',
			numeroFotos: fotos['blue'].length,
			imagenPortada: './img/antartida.jpg',
		},
	],
};