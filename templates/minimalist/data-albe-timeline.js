//Json Object
var data = [
	{
		time: '2015-03-29 09:31:45',
		body: [{
			tag: 'p',
			content: '1 - Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui.'
		}]
	},
	{
		time: '2015-04-15',
		body: [{
			tag: 'p',
			content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui.'
		}]
	},
	{
		time: '2015-03-29 23:59:59',
		body: [{
			tag: 'p',
			content: '3 - Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui. See <a href=\"https://github.com/Albejr/jquery-albe-timeline\" target=\"_blank\">more details</a>'
		}]
	},
	{
		time: '2015-03-29 13:00:15',
		body: [{
			tag: 'p',
			content: '2 - Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui.'
		}]
	}
];

$(document).ready(function () {

	$('#myTimeline').albeTimeline(data, {
		effect: 'bounceInDown',
		showGroup: false,
		formatDate: 'dd de MMMM de yyyy HH:mm'
	});

});