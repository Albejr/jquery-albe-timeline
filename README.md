# Albe Timeline
Crie uma linha do tempo a partir de uma lista de dados em Json, altamente personalizável apenas com CSS e HTML.

Os dados serão agrupados automaticamente pelo ano e a série de eventos ordenada pela data conforme parametro.

Este plugin é capaz de lidar com praticamente qualquer forma de conteúdo (incluindo imagens, vídeo, áudio). 

## Demostração
####HORIZONTAL
[Template 1](http://timeline.albertino.eti.br/horizontal-template1 "Template Horizontal")

####VERTICAL
[Template 1](http://timeline.albertino.eti.br/vertical-template1 "Template Vertical")

## Requisitos
* Necessário
[Jquery](https://jquery.com)
* Opcional
[Animate CSS](daneden.github.io/animate.css)

## Como usar
#### Carregue o plugin e dependências
```html
<link rel="stylesheet" href="style-albe-timeline.css" />

<script src="https://cdn.jsdelivr.net/jquery/1.11.1/jquery.min.js"></script>
<script src="jquery-albe-timeline-1.0.0.min.js"></script>
```
#### Crie a lista de dados
```js
<script type="text/javascript">

  //Json Object
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
              content: 'Lorem ipsum dolor sit amet, nisl lorem.'
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

  $(document).ready(function () {
      $('#myTimeline').albeTimeline(data);
  });
  
</script>
```
* Instancie com opções:
```js
  //**myTimeline**, define o identificador do elemento que irá receber toda a linha de tempo (por exemplo, uma DIV) e deve ser único para cada timeline na página.
  //**data**, define o objeto Json contendo a lista de dados a serem exibidos.
  
  $("#myTimeline").albeTimeline(data, {
    effect: "fadeInUp",
    //Efeito de apresentação dos itens
    //"fadeInUp", "bounceIn", "fadeInUp", etc
    showMenu: true,
    //Define a exibição de um menu com ancora para os agrupamentos de anos
    language: "pt-br",
    //Especifica a linguagem de exibição dos textos
    //"pt-br" ou "en-us"
    sortDesc: true,
    //Especifica se os dados serão ordenados pela data ou exibidos exatamente como estão
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
var data = '[{"time": "2016-01-20", "body": [{ "tag": "h1", "content": "Lorem ipsum" }, { "tag": "p", "content": "massa, cursus quisque leo quisque dui." }]}]';

* O elemento **time** deve atender ao padrão ISO 8601
sempre no formato: [yyyy-mm-dd]

## Licença de uso
O plugin é de código aberto e liberado para uso comercial sem custo. Peço somente que [me comunique] (http://albertino.eti.br "contato") caso implementá-lo em algum lugar, para que eu possa dar uma olhada ou adicioná-lo aqui como demostração.
