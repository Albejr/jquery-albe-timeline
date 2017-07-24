//Json Object
var data = [
	{
		time: '2015-03-29',
		body: [{
			tag: 'h1',
			content: "Lorem ipsum"
		},
		{
			tag: 'p',
			content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui.'
		}]
	},
	{
		time: '2015-04-15',
		body: [{
			tag: 'h1',
			content: "Lorem ipsum"
		},
		{
			tag: 'p',
			content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui.'
		}]
	},
	{
		time: '2016-01-20',
		body: [{
			tag: 'h1',
			content: "Lorem ipsum"
		},
		{
			tag: 'p',
			content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui. See <a href=\"https://github.com/Albejr/jquery-albe-timeline\" target=\"_blank\">more details</a>'
		}]
	},
	{
		time: '2013-01-20',
		body: [{
			tag: 'h1',
			content: "Lorem ipsum"
		},
		{
			tag: 'p',
			content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui.'
		}]
	}
];

$.fn.albeTimeline.languages = {
	"es-ES": {
		days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
		months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
		shortMonths: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
		msgEmptyContent: "No hay información para mostrar."
	},
	"en-US": {
		days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
		months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		msgEmptyContent: "No information to display."
	},
	"fr-FR": {
		days: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
		months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
		shortMonths: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"],
		msgEmptyContent: "Aucune information à afficher."
	}
};

//Internationalization
$("#myTimeline").albeTimeline(data, {
	language: "fr-FR",
	formatDate: 'DD dd MMMM yyyy'
});