const heading = document.createElement('h1');
heading.textContent = 'Biblioteken i Göteborg';
heading.classList.add('password-heading');

document.body.classList.remove('login-view');
document.body.classList.add('password-view');

const passwordDiv = document.createElement('div');
passwordDiv.id = 'passwordDiv';
passwordDiv.classList.add('password-container');
passwordDiv.appendChild(heading);

const passwordInfo = document.createElement('p');
passwordInfo.textContent = 'För att logga in på ditt bibliotekskonto behöver du ange ditt användarnamn och lösenord. Om du har glömt ditt lösenord kan du klicka på "Har du glömt din PIN-kod?" för att återställa det.';
passwordInfo.classList.add('password-info');
passwordDiv.appendChild(passwordInfo);

const passWordText = document.createElement('p');
passWordText.textContent = 'Om du inte har ett bibliotekskort kan du ansöka om ett online genom att klicka på "Ansök om ett bibliotekskort online".';
passWordText.classList.add('password-info');
passwordDiv.appendChild(passWordText);

const passWordForm = document.createElement('form');
passWordForm.id = 'passwordForm';
passWordForm.classList.add('password-form');

const newPasswordInput = document.createElement('input');
newPasswordInput.type = 'text';
newPasswordInput.placeholder = 'Bibliotekskortsnummer/personnummer';
newPasswordInput.id = 'password';
newPasswordInput.classList.add('newpassword-input');
passWordForm.appendChild(newPasswordInput);
passwordDiv.appendChild(passWordForm);

const backButton = document.createElement('button');
backButton.textContent = 'Tillbaka';
backButton.classList.add('back-button');
passwordDiv.appendChild(backButton);

backButton.addEventListener('click', function() {
    window.location.href = 'login.html'; 
});

document.body.appendChild(passwordDiv);