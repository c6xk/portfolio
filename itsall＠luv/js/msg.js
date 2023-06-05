var imagem = document.querySelector('.imagem');
var mensagem = document.querySelector('.mensagem');

imagem.addEventListener('mousemove', function(event) {
  var x = event.clientX;
  var y = event.clientY;
  
  mensagem.style.left = x + 'px';
  mensagem.style.top = y + 'px';
});
