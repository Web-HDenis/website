// Liste der Benutzer und Passwörter
const users = [
  { username: 'ADMIN', password: 'ADMIN' },
  { username: 'NorryFN', password: 'NorryFN' },
  { username: 'DenisH', password: 'Stitch' },
  
];

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  // Überprüfen, ob der Benutzername und das Passwort übereinstimmen
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // Login erfolgreich - Weiterleitung zur Home-Seite
    window.location.href = 'home.html';
  } else {
    // Fehler - Benutzername oder Passwort sind falsch
    errorMessage.textContent = 'Benutzername oder Passwort ist falsch!';
  }
});
