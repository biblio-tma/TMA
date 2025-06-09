// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBUVi9_1rLKMKNe-07mp53ERH-V0iARcso",
  authDomain: "bibliotheque-2006.firebaseapp.com",
  projectId: "bibliotheque-2006",
  storageBucket: "bibliotheque-2006.firebasestorage.app",
  messagingSenderId: "99850488422",
  appId: "1:99850488422:web:a4cb9a8d8dcbb740017ba7",
  measurementId: "G-8HR0MCMMQK"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Fonction d'inscription
function register() {
    let email = document.getElementById("register-email").value;
    let password = document.getElementById("register-password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Inscription réussie !");
            showLogin();
        })
        .catch((error) => {
            alert(error.message);
        });
}

// Fonction de connexion
function login() {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            window.location.href = "bibliotheque.html"; // Redirection après connexion
        })
        .catch((error) => {
            alert(error.message);
        });
}

// Affichage des formulaires
function showRegister() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "block";
}

function showLogin() {
    document.getElementById("register-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}