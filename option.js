const optionDiv = document.createElement('div');
optionDiv.id = 'optionDiv';
optionDiv.classList.add('option-container');
document.body.appendChild(optionDiv);

const optionDiv1 = document.createElement('div');
optionDiv1.id = 'optionDiv1';
optionDiv1.classList.add('option-item');
optionDiv1.textContent = 'Ansök om ett bibliotekskort online';
optionDiv.appendChild(optionDiv1);

const optionDiv2 = document.createElement('div');
optionDiv2.id = 'optionDiv2';
optionDiv2.classList.add('option-item');
optionDiv2.textContent = 'Har du glömt din PIN-kod?';
optionDiv.appendChild(optionDiv2);

const optionDiv3 = document.createElement('div');
optionDiv3.id = 'optionDiv3';
optionDiv3.classList.add('option-item');
optionDiv3.textContent = 'Personuppgifter och cookies';
optionDiv.appendChild(optionDiv3);

const optionDiv4 = document.createElement('div');
optionDiv4.id = 'optionDiv4';
optionDiv4.classList.add('option-item');
optionDiv4.textContent = 'Tillbaka till startsidan';
optionDiv.appendChild(optionDiv4);

optionDiv1.addEventListener('click', function() {
    
});

optionDiv2.addEventListener('click', function() {
    return import('./passWord.js').then(module => {
        const passwordDiv = module.default;
        document.body.appendChild(passwordDiv);
    });
    
});

optionDiv3.addEventListener('click', function() {
    return import('./cookies.js').then(module => {
        const cookiesDiv = module.default;
        document.body.appendChild(cookiesDiv);
    });
    
});

optionDiv4.addEventListener('click', function() {
    console.log('Tillbaka till startsidan klickat');
    
});

export default optionDiv;