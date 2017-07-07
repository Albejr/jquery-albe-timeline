//Json Object
var data = [
	{
		time: '2015-03-29',
		header: 'Sample of header',
		body: [{
			tag: 'h1',
			content: "Lorem ipsum"
		},
		{
			tag: 'p',
			content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui.'
		}],
		footer: 'Sample of footer. See <a href=\"https://github.com/Albejr/jquery-albe-timeline\" target=\"_blank\">more details</a>'
	},
	{
		time: '2015-04-15',
		body: [{
			tag: 'h1',
			content: "Basic content"
		},
		{
			tag: 'p',
			content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui.'
		}],
	},
	{
		time: '2016-01-20',
		body: [{
			tag: 'img',
			attr: {
				src: '../img/qrcode.png',
				width: '150px',
				cssclass: 'img-responsive'
			}
		},
		{
			tag: 'h2',
			content: 'Sample with image'
		},
		{
			tag: 'p',
			content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui. See <a href=\"https://github.com/Albejr/jquery-albe-timeline\" target=\"_blank\" class=\"mylink\">more details</a>'
		}]
	},
	{
		time: '2013-01-20',
		body: [{
			tag: 'img',
			attr: {
				src: '../img/girl.png',
				width: '100px',
				cssclass: 'img-responsive'
			}
		},
		{
			tag: 'h2',
			content: 'Sample with image rigth'
		},
		{
			tag: 'p',
			content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui.'
		}]
	}
];

$(document).ready(function () {

	$("#myTimeline").albeTimeline(data);

});