# Albe Timeline <sup>3.0.0</sup>

Plugin jQuery para timeline, simples, mas altamente personalizável. Vai ajudar você a renderizar uma linha de tempo responsiva (CSS e HTML) a partir de dados JSON. 

As informações serão automaticamente agrupadas por ano e a série de eventos serão classificados por data. 

Além disso, este plugin é capaz de lidar com praticamente qualquer tipo de conteúdo, tais como imagens, vídeos, áudios e muito mais.

## Licença de uso
O plugin é de código aberto e liberado para uso comercial sem custo. Peço somente que [me comunique] (http://albertino.eti.br "contato") caso implementá-lo em algum lugar, para que eu possa dar uma olhada ou adicioná-lo aqui como demostração.

## Demostração
| HORIZONTAL  | VERTICAL |
| ------------- | ------------- |
| [Template 1](http://timeline.albertino.eti.br/templates/horizontal/index.html "Template Horizontal")  | [Template 1](http://timeline.albertino.eti.br/templates/vertical/index.html "Template Vertical")  |
|   | [Template 2](http://timeline.albertino.eti.br/templates/simple/index.html "Template Simples")  |
|   | [Template 3](http://timeline.albertino.eti.br/templates/minimalist/index.html "Template Minimalista")  |
|   | [Template 4](http://timeline.albertino.eti.br/templates/audain/index.html "Template Audain Designs")  |

## Requisitos
* Necessário
[Jquery](https://jquery.com)
* Opcional
[Animate CSS](https://daneden.github.io/animate.css)

## Como usar
#### Carregue o plugin e dependências
```html
<link rel="stylesheet" href="style-albe-timeline.css" />

<script src="https://cdn.jsdelivr.net/jquery/1.11.1/jquery.min.js"></script>
<script src="jquery-albe-timeline-3.0.0.min.js"></script>
```
#### Crie a lista de dados
```js
<script type="text/javascript">

   //Objeto Json
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
#### Realize a chamada
```html
<div id="myTimeline"></div>
```
```js
<script type="text/javascript">

  //Objeto Json
  var data = [{...}];
   
  $(document).ready(function () {
      $('#myTimeline').albeTimeline(data);
  });
  
</script>
```
* Instancie com opções:
```js
  //**myTimeline**, define o identificador do elemento que irá receber toda a linha de tempo (por exemplo, uma DIV) e deve ser único para cada timeline na página.
  //**data**, define o objeto Json contendo a lista de dados a serem exibidos.
  
  $('#myTimeline').albeTimeline(data, {
    //Efeito de apresentação dos itens
    //'fadeInUp', 'bounceIn', etc
    effect: 'zoomInUp',
    //Define a visibilidade do agrupador anual
    showGroup: true,
    //Define a visibilidade do menu com ancora para os agrupamentos anuais (depende de 'showGroup')
    showMenu: true,
    //Especifica a linguagem de exibição dos textos (i18n)
    language: 'pt-BR',
    //Define o formato de exibição da data
    //'dd/MM/aaaaa', 'dd de MMMM de aaaaa', etc
    formatDate : 'dd MMMM'
    //Define a ordenação dos itens
    //true: Descendente
    //false: Ascendente
    sortDesc: true,
  });
```
* Especifique a cultura:
```js
$(document).ready(function () {
    
    //Sobrescreve a CutureInfo padrão do plugin
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
#### Estrutura Html
Usando os padrões do plugin, teremos um resultado parecido com isso:
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
## Notas
* O objeto Json também é aceito no formato de string. Por exemplo:
```js
$('#myTimeline').albeTimeline('[{"time": "2016-01-20", "body": [{ "tag": "h1", "content": "Lorem ipsum" }, { "tag": "p", "content": "massa, cursus quisque leo quisque dui." }]}]');
```
  
* O elemento **time** deve atender ao padrão ISO 8601 sempre no formato ano-mês-dia 

  "yyyy-mm-dd"

* Caso haja a necessidade de passar uma classe CSS como atributo do elemento, utilize o nome da prorpiedade **cssclass**. Por exemplo:
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

* Para aspas duplas em atributos, use "escape". Por exemplo:
```js
  body: [{
    tag: 'p',
    content: 'Lorem ipsum dolor sit amet. See <a href=\"https://github.com/Albejr/jquery-albe-timeline\" target=\"_blank\">more details</a>'
    }
  }
```
