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

// Importation du SDK CinetPay
<script src="https://cdn.cinetpay.com/seamless/main.js" type="text/javascript"></script>

// Initialisation des paramètres
CinetPay.setConfig({
    apikey: '6861781986846ea36f23686.63171484', // Remplacez par votre clé API
    site_id: 105897720, // Remplacez par votre ID de site
    notify_url: 'https://mondomaine.com/notify/', // URL de notification
    close_after_response: true // Fermer le guichet après paiement
});

// Fonction pour déclencher le paiement
function effectuerPaiement(transactionId, montant, description) {
    CinetPay.getCheckout({
        transaction_id: transactionId,
        amount: montant,
        currency: 'XOF',
        channels: 'ALL',
        description: description,
        customer_name: "NomClient",
        customer_surname: "PrenomClient",
        customer_email: "client@email.com",
        customer_phone_number: "088767611",
        customer_address: "AdresseClient",
        customer_city: "VilleClient",
        customer_country: "CM",
        customer_state: "CM",
        customer_zip_code: "06510"
});
}

// Gestion du retour après paiement
CinetPay.waitResponse(function(data) {
    if (data.status === "ACCEPTED") {
        alert("Paiement réussi!");
} else {
        alert("Paiement échoué!");
}
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("message").textContent = "Message envoyé avec succès !";
});
// Retour à l’accueil
function goToHome() {
    window.location.href = "#accueil";
}
