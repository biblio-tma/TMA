// Fonction pour ouvrir/fermer le menu latéral
function toggleMenu() {
    let sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px";
    } else {
        sidebar.style.left = "0px";
    }
}
// Fonction pour la barre de recherche
function searchBooks() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let books = document.getElementsByClassName("livre");

    for (let i = 0; i < books.length; i++) {
        let title = books[i].getAttribute("data-titre").toLowerCase();
        if (title.includes(input)) {
            books[i].style.display = "block";
        } else {
            books[i].style.display = "none";
        }
    }
}

function acheter(titre, prix) {
    let apiKey = "6861781986846ea36f23686.63171484"; // Remplace par ta clé API
    let siteId = "105897720"; // Remplace par ton ID site
    let transactionId = "DOC_" + Date.now(); // Génère un ID unique pour la transaction

    // Redirection vers la page de paiement CinetPay
    let paymentURL = `https://secure.cinetpay.com/?apikey=${apiKey}&site_id=${siteId}&transaction_id=${transactionId}&amount=${prix}&currency=XOF&description=${encodeURIComponent(titre)}&notify_url=https://tonsite.com/notification&return_url=https://tonsite.com/success`;

    window.location.href = paymentURL;
}
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("message").textContent = "Message envoyé avec succès !";
});
// Retour à l’accueil
function goToHome() {
    window.location.href = "#accueil";
}
