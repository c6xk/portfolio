 function openModal(modalNumber) {
      var modal = document.getElementById("myModal" + modalNumber);
      modal.style.display = "block";
    }

    // Função para fechar o modal
    function closeModal(modalNumber) {
      var modal = document.getElementById("myModal" + modalNumber);
      modal.style.display = "none";
    }

    // Função para fechar o modal ao clicar fora dele
    window.onclick = function(event) {
      if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
      }
    };


