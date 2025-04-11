// scripts.js

let isFolded = false;

function toggleFold() {
  const phone = document.getElementById('phone');
  const toggleButton = document.getElementById('toggleFoldButton');

  isFolded = !isFolded;

  if (isFolded) {
    phone.classList.add('folded');
    toggleButton.textContent = "🔄 Desdobrar";
  } else {
    phone.classList.remove('folded');
    toggleButton.textContent = "🔄 Dobrar";
  }
}

function openApp(appName) {
  const appContent = document.getElementById('app-content');
  appContent.style.animation = "fadeIn 1s ease-in-out";

  switch (appName) {
    case 'calls':
      appContent.innerHTML = `
        <h2>📞 Fazer uma Chamada</h2>
        <input type="text" placeholder="Número do telefone" id="phoneInput">
        <button onclick="makeCall()">Ligar</button>
        <p id="callStatus"></p>
      `;
      break;
    case 'notes':
      appContent.innerHTML = `
        <h2>📝 Notas</h2>
        <textarea id="noteInput" placeholder="Escreva sua nota aqui"></textarea>
        <button onclick="addNote()">Salvar Nota</button>
        <div id="notesList"></div>
      `;
      break;
    case 'camera':
      appContent.innerHTML = '<h2>📷 Câmera</h2><p>Simule tirar fotos!</p>';
      break;
    case 'music':
      appContent.innerHTML = '<h2>🎵 Música</h2><p>Reproduza suas músicas favoritas!</p>';
      break;
    case 'gallery':
      appContent.innerHTML = '<h2>🖼️ Galeria</h2><p>Veja suas fotos e vídeos.</p>';
      break;
    case 'settings':
      appContent.innerHTML = '<h2>⚙️ Configurações</h2><p>Personalize seu celular.</p>';
      break;
    default:
      appContent.innerHTML = '<p>Escolha uma funcionalidade acima.</p>';
  }
}

function makeCall() {
  const phoneNumber = document.getElementById('phoneInput').value;
  const callStatus = document.getElementById('callStatus');
  if (phoneNumber) {
    callStatus.textContent = `Ligando para ${phoneNumber}... 📞`;
  } else {
    callStatus.textContent = "Digite um número válido.";
  }
}

function addNote() {
  const noteInput = document.getElementById('noteInput').value;
  const notesList = document.getElementById('notesList');
  if (noteInput) {
    const newNote = document.createElement('p');
    newNote.textContent = noteInput;
    notesList.appendChild(newNote);
    document.getElementById('noteInput').value = '';
  }
}
