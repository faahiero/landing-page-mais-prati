var modal = document.getElementById("contactModal");
var confirmationModal = document.getElementById("confirmationModal");
var okButton = document.getElementById("okButton");
var links = document.querySelectorAll(".menu-links li a");
var btn;
var span = document.getElementsByClassName("close")[0];

for (var i = 0; i < links.length; i++) {
    if (links[i].textContent === 'Contato') {
        btn = links[i];
        break;
    }
}

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Fecha o modal de contato
    modal.style.display = "none";

    // Mostra a tela de confirmação
    confirmationModal.style.display = "block";
});

okButton.addEventListener("click", function() {
    // Fecha a tela de confirmação
    confirmationModal.style.display = "none";

    // Redireciona para a página inicial
    window.location.href = "#";
});