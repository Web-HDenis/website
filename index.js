// Liste der Benutzer und Passwörter
const users = [
  { username: 'admin', password: '1234' },
  { username: 'user1', password: 'pass1' },
  { username: 'user2', password: 'pass2' },
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
