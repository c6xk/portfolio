
    function openModal(modalId) {
      var modal = document.getElementById("myModal" + modalId);
      modal.style.display = "block";
    }

    function closeModal(modalId) {
      var modal = document.getElementById("myModal" + modalId);
      modal.style.display = "none";
    }

    window.addEventListener("click", function(event) {
      var modals = document.getElementsByClassName("modal");
      for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
          modals[i].style.display = "none";
        }
      }
    });
