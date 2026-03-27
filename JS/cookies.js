
document.body.classList.remove('login-view'); 
document.body.classList.add('cookies-view');

const cookiesDiv = document.createElement('div');
cookiesDiv.id = 'cookiesDiv';
cookiesDiv.classList.add('cookies-container');

const cookiesHeading = document.createElement('h1');
cookiesHeading.textContent = 'Personuppgifter och cookies';
cookiesHeading.classList.add('cookies-heading');
cookiesDiv.appendChild(cookiesHeading);

const cookiesubHeading = document.createElement('h2');
cookiesubHeading.textContent = 'Information om personuppgifter';
cookiesubHeading.classList.add('cookies-subheading');
cookiesDiv.appendChild(cookiesubHeading);

const cookiesInfo = document.createElement('p');
cookiesInfo.textContent = 'Gotlib (www.gotlib.goteborg.se) hanterar inte personuppgifter. Gotlib anropar Göteborgs stads bibliotekssystem, för att kontrollera bibliotekskortets status och giltighet. Du kan läsa mer om hur Biblioteken i Göteborg hanterar personuppgifter och om dina rättigheter på Biblioteken i Göteborgs hemsida';
cookiesInfo.classList.add('cookies-info');
cookiesDiv.appendChild(cookiesInfo);

const privacyPolicyLink = document.createElement('a');
privacyPolicyLink.href = 'https://goteborg.se/wps/portal/start/uppleva-och-gora/bibliotek/ditt-bibliotekskonto/sa-behandlar-biblioteket-dina-personuppgifter'; 
privacyPolicyLink.textContent = 'Läs mer här om hur Biblioteken i Göteborg behandlar personuppgifter.';
privacyPolicyLink.classList.add('privacy-policy-link');
cookiesDiv.appendChild(privacyPolicyLink);

const cookiesSubHeading1a = document.createElement('h3');
cookiesSubHeading1a.textContent = 'Funktioner på Gotlib:';
cookiesSubHeading1a.classList.add('cookies-subheading');
cookiesDiv.appendChild(cookiesSubHeading1a);

const cookiesInfo1a = document.createElement('p');
cookiesInfo1a.textContent = 'Skapa ett bibliotekskort online: När ett bibliotekskort skapas genom Gotlibs onlineformulär registreras namn, adress, telefonnummer, e-postadress och personnummer i Göteborgs stads bibliotekssystem.';
cookiesInfo1a.classList.add('cookies-info');
cookiesDiv.appendChild(cookiesInfo1a);

const cookiesInfo1b = document.createElement('p');
cookiesInfo1b.textContent = 'Reservation av e-litteratur: Vid reservation av e-litteratur i Gotlib från leverantören Overdrive måste en e-postadress anges. Den sparas av Overdrive för att kunna meddela när reservationen är färdig.';
cookiesInfo1b.classList.add('cookies-info');
cookiesDiv.appendChild(cookiesInfo1b);

const cookiesInfo1 = document.createElement('p');
cookiesInfo1.textContent = 'Gotlib använder Google Analytics för att samla in information om hur besökare använder webbplatsen. Denna information används för att förbättra webbplatsen och ge en bättre användarupplevelse. Google Analytics samlar in data som IP-adress, webbläsartyp, enhetstyp, besökstid och vilka sidor som besöks. Denna data är anonym och används endast i aggregerad form.';
cookiesInfo1.classList.add('cookies-info');
cookiesDiv.appendChild(cookiesInfo1);

const cookiesSubHeading2 = document.createElement('h2');
cookiesSubHeading2.textContent = 'Information om cookies';
cookiesSubHeading2.classList.add('cookies-subheading');
cookiesDiv.appendChild(cookiesSubHeading2);

const cookiesInfo2 = document.createElement('p');
cookiesInfo2.textContent = 'Gotlib använder cookies. Cookies är en textfil som sparas i din dator eller mobila enhet. Gotlib sparar besöksstatistik som vi använder i vårt arbete med webbplatsen. Du har möjlighet att spara dina inloggningsuppgifter till ditt bibliotekskonto. Sökhistorik i Gotlib sparas så att du kan se dina senaste sökningar samt få förslag på sökord. Mer information om cookies finns på Post- och telestyrelsen';
cookiesInfo2.classList.add('cookies-info');
cookiesDiv.appendChild(cookiesInfo2);

const cookiesPolicyLink = document.createElement('a');
cookiesPolicyLink.href = 'https://www.pts.se/404';
cookiesPolicyLink.textContent = 'Läs mer här om hur Biblioteken i Göteborg hanterar cookies.';
cookiesPolicyLink.classList.add('cookies-policy-link');
cookiesDiv.appendChild(cookiesPolicyLink);

const cookiesInfo2aHeading = document.createElement('h3');
cookiesInfo2aHeading.textContent = 'Om du inte vill använda cookies';
cookiesInfo2aHeading.classList.add('cookies-subheading');
cookiesDiv.appendChild(cookiesInfo2aHeading);

const cookiesInfo2a = document.createElement('p');
cookiesInfo2a.textContent = 'Du kan välja att ändra inställningar i din webbläsare om du inte vill använda cookies. I inställningarna kan du också rensa de lagrade cookies som finns. Se hjälpsidor för din webbläsare för mer information.';
cookiesInfo2a.classList.add('cookies-info');
cookiesDiv.appendChild(cookiesInfo2a);

const backButton = document.createElement('button');
backButton.textContent = 'Tillbaka';
backButton.classList.add('back-button');
cookiesDiv.appendChild(backButton);

backButton.addEventListener('click', function() {
    window.location.href = 'login.html';
});

document.body.appendChild(cookiesDiv);

