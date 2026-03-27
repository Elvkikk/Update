const registerDiv = document.createElement('div');
registerDiv.id = 'registerDiv';
registerDiv.classList.add('register-container');

document.body.classList.remove('login-view'); 
document.body.classList.add('register-view');

const registerTitle = document.createElement('h2');
registerTitle.id = 'registerTitle';
registerTitle.textContent = 'Biblioteken i Göteborg';
registerTitle.classList.add('register-title');

const registerInfo = document.createElement('p');
registerInfo.textContent = 'Här kan du skaffa ett tillfälligt bibliotekskort hos Biblioteken i Göteborg. Det tillfälliga kortet gäller endast 30 dagar och kan bara användas för att reservera material. Innan du kan låna media, använda våra digitala tjänster eller boka datorer behöver du besöka ett av våra bemannade bibliotek med legitimation (ID-kort, pass eller körkort). \nOm du är under 18 år kan du tyvärr inte skaffa lånekort online, då du måste ha målsmans medgivande.';
registerInfo.id = 'registerInfo';
registerInfo.classList.add('register-info');
registerDiv.appendChild(registerInfo);

const rulesLink = document.createElement('a');
rulesLink.href = 'https://goteborg.se/wps/portal/start/uppleva-och-gora/bibliotek/ditt-bibliotekskonto/laneregler';
rulesLink.textContent = 'Läs om våra låneregler och avgifter.';
rulesLink.id = 'rulesLink';
rulesLink.classList.add('rules-link');
registerDiv.appendChild(rulesLink);

const registerForm = document.createElement('form');
registerForm.id = 'registerForm';
registerForm.classList.add('register-form');

const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.placeholder = 'Förnamn';
nameInput.id = 'name';
nameInput.classList.add('register-input');

const lastNameInput = document.createElement('input');
lastNameInput.type = 'text';
lastNameInput.placeholder = 'Efternamn';
lastNameInput.id = 'lastName';
lastNameInput.classList.add('register-input');

const personalNumberInput = document.createElement('input');
personalNumberInput.type = 'text';
personalNumberInput.placeholder = 'Personnummer (ÅÅMMDD-XXXX)';
personalNumberInput.id = 'personalNumber';
personalNumberInput.classList.add('register-input');


const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.placeholder = 'E-post';
emailInput.id = 'email';
emailInput.classList.add('register-input');

const passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.placeholder = 'Lösenord';
passwordInput.id = 'password';
passwordInput.classList.add('register-input');

const registerButton = document.createElement('button');
registerButton.type = 'submit';
registerButton.textContent = 'Registrera';
registerButton.classList.add('register-button');

registerForm.appendChild(nameInput);
registerForm.appendChild(lastNameInput);
registerForm.appendChild(personalNumberInput);
registerForm.appendChild(emailInput);
registerForm.appendChild(passwordInput);
registerForm.appendChild(registerButton);

registerDiv.appendChild(registerTitle);
registerDiv.appendChild(registerForm);

document.body.appendChild(registerDiv);

registerForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Förhindra att formuläret skickas

    const name = nameInput.value;
    const lastName = lastNameInput.value;
    const personalNumber = personalNumberInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;

    // Logik för att hantera registreringen, t.ex. validering och lagring av användardata
    console.log('Registrering:', { name, lastName, personalNumber, email, password });
    
    // Efter registrering kan du omdirigera användaren eller visa ett meddelande
    alert('Registrering lyckades!');
    window.location.href = 'login.html'; // Omdirigera till inloggningssidan
});

const backButton = document.createElement('button');
backButton.textContent = 'Tillbaka';
backButton.classList.add('back-button');
registerDiv.appendChild(backButton);

backButton.addEventListener('click', function() {
    window.location.href = 'login.html'; 
});