//Json Object
var data = [{
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
            content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui.'
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

//Json String
var str = '[{"time": "2015-03-29", "header": "Sample of header", "body": [{ "tag": "h1", "content": "Lorem ipsum" }, { "tag": "p", "content": "massa, cursus quisque leo quisque dui." }], "footer": "Sample of footer"}]';

$(document).ready(function () {

    //Call function with JSON OBJECT
    $("#myTimeline").albeTimeline(data, {
        //effect: "zoomIn",
        showMenu: true,
        //sortDesc: false,
        //language: "en-us"
    });

    //Call function with STRING
    //$("#myTimeline").albeTimeline(str);

});