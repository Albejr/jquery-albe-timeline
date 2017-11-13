# Albe Timeline <sup>3.0.0</sup>

Albe Timeline is a simple yet highly customizable jQuery plugin that helps you render a responsive horizontal (or vertical) timeline from JSON data. 

The data will be automatically grouped by year and the events will be sorted by date. 

In addition, this plugin is able to handle almost any type of content such as images, videos, audios and more.

## Use license
The plugin is open source and released for commercial use without cost. I only ask you to [contact me](http://albertino.eti.br/#collapse5 "contact") if you implement it somewhere, so I can take a look or add it here as a demonstration.

[![donate](https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=NHMCJ2R4A83RW)

## Demonstration
| HORIZONTAL  | VERTICAL |
| ------------- | ------------- |
| [Template 1](https://albejr.github.io/jquery-albe-timeline/templates/horizontal/index.html "Template Horizontal")  | [Template 1](https://albejr.github.io/jquery-albe-timeline/templates/vertical/index.html "Template Vertical")  |
|   | [Template 2](https://albejr.github.io/jquery-albe-timeline/templates/simple/index.html "Template Simples")  |
|   | [Template 3](https://albejr.github.io/jquery-albe-timeline/templates/minimalist/index.html "Template Minimalista")  |
|   | [Template 4](https://albejr.github.io/jquery-albe-timeline/templates/audain/index.html "Template Audain Designs")  |

## Requirements
* Required
[Jquery](https://jquery.com)
* Optional
[Animate CSS](https://daneden.github.io/animate.css)

## Installation
### Bower:
```html
$ bower install jquery-albe-timeline --save
```
### Nodejs:
```html
$ npm install jquery-albe-timeline --save
```

## How to use
#### Load the plugin and dependencies
```html
<link rel="stylesheet" href="style-albe-timeline.css" />

<script src="https://cdn.jsdelivr.net/jquery/1.11.1/jquery.min.js"></script>
<script src="jquery-albe-timeline.min.js"></script>
```
#### Create the data list
```js
<script type="text/javascript">

   //Json object
   var data = [{
         time: '2015-03-29',
         header: 'Sample of header',
         body: [{
               tag: 'h1',
               content: 'Lorem ipsum'
            },
            {
               tag: 'p',
               content: 'Lorem ipsum dolor sit amet, nisl lorem.'
         }],
         footer: 'Sample of footer'
      },
      {
         time: '2016-01-20',
         body: [{
               tag: 'h2',
               content: 'Sample with link'
            },
            {
               tag: 'a',
               content: 'MY LINK',
               attr: {
                  href: 'http://albertino.eti.br',
                  target: '_blank',
                  title: 'Albertino Júnior'
               }
         }]
      }
   ];

</script>
```
#### Make the call
```html
<div id="myTimeline"></div>
```
```js
<script type="text/javascript">

  //Json object
  var data = [{...}];
   
  $(document).ready(function () {
      $('#myTimeline').albeTimeline(data);
  });
  
</script>
```
* Instance with options:
```js
  //**myTimeline**, sets the identifier of the element that will receive the entire timeline (for example, a DIV) and must be unique for each timeline on the page.
  //**data**, defines the Json object containing the list of data to be displayed.
  
  $('#myTimeline').albeTimeline(data, {
    //Effect of presentation
    //'fadeInUp', 'bounceIn', etc
    effect: 'zoomInUp',
    //Sets the visibility of the annual grouper
    showGroup: true,
    //Sets the anchor menu visibility for annual groupings (depends on 'showGroup')
    showMenu: true,
    //Specifies the display language of texts (i18n)
    language: 'pt-BR',
    //Sets the date display format
    //'dd/MM/yyyy', 'dd de MMMM de yyyy', etc
    formatDate : 'dd MMMM',
    //Defines ordering of items
    //true: Descendente
    //false: Ascendente
    sortDesc: true
  });
```
* Set the culture:
```js
$(document).ready(function () {
    
    //Overrides the CutureInfo default plugin
    $.fn.albeTimeline.languages = {
        "en-US": {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            msgEmptyContent: "No information to display."
        },
        "es-ES": {
            days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
            months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            shortMonths: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
            msgEmptyContent: "No hay información para mostrar."
        },
        "fr-FR": {
            days: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
            months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            shortMonths: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"],
            msgEmptyContent: "Aucune information à afficher."
        }
    };

    //Internationalization
    $('#myTimeline').albeTimeline(data, {
        language: 'fr-FR',	//default: pt-BR
        formatDate: 'DD, dd MMMM aaaaa'
    });

});
```
#### Html Structure
Using the plugin defaults, we'll have a similar result:
```html
  <div id="myTimeline">
    <section id="timeline">
      <div id="year2016" class="group2016">2016</div>
      <article class="animated fadeInUp">
        <div class="panel">
          <div class="badge">20 Jan</div>
          <div class="panel-body">
            <img src="../img/qrcode.png" width="150px" class="img-responsive">
            <h2>Sample with image</h2>
            <p>Lorem ipsum dolor sit amet, nisl lorem.</p>
          </div>
        </div>
      </article>
      <div id="year2015" class="group2015">2015</div>
      <article class="animated fadeInUp inverted">
        <div class="panel">
          <div class="badge">29 Mar</div>
          <div class="panel-heading">
            <h4 class="panel-title">Sample of header</h4>
          </div>
          <div class="panel-body">
            <h1>Lorem ipsum</h1>
            <p>Lorem ipsum dolor sit amet, nisl lorem.</p>
          </div>
          <div class="panel-footer">Sample of footer</div>
        </div>
      </article>
      <article class="animated fadeInUp">
        <div class="panel">
          <div class="badge">&nbsp;</div>
        </div>
      </article>
      <div class="clearfix" style="float: none;"></div>
    </section>
  </div>
```
## Notes
* The Json object is also accepted in string format. For example:
```js
$('#myTimeline').albeTimeline('[{"time": "2016-01-20", "body": [{ "tag": "h1", "content": "Lorem ipsum" }, { "tag": "p", "content": "massa, cursus quisque leo quisque dui." }]}]');
```
  
* The **time** element must meet the ISO 8601 standard always in year-month-day format "yyyy-mm-dd"

* If you need to pass a CSS class as an element attribute, use the property name **cssclass**. For example:
```js
  body: [{
    tag: 'img',
    attr: {
      src: '../img/qrcode.png',
      width: '150px',
      cssclass: 'img-responsive'
    }
  }
```

* For double quotes in attributes, use "escape". For example:
```js
  body: [{
    tag: 'p',
    content: 'Lorem ipsum dolor sit amet. See <a href=\"https://github.com/Albejr/jquery-albe-timeline\" target=\"_blank\">more details</a>'
    }
  }
```
