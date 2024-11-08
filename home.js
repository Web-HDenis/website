// Lese den Benutzernamen aus dem localStorage
const username = localStorage.getItem('username');

// Zeige den Benutzernamen oben rechts auf der Seite an
if (username) {
  document.getElementById('username-display').textContent = `Hallo, ${username}!`;
} else {
  // Falls kein Benutzername vorhanden ist, leite zur Login-Seite weiter
  window.location.href = 'index.html';
}
