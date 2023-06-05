window.addEventListener('DOMContentLoaded', (event) => {
    var imagensHover = document.querySelectorAll('.imagem-hover');

    imagensHover.forEach(function (imagem) {
      var imagemNormal = imagem.getAttribute('src');
      var novaImagem = imagem.getAttribute('data-hover');

      imagem.addEventListener('mouseover', function () {
        trocarImagem(imagem, novaImagem);
      });

      imagem.addEventListener('mouseout', function () {
        trocarImagem(imagem, imagemNormal);
      });
    });

    function trocarImagem(imagem, novaImagem) {
      imagem.src = novaImagem;
    }
  });

  var mensagemHover = document.getElementsByClassName('mensagem-hover');
  var imagensHover = document.querySelectorAll('.imagem-hover');

  imagensHover.forEach(function (imagem) {
    imagem.addEventListener('mouseover', function (event) {
      var mensagem = imagem.nextElementSibling;
      mensagem.style.display = 'block';
    });

    imagem.addEventListener('mouseout', function (event) {
      var mensagem = imagem.nextElementSibling;
      mensagem.style.display = 'none';
    });

    document.addEventListener('mousemove', function (event) {
      var mensagem = imagem.nextElementSibling;
      var x = event.clientX + 20;
      var y = event.clientY + 20;
      mensagem.style.left = x + 'px';
      mensagem.style.top = y + 'px';
    });
  });