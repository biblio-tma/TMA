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

function payer(idLivre, prix) {
  const phone = prompt("Entrez votre numéro de téléphone pour payer via Cinepay :");
  if (!phone) return;

  const apikey = "6861781986846ea36f23686.63171484";
  const site_id = "105897720";
  const return_url = `https://tonsite.com/telechargement.html?livre=${idLivre}`;

  // 🔁 URL de redirection Cinepay avec tes infos
  const cinepayURL = `https://app.cinepay.sn/pay?apikey=${apikey}&site_id=${site_id}&amount=${prix}&item_ref=${idLivre}&phone_number=${phone}&return_url=${encodeURIComponent(return_url)}`;

  window.location.href = cinepayURL;
}
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("message").textContent = "Message envoyé avec succès !";
});
// Retour à l’accueil
function goToHome() {
    window.location.href = "#accueil";
}
