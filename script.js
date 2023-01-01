const form = document.getElementById("signup-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if (usernameValue === "") {
        // Affiche un message d'erreur si le nom d'utilisateur est vide
        showError(username, "Username cannot be empty");
    } else if (usernameValue.length < 3 || usernameValue.length > 25) {
        // Affiche un message d'erreur si le nom d'utilisateur est trop court ou trop long
        showError(username, "Username must be between 3 and 25 characters");
    } else if (!isValidEmail(emailValue)) {
        // Affiche un message d'erreur si l'email n'est pas valide
        showError(email, "Email is not valid");
    } else if (!isValidPassword(passwordValue)) {
        // Affiche un message d'erreur si le mot de passe ne respecte pas les critères de sécurité
        showError(password, "Password must contain at least 8 characters, including one lowercase letter, one uppercase letter, one number and one special character");
    } else if (passwordValue !== confirmPasswordValue) {
        // Affiche un message d'erreur si les mots de passe ne correspondent pas
        showError(confirmPassword, "Passwords do not match");
    } else {
        // Si tous les champs sont valides, redirige vers la page d'accueil
        window.location = "index.html";
    }
});

function isValidEmail(email) {
    // Vérifie si l'email correspond au pattern RegEx example@example.ma
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPassword(password) {
    // Vérifie si le mot de passe contient au moins 8 caractères, incluant une lettre minuscule, une lettre majuscule, un chiffre et un caractère spécial
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/.test(password);
}

function showError(element, message) {
    // Affiche un message d'erreur près de l'élément spécifié
    const errorElement = element.nextElementSibling;
    element.style.borderColor = "red";
    errorElement.innerText = message;
    errorElement.style.display = "block";
}