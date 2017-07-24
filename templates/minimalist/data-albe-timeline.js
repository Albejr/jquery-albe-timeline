//Json Object
var data = [
	{
		time: '2015-03-29',
		body: [{
			tag: 'p',
			content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui.'
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
		time: '2016-01-20',
		body: [{
			tag: 'p',
			content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui. See <a href=\"https://github.com/Albejr/jquery-albe-timeline\" target=\"_blank\">more details</a>'
		}]
	},
	{
		time: '2013-01-20',
		body: [{
			tag: 'p',
			content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui.'
		}]
	}
];

$(document).ready(function () {

	$('#myTimeline').albeTimeline(data, {
		effect: 'bounceInDown',
		showGroup: false,
		formatDate: 'dd de MMMM de yyyy'
	});

});