
<img width="1000" height="563" alt="image" src="https://github.com/user-attachments/assets/5afca09f-0efe-4a36-a7e9-045ab24040ce" />











This is a small frontend prototype for a modernized library login experience inspired by Biblioteken i Goteborg. The project uses plain HTML, JavaScript, and Sass, with each page rendered through DOM creation in JavaScript modules and styled through compiled CSS files.

## Pages

- `HTML/login.html` loads the main login view and quick navigation options.
- `HTML/register.html` contains the temporary library card registration flow.
- `HTML/password.html` contains the forgot PIN/password view.
- `HTML/cookies.html` shows information about personal data and cookies.

## Tech Stack

- HTML for page entry points
- Vanilla JavaScript for rendering UI and page behavior
- Sass for styling

## Project Structure

```text
HTML/     Page entry files
JS/       UI rendering and page logic
src/      Sass source files
dist/     Compiled CSS output
img/      Images used in the interface
```

## Getting Started

1. Install dependencies:

```zsh
npm install
```

2. Build the Sass files:

```zsh
npm run build
```

3. To keep styles compiling while you work:

```zsh
npm run watch
```

4. Open one of the HTML files in the `HTML/` folder in your browser, for example `HTML/login.html`.

## Available Scripts

- `npm run build` compiles all Sass files from `src/` into `dist/`.
- `npm run watch` watches Sass files and recompiles automatically during development.

## Current Functionality

- A login screen built dynamically with JavaScript
- Navigation links to register, password recovery, cookies, and the external Gotlib site
- A registration form prototype with a success alert and redirect back to login
- A password help page with a back button
- A cookies and privacy information page

## Notes

- The login flow currently uses hardcoded credentials in `JS/loggin.js`.
- Form handling is frontend-only and does not save data to a backend.
- Compiled CSS is generated from the Sass files in `src/`.
