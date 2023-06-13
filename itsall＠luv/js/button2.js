const gifElement = document.querySelector('#chuva');
      const button = document.querySelector('.button2');

      // Adiciona um ouvinte de evento de clique para alternar a visibilidade do GIF
      button.addEventListener('click', function() {
        if (gifElement.style.display === 'none') {
          gifElement.style.display = 'block';
        } else {
          gifElement.style.display = 'none';
        }
      });