// Start med att skapa en div för inloggning


const loginDiv = document.getElementById('loginDiv');
loginDiv.id = 'loginDiv';
loginDiv.classList.add('login-container');
const loginForm = document.createElement('form');
loginForm.id = 'loginForm';
loginForm.classList.add('login-form');
const userInforInput = document.createElement('input');
userInforInput.type = 'text';
userInforInput.placeholder = 'Användarnamn';
userInforInput.id = 'username';
userInforInput.classList.add('login-input');
const passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.placeholder = 'Lösenord';
passwordInput.id = 'password';
passwordInput.classList.add('login-input');
const loginButton = document.createElement('button');
loginButton.type = 'submit';
loginButton.textContent = 'Logga in';
loginButton.classList.add('login-button');
loginForm.appendChild(userInforInput);
loginForm.appendChild(passwordInput);
loginForm.appendChild(loginButton);
loginDiv.appendChild(loginForm);
document.body.appendChild(loginDiv);

const usernameInput = "Fredrik";
const passwordInputValue = "1234";

// Lägg till en event listener för inloggningsformuläret
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Förhindra att formuläret skickas

    const username = userInforInput.value;
    const password = passwordInput.value;

    // Här kan du lägga till din inloggningslogik, t.ex. validering eller API-anrop
    if (username === usernameInput && password === passwordInputValue) {
        console.log('Inloggning lyckades');
    } else {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Felaktigt användarnamn eller lösenord';
        errorMessage.classList.add('error-message');
        loginForm.appendChild(errorMessage);
        
    }
});
